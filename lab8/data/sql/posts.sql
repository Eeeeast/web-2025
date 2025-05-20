INSERT INTO
    user (username, about, avatar_src, avatar_alt)
VALUES
    ('John', 'I''m John', 'john.jpg', 'john'),
    (
        'Ваня Денисов',
        'Привет! Я системный аналитик в ACME :) Тут моя жизнь только для самых классных!',
        'vanya.jpg',
        'vanya'
    ),
    (
        'Лиза Дёмина',
        'Я Лиза Дёмина.',
        'liza.jpg',
        'liza'
    );

INSERT INTO
    post (
        description,
        image,
        like_count,
        user_id,
        created_at
    )
VALUES
    (
        'Каструля',
        'castrulya.jpg',
        13,
        1,
        FROM_UNIXTIME (1743853932)
    ),
    (
        'Это здание иногда называют колой.',
        'cola.jpg',
        7,
        2,
        FROM_UNIXTIME (1743853992)
    ),
    (
        'Сушёная рыбка.',
        'riba.jpg',
        534,
        3,
        FROM_UNIXTIME (1743854061)
    ),
    (
        'Интересная добавка.',
        'rockets.jpg',
        7,
        2,
        FROM_UNIXTIME (1742851061)
    ),
    (
        'Торт.',
        'tort.jpg',
        7,
        2,
        FROM_UNIXTIME (1743754061)
    ),
    (
        'Отличная погода.',
        'ulica.jpg',
        7,
        2,
        FROM_UNIXTIME (1743834021)
    ),
    (
        'Так красиво сегодня на улице!\nНастоящая зима))\nВспоминается Бродский: «Поздно ночью, в уснувшей долине, на самом дне, в городке, занесенном снегом по ручку двери…',
        'zima.jpg',
        203,
        2,
        FROM_UNIXTIME (1733854041)
    ),
    (
        'Так красиво сегодня на улице! Настоящая зима)) Вспоминается Бродский: «Поздно ночью, в уснувшей долине, на самом дне, в городке, занесенном снегом по ручку двери…',
        'zima.jpg',
        203,
        2,
        FROM_UNIXTIME (1743554061)
    );
