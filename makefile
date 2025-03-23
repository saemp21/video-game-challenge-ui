DOCKER_COMPOSE = docker compose exec christian-app
AWS_PROFILE=eaaldark
CMD =

shell:
	@$(DOCKER_COMPOSE) /bin/bash -c "$(CMD)"

bash:
	${DOCKER_COMPOSE} /bin/bash

install:
	${DOCKER_COMPOSE} npm install

dev:
	${DOCKER_COMPOSE} npm run dev

build:
	${DOCKER_COMPOSE} npm run build

lint:
	${DOCKER_COMPOSE} npm run lint

preview:
	${DOCKER_COMPOSE} npm run preview

rebuild:
	docker compose down && docker compose up -d --build

prettier:
	${DOCKER_COMPOSE} npx prettier --write .