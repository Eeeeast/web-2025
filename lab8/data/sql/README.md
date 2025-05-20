### Как использовать MySQL и SQL-файлы в Laragon

#### 1. Создайте базу данных
В терминале:
```bash
mysql -u root -p -e "DROP DATABASE IF EXISTS blog; CREATE DATABASE blog CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;"
```

#### 2. Запустите SQL-файлы
Создать таблицы:
```bash
mysql -u root -p blog < D:\web-2025\lab8\data\sql\tables.sql
```
Добавить данные:
```bash
mysql -u root -p blog < D:\web-2025\lab8\data\sql\posts.sql
```

#### 3. Войдите в MySQL
Войдите в MySQL:
```bash
mysql -u root -p
```

#### 4. Проверьте базу
И выполните:
```sql
USE blog;
SHOW TABLES;
SELECT * FROM post;
SELECT * FROM user;
```

---

База данных готова к работе с PHP или Laravel.
