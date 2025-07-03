# Coding Guidelines

* **App Router (`/app`)**: Embrace the App Router for new projects. It simplifies routing, layouts, and data fetching.
* **Directory Organization**:
    * `/app`: Core application routes, layouts, and pages.
    * `/components`: Reusable UI components (buttons, inputs, etc.). Consider sub-folders for complexity (e.g., `/components/ui`, `/components/layout`).
    * `/lib` or `/utils`: Utility functions, helper scripts, and API service logic.
    * `/public`: Static assets like images, fonts, and robots.txt.
* **Co-location**: Keep related files together. For a specific feature, you might have its page, components, and tests in the same directory.
* **Naming Conventions**:
    * **Components**: Use PascalCase (e.g., `MyComponent.tsx`).
    * **Files**: Use kebab-case for non-component files (e.g., `api-helpers.ts`).

---

### Data Fetching and Rendering

* **Server Components by Default**: Leverage Server Components to fetch data and render on the server, reducing the client-side JavaScript bundle.
* **Choose the Right Rendering Strategy**:
    * **Static Site Generation (SSG)**: Use `generateStaticParams` for pages that can be pre-rendered at build time (e.g., blog posts, marketing pages).
    * **Server-Side Rendering (SSR)**: Use for pages that require fresh data on every request (e.g., user dashboards). This is the default in the App Router.
    * **Incremental Static Regeneration (ISR)**: A hybrid approach to update static content periodically without a full rebuild.
* **Efficient Data Fetching**:
    * Fetch data on the server whenever possible.
    * Use **Parallel Data Fetching** to load multiple data sources simultaneously.
    * Utilize Next.js's built-in `fetch` for automatic caching and revalidation.

---

### Performance Optimization

* **Image Optimization**: Always use the `next/image` component. It provides automatic optimization, resizing, and lazy loading.
* **Font Optimization**: Use `next/font` to self-host fonts, which eliminates an extra network request and improves loading performance.
* **Dynamic Imports**: For large components or libraries that are not needed on the initial page load, use `next/dynamic` to lazy load them.
* **Code Splitting**: Next.js automatically splits your code by page. You can further optimize by creating smaller, reusable components.
* **Bundle Analysis**: Use `@next/bundle-analyzer` to inspect your JavaScript bundles and identify large dependencies.

---

### State Management

* **Start Simple**: For local state, use React's built-in hooks like `useState` and `useReducer`. For cross-component state, `useContext` can be effective.
* **Server-Side State**: Leverage URL state (search params) for state that should be bookmarkable and shared.
* **Client-Side Libraries**: For complex global state, consider libraries like Zustand or Redux Toolkit, but only when necessary.

---

### Tooling and Code Quality

* **TypeScript**: Use TypeScript for type safety to catch errors during development and improve code maintainability.
* **ESLint and Prettier**: Integrate ESLint for identifying and fixing code quality issues and Prettier for consistent code formatting. Configure them to work together seamlessly.
* **Environment Variables**: Store sensitive information like API keys in `.env.local`. Use `NEXT_PUBLIC_` prefix for variables that need to be exposed to the browser.

---
