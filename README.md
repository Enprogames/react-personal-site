# React Personal Site

My portfolio website, created using [React.js](https://react.dev/).

## Notes
### Deploying to Github Pages
- Can pull and push to Github on main branch like normal
- [react-personal-site](https://enprogames.github.io/react-personal-site/)

### Setup and Run Locally
1. Clone the repository
2. Enable Corepack: `corepack enable`
3. Install dependencies: `pnpm install --frozen-lockfile`
4. Run the app: `pnpm run dev`

If Corepack cannot create a global `pnpm` shim on Windows, use `corepack pnpm ...` for the same commands.

Useful local checks:
- `pnpm run verify`
- `pnpm run test:e2e`

Updating the site:
1. Make sure you are on the main branch
2. Run `git commit -m "Your optional commit message"`
3. Run `git push`
    - The `deploy` workflow will automatically publish the site after a successful build.

### Updating Dependencies

Dependency management policy is documented in [docs/dependency-management.md](docs/dependency-management.md).

1. Report available updates
    ```bash
    pnpm dlx npm-check-updates
    ```
2. Update package.json within current semver ranges
    ```bash
    pnpm dlx npm-check-updates -u --target semver
    ```
3. Install and verify
    ```bash
    pnpm install
    pnpm run verify
    ```
