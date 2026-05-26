# 🚀 Angular News Feed

Aplicación desarrollada en **Angular 12** que consume una API de noticias y muestra artículos utilizando un patrón reactivo de estado con RxJS.

Permite visualizar noticias en tiempo real manejando estados de carga, datos y errores de forma declarativa.

---

## ⚙️ Requisitos del sistema

Antes de ejecutar el proyecto, asegúrate de tener instalado:

- 📦 **Node.js:** `v14.x` o `v16.x` *(preferiblemente `v24.13.0`)*
- 📦 **npm:** `v6+`
- 🅰️ **Angular CLI:** `v12.x`

---

## 🔍 Verificar versiones instaladas

Ejecuta en la terminal:

```bash
node -v
npm -v
ng version
```

---

## 🚀 Instalación del proyecto

### 1️⃣ Clonar el repositorio

```bash
git clone <URL_DEL_REPO>
cd angular-news-feed
```

### 2️⃣ Instalar dependencias

```bash
npm install
```

---

## ▶️ Ejecutar el proyecto

```bash
ng serve
```

Luego abre en tu navegador:

```bash
http://localhost:4200/news
```

---

## 🧠 Arquitectura del proyecto

Este proyecto utiliza un patrón reactivo basado en estado para manejar peticiones HTTP.

### 📦 NewsComponent

Contiene la lógica principal de visualización de noticias:

- Consumo de API de noticias
- Manejo de estado *(loading / data / error)*
- Suscripción reactiva con `async pipe`

---

## ⚙️ Funcionalidades principales

- 📰 Consumo de API de noticias
- ⚡ Estado reactivo *(loading / data / error)*
- 🔄 Operador personalizado `withRequestState`
- 🌐 Peticiones HTTP con headers de autenticación
- 🎯 UI reactiva con `async pipe`

---

## 🛠️ Tecnologías utilizadas

- 🅰️ Angular 12
- ⚡ TypeScript
- 🔄 RxJS
- 🌐 HttpClient
- 📰 News API

---

## 📁 Estructura del proyecto

```bash
src/
├── app/
│   ├── helper/
│   │   └── utilities/
│   │       └── with-loading-operator.ts
│   ├── interfaces/
│   │   └── news-api.interface.ts
│   ├── pages/
│   │   └── news.component.ts
│   ├── services/
│   │   └── news.service.ts
│   ├── app.routes.ts
│   └── app.module.ts
```

---

## 🔥 Buenas prácticas implementadas

- Separación de responsabilidades *(service / component / helper)*
- Manejo de estado reactivo con RxJS
- Uso de `async pipe`
- Operador personalizado reutilizable
- Código limpio y escalable

---

## 📄 Licencia

Este proyecto es de uso educativo y forma parte de un portafolio personal.
