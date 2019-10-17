var Punct = /** @class */ (function () {
    function Punct(x) {
        this.litera = String.fromCharCode(65 + x - 1);
        // this.x = ((Math.random()>0.5)?-1:1)*(Math.random()*100).toFixed(2);
        // this.y = ((Math.random()>0.5)?-1:1)*(Math.random()*100).toFixed(2);
        this.x = Math.floor(((Math.random() > 0.5) ? -1 : 1) * (Math.random() * 100).toFixed(2));
        this.y = Math.floor(((Math.random() > 0.5) ? -1 : 1) * (Math.random() * 100).toFixed(2));
        this.visible = true;
    }
    //
    Punct.prototype.getHTMLPoint = function () {
        // poluciti poreadcovii nomer iz buckvi
        return "<tr>\n             <td></td>\n             <td>" + this.litera + "</td>\n             <td>" + this.x + "</td>\n             <td>" + this.y + "</td>\n             <td>" + this.getCadran() + "</td>\n            </tr>";
    };
    //
    Punct.prototype.getCadran = function () {
        if ((this.x > 0) && (this.y > 0)) {
            return 'I';
        }
        if ((this.x < 0) && (this.y > 0)) {
            return 'II';
        }
        if ((this.x < 0) && (this.y < 0)) {
            return 'III';
        }
        if ((this.x > 0) && (this.y < 0)) {
            return 'IV';
        }
        if ((this.x == 0) || (this.y == 0)) {
            return 'AXA';
        }
    };
    return Punct;
}());
document.addEventListener('DOMContentLoaded', function () {
    var but = document.querySelector('#check');
    var puncte = [];
    but.addEventListener('click', function () {
        puncte = [];
        var html_n = document.querySelector('#n');
        var n = Number(html_n.value);
        for (var i = 1; i <= n; i++) {
            var p = new Punct(i);
            puncte.push(p);
        }
        console.log(puncte);
        RENDER();
    });
    function RENDER() {
        var temp = "<table>\n           <tr>\n             <td>Nr</td>\n             <td>Litera</td>\n             <td>X</td>\n             <td>Y</td>\n             <td>CADRAN</td>\n            </tr>\n        \n        ";
        for (var _i = 0, puncte_1 = puncte; _i < puncte_1.length; _i++) {
            var item = puncte_1[_i];
            // if (item.getCadran()=='II')
            //      {item.visible=true}
            // else
            //     {item.visible=false}
            //     // zameniti map
            if (item.visible) {
                temp += item.getHTMLPoint();
            }
            ;
        }
        temp += '</table>';
        document.querySelector('#raspuns').innerHTML = temp;
    }
});
