var Punct = /** @class */ (function () {
    function Punct(x) {
        this.litera = String.fromCharCode(65 + x - 1);
        // this.x = ((Math.random()>0.5)?-1:1)*(Math.random()*100).toFixed(2);
        // this.y = ((Math.random()>0.5)?-1:1)*(Math.random()*100).toFixed(2);
        this.x = Math.floor(((Math.random() > 0.5) ? -1 : 1) * (Math.random() * 100));
        this.y = Math.floor(((Math.random() > 0.5) ? -1 : 1) * (Math.random() * 100));
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
        //------------ CANVAS-------------------
        var drawingCanvas = document.getElementById('smile');
        if (drawingCanvas && drawingCanvas.getContext) {
            var context = drawingCanvas.getContext('2d');
            var x0 = 250;
            var y0 = 250;
            context.clearRect(0, 0, 500, 500);
            context.beginPath();
            context.moveTo(x0, 0);
            context.lineTo(x0, 500);
            context.moveTo(0, y0);
            context.lineTo(500, x0);
            context.closePath();
            context.stroke();
            context.fill();
            for (var _a = 0, puncte_2 = puncte; _a < puncte_2.length; _a++) {
                var p = puncte_2[_a];
                context.strokeStyle = "#000";
                context.fillStyle = "#fc0";
                context.beginPath();
                context.arc(x0 + p.x, y0 - p.y, 5, 0, Math.PI * 2, true);
                context.fillText(p.litera, x0 + p.x - 10, y0 - p.y - 10);
                context.closePath();
                context.stroke();
                context.fill();
            }
            // // Рисуем окружность 
            // context.strokeStyle = "#000";
            // context.fillStyle = "#fc0";
            // context.beginPath();
            // context.arc(100,100,50,0,Math.PI*2,true);
            // context.closePath();
            // context.stroke();
            // context.fill();
            // // Рисуем левый глаз 
            // context.fillStyle = "#fff";
            // context.beginPath();
            // context.arc(84,90,8,0,Math.PI*2,true);
            // context.closePath();
            // context.stroke();
            // context.fill();
            // // Рисуем правый глаз 
            // context.beginPath();
            // context.arc(116,90,8,0,Math.PI*2,true);
            // context.closePath();
            // context.stroke();
            // context.fill();
            // // Рисуем рот
            // context.beginPath();
            // context.moveTo(70,115);
            // context.quadraticCurveTo(100,130,130,115);
            // context.quadraticCurveTo(100,150,70,115); 
            // context.closePath();
            // context.stroke();
            // context.fill();
        }
    }
});
