# GEMINI.md

This document provides context and instructions for the `mylink` project, specifically the `my-profile` application.

## Project Overview

The `mylink` workspace contains a Next.js application located in the `my-profile/` directory. Based on the directory name and initial setup, this project is intended to be a personal profile or portfolio website.

### Key Technologies

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Library:** [React 19](https://react.dev/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Linting:** [ESLint](https://eslint.org/)

## Directory Structure

- `my-profile/`: The main Next.js application directory.
  - `app/`: Contains the application routes and components (App Router).
  - `public/`: Static assets like images and fonts.
  - `package.json`: Project dependencies and scripts.
  - `tsconfig.json`: TypeScript configuration.
  - `next.config.ts`: Next.js configuration.

## Building and Running

Commands should be executed within the `my-profile/` directory.

| Task | Command |
| :--- | :--- |
| **Development** | `npm run dev` |
| **Build** | `npm run build` |
| **Production Start** | `npm run start` |
| **Linting** | `npm run lint` |

## Development Conventions

- **App Router:** Use the `app/` directory for all routing and page definitions.
- **Type Safety:** Ensure all new components and functions are properly typed using TypeScript.
- **Styling:** Use Tailwind CSS 4 utility classes for styling. Follow the existing patterns in `app/page.tsx`.
- **Images:** Use the `next/image` component for optimized image loading.
- **Components:** Organize reusable UI components in a `components/` directory (to be created as needed).

## Workspace Context

- The root `README.md` is currently a placeholder.
- The `my-profile` directory was bootstrapped with `create-next-app`.
