<h1 align="center">📰 Angular News Feed</h1>

<p align="center">
  <img src="https://img.shields.io/badge/Angular-12-DD0031?logo=angular&logoColor=white" alt="Angular" />
  <img src="https://img.shields.io/badge/RxJS-Reactive-B7178C?logo=reactivex&logoColor=white" alt="RxJS" />
  <img src="https://img.shields.io/badge/HTTP-News_API-blue" alt="News API" />
  <img src="https://img.shields.io/badge/Status-Completed-brightgreen" alt="Completed" />
</p>

<p align="center">
  <a href="https://github.com/alobuuls/angular-news-feed" target="_blank"><img src="https://img.shields.io/badge/GitHub-Repository-181717?logo=github&logoColor=white" alt="Repository" /></a>
  <a href="https://github.com/alobuuls/angular-news-feed/stargazers" target="_blank"><img src="https://img.shields.io/github/stars/alobuuls/angular-news-feed?style=social" alt="GitHub Stars" /></a>
  <a href="https://github.com/alobuuls/angular-news-feed/commits/main" target="_blank"><img src="https://img.shields.io/github/last-commit/alobuuls/angular-news-feed" alt="Last Commit" /></a>
</p>

---

## 📑 Table of Contents

* [📰 Angular News Feed](#-angular-news-feed)

  * [🌐 Live Demo](#-live-demo)
  * [📖 Description](#-description)
  * [⚙️ System Requirements](#️-system-requirements)
  * [🚀 Project Installation](#-project-installation)
  * [▶️ Run the Project](#️-run-the-project)
  * [🧠 Project Architecture](#-project-architecture)
  * [✨ Features](#-features)
  * [🛠 Technologies Used](#-technologies-used)
  * [📁 Project Structure](#-project-structure)
  * [🔥 Best Practices Implemented](#-best-practices-implemented)
  * [🎯 Project Goal](#-project-goal)
  * [📄 License](#-license)

---

## 🌐 Live Demo

🔗 https://alobuuls.github.io/angular-news-feed/

---

## 📖 Description

> [!NOTE]
> Angular application that consumes a news API and displays articles using a reactive state management approach powered by RxJS.

The project demonstrates HTTP communication, reactive UI updates, custom RxJS operators, loading and error state handling, and a scalable separation of concerns between components, services, and utilities.

---

## ⚙️ System Requirements

Before running the project, make sure you have installed:

- 📦 **Node.js:** `v14.x – v16.x` *(recommended: v14.21.3 LTS)*
- 📦 **npm:** `v6+`
- 🅰️ **Angular CLI:** `v12.x`

---

## 🔍 Verify Installed Versions

Run the following commands in your terminal:

```bash
node -v
npm -v
ng version
```

---

## 🚀 Project Installation

### 1️⃣ Clone the repository

```bash
git clone git@github.com:alobuuls/angular-news-feed.git

cd angular-news-feed
```

### 2️⃣ Install dependencies

```bash
npm install
```

---

## ▶️ Run the Project

Start the development server:

```bash
ng serve
```

Then open:

```text
http://localhost:4200/news
```

---

## 🧠 Project Architecture

The application follows a reactive architecture based on Angular services, RxJS streams, and reusable utilities.

### 📦 News Service

Responsible for:

* HTTP communication
* News API integration
* Request abstraction
* Data retrieval
* Error propagation

### 📦 News Component

Responsible for:

* News rendering
* Reactive subscriptions
* UI state management
* Async pipe integration
* User interaction

### 📦 Custom RxJS Operator

Responsible for:

* Loading state handling
* Error state handling
* Request lifecycle management
* Reusable reactive logic

### 📦 Interfaces

Responsible for:

* API response contracts
* Type safety
* Data modeling
* Strong typing

---

## ✨ Features

* 📰 News API consumption
* ⚡ Reactive state management
* 🔄 Loading, data, and error states
* 📡 HTTP requests with Angular HttpClient
* 🎯 Async pipe integration
* 🧩 Custom RxJS operator
* 📦 Strong typing with TypeScript
* 🚀 Scalable architecture
* 🧠 Reactive programming patterns

---

## 🛠 Technologies Used

| Technology | Purpose |
|------------|----------|
| Angular 12 | Front-End Framework |
| TypeScript | Application Logic |
| RxJS | Reactive Programming |
| HttpClient | HTTP Requests |
| News API | External Data Source |
| HTML5 | Structure |
| CSS3 | Styling |

---

## 📁 Project Structure

```text
src/

├── app/
│   ├── pages/
│   │   └── news.component.ts
│   │
│   ├── services/
│   │   └── news.service.ts
│   │
│   ├── helper/
│   │   └── utilities/
│   │       └── with-loading-operator.ts
│   │
│   ├── interfaces/
│   │   └── news-api.interface.ts
│   │
│   ├── app.routes.ts
│   └── app.module.ts
│
└── main.ts
```

---

## 🔥 Best Practices Implemented

* Reactive state management with RxJS
* Separation of concerns
* Reusable custom operators
* Async pipe usage
* Strong typing with interfaces
* HTTP abstraction through services
* Error handling patterns
* Scalable project organization
* Declarative UI updates
* Clean architecture principles

---

## 🎯 Project Goal

Practice and strengthen Angular and RxJS concepts through the implementation of a real-world news feed application:

* HTTP Communication
* Reactive State Management
* RxJS Operators
* Async Pipe
* TypeScript Interfaces
* Service Architecture
* Error Handling
* Scalable Front-End Design

---

## 📄 License

This project is intended for educational and portfolio purposes.

Created by **Alondra Francisco**.
