### Как использовать MySQL и SQL-файлы в Laragon

#### 1. Войдите в MySQL
Войдите в MySQL:
```bash
mysql -u root -p
```

#### 2. Создайте базу данных
В терминале:
```bash
mysql -u root -p -e "CREATE DATABASE blog;"
```

#### 3. Запустите SQL-файлы
Создать таблицы:
```bash
mysql -u root -p blog < D:\web-2025\lab8\data\sql\tables.sql
```
Добавить данные:
```bash
mysql -u root -p blog < D:\web-2025\lab8\data\sql\posts.sql
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
