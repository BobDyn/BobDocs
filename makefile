# ===== CONFIG =====
BUILD_DIR = docs/.vitepress/dist
DEPLOY_PATH = dist
CONTAINER = bobdocs

# ===== SETUP =====

setup:
	docker pull nginx:latest

# ===== COMMANDS =====

install:
	npm ci

build:
	npm run build

deploy:
	rm -rf $(DEPLOY_PATH)
	cp -r $(BUILD_DIR) $(DEPLOY_PATH)

# ===== CONTAINER =====

serve:
	- docker rm -f $(CONTAINER) >/dev/null 2>&1 || true
	docker run -d --name $(CONTAINER) -p 3000:80 -v $$(pwd)/$(DEPLOY_PATH):/usr/share/nginx/html:ro -v $$(pwd)/nginx/default.conf:/etc/nginx/conf.d/default.conf:ro --restart unless-stopped nginx:latest

restart:
	docker restart $(CONTAINER)

stop:
	docker stop $(CONTAINER)

logs:
	docker logs -f $(CONTAINER)

# ===== TUNNEL =====

tunnel:
	cloudflared tunnel run bobdyn

# ===== DEBUG =====

check:
	curl -I http://localhost:3000

# ===== MAIN ENTRYPOINT =====

full-deploy: install build deploy serve
