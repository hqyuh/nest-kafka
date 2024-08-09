# NEST-KAFKA

## Overview

This project is a NestJS application designed to work with Kafka for messaging. The structure follows the best practices for NestJS and Kafka integration, with services and consumers to handle Kafka topics and messages.

## Project Structure

```
NEST-KAFKA/
├── apps/
├── libs/
├── node_modules/
├── .env
├── .eslintrc.js
├── .gitignore
├── .prettierrc
├── docker-compose.yml
├── Dockerfile
├── nest-cli.json
├── package.json
├── pnpm-lock.yaml
├── README.md
├── tsconfig.build.json
├── tsconfig.json
```

### Directories and Files

- **apps/**: Contains the main application code.
- **libs/**: Contains shared libraries and modules.
- **node_modules/**: Directory for installed dependencies.
- **.env**: Environment variables configuration.
- **.eslintrc.js**: ESLint configuration file.
- **.gitignore**: Specifies files and directories to be ignored by git.
- **.prettierrc**: Prettier configuration file.
- **docker-compose.yml**: Docker Compose configuration for setting up Kafka and other services.
- **Dockerfile**: Docker configuration for building the application container.
- **nest-cli.json**: Nest CLI configuration file.
- **package.json**: Project's manifest file which includes metadata and dependencies.
- **pnpm-lock.yaml**: Lockfile for pnpm package manager.
- **README.md**: Project documentation.
- **tsconfig.build.json**: TypeScript configuration for the build process.
- **tsconfig.json**: General TypeScript configuration.

## Getting Started

### Prerequisites

- **Node.js**: Ensure you have Node.js installed.
- **pnpm**: Install pnpm package manager if not already installed. You can install it globally using npm:

  ```bash
  npm install -g pnpm
  ```

### Installation

1. **Clone the repository**:

   ```bash
   git clone <repository-url>
   cd nest-kafka
   ```

2. **Install dependencies**:

   ```bash
   pnpm install
   ```

3. **Set up environment variables**:

   Create a `.env` file in the root directory and add your environment variables.

### Running the Application

1. **Run the application**:

   ```bash
   pnpm run start
   ```

   This command will start the NestJS application.

2. **Run with Docker**:

   If you prefer to run the application in a Docker container, use the following command:

   ```bash
   docker-compose up --build
   ```

   This command will build and run the Docker containers defined in the `docker-compose.yml` file.

### Development

- **Watch Mode**:

  For development purposes, you can run the application in watch mode:

  ```bash
  pnpm run start:dev
  ```

- **Linting**:

  To check and fix linting issues, run:

  ```bash
  pnpm run lint
  ```

## Kafka Integration

The project uses Kafka for messaging. Make sure Kafka is properly set up and running. You can configure the Kafka settings in the `.env` file.

## Contribution

Feel free to fork this repository and contribute by submitting a pull request. Any feedback or suggestions are welcome!

## License

This project is licensed under the MIT License. See the LICENSE file for more details.
