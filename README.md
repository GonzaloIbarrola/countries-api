# Countries Explorer 🌍

Frontend web app para explorar información de países del mundo: búsqueda, filtros por región, modo oscuro y detalle de cada país.

## 🚀 Demo
🔗 https://countries-explorer-gonzalo.vercel.app

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
├── components/
│   ├── backButton.jsx
│   ├── CountryCard.jsx
│   ├── FilterRegion.jsx
│   ├── Header.jsx
│   └── SearchInput.jsx
├── pages/
│   ├── Home.jsx
│   └── Country.jsx
├── services/
│   └── countriesApi.js
├── layout/
│   └── Layout.jsx
└── main.jsx


## ⚙️ How It Works
- Los datos se obtienen desde **REST Countries API**
- El filtrado se realiza en el cliente usando `Array.filter`
- La navegación entre vistas se maneja con **React Router**
- El modo oscuro se implementa usando `localStorage` y clases `dark` de Tailwind

## 👤 Author
Gonzalo Ibarrola
Frontend Developer
🇦🇷 Argentina