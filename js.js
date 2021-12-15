// Divide by 5, then multiply by 9, then add 32
const form = document.getElementById('form');
const celcius = document.getElementById('celcius');

form.addEventListener('submit', e => {
    e.preventDefault()
    let fahrenheit = celcius.value /5 * 9 + 32
    console.log(celcius.value, 'celcius', 'is equal to', fahrenheit, 'fahrenheit')
});

