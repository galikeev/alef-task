const goodsCounter = () => {

    let count = document.querySelector('#btn-value');
    let btnPlus = document.querySelector('#btn-plus');
    let btnMinus = document.querySelector('#btn-minus');

    btnPlus.addEventListener('click', () => {
        if (count.value < 50) {
            count.value++;
        }
    });

    btnMinus.addEventListener('click', () => {
        if (count.value > 0) {
            count.value--;
        }
    });

}

export default goodsCounter;