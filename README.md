# Developer Documentation
## Table of Contents
- Getting Started
- Project Overview

## Getting Started

(0.0) Please kindly open the terminal, either in or outside of VS Code, go to the Desktop folder (or where you would like the project folder to be on your computer) and then kindly run

```
gh repo clone rcreadii/paira
``` 

This will download a copy of the PAIRA web app repository.

(0.1) Please kindly navigate to the PAIRA directory. This command may differ depending, for example, on where we ran the previous command, but may look something like the following

```
cd paira
```

This will place our terminal inside the paira directory.

(1) Then, please kindly run

```
npm install
```

This will install our project dependencies.

(2) After, please kindly start the development server

```
npm run dev
```

This will run our website locally.

(3) Third, in your browser please kindly go to

```
http://localhost:3000
```

This will allow us to see our website !

(4) We can also navigate to individual pages with urls like

```
http://localhost:3000/choose-your-mentor
```

(5) To develop locally, we can setup a local postgres database. We can do this by:

```
https://www.prisma.io/dataguide/postgresql/setting-up-a-local-postgresql-database#setting-up-postgresql-on-macos
```

??
```

```

To view the database tables more easily, please kindly download Postico
```
https://eggerapps.at/postico/
```

## Project Overview
- Frontend - Next.js (React)
- "Backend" - Express/Prisma
- Database - Postgres
- Styling Library - MUI
- Host - Heroku (not yet set up)

## Where To Find Each Project Section
- Frontend: the pages folder. Reusable components are in the components folder
- "Backend": is in the prisma folder. This is where we create and change the database schema
- Database: the connection url is in the .env file
- Styling Library: for MUI please kindly see an example in pages/index.js, for css the styles folder

### Other Folders
- .next: I don't know, something to do with Next.js
- lib: I don't know, currently it may be like a utilities folder
- node_modules: where external packages are installed
- public: I don't know, currently we can put our site images here

### Other Files
- .eslintrc.json: I don't know, maybe to do with formatting code files
- .gitignore: files to be ignored by git
- next.config.js: I don't know
- package-lock.json: full list of external modules our project uses
- package.json: I don't know, currently a summary of the project, project dependencies, and scripts

# From Next.js / Vercel!
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
