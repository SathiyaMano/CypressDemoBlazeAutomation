# Demoblaze UI Tests

This project uses Cypress to automate the UI tests for the "Sign In" flow and "Add to Cart" functionality on [Demoblaze](https://www.demoblaze.com/index.html).

## Tech Stack

- **Cypress**: A JavaScript End-to-End testing framework.

## Setup

1. Install dependencies:
    
    InstallNodejs
    Install VisualStudio
    Create folder for project and open in VScode

   # open cmd/terminal execute below command
    npm -i init for creating package.json file
    
    #Install Cypress
    npm install cypress --save -dev
    ```

2. Open Cypress:
    
    npx cypress open
    ```

## Tests

- **Sign In Flow**: Validates that a user can sign in successfully.
- **Add to Cart**: Adds a product to the cart multiple times and verifies it.

## Run Tests

To run the tests, use the following command:
```sh
npx cypress run


#Configuration
cypress.config.js


# Petstore API Tests

This project uses Cypress to automate the API tests for the Petstore APIs on [Swagger](https://petstore.swagger.io).

## Tech Stack

- **Cypress**: A JavaScript End-to-End testing framework.

## Setup

1. Install dependencies:

    InstallNodejs
    Install VisualStudio
    Create folder for project and open in VScode

    #open cmd/terminal execute below command
    npm -i init for creating package.json file

    #Install Cypress
    npm install cypress --save -dev
    ```

2. Open Cypress:
    
    npx cypress open
    ```

## Tests

- **Add a new pet to the store**: Adds a new pet to the store and verifies the details.
- **Find pet by ID**: Finds a pet by ID and verifies the details.

## Run Tests

To run the tests, use the following command:

npx cypress run

#Configuration
cypress.config.js