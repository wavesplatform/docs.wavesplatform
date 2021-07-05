# [Ride v4 и v3] Операторы

:warning: Это документация Стандартной библиотеки версии 4 и 3. Рекомендуем использовать версию 5. [Перейти к&nbsp;версии&nbsp;5](/ru/ride/operators/)

## Арифметические операторы

| Оператор | Описание |
| :---: | :--- |
| + | Cложение |
| - | Вычитание |
| * | Умножение |
| / | Деление |
| % | Нахождение остатка от деления |

> Оператор **/** использует метод округления FLOOR, см. [Переменные округления](/ru/ride/v4/functions/built-in-functions/math-functions#rounding-variables). Например, результат выражения `-1/100` равен `-1`.

## Операторы сравнения

| Оператор | Описание |
| :---: | :--- |
| < | Меньше чем |
| > | Больше чем |
| <= | Меньше или равно |
| >= | Больше или равно |

## Операторы равенства

| Оператор | Описание |
| :---: | :--- |
| == | Равно |
| != | Не равно |

## Операторы локального определения

| Оператор | Описание |
| :---: | :--- |
| let | Определение переменной |
| func | Определение функции |

## Операторы выбора

| Оператор | Описание |
| :---: | :--- |
| if-then-else | Ветвление |
| match-case | [Определение типа из Union](/ru/ride/operators/match-case) |

## Операторы списка

| Оператор | Описание |
| :---: | :--- |
| ++ | Конкатенация |
| :+ | Добавление элемента в конец списка |
| :: | Добавление элемента в начало списка |

> :warning: Операторы `++` и `:+` добавлены в [Стандартной библиотеке](/ru/ride/script/standard-library) **версии 4**.

См. примеры в разделе [List](/ru/ride/v4/data-types/list).

## Унарные операторы

| Оператор | Описание |
| :--- | :---: | :--- |
| - | Унарный минус |
| ! | Логическое отрицание |

## Логические операторы

| Оператор | Описание |
| :--- | :---: | :--- |
| && | Логическое И |
| &#124;&#124; | Логическое ИЛИ |