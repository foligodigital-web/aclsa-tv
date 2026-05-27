# ACLSA TV

Petite application web statique pour l'eglise ACLSA.

## Ouvrir l'application

Ouvrez `index.html` dans un navigateur.

## Personnaliser

- Direct video: dans `app.js`, remplacez `liveVideoUrl = ""` par l'URL d'integration YouTube, Facebook Live ou streaming.
- WhatsApp: dans `app.js`, remplacez `whatsappNumber = ""` par le numero au format international, sans `+`.
- Adresse: dans `index.html`, section `#contact`, remplacez les textes d'adresse.
- Reseaux sociaux: dans `index.html`, section `#contact`, remplacez les liens YouTube, Facebook, Instagram et WhatsApp.
- Image de couverture: l'accueil utilise `assets/aclsa-official-cover.png`. Remplacez ce fichier par une nouvelle image officielle si besoin.

## Application mobile

L'application est configuree comme PWA avec `manifest.webmanifest`, `sw.js` et une icone `assets/aclsa-app-icon.svg`.

Pour l'installer sur telephone, publiez le dossier sur un site HTTPS, ouvrez le site dans le navigateur du telephone, puis utilisez l'option du navigateur:

- Android/Chrome: `Installer l'application` ou `Ajouter a l'ecran d'accueil`.
- iPhone/Safari: `Partager`, puis `Sur l'ecran d'accueil`.
