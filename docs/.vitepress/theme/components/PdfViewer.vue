<template>
  <div ref="containerRef" class="pdf-viewer">
    <div v-if="loading && pageNumbers.length === 0" class="pdf-status">Loading PDF…</div>
    <div v-else-if="error" class="pdf-status pdf-status-error">{{ error }}</div>
    <div v-else class="pdf-pages">
      <div
        v-for="pageNumber in pageNumbers"
        :key="pageNumber"
        class="pdf-page"
      >
        <canvas></canvas>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, nextTick, ref, watch } from 'vue'
import * as pdfjsLib from 'pdfjs-dist/legacy/webpack.mjs'
import type { PDFDocumentLoadingTask, PDFDocumentProxy } from 'pdfjs-dist/legacy/build/pdf.mjs'

const props = defineProps<{
  src: string
}>()

const containerRef = ref<HTMLElement | null>(null)
const loading = ref(true)
const error = ref('')
const pageNumbers = ref<number[]>([])
const containerWidth = ref(0)

let pdfDocument: PDFDocumentProxy | null = null
let loadingTask: PDFDocumentLoadingTask | null = null
let renderToken = 0
let resizeObserver: ResizeObserver | null = null
let isMounted = false

const cleanupDocument = async () => {
  const pendingTask = loadingTask
  loadingTask = null

  if (pendingTask) {
    try {
      await pendingTask.destroy()
    } catch {
      // Ignore worker teardown errors while swapping or unmounting.
    }
  }

  const currentDocument = pdfDocument
  pdfDocument = null

  if (currentDocument) {
    try {
      await currentDocument.destroy()
    } catch {
      // Ignore teardown errors during route changes or resize refreshes.
    }
  }
}

const waitForWidth = async () => {
  if (containerWidth.value > 0) return

  await new Promise<void>(resolve => {
    const stop = watch(containerWidth, value => {
      if (value > 0) {
        stop()
        resolve()
      }
    }, { immediate: true })
  })
}

const clearState = () => {
  pageNumbers.value = []
}

const waitForAnimationFrame = () =>
  new Promise<void>(resolve => {
    window.requestAnimationFrame(() => resolve())
  })

const getRenderedCanvases = () => {
  const root = containerRef.value
  if (!root) return []

  return Array.from(root.querySelectorAll('canvas')) as HTMLCanvasElement[]
}

const renderDocument = async () => {
  if (typeof window === 'undefined' || !isMounted) return

  const token = ++renderToken

  await cleanupDocument()
  if (token !== renderToken || !isMounted) return

  loading.value = true
  error.value = ''
  clearState()

  try {
    await waitForWidth()

    loadingTask = pdfjsLib.getDocument({ url: props.src })
    pdfDocument = await loadingTask.promise
    loadingTask = null

    if (token !== renderToken || !pdfDocument) return

    pageNumbers.value = Array.from({ length: pdfDocument.numPages }, (_, index) => index + 1)
    loading.value = false

    await nextTick()
    await waitForAnimationFrame()

    if (token !== renderToken || !pdfDocument) return

    const availableWidth = Math.max(320, containerWidth.value || containerRef.value?.clientWidth || 0)
    const canvases = getRenderedCanvases()

    for (const pageNumber of pageNumbers.value) {
      if (token !== renderToken || !pdfDocument) return

      const canvas = canvases[pageNumber - 1]
      if (!canvas) continue

      const page = await pdfDocument.getPage(pageNumber)
      if (token !== renderToken) return

      const viewport = page.getViewport({ scale: 1 })
      const scale = availableWidth / viewport.width
      const outputScale = Math.min(window.devicePixelRatio || 1, 2)
      const scaledViewport = page.getViewport({ scale: scale * outputScale })
      const context = canvas.getContext('2d')

      if (!context) continue

      canvas.width = Math.floor(scaledViewport.width)
      canvas.height = Math.floor(scaledViewport.height)
      canvas.style.width = `${Math.floor(scale * viewport.width)}px`
      canvas.style.height = `${Math.floor(scale * viewport.height)}px`

      await page.render({
        canvasContext: context,
        viewport: scaledViewport,
      }).promise
    }
  } catch (err) {
    if (token !== renderToken) return
    error.value = err instanceof Error ? err.message : 'Unable to load PDF.'
  } finally {
    if (token === renderToken) {
      loading.value = false
    }
  }
}

watch(
  () => props.src,
  () => {
    if (isMounted) {
      void renderDocument()
    }
  },
)

watch(containerWidth, () => {
  if (isMounted && !loading.value && pageNumbers.value.length > 0) {
    void renderDocument()
  }
})

onMounted(() => {
  isMounted = true
  startObserving()
  void renderDocument()
})

onBeforeUnmount(() => {
  renderToken += 1
  resizeObserver?.disconnect()
  void cleanupDocument()
})

const startObserving = () => {
  if (!containerRef.value) return

  resizeObserver?.disconnect()
  resizeObserver = new ResizeObserver(entries => {
    const entry = entries[0]
    if (!entry) return

    const nextWidth = Math.floor(entry.contentRect.width)
    if (nextWidth && nextWidth !== containerWidth.value) {
      containerWidth.value = nextWidth
    }
  })

  resizeObserver.observe(containerRef.value)
  containerWidth.value = Math.floor(containerRef.value.clientWidth)
}

</script>

<style scoped>
.pdf-viewer {
  width: 100%;
  max-height: 72vh;
  overflow: auto;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  padding: 0;
  box-sizing: border-box;
}

.pdf-pages {
  display: grid;
  gap: 0.85rem;
}

.pdf-page {
  display: block;
}

.pdf-page canvas {
  display: block;
  width: 100% !important;
  max-width: none;
  background: white;
  box-shadow: none;
}

.pdf-status {
  min-height: 180px;
  display: grid;
  place-items: center;
  color: var(--vp-c-text-2);
  padding: 0.9rem;
}

.pdf-status-error {
  color: #ff9f9f;
}
</style>
