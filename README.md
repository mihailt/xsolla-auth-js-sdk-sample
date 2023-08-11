# Xsolla Auth Sample using Xsolla Login Javascript SDK

This is a repository for Xsolla Auth Sample using Xsolla Login Javascript SDK

Features:
- Next 13
- Shadcn UI 
- Tailwind animations
- Full responsiveness
- XSolla login (Email, Google, 9+ Social Logins)
- state managment using zustand

### Cloning the repository

```shell
git clone https://github.com/mihailt/xsolla-auth-js-sdk-sample.git
```

### Install packages

```shell
yarn
```
### Setup callback url in xsolla dashboard

```js
Callback URL: https://%hostname%/auth/done
Allowed origins (CORS): https://%hostname%
Error callback URL: https://%hostname%/auth/error
```

### Setup .env file


```js
NEXT_PUBLIC_XSOLLA_PROJECT_ID=
NEXT_PUBLIC_XSOLLA_PREFFERED_LOCALE=
NEXT_PUBLIC_XSOLLA_REDIRECT_URI=
```

### Start the app

```shell
yarn dev
```

## Available commands

Running commands with yarn `yarn [command]`

| command         | description                              |
| :-------------- | :--------------------------------------- |
| `dev`           | Starts a development instance of the app |