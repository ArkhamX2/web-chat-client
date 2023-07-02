# Этап 1: Сборка
FROM node:lts-alpine3.18 AS build

# Переключение в директорию проекта.
WORKDIR /app

# Копирование файлов package.json и package-lock.json.
COPY package.json package-lock.json ./

# Установка зависимостей.
RUN npm install

# Копирование исходного кода проекта в контейнер.
COPY . .

# Сборка проекта
RUN npm run build

#### Этап 2: Запуск приложения с помощью Nginx
FROM nginx:1.17.0-alpine

# Копирование сборки из этапа 1
COPY --from=build /app/dist /usr/share/nginx/html

# Установка порта 80. Теперь приложение доступно извне
EXPOSE 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]
