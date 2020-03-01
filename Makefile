# docker commands
up:
	docker-compose up -d

logs:
	docker-compose logs -f --tail 100

# DB commands
influx:
	docker-compose exec influxdb influx

# test commands
test:
	docker build .

test-local:
	yarn jest --runInBand

test-visual:
	HEADLESS=true yarn jest --runInBand
