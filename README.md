# Countries Explorer 🌍

Frontend web app para explorar información de países del mundo: búsqueda, filtros por región, modo oscuro y detalle de cada país.

## 🚀 Demo
🔗 https://gonzaloibarrola.github.io/countries-api/

## 📌 Features
- Listado de países consumiendo API externa
- Búsqueda por nombre
- Filtro por región
- Vista de detalle por país
- Navegación con React Router
- Modo oscuro persistente
- Diseño responsive

## 🛠️ Tech Stack
- React
- React Router
- JavaScript (ES6+)
- Tailwind CSS
- REST Countries API

## 📂 Project Structure
src/
- ├── components/
- │   ├── backButton.jsx
- │   ├── CountryCard.jsx
- │   ├── FilterRegion.jsx
- │   ├── Header.jsx
- │   └── SearchInput.jsx
- ├── pages/
- │   ├── Home.jsx
- │   └── Country.jsx
- ├── services/
- │   └── countriesApi.js
- ├── layout/
- │   └── Layout.jsx
- └── main.jsx


## ⚙️ How It Works
- Los datos se obtienen desde **REST Countries API**
- El filtrado se realiza en el cliente usando `Array.includes`
- La navegación entre vistas se maneja con **React Router**
- El modo oscuro se implementa usando `localStorage` y clases `dark` de Tailwind

## 👤 Author
Gonzalo Ibarrola
Frontend Developer
🇦🇷 Argentina

## portfolio-meta
```json
{
  "published": true,
  "featured": true,
  "slug": "nombre-del-proyecto",
  "title": "Nombre del proyecto",
  "summary": "Resumen corto para mostrar en la card del portfolio.",
  "seoDescription": "Descripción pensada para SEO en la página interna del proyecto.",
  "tags": ["Next.js", "Tailwind CSS", "Node.js", "PostgreSQL"],
  "thumbnail": "/images/projects/nombre-del-proyecto/cover.png",
  "thumbnailAlt": "Vista principal del proyecto Nombre del proyecto",
  "demoUrl": "https://demo.com",
  "repoUrl": "https://github.com/tu-user/nombre-del-proyecto",
  "priority": 1,
  "status": "completed"
}
