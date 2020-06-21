portfolio-acceptance-js
=======================

This project is an implementation of acceptance tests for https://denisrossi.github.io/

## Tools used
* Serenity/JS
* Cucumber
* Protractor

## Try it yourself

### Prerequisites
* NodeJS
* npm
* Java

### Srcipts
1. `webdriver:update`:  download the selenium server jar and driver binaries
2. `webdriver:start`: starts the selenium server
3. `test`
	1. `test:update-serenity`: download serenity-bdd cli
	2. `test:acceptance`: run the tests
	3. `test:report`: create the documentation
* `webdriver:clean`: clear out the server and driver files
* `webdriver:shutdown`: shutdown the selenium server