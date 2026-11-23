# GitHub Pages

This is a static website. The workflow in `.github/workflows/pages.yml` deploys it whenever changes are pushed to `main`.

## One-time setup

1. Open the repository on GitHub and go to **Settings → Pages**.
2. Set **Build and deployment → Source** to **GitHub Actions**.
3. Push the project files to the `main` branch.
4. Check the **Actions** tab; when the deployment finishes, GitHub will show the published site URL.

The site uses relative paths for its pages and local assets, so it works from the repository’s GitHub Pages URL.
