build:
		docker build . -t node-typescript-skeleton

run:
		docker run -p 3000:3000 -d node-typescript-skeleton:latest

up:
		docker-compose up

up-prod:
		docker-compose -f docker-compose.yml -f docker-compose.prod.yml up

down:
		docker-compose down

