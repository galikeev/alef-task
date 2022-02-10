const goodsCounter = () => {

    let count = document.querySelector('#btn-value');
    let btnPlus = document.querySelector('#btn-plus');
    let btnMinus = document.querySelector('#btn-minus');

    btnPlus.addEventListener('click', () => {
        count.innerHTML++;
    });

    btnMinus.addEventListener('click', () => {
        if (count.innerHTML > 0) {
            count.innerHTML--;
        }
    });

}

export default goodsCounter;