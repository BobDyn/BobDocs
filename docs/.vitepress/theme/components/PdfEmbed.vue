<template>
    <div ref="containerRef" class="pdf-embed" :style="{ maxHeight: props.maxHeight }">
        <div v-if="loading" class="pdf-state">Loading…</div>
        <div v-else-if="error" class="pdf-state pdf-state--error">{{ error }}</div>
        <canvas
            v-for="n in pageCount"
            v-else
            :key="n"
            :ref="(el) => setCanvas(el, n - 1)"
            class="pdf-page"
        />
    </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import workerSrc from 'pdfjs-dist/build/pdf.worker.min.mjs?url'

const props = defineProps<{ src: string; maxHeight?: string }>()

const containerRef = ref<HTMLElement | null>(null)
const loading = ref(true)
const error = ref('')
const pageCount = ref(0)

const canvases: HTMLCanvasElement[] = []
let token = 0

function setCanvas(el: unknown, index: number) {
    if (el instanceof HTMLCanvasElement) canvases[index] = el
}

async function render() {
    if (typeof window === 'undefined' || !containerRef.value) return
    const myToken = ++token
    loading.value = true
    error.value = ''
    pageCount.value = 0

    try {
        const { getDocument, GlobalWorkerOptions } = await import('pdfjs-dist')
        GlobalWorkerOptions.workerSrc = workerSrc

        const pdf = await getDocument({ url: props.src }).promise
        if (myToken !== token) return

        pageCount.value = pdf.numPages
        loading.value = false

        await new Promise<void>((r) => requestAnimationFrame(() => r()))
        if (myToken !== token) return

        const width = containerRef.value?.clientWidth || 640

        for (let i = 1; i <= pdf.numPages; i++) {
            if (myToken !== token) return
            const page = await pdf.getPage(i)
            const viewport = page.getViewport({ scale: 1 })
            const scale = width / viewport.width
            const dpr = Math.min(window.devicePixelRatio || 1, 2)
            const scaled = page.getViewport({ scale: scale * dpr })

            const canvas = canvases[i - 1]
            if (!canvas) continue
            canvas.width = scaled.width
            canvas.height = scaled.height
            canvas.style.width = `${Math.floor(scale * viewport.width)}px`
            canvas.style.height = `${Math.floor(scale * viewport.height)}px`

            await page.render({ canvasContext: canvas.getContext('2d')!, canvas, viewport: scaled }).promise
        }
    } catch (e) {
        if (myToken !== token) return
        error.value = e instanceof Error ? e.message : 'Unable to load PDF.'
        loading.value = false
    }
}

onMounted(() => void render())
onBeforeUnmount(() => { token++ })
watch(() => props.src, () => void render())
</script>

<style scoped>
.pdf-embed {
    width: 100%;
    max-height: 70vh;
    overflow-y: auto;
    border: 1px solid var(--vp-c-divider);
    border-radius: 8px;
    background: var(--vp-c-bg-soft);
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 6px;
    box-sizing: border-box;
    scrollbar-width: thin;
    scrollbar-color: var(--vp-c-divider) transparent;
}

.pdf-embed::-webkit-scrollbar {
    width: 5px;
}

.pdf-embed::-webkit-scrollbar-track {
    background: transparent;
}

.pdf-embed::-webkit-scrollbar-thumb {
    background: var(--vp-c-divider);
    border-radius: 3px;
}

.pdf-embed::-webkit-scrollbar-thumb:hover {
    background: var(--vp-c-text-3);
}

.pdf-page {
    display: block;
    width: 100%;
    border-radius: 4px;
}

.pdf-state {
    min-height: 160px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--vp-c-text-3);
    font-size: 0.9rem;
}

.pdf-state--error {
    color: #f87171;
}
</style>
