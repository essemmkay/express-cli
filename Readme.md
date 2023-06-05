# Express App with TypeScript

This repository contains a simple app to crearte Express App using CLI tool. The CLI tool sets up an Express project with TypeScript and provides a basic directory structure and configuration.

## Installation

To run this Express app locally, follow these steps:

1. Clone this repository to your local machine:

   ```shell
   git clone https://github.com/essemmkay/express-cli.git

   ```

2. Navigate to the project directory:

   ```shell
   cd express-app-with-typescript

   ```

3. Install the dependencies:

   ```shell
   npm install

   ```

4. Compile the TypeScript code to JavaScript:

   ```shell
   npx tsc

   ```

5. Pack the code to be used as a package

   ```shell
   npm pack

   ```

6. Install the generated package globally
   ```shell
   npm i -g <generated-package-name>
   ```

## Usage

To use the package, run the following command in your terminal:

    ```shell
    create-express-ts-app <app-name>

Replace <app-name> with the desired name for your Express app.

For example, if the app name is `hello-world`, you can run:

    ```shell
    create-express-ts-app hello-world

This will create a new Express app named `hello-world` using the CLI tool.
