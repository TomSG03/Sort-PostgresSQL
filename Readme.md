# Сортировка чисел с сохранением результата в PostgresSQL

## Настройка

Для работы используется порт - 3000. При необходимости можно изменить на app.js

База данных создается с помощью файла - dbCreate.sql. 
После этого нужно подключится к ней и создать таблицу с помощью - tableCreate.sql

В этих файлах задаются имя базы данных, пользоватеь, пароль которые потом используются в файле - db.js
Если есть своя БД и пользователь то достаточно создать таблицу, а имя БД и пользователя и пароль изменить на свои в db.js

## Функционал

###    1.  Сортировка и сохранение результатов в БД
  ![сортировка](https://github.com/TomSG03/Sort-PostgresSQL/blob/main/imageMD/sorting.PNG)
###    2.  Отображение всех результатов
  ![Результат](https://github.com/TomSG03/Sort-PostgresSQL/blob/main/imageMD/result.PNG)
###    3.  Поиск по ID сортировки в БД
  ![Поиск по ID](https://github.com/TomSG03/Sort-PostgresSQL/blob/main/imageMD/findId.PNG)
###    4.  Запрос в адресной строке браузера и очиска таблицы БД

Загрузить все результаты в виде JSON можно выполнив запрос - GET на http://localhost:3000/api/all

![Загрузить все](https://github.com/TomSG03/Sort-PostgresSQL/blob/main/imageMD/loadAll.PNG)

Чтобы выполнить поиск по ID и загрузить результат в виде JSON можно выполнив запрос GET на http://localhost:3000/api/4.
Цифра в конце является ID номером

![Загрузить по ID](https://github.com/TomSG03/Sort-PostgresSQL/blob/main/imageMD/loadId.PNG)

Очистить таблицу можно выполнив запрос - DELETE на http://localhost:3000/api. 
Это можно сделать, например с помощью Postman

![Удаление](https://github.com/TomSG03/Sort-PostgresSQL/blob/main/imageMD/clearTable.PNG)
