# My Admin

The application is a platform for store merchants to manage their stores.

## App features

Current:

- User can view list of stores
- User can create/delete a store

Future:

- User authentication
- User can view/edit a store

## Getting started

Prerequisites:

- Node 14+
- Yarn 1.22+
- Docker

To start the app locally, execute the following steps:

1. Set up the backend api service

```bash
git clone https://github.com/iamjeremylim/myadmin-service
cd myadmin-service
docker-compose up
```

2. Set up the frontend app

```bash
git clone https://github.com/iamjeremylim/admin_ui
cd admin_ui
cp .env.example .env
yarn install
```

3. Start the app

```bash
yarn dev
```

The app will now run in the development mode.\
Open [http://127.0.0.1:5173](http://127.0.0.1:5173) to view it in the browser.
