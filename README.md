# alx-project-0x00: Airbnb UI Clone (Learning Project)

This is a **Next.js-based learning project** designed to teach the fundamentals of building modern, scalable front-end web applications using **React**, **TypeScript**, and **Next.js**. It mimics some key UI features of Airbnb, such as component composition, consistent styling, and layout structure, while emphasizing best practices in code organization and reusability.

---

## 🚀 Project Description

This project introduces learners to the core concepts of:

- Structuring a Next.js project using the **Pages Router**
- Creating and styling **reusable components**
- Writing strongly typed React components using **TypeScript**
- Applying utility-first CSS with **Tailwind CSS**
- Enforcing code quality with **ESLint**

---

## 🎯 Learning Objectives

By completing this project, you will:

- Scaffold a Next.js project with `create-next-app` using TypeScript
- Understand and apply the standard Next.js folder structure
- Implement routing via the **Pages Router**
- Create reusable components (`Button`, `Card`, etc.)
- Define and use TypeScript **interfaces** for props
- Apply responsive design using **Tailwind CSS**
- Maintain clean, readable code using **ESLint**
- Practice consistent styling, spacing, and layout techniques

---

## 🛠️ Requirements

- **Node.js** (v16 or later)
- **Yarn** or **npm**
- **Visual Studio Code** (or preferred IDE)
- **Next.js** v13+
- **TypeScript**
- **Tailwind CSS**
- **ESLint**

---

## 📁 Project Structure

alx-project-0x00/
├── components/ # Reusable UI components (e.g., Button)
├── interfaces/ # TypeScript interfaces for props and types
├── pages/ # Next.js Pages Router (routes like /, /landing)
│ ├── index.tsx
│ └── landing.tsx
├── public/ # Static assets (e.g., images, favicon)
├── styles/ # Global styles and Tailwind config
├── tsconfig.json # TypeScript config (includes @/\* path alias)
├── tailwind.config.ts # Tailwind configuration
└── .eslintrc.mjs # ESLint rules for consistent coding

## 🧩 Components

### `Button.tsx`

A reusable button component that accepts:

- `title`: string – the button label
- `className`: string – custom styles (e.g., size, rounded shape)

Used on the `/landing` page in various combinations:

- Sizes: `text-sm`, `text-base`, `text-lg`
- Shapes: `rounded-sm`, `rounded-md`, `rounded-full`

---

## ✅ Best Practices Followed

### ✅ Project Structure

- Components isolated in `components/`
- Types centralized in `interfaces/`
- Pages structured per Next.js conventions

### ✅ Component Design

- Props typed with interfaces
- Modular and single-responsibility
- No repetition across button instances

### ✅ Code Quality

- ESLint enabled and configured
- Arrow functions used consistently
- Type safety enforced with TypeScript

### ✅ Styling

- Tailwind used for all layout and UI styling
- Responsive utilities applied
- Clear typography and spacing scale

---

## 🖥️ How to Run the App

```bash
# Install dependencies
yarn install

# Start the development server on port 3000
yarn dev --port 3000

# Visit in browser
http://localhost:3000
```
