# Arunika Digital

A responsive, single-page company profile website for Arunika Digital, a fictional digital solutions company. The site introduces its services, showcases concept projects, outlines a collaboration process, and provides a demonstration email contact.

## 🌐 Live Demo

This project has not been deployed. Run it locally by following the setup instructions below.

## ✨ Features

- 🧭 Single-page navigation to the main sections
- 💻 Hero section with a custom website interface illustration
- 🏢 Company introduction and guiding principles
- 🛠️ Service cards for Website Development, UI/UX Design, and Digital Solutions
- 🎨 Portfolio showcase with three fictional concept projects
- 📋 Four-step project collaboration process
- ✉️ Contact call-to-action using a configurable demonstration email address
- 📱 Responsive layouts and mobile navigation
- ♿ Semantic page structure, keyboard focus styles, and reduced-motion support
- 🧩 Reusable React components and content stored separately from presentation
- ⚡ Vite-powered development server and production builds

## 📸 Screenshots

Screenshots are not included in the repository yet.

## 🛠️ Tech Stack

### Frontend

- React 19
- Vite 6
- JavaScript (ES Modules)
- Tailwind CSS 4

### Development Tools

- Vite React plugin
- Tailwind CSS Vite plugin

## 📁 Project Structure

```text
arunika-digital-company-profile/
├── src/
│   ├── components/
│   │   ├── About.jsx             # Company introduction and principles
│   │   ├── Brand.jsx             # Brand logo and wordmark
│   │   ├── Contact.jsx           # Contact call-to-action
│   │   ├── Footer.jsx            # Footer and section links
│   │   ├── Hero.jsx              # Main introduction section
│   │   ├── Icon.jsx              # Reusable inline SVG icons
│   │   ├── Navbar.jsx            # Responsive page navigation
│   │   ├── Portfolio.jsx         # Fictional project showcase
│   │   ├── Process.jsx           # Four-step collaboration process
│   │   ├── SectionEyebrow.jsx    # Reusable section label
│   │   └── Services.jsx          # Digital service cards
│   ├── data/
│   │   └── siteData.js           # Page content and contact configuration
│   ├── App.jsx                  # Main page composition
│   ├── main.jsx                 # React application entry point
│   └── styles.css               # Tailwind setup and global styles
├── .gitignore                   # Git ignore rules
├── index.html                   # HTML entry point and page metadata
├── package.json                 # Dependencies and npm scripts
├── package-lock.json            # Dependency lockfile
├── README.md                    # Project documentation
└── vite.config.js               # Vite and plugin configuration
```

## 🚀 Getting Started

### Requirements

- Node.js
- npm

### Installation

From the project directory, install the dependencies:

```bash
npm install
```

### Development

Start the local development server:

```bash
npm run dev
```

Open the local URL printed by Vite in the terminal.

### Production

Build the website:

```bash
npm run build
```

Vite writes the production-ready files to the `dist/` directory. Preview the production build locally with:

```bash
npm run preview
```

## 🔄 Main Workflow

```text
Open the Arunika Digital profile
              ↓
Explore the company approach and services
              ↓
Browse fictional concept projects
              ↓
Review the collaboration process
              ↓
Start a conversation using the demo email link
```

## ⚙️ Configuration

### Contact Email

The contact email is configured in `src/data/siteData.js`:

```js
export const siteConfig = {
  contactEmail: "hello@arunikadigital.example",
};
```

The `.example` address is a placeholder, not a real business contact. Replace it with a verified address before using the website for real inquiries. The site is a static frontend and does not include a contact form or backend.

### Page Content

Navigation labels, company principles, services, concept projects, and process steps are also defined in `src/data/siteData.js`. Update the corresponding data there to change the page content.

## 🎯 Purpose

Arunika Digital is a fictional portfolio demonstration created to showcase responsive frontend development, reusable React components, Tailwind CSS styling, and single-page information architecture.

All company identity details and portfolio projects are fictional. The project does not represent actual clients, business achievements, certifications, or company history. It is a static website and does not include a backend, database, or content management system.

## 👤 Author

**Devanas**

GitHub: [@devanas2906](https://github.com/devanas2906)
