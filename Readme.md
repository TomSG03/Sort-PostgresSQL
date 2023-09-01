# Сортировка чискл с сохранением результат в PostgresSQL

## Настройка

Для работы используется порт - 3000. При необходимости можно поменять в app.js

База данных создается с помощью файла - dbCreate.sql. 
После этого нужно подключится к ней и создать таблицу с помощью - tableCreate.sql

В этих файлах задаются имя базы данных, пользоватеь, пароль которые потом используются в файле - db.js
Если есть своя БД и пользователь то достаточно создать таблицу, а имя БД и пользователя и пароль поменять на свои в db.js

## Функционал

###    1.  Сортировка и сохранение результатов в БД
  ![сортировка]()
###    2.  Отображение всех результатов
  ![Результат]()
###    3.  Поиск по ID сортировки в БД
  ![Поиск по ID]()
###    4.  Запрос в адресной строке браузера и очиска таблицы БД

загрузить все результаты в виде JSON можно послав GET - запрос на http://localhost:3000/api/all
![Загрузить все]()

Чтобы выполнить поиск по ID и загрузить результат в виде JSON можно послав GET - запрос на http://localhost:3000/api/4 
Цифра в конце является ID номером
![Загрузить по ID]()

Очистить таблицу можно послав DELETE - запрос на http://localhost:3000/api
![Удаление]()