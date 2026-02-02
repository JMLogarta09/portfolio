# Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern and beautiful UI design
- 📱 Fully responsive layout
- ⚡ Fast performance with Vite
- 🎯 Smooth scrolling navigation
- 💼 Project showcase section
- 🛠️ Skills and technologies display
- 📧 Contact form
- 🌙 Clean and professional design

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Icons** - Icon library

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm, yarn, or pnpm

### Installation

1. Clone the repository or navigate to the project directory
2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
# or
yarn build
# or
pnpm build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
# or
yarn preview
# or
pnpm preview
```

## Customization

### Update Personal Information

1. **Hero Section** (`src/components/Hero.tsx`):
   - Update name, title, and description
   - Update social media links

2. **About Section** (`src/components/About.tsx`):
   - Update the about text and personal information

3. **Skills Section** (`src/components/Skills.tsx`):
   - Add or remove skills
   - Update skill categories

4. **Projects Section** (`src/components/Projects.tsx`):
   - Replace with your own projects
   - Update project descriptions, links, and technologies

5. **Contact Section** (`src/components/Contact.tsx`):
   - Update contact information (email, phone, location)
   - Connect the form to your backend/email service

6. **Footer** (`src/components/Footer.tsx`):
   - Update social media links
   - Update copyright information

### Styling

The project uses Tailwind CSS. You can customize colors, fonts, and other design elements in:
- `tailwind.config.js` - Tailwind configuration
- `src/index.css` - Global styles and custom utilities

## Project Structure

```
portfolio-website/
├── public/
├── src/
│   ├── components/
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── Projects.tsx
│   │   └── Skills.tsx
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## License

This project is open source and available under the MIT License.

## Contact

For questions or suggestions, feel free to reach out!
