# Mediwave

Modern digital agency website built with Astro, React, and TailwindCSS.

## 🚀 Quick Start

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## 🛠️ Tech Stack

- **Framework:** [Astro v5.12.8](https://astro.build)
- **UI:** React 19 + TypeScript 5.9
- **Styling:** TailwindCSS v4.1
- **Content:** MDX
- **Animations:** jos-animation
- **Carousel:** Swiper v11

## ⚡ Development Tools & Code Quality

This project enforces code quality and consistency through automated tools:

### ESLint
- **Purpose:** Catches JavaScript/TypeScript errors and enforces coding standards
- **Config:** Modern flat config with Astro + accessibility rules
- **Run:** `pnpm lint`

### Prettier
- **Purpose:** Automatic code formatting for consistent style
- **Config:** Default settings in `.prettierrc`
- **Run:** `pnpm format` (or auto-format on save in your editor)

### Commitlint + Husky
- **Purpose:** Enforces consistent commit message format
- **Format:** `type: description` (e.g., `feat: add contact form`, `fix: resolve mobile menu bug`)
- **Valid types:** `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`, `build`, `ci`, `perf`, `revert`
- **Auto-runs:** On every commit via git hooks

### Pre-commit Hooks
Automatically runs before each commit:
1. **ESLint** - Catches code errors
2. **Prettier** - Formats code consistently

**New Developer Setup:**
1. Clone the repo and run `pnpm install`
2. Husky will automatically set up git hooks
3. Your commits will be automatically checked for code quality
4. Use conventional commit format: `feat: add new feature`

## ✨ Key Features

- MDX Integrated
- Easy customization options using MDX
- Portfolio details with all client details
- Service details with all the Services you provide
- Expert Areas, Partners, Methods, Team
- Showcase Projects and Client Feedback
- Special sections like About Us, Blogs, Portfolio, Contact

## 📁 Project Structure

```
mediwave/
├── src/
│   ├── components/    # React & Astro components
│   ├── content/       # MDX content files
│   ├── layout/        # Layout components
│   ├── pages/         # Astro pages
│   └── utils/         # Utility components
├── public/            # Static assets
├── .husky/            # Git hooks configuration
├── eslint.config.js   # ESLint configuration
├── commitlint.config.js # Commit message rules
└── astro.config.mjs   # Astro configuration
```

## 🧞 Development Commands

| Command            | Action                                  |
| :----------------- | :-------------------------------------- |
| `pnpm i`           | Install dependencies                    |
| `pnpm dev`         | Start dev server at `localhost:4321`    |
| `pnpm build`       | Build for production with type checking |
| `pnpm preview`     | Preview production build                |
| `pnpm lint`        | Check code for errors                   |
| `pnpm format`      | Format code with Prettier              |
| `pnpm format:check`| Check if code is formatted correctly    |
