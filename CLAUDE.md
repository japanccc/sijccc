# SIJCCC Project Guide

## Build Commands
- `bun dev` - Start local development server (port 3000)
- `bun build` - Build production site to ./dist/
- `bun preview` - Preview build locally
- `bun astro` - Run Astro CLI commands

## Code Style Guidelines
- **TypeScript**: Follow strict mode practices; proper type annotations
- **Components**: Use Astro components (.astro extension)
- **Paths**: Use aliased imports (@components/*, @layouts/*, etc.)
- **File Structure**:
  - Components in src/components/ (domain-specific in @jccc/ or @si/)
  - Assets in src/assets/
  - Layouts in src/layouts/
  - Pages in src/pages/
- **Naming**: PascalCase for components, camelCase for variables/functions
- **Error Handling**: Include appropriate error states in components

## Architecture
This is an Astro project with server-side rendering optimized for multiple domains:
- studentimpact.local
- japanccc.local

Use the DomainSwitcher component for domain-specific content.