# React Personal Site

My portfolio website, created using [React.js](https://react.dev/).

## Notes
### Deploying to Github Pages
- Can pull and push to Github on main branch like normal
- [react-personal-site](https://enprogames.github.io/react-personal-site/)

### Setup and Run Locally
1. Clone the repository
2. Install dependencies: `npm install`
3. Run the app: `npm run dev`

Updating the site:
1. Make sure you are on the main branch
2. Run `git commit -m "Your optional commit message"`
3. Run `git push`
    - The `deploy-gh-pages` action should automatically update the site with the pushed changes.

### Updating Dependencies (https://stackoverflow.com/a/16074029)
1. Install npm-check-updates
    ```bash
    npm i -g npm-check-updates
    ```
2. Run npm-check-updates
    ```bash
    npx npm-check-updates
    ```
3. Update package.json
    ```bash
    npx npm-check-updates -u
    ```
