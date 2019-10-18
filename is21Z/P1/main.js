/**
 * Created by User on 16.10.2019.
 */
document.addEventListener('DOMContentLoaded', function () {
    var d1 = document.querySelector('#d1');
    var d2 = document.querySelector('#d2');
    var d3 = document.querySelector('#d3');
    var d4 = document.querySelector('#d4');
    d1.innerHTML = "0";
    d2.innerHTML = "0";
    d3.innerHTML = "0";
    d4.innerHTML = "0";
    var v1 = 0;
    var v2 = 0;
    var v3 = 0;
    var v4 = 0;
    d1.addEventListener('click', function () {
        v1++;
        d1.innerHTML = v1.toString();
        switch (v1) {
            case 1:
                d1.style.backgroundColor = "yellow";
                break;
            case 2:
                d1.style.backgroundColor = "red";
                break;
            case 3:
                d1.style.backgroundColor = "green";
                break;
            case 4:
                d1.classList.add('st4');
                break;
        }
    });
    d2.addEventListener('click', function () {
        v2++;
        d2.innerHTML = v2.toString();
        switch (v2) {
            case 1:
                d2.classList.add('st1');
                break;
            case 2:
                d2.classList.add('st2');
                break;
            case 3:
                d2.classList.add('st3');
                break;
            case 4:
                d2.classList.add('st4');
                break;
        }
    });
    d3.addEventListener('click', function () {
        v3++;
        d3.innerHTML = v3.toString();
        switch (v3) {
            case 1:
                d3.classList.add('st1');
                break;
            case 2:
                d3.classList.add('st2');
                break;
            case 3:
                d3.classList.add('st3');
                break;
            case 4:
                d3.classList.add('st4');
                break;
        }
    });
    d4.addEventListener('click', function () {
        v4++;
        d4.innerHTML = v4.toString();
        switch (v4) {
            case 1:
                d4.classList.add('st1');
                break;
            case 2:
                d4.classList.add('st2');
                break;
            case 3:
                d4.classList.add('st3');
                break;
            case 4:
                d4.classList.add('st4');
                break;
        }
    });
});
