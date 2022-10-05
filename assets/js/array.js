const carrosDOM = document.querySelector('#carros');

const veiculos = ['Chevrolet', 'Ford', 'Fiat', 'Vw', 'Honda', 'Toyota', 'Hyunday'];

veiculos.forEach ((value, key) => {
    carrosDOM.innerHTML += `<option name='${key}'>${value} </option>`;
});