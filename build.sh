#!/bin/sh
# Always build from repo root so the tailwind content glob resolves.
cd "$(dirname "$0")"
npx -y tailwindcss@3.4.17 -c tailwind.config.js -i input.css -o site/assets/styles.css --minify
