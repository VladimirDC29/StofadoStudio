# Stofado Studio — React landing site

Simple Vite + React scaffold with an animated splash and routes for each studio area.

Features implemented:
- Splash screen: "Bienvenidos a Stofado" animated logo (5s) then auto-navigates to /home
- Homepage with centered "STOFADO" animated text and the phrase "Armalo como más te guste"
- Dropdown menu with links to: About us, Animation, Graph Design, 3D Modeling, Game Design, Music, Programming, Cinema
- Dark theme, Orbitron futuristic font, footer with "Created by Vlad copyrights reserved"
- Placeholder areas for images/video on every view

Quick start (PowerShell):

```powershell
cd 'c:\Users\vladi\OneDrive\Documents\GitHub\StofadoStudio'
npm install
npm run dev
```

Notes:
- The splash auto-redirects to `/home` after 5 seconds. You can go directly to `/home` to skip it.
- To add a real animated logo, replace the placeholder in `src/views/Home.jsx` and `src/components/Splash.jsx` with your media.
