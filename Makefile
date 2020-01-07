test:
	docker build .

test-local:
	node tests/decision.spec.js