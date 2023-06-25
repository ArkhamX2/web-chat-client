<p align="center">
      <img src="https://i.ibb.co/z4DS2KG/logo-color.png" alt="logo-color" width="200">
</p>
<p align="center">
   <img src="https://img.shields.io/badge/React%20ver-16.7-informational" alt="React Version">
   <img src="https://img.shields.io/badge/App%20ver-0.1-blueviolet" alt="App Version">
   <img src="https://img.shields.io/badge/license-MIT-green" alt="License">
</p>

## Описание
Репозиторий клиентской части веб-чата Molchat.
- [MolChat](https://github.com/ArkhamX2/web-chat)

Проект использует такие технологии как:
- HTML5, CSS, SCSS
- Javascript
- React, Axios, React-Router-DOM
- Typescript
- Redux, Redux-saga
- Docker

## Запуск
### `npm start`

Запустить приложение в режиме разработки.\
Открыть [http://localhost:3000](http://localhost:3000) для просмотра в браузере.

Это приложение будет перезагружаться при внесении изменений.\
Также вы можете увидеть любые ошибки линтера в консоли.

### `docker build -t web-chat-client .`

Собрать Docker-образ приложения.

### `docker run -d -p 80:80 web-chat-client`

Запустить Docker-образ приложения.\
Открыть [http://localhost](http://localhost) для просмотра в браузере.
