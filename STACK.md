# Project-server - Stack Tecnológico

## Frontend
- **Framework**: React 19
- **Build tool**: Vite 6
- **Lenguaje**: TypeScript 5.7
- **Entry point**: `client/src/App.tsx`

## Backend
- **Runtime**: Node.js
- **Framework**: Express 4
- **Lenguaje**: TypeScript 5.7
- **Entry point**: `server/src/index.ts`

## Base de datos
- **Motor**: SQLite vía `better-sqlite3`
- **Modalidad**: `:memory:` (en memoria volátil)
- **Ubicación**: `server/src/db/database.ts`

## Estructura del proyecto
```
Project-server/
├── client/             # Frontend React + Vite
│   └── src/
│       └── App.tsx
├── server/             # Backend Express
│   └── src/
│       ├── index.ts
│       ├── db/
│       │   └── database.ts
│       └── routes/
├── package.json        # Raíz con workspaces
└── tsconfig.base.json  # Config TS compartida
```

## Scripts
| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Arranca client + server en paralelo |
| `npm run dev:client` | Arranca solo el frontend |
| `npm run dev:server` | Arranca solo el backend |
| `npm run build` | Compila ambos proyectos |
| `npm start` | Arranca el servidor en producción |
