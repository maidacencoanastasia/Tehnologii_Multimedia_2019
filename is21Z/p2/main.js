document.addEventListener('DOMContentLoaded', function () {
    var a = [];
    var html_g = document.querySelector("#g");
    // ---------------------------------------------------
    html_g.addEventListener('click', function () {
        a = [];
        var html_v = document.querySelector("#v");
        var n = html_v.value;
        // generam valori 
        for (var i = 1; i <= n; i++) {
            var b = [];
            for (var j = 1; j <= n; j++) {
                var vl = ((Math.random() > 0.5) ? -1 : 1) * Math.floor(Math.random() * 10);
                b.push(vl);
            }
            a.push(b);
        }
        // ----------------------------------------------
        var suma = 0;
        for (var i = 0; i <= n - 1; i++) {
            suma += a[i][i];
        }
        // ----------------------------------------------
        console.log(n);
        console.log(a);
        console.log(a[0][0]);
        console.log('suma pe diagonala principala ' + suma);
        _RENDER();
        function _RENDER() {
            var temp = '<table>';
            for (var i = 0; i < n; i++) {
                temp += '<tr>';
                for (var j = 0; j < n; j++) {
                    if (i != j) {
                        temp += "<td>" + a[i][j] + "</td>";
                    }
                    else {
                        temp += "<td class='select'>" + a[i][j] + "</td>";
                    }
                }
                temp += '</tr>';
            }
            temp += '</table>';
            temp += "<br><h1>" + suma + "<h1>";
            var ras_html = document.querySelector("#ras");
            ras_html.innerHTML = temp;
        }
    });
    // ---------------------------------------------------
});
