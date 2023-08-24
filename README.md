# My Admin

The application is a platform for store merchants to manage their stores.

## Current app features

User can perform following actions:

- view list of stores
- create/delete a store

## Getting started

Prerequisites:

- Node 14+
- Yarn 1.22+
- Docker

To start the app locally, execute the following steps:

1. Start the backend api service

```bash
git clone https://github.com/iamjeremylim/myadmin-service
cd myadmin-service
docker-compose up
```

2. Start the frontend app

```bash
git clone https://github.com/iamjeremylim/admin_ui
cd admin_ui
cp .env.example .env
yarn install
```

##### `yarn dev`

Runs the app in the development mode.\
Open [http://127.0.0.1:5173](http://127.0.0.1:5173) to view it in the browser.

## Future app features

- User authentication
- User can view/edit a store
