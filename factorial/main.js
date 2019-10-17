document.addEventListener('DOMContentLoaded', function () {
    var but = document.querySelector('#sub');
    //---------------------------------------------
    but.addEventListener('click', function () {
        var html_n = document.querySelector('#n');
        var n = Number(html_n.value);
        document.querySelector('#otvet').innerHTML = "<h3>" + V(n) + "</h3>";
        // console.log(V(n));
    });
    //---------------------------------------------
    //---------------------------------------------
    function F(n) {
        var p = 1;
        for (var i = 1; i <= n; i++) {
            p *= i;
        }
        return p;
    }
    //---------------------------------------------
    function V(n) {
        var temp = n.toLocaleString() + '!=';
        for (var i = 1; i < n; i++) {
            temp += i.toString() + '*';
        }
        temp += n.toString() + '=' + F(n).toString();
         ===  ===  ==
        ;
        return temp;
    }
});
