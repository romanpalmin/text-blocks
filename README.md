Тестовое задание "Текстовые блоки"
=================================

Постановка задачи
-----------------
1. Необходимо реализовать одностраничное приложение, представляющее
из себя список текстовых блоков с дополнительной функциональностью.

2. Текстовые блоки могут быть двух видов: простые и сложные.
Простой текстовый блок содержит:
* текст,
* элемент управления &quot;крестик&quot;, по нажатию на который выполняется
удаление данного блока.

3. Кроме того, текстовый блок может быть выделен при помощи одиночного
нажатия кнопки мышки на блоке.
Сложный текстовый блок расширяет функциональность простого блока. Помимо
всего вышеперечисленного он может быть красным или зеленым. Красное
состояние может быть переключено в зеленое и наоборот при помощи
двойного нажатия кнопки мышки на блоке.

4. При удалении сложного блока должно выводиться всплывающее сообщение,
запрашивающее у пользователя подтвреждение совершаемого действия.

5. Контент текстовых блоков генерируется случайным образом.

6. Помимо этого, в приложении должны присутствовать следующие элементы
управления:
* кнопка, осуществляющая добавление новых текстовых блоков,
* панель состояния, отражающая информацию:
* * общее количество текстовых блоков в настоящий момент времени,
* * количество выделенных блоков,
* * из выделенных -- количество красных и зеленых.

Пример реализации
------
http://dev.romanpalmin.com/samples/TextBlocks/

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

