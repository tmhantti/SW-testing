[![Coverage Status](https://coveralls.io/repos/github/tmhantti/SW-testing/badge.svg?branch=main)](https://coveralls.io/github/tmhantti/SW-testing?branch=main)

# SW-testing
Second part of the assignment for 'Software Testing' course.

## Use of GitHub Actions

Implemented CI pipeline can be found under 'Actions'. It is named as 'Run tests and coverage'. 

## Running tests locally
Node.js/javascript application can be found under folder 'sw-test-app'. 

Tests can be run using two different scripts:

1. **test:** Uses Istanbul ([Istanbul](https://istanbul.js.org/)) package to create coverage reports. Created reports can be found under the folder 'coverage'. This is also the script used in Github Actions workflow.

2. **test_mochawesome:** Uses Mochawesome package ([Mochawesome](https://www.npmjs.com/package/mochawesome)) to create test reports. Created reports can be found under the folder 'mochawesome-report'.


