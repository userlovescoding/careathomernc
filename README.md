# Care At Home Website Codebase

A lightweight, responsive frontend for Care At Home services in Ranchi.

## Tech Stack
* HTML5
* Tailwind CSS (via CDN)
* Vanilla JavaScript

## Project Structure
* `index.html` - Core markup and Tailwind Config
* `assets/css/style.css` - Font imports and base resets
* `assets/js/main.js` - DOM interaction logic
* `assets/images/` - Local media assets (logo, hero)

## Local Development
Since absolute paths are not used, you can use VS Code Live Server:
1. Open the project root folder.
2. Right-click `index.html` -> "Open with Live Server".

## Deployment
This static site requires no build step. Simply deploy the root folder directly to Vercel, Netlify, or an Apache/Nginx web server. Ensure the `assets` folder sits beside `index.html` on the server.