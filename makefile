# ===== CONFIG =====
DEPLOY_PATH = C:/BobDocs/dist
BUILD_DIR = docs/.vitepress/dist
CONTAINER = bobdocs
NGINX_CONF_SRC = nginx/default.conf
NGINX_CONF_DEST = C:/bobdyn_infra/nginx/default.conf

# ===== SETUP =====

setup:
	@if not exist C:\BobDocs mkdir C:\BobDocs
	@if not exist C:\BobDocs\dist mkdir C:\BobDocs\dist
	@if not exist C:\bobdyn_infra mkdir C:\bobdyn_infra
	@if not exist C:\bobdyn_infra\nginx mkdir C:\bobdyn_infra\nginx
	copy /Y $(NGINX_CONF_SRC) $(NGINX_CONF_DEST)
	docker pull nginx:latest

# ===== COMMANDS =====

install:
	npm ci

build:
	npm run build

deploy:
	robocopy $(BUILD_DIR) $(DEPLOY_PATH) /MIR || exit 0

# Create container ONLY if it doesn't exist
serve:
	-docker inspect $(CONTAINER) >nul 2>&1 || docker run -d ^
		--name $(CONTAINER) ^
		-p 3000:80 ^
		-v $(DEPLOY_PATH):/usr/share/nginx/html:ro ^
		-v $(NGINX_CONF_DEST):/etc/nginx/conf.d/default.conf:ro ^
		--restart unless-stopped ^
		nginx:latest

restart:
	docker restart $(CONTAINER)

stop:
	docker stop $(CONTAINER)

logs:
	docker logs -f $(CONTAINER)

tunnel:
	cloudflared tunnel run bobdyn

# 🔥 MAIN ENTRYPOINT
full-deploy: install build deploy serve restart
