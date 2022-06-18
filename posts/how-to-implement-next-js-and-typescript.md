---
title: 'TUTORIAL: How to implement NextJS + Typescript'
date: '18/06/2022'
author:
  name: 'David W.'
short_description: 'In this tutorial we ill learn how to implement Next.js + typescript in a simple project.'
image: 'https://i.imgur.com/dE2BlN0.png'
---

## Index

- Introduction
- Create App
  - From a new project
  - From a existing project

## Introduction

In this article I'll present to you how to create an app with Next.JS and Typescript in the correct way

## Using Create Next App

The most easiest way to create an app with Next.JS and Typescript is using the default `create next app`. First step open your terminal an type this:

```bash
# using npm
npx create-next-app --ts

# using yarn
yarn create next-app --ts
```

---

## From a existing project

If you already have an Next.JS project and want to add Typescript, follow these steps:

### 1. Install Typescript

Opens terminal and run:

```bash
# using npm
npm install --save-dev typescript @types/react @types/node

#using yarn
yarn add -D typescript @types/react @types/node
```

### 2. Configure Typescript

Still in terminal type:

```bash
# using npm
npx tsc --init

# using yarn
yarn tsc --init
```

### 3. File extensions

Now the Typescript has been set up in your project, we can use it, just need to change the files extensions existing in `pages` directory from `archive.js` or `archive.jsx` to `archive.ts` or `archive.tsx`.

After that, you are now ready to enjoy the Typescript benefices. Happy Hacking and Drink Coffee! 

