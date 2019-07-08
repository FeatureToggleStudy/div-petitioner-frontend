# Divorce Petitioner Frontend [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This repo is for the frontend part of the journey that the petitioner will go through to apply for a divorce.

## Setup 

**Building locally**
You need to have Yarn and Redis installed. This can be done with brew as follows:

```
brew install yarn
brew install redis
```

To run the front end app, run the following from the front end project root folder:

```
yarn add redis-server & yarn dev
```

The application will now be running on ```https://localhost:3000```.

To run the tests and lint, run the following:
```
yarn test
yarn lint
```



**Building with Docker**

To begin download the azure client cli

```
brew update && brew install azure-cli
```

After it has finished downloaded run:
```
az login
```

This should open a browser window for you to login, use your HMCTS account

After logging in run the following command:

```
az acr login --name hmcts --subscription <ask the team for the secret>
```


To build the docker containers afresh:

```
make build
```


**Install dependencies**

To install NPM dependencies:

```
make install
```

This installs the dev dependencies to your local folder.

**Start the app**

```
make dev
```

The application will now be running on  ```https://localhost:3000```.

##  Testing

All commands from the package.json are available through make. They will be run
inside a docker container, ensuring a consistent dev environment.

For example:

```
make test
make test-unit
make test-e2e
make lint
...
```


## Licensing 

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.