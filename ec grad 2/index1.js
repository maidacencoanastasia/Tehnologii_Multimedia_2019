/**
 * Created by User on 2019-10-09.
 */
document.addEventListener('DOMContentLoaded', function () {
    var html_a = document.querySelector("#a");
    var a = html_a.value;
    var html_b = document.querySelector("#b");
    var b = html_b.value;
    var html_c = document.querySelector("#c");
    var c = html_c.value;
    var html_x = document.querySelector("#x");
    var x = html_x.value;
    html_x.addEventListener('click', function () {
        var a = html_a.value;
        var b = html_b.value;
        var c = html_c.value;
        console.log("Ecuatii de gradul 2");
        var raspuns = '';
        var d = Math.pow(b, 2) - 4 * a * c;
        if (d < 0) {
            raspuns = 'Ecuatia nu are solutii';
        }
        if (d = 0) {
            var x1 = ((-1 * b) / (2 * a));
            raspuns = "Ecuatia are o solutie x=" + x1.toString();
        }
        if (d > 0) {
            raspuns = "Ecuatia are 2 solutii x1=" + (((-1 * b) + Math.sqrt(d)) / (2 * a)).toFixed(2).toString() + 'x2=' + (((-1 * b) - Math.sqrt(d)) / (2 * a)).toFixed(2).toString();
        }
        console.log(raspuns);
    });
});
//# sourceMappingURL=index1.js.map