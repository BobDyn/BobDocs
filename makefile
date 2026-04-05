# ===== CONFIG =====
DEPLOY_PATH = C:/BobDocs/dist
BUILD_DIR = docs/.vitepress/dist
CONTAINER = bobdocs

# ===== COMMANDS =====

install:
	npm ci

build:
	npm run build

deploy:
	robocopy $(BUILD_DIR) $(DEPLOY_PATH) /MIR || exit 0

serve:
	docker run -d \
		--name $(CONTAINER) \
		-p 3000:80 \
		-v $(DEPLOY_PATH):/usr/share/nginx/html:ro \
		-v C:/bobdyn_infra/nginx/default.conf:/etc/nginx/conf.d/default.conf:ro \
		--restart unless-stopped \
		nginx:latest

restart:
	docker restart $(CONTAINER)

stop:
	docker stop $(CONTAINER)

logs:
	docker logs -f $(CONTAINER)
