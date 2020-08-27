// const fotoBawah = document.querySelectorAll('.gBawah')
const fotoAtas = document.querySelector('.gAtas')
const tempatAtas = document.querySelector('.foto-atas')

console.log(tempatAtas);

tempatAtas.addEventListener('click', function (e) {

    if (e.target.className == 'gBawah') {

        fotoAtas.src = e.target.src
    }
})