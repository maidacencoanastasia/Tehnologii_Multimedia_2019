document.addEventListener('DOMContentLoaded', function () {
    var i = 0;
    var cliks = [];
    document.addEventListener('click', function (e) {
        if (i == 5) {
            console.log(cliks);
        }
        else {
            i++;
            console.log('x' + i + ':' + e.screenX);
            console.log('y' + i + ':' + e.screenY);
            var obj = {
                id: i,
                x: e.screenX,
                y: e.screenY
            };
            cliks.push(obj);
            var temp = '<table>';
            for (var _i = 0, cliks_1 = cliks; _i < cliks_1.length; _i++) {
                var item = cliks_1[_i];
                temp += "<tr>\n                <td>" + item.x + "</td>\n                <td>" + item.y + "</td>\n                </tr>";
            }
            temp += '<table>';
            var t = document.querySelector('#ras');
            t.innerHTML = temp;
        }
    });
});
