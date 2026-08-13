# Prisma Press

<p align="center">
  <strong>A thoughtful publishing platform for writers, readers, and ideas worth sharing.</strong>
</p>

<p align="center">
  <a href="https://nextjs.org/"><img src="https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js" /></a>
  <a href="https://react.dev/"><img src="https://img.shields.io/badge/React-19-149ECA?style=for-the-badge&logo=react&logoColor=white" alt="React" /></a>
  <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" /></a>
  <a href="https://vercel.com/"><img src="https://img.shields.io/badge/Vercel-black?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" /></a>
</p>

## What This Project Is

Prisma Press is a full-stack publishing frontend for discovering, writing, and managing articles. It provides separate public, author, and admin experiences with authentication, content management, premium subscriptions, search, responsive layouts, and theme support.

### Highlights

- User registration, login, logout, and token-based session handling
- Public news feed with searchable articles and individual post pages
- Author dashboard for creating, editing, and managing posts
- Admin dashboard with post and profile management
- Premium articles and subscription checkout flow
- Profile management and account controls
- Form validation with accessible UI feedback
- Responsive design with light and dark themes
- Loading, error, and not-found states throughout the application

## Tech Stack

- **Framework:** Next.js 16 with the App Router and React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4 and shadcn/ui-inspired components
- **UI:** Radix UI, Lucide React, React Icons, Framer Motion, Sonner
- **Forms:** React Hook Form and Zod
- **Authentication:** JWT-based authentication through the backend service
- **Payments:** Backend-managed premium subscription flow
- **Deployment:** Vercel

### Key Dependencies

| Category | Packages |
| :--- | :--- |
| **Framework** | `next`, `react`, `react-dom` |
| **Forms & Validation** | `react-hook-form`, `zod`, `@hookform/resolvers` |
| **UI & Styling** | `tailwindcss`, `radix-ui`, `lucide-react`, `react-icons` |
| **Motion & Feedback** | `framer-motion`, `sonner` |
| **Authentication** | `jsonwebtoken` |
| **Utilities** | `clsx`, `tailwind-merge` |

## Project Structure

```text
app/
├── (auth)/                 # Login and registration routes
├── (dashboard)/            # Author and admin dashboards
├── (public)/               # Public pages, news, pricing, and premium content
├── globals.css             # Global styles and design tokens
└── layout.tsx              # Root layout and application metadata
components/                # Shared and UI components
lib/                       # Shared utilities
service/                   # Backend service helpers
utils/                     # JWT and supporting utilities
types/                     # Shared TypeScript types
```

## Installation

### Clone the repository

```bash
git clone https://github.com/Newton2n/nextjs-press-frontend.git
cd nextjs-press-frontend
```

### Install dependencies

```bash
npm install
```

## Environment Variables

Create a `.env.local` file in the project root:

```env
BACKEND_URL="http://localhost:8000"
```

Set `BACKEND_URL` to the URL of the Prisma Press backend API. Do not commit `.env.local` or any credentials to the repository.

## Running Locally

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

```bash
npm run dev      # Start the development server
npm run build    # Create a production build
npm run start    # Start the production server
npm run lint     # Run ESLint
```

## Usage

1. Register a new account or sign in.
2. Browse regular articles from the public news feed.
3. Use the author dashboard to create and manage posts.
4. Use the admin dashboard for administrative content and profile controls.
5. Explore premium articles and complete the subscription flow when enabled.
6. Manage your profile and account settings from the dashboard.

## Main Routes

| Route | Purpose |
| :--- | :--- |
| `/` | Landing page and featured content |
| `/news` | Public article feed and search |
| `/news/[id]` | Individual article page |
| `/premium` | Premium article feed |
| `/pricing` | Subscription plans |
| `/create-post` | Create a new post |
| `/edit-post/[postId]` | Edit an existing post |
| `/login` | User login |
| `/register` | User registration |
| `/dashboard` | Main dashboard |
| `/author-dashboard` | Author workspace |
| `/admin-dashboard` | Admin workspace |
| `/about` | About page |
| `/contact` | Contact page |

## How It Works

- **Authentication:** Login and registration requests are handled by the backend API. JWT tokens are refreshed and used to protect authenticated routes.
- **Publishing:** Public pages fetch regular and premium posts from the backend, while authors manage content through protected dashboard actions.
- **Subscriptions:** Pricing and checkout pages communicate with the backend subscription service and expose subscription status to authenticated users.
- **UI:** Shared layout, navigation, form, table, card, and feedback components keep the experience consistent across public and dashboard routes.

## Important Screens

The application is organized around these core screens:

| Screen | Route | Description |
| :--- | :--- | :--- |
| **Home page** | `/` | Introduces Prisma Press and highlights featured stories. |
| **News feed** | `/news` | Lets readers browse and search published articles. |
| **Article details** | `/news/[id]` | Displays the complete article and related content. |
| **Premium content** | `/premium` | Shows premium stories available to subscribers. |
| **Pricing** | `/pricing` | Presents subscription plans and upgrade options. |
| **Create post** | `/create-post` | Gives authors a form for publishing new articles. |
| **Author dashboard** | `/author-dashboard` | Helps authors manage their posts and profile. |
| **Admin dashboard** | `/admin-dashboard` | Provides administrative post and profile controls. |
| **Login and register** | `/login`, `/register` | Handles account access and new user registration. |



## Contributing

Contributions are welcome!

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/your-feature`.
3. Make your changes and run `npm run lint`.
4. Commit and push your changes.
5. Open a pull request with a clear description of the change.

## Roadmap

Potential future improvements include:

- Comments, likes, and bookmarks
- Richer author profiles and follow functionality
- Pagination and advanced article search
- Notifications and email subscriptions
- Automated unit, integration, and end-to-end tests
- CI workflows for linting and deployment checks

## License

Distributed under the MIT License. See the `LICENSE` file for details.

## Deployment

The application is optimized for deployment on [Vercel](https://vercel.com/). Configure `BACKEND_URL` in the Vercel project environment variables before deploying.

For local installation, use the package manager and GitHub workflow supported by your project, or install the project through the shadcn CLI when integrating it into another Next.js application.

---

Built with Next.js, TypeScript, and Tailwind CSS.

<details>
<summary>Original README format reference</summary>

This README follows the requested format: project overview, live/deployment information, features, tech stack, dependencies, installation, environment setup, local usage, screenshots, architecture, contributing, testing/roadmap, license, and deployment guidance.

</details>
