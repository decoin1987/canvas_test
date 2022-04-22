# canvas_test

### Задание:
```
Создать 2 канваса 600x600 и 600x50,
нарисовать в большем 5 закрашенных 5-и конечных звезд.
Красного, синего, зеленого, желтого и черного цветов, 
по клику мышкой на цветной звезде - 
закрашивать маленький канвас - соответствующим цветом. 
При клике на белую (не закрашенную) область большого канваса -
маленький канвас - закрашивать белым.
```

### Решение:

```
Скрипт canvas.js подключается в любой html документ,
перекрашивает body в серый цвет для видимости canvas'ов
Внутрь тега body генерируются 2 канваса. 
В большом рисуются звезды и вешается eventListener на событие click
По клику отрабатывает функция распознавания цвета пикселя под курсором мыши
и изменяется backgrounColor маленького canvas'а
```
