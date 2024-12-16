# Plank AI: Code Snippet Refactoring & Explanation Tool

Plank AI is a web-based application designed to help developers refactor and understand code snippets with the help of AI.

## How to install and run

This guide explains how to set up, run, and work with the project.

### Requirements

Make sure you have the following installed:

- **Node.js** (v18 or higher)
- **npm** (Node Package Manager)

### Project Structure

The project is divided into two main parts:

- **`web/`**: The frontend application built with Vite and React.
- **`server/`**: The backend server built with NodeJs.

### Installing Deependencies

#### Using the Shell:

Run the following commands to install dependencies for both frontend and backend:

```bash
cd web
npm install
cd ../server
npm install
```

#### Using VSCode:

1. Open the project in VSCode.
2. Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on Mac) to open the Command Palette.
3. Search for **Run Task** and select `WebInstall` to install frontend dependencies.
4. Repeat and select `NodeInstall` to install backend dependencies.

---

### Running the Project

#### Using the Shell:

##### Start the Frontend:

```bash
cd web
npm run dev
```

By default, the frontend will be available at `http://localhost:3000`.

##### Start the Backend:

```bash
cd server
npm run serve
```

By default, the backend will be running on `http://localhost:5000`.

#### Using VSCode:

##### Running with `ProdEnvironment`:

1. Open the project in VSCode.
2. Press `F5` or go to the **Run and Debug** tab (on the left menu).
3. Select the `ProdEnvironment` configuration.

This will:

- Install dependencies for both frontend and backend.
- Start the frontend and backend servers.

---

### Environment Configuration

Ensure you configure the environment variables for both the frontend and backend.

#### Frontend (`web/src/config/.env`):

```
VITE_API_URL=http://localhost
VITE_API_PORT=5000
PORT=3000
```

#### Backend (`server/config/.env`):

```
PORT=5000
OPENAI_MODEL=gpt-4o-mini
OPENAI_API_KEY=<YOUR_TOKEN_HERE>
WEB_URL=http://localhost:3000
```

---
