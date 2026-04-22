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
  "featured": false,
  "slug": "countries-api",
  "title": "Countries Explorer",
  "summary": "Aplicación para explorar países del mundo con búsqueda, filtros por región, navegación entre vistas y detalle individual por país.",
  "seoDescription": "Countries Explorer es una aplicación desarrollada con React, React Router y Tailwind CSS que consume la REST Countries API para listar países, filtrarlos por región, consultar su detalle y ofrecer una experiencia responsive con modo oscuro persistente.",
  "tags": ["React", "React Router", "Tailwind CSS", "REST Countries API", "Vite"],
  "thumbnail": "/images/cover.png",
  "thumbnailAlt": "Vista principal del proyecto Countries Explorer",
  "demoUrl": "https://gonzaloibarrola.github.io/countries-api/",
  "repoUrl": "https://github.com/GonzaloIbarrola/countries-api",
  "priority": 3,
  "status": "completed"
}
```
