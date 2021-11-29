function closeMenu() {
    $('.side-close').hide();
    $('.top-menu').hide();
    $('.side-open').show();


}

function openMenu() {
    $('.side-open').hide();
    $('.side-close').show();
    $('.top-menu').show();

}

function validate() {
    let days = document.querySelectorAll(".days")[0].value;
    let dayTrue;
    if (days < 10 || days > 60) {
        alert("количество дней указано не верно");
        return false;
    } else dayTrue = 1;
    let summ = document.querySelectorAll(".summ")[0].value;
    let summTrue;
    if (summ < 10000 || summ > 1000000) {
        alert("сумма не должна быть меньше 10 000 и привышать 1 000 000");
        return false;
    } else summTrue = 1;

    if (dayTrue == 1 && summTrue == 1) return true;
}

function closeCalc() {
    $('.calc-form').hide();
}

function openCalc() {
    $('.calc-form').show();
}

function calc() {
    let result = validate();

    if (result == true) {
        let days = document.querySelectorAll(".days")[0].value;
        let summ = document.querySelectorAll(".summ")[0].value;

        let count = parseInt(days / 10);
        let k = (days / 10) - count;
        let x = k * 10;
        let countDay = Math.round(((days / 10) - count) * 10);
        for (i = 0; i < count; i++) {
            summ = Number(summ) + Number((summ * 2) / 100);
        }
        /*for (k = 0; k < countDay; k++) {
            summ = Number(summ) + Number((summ * 0.19822) / 100)
        }*/
        summ = parseInt(summ);
        let input = 'Сумма накопленого капитала за ' + days + ' дней составит ' + summ + ' Р';
        $("#calc-result").html(input);
        $('.calc-result').show();
    }

}
$(document).ready(function() {
    document.addEventListener('DOMContentLoaded', function() {
        // инициализация слайдера
        var slider = new SimpleAdaptiveSlider('.slider', {
            autoplay: true,
            interval: 10000,
        });
    });


});