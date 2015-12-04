var a, b, c;

var a=window.prompt('Введите длину стороны a');
var b=window.prompt('Введите длину стороны b');
var c=window.prompt('Введите длину стороны с');

if (a==b) {
    alert('Треугольник равнобедренный');
}

else if (c==a) {
    alert('Треугольник равнобедренный');
}

else if (c==b) {
    alert('Треугольник равнобедренный');
}

else {
    alert('Треугольник неравнобедренный')
}