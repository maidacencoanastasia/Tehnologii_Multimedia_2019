var cell = /** @class */ (function () {
    function cell(p) {
        this.id = p.id;
        this.valoare = p.valoare;
    }
    //-----------------------------------
    cell.prototype.getHTMLofCell = function () {
        return (this.valoare != 16)
            ? ("<div class=\"cell\" id=\"c" + this.id + "\">" + this.valoare + "</div>")
            : ("<div class=\"cell zero\" id=\"c" + this.id + "\"></div>");
    };
    //-----------------------------------
    cell.prototype.setToCanvas = function (context, img) {
        //determinam ce copiem         
        var i = this.valoare;
        var col_c = i % 4;
        if (col_c == 0) {
            col_c = 4;
        }
        var row_c = (Math.floor(i / 4));
        row_c = (i % 4 == 0) ? row_c - 1 : row_c;
        var x = 25 + 63 * (col_c - 1);
        var y = 25 + 63 * (row_c);
        //determinam x,y unde plasam
        i = this.id;
        if (i == 0) {
            i = 16;
        }
        col_c = i % 4;
        if (col_c == 0) {
            col_c = 4;
        }
        row_c = (Math.floor(i / 4));
        row_c = (i % 4 == 0) ? row_c - 1 : row_c;
        var xp = 2 + 63 * (col_c - 1);
        var yp = 2 + 63 * (row_c);
        //fixare pe canvas           
        context.drawImage(img, x, y, 63, 63, xp, yp, 63, 63);
    };
    //-----------------------------------
    cell.prototype.getSVG = function () {
        var col = this.id % 4;
        if (col == 0) {
            col = 4;
        }
        ;
        var x = (col - 1) * 63 + 2;
        var row = Math.floor(this.id / 4);
        var y = (this.id % 4 == 0) ? (row - 1) * 63 + 2 : (row) * 63 + 2;
        return (this.valoare != 16)
            ?
                "   <rect \n                id=\"s" + this.id + "\" \n                x=\"" + x + "\" \n                y=\"" + y + "\"  \n                width=\"63\" \n                height=\"63\" \n                style=\"stroke-width:3;stroke:rgb(0,0,0)\" \n            />\n\n            <text \n                id=\"t" + this.id + "\" \n                x=\"" + (x + 22) + "\" \n                y=\"" + (y + 40) + "\" \n                fill=\"red\">\n                " + this.valoare + "\n            </text>\n        "
            :
                " \n            <rect  \n                id=\"s" + this.id + "\" \n                x=\"" + x + "\" \n                y=\"" + y + "\"  \n                width=\"63\" \n                height=\"63\" \n                style=\"fill:rgb(125,125,125);stroke-width:3;stroke:rgb(0,0,0)\" \n            />\n        ";
    };
    //-----------------------------------
    cell.prototype.isCorrect = function () {
        return this.id == this.valoare;
    };
    //-----------------------------------
    cell.prototype.getDif = function () {
        return Math.abs(this.id - this.valoare);
    };
    return cell;
}());
//********************************
var _GLOBAL = /** @class */ (function () {
    function _GLOBAL() {
    }
    //-----------------------------------//-----------------------------------
    _GLOBAL.RENDER_CANVAS = function (cells) {
        var drawingCanvas = document.getElementById('smile');
        if (drawingCanvas && drawingCanvas.getContext) {
            var context = drawingCanvas.getContext('2d');
            context.clearRect(10, 10, 400, 400);
            var img_1 = new Image();
            img_1.src = "ptn.png";
            img_1.addEventListener('load', function () {
                var i = 0;
                var j = 0;
                for (var _i = 0, cells_1 = cells; _i < cells_1.length; _i++) {
                    var item = cells_1[_i];
                    /**
                     * varianta 1 - generare
                     */
                    //  i++;   
                    //  let col_c = i%4;
                    //  if  (col_c == 0) {col_c = 4}       
                    //  let row_c = (Math.floor(i/4));         
                    //  row_c = (i%4==0)?row_c-1:row_c;                
                    //  let x =x_init + col_c*w;
                    //  let y =y_init + row_c*h;
                    // let w =62;
                    // let h =62;   
                    // let x_init = -37;
                    // let y_init = 27;
                    //  if (item.valoare!=0){
                    //  context.strokeStyle = "#000";
                    //  context.fillStyle = "#fc0";
                    //  context.beginPath();
                    //  context.rect(x, y, w, h);
                    //  context.strokeText(item.valoare,x+w/2,y+h/2);
                    //  context.stroke();
                    // } else {
                    //     context.strokeStyle = "#000";
                    //     context.fillStyle = "#fff";
                    //     context.beginPath();
                    //     context.rect(x, y, w, h);            
                    //     context.stroke();  
                    // }
                    /*
                      varianta 2
                    */
                    item.setToCanvas(context, img_1);
                }
            });
        }
    };
    //-----------------------------------//-----------------------------------
    _GLOBAL.RENDER_HTML = function (a) {
        var temp = '';
        for (var _i = 0, a_1 = a; _i < a_1.length; _i++) {
            var item = a_1[_i];
            temp += item.getHTMLofCell();
        }
        var g = document.querySelector("#game");
        g.innerHTML = temp;
    };
    //-----------------------------------//-----------------------------------
    _GLOBAL.RENDER_SVG = function (a) {
        var svg = document.querySelector("#svg");
        svg.innerHTML = '';
        var temp = "<svg id=\"svg_dom\" width=\"258\" height=\"258\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" id=\"svg\">";
        for (var _i = 0, a_2 = a; _i < a_2.length; _i++) {
            var item = a_2[_i];
            temp += item.getSVG();
        }
        temp += '</svg>';
        svg.innerHTML = temp;
    };
    //-----------------------------------//-----------------------------------
    _GLOBAL.generate = function () {
        // //creez un vector din 15 elemente
        var a = [];
        for (var i = 1; i <= 15; i++) {
            a.push(i);
        }
        //amestec vectorul 
        for (var i = 1; i <= 20; i++) {
            var i1 = Math.floor(Math.random() * 15);
            var i2 = Math.floor(Math.random() * 15);
            var aux = a[i1];
            a[i1] = a[i2];
            a[i2] = aux;
        }
        a.push(16);
        _current_id = 16;
        var KEY = localStorage.getItem('myGame');
        if (KEY) {
            var n = JSON.parse(KEY);
            for (var i = 0; i < a.length; i++) {
                a[i] = Number(n[i].valoare);
                if (a[i] == 16) {
                    _current_id = i + 1;
                }
            }
        }
        // creez vectorul de obiecte cell
        var c = [];
        for (var i = 0; i < a.length; i++) {
            // preiau din vectorul sursa datele si le transmit ca parametru
            var ob = {
                id: i + 1,
                valoare: Number(a[i])
            };
            // CREAREA UNUI ELEMENT prin trasmiterea contrutorului necesarele
            c.push(new cell(ob));
        }
        return c;
    };
    //-----------------------------------//-----------------------------------
    _GLOBAL.modify = function (b, x, c) {
        var v_c = b[c - 1].valoare;
        var v_x = b[x - 1].valoare;
        b[c - 1].valoare = v_x;
        b[x - 1].valoare = v_c;
        _GLOBAL.RENDER_HTML(b);
        _GLOBAL.RENDER_CANVAS(b);
        _GLOBAL.RENDER_SVG(b);
        _GLOBAL.level(b);
        if (_GLOBAL.gameOver(b)) {
            console.log('GameOver');
        }
        var KEY = JSON.stringify(b);
        localStorage.setItem('myGame', KEY);
        return b;
    };
    //-----------------------------------//-----------------------------------
    _GLOBAL.gameOver = function (b) {
        for (var _i = 0, b_1 = b; _i < b_1.length; _i++) {
            var item = b_1[_i];
            if (item.isCorrect() == false) {
                return false;
            }
        }
        ;
        return true;
    };
    //-----------------------------------//-----------------------------------
    _GLOBAL.step = function (id_sel, cells) {
        var col_c = id_sel % 4;
        var col_s = _current_id % 4;
        var row_c = (Math.floor(_current_id / 4));
        var row_s = (Math.floor(id_sel / 4));
        row_c = (_current_id % 4 == 0) ? row_c - 1 : row_c;
        row_s = (id_sel % 4 == 0) ? row_s - 1 : row_s;
        if ((row_c == row_s) || (col_c == col_s)) {
            var pas = 0;
            if (row_c == row_s) {
                pas = (id_sel > _current_id) ? -1 : 1;
            }
            if (col_c == col_s) {
                pas = (id_sel > _current_id) ? -4 : 4;
            }
            for (var i = _current_id; i != id_sel; i = i - pas) {
                cells = _GLOBAL.modify(cells, i, i - pas);
            }
            _current_id = id_sel;
        }
        return cells;
    };
    //-----------------------------------//-----------------------------------
    _GLOBAL.getLevel = function (cells) {
        var sum = 0;
        for (var _i = 0, cells_2 = cells; _i < cells_2.length; _i++) {
            var item = cells_2[_i];
            sum += item.getDif();
        }
        return sum / 225 * 100;
    };
    //-----------------------------------//-----------------------------------
    _GLOBAL.level = function (b) {
        var procent = (Math.abs(_GLOBAL.getLevel(b) - 100)).toFixed(2);
        var temp = "\n         <div class=\"progress-bar\" role=\"progressbar\" style=\"width: " + procent + "%;\" aria-valuenow=\"" + procent + "\" aria-valuemin=\"0\" aria-valuemax=\"100\">" + procent + "%</div>\n        ";
        var dom = document.querySelector("#progress");
        dom.innerHTML = temp;
    };
    return _GLOBAL;
}());
//********************************
var _current_id = 16;
//********************************
document.addEventListener('DOMContentLoaded', function () {
    //*********************************************************
    var cells = _GLOBAL.generate();
    _GLOBAL.RENDER_HTML(cells);
    _GLOBAL.RENDER_CANVAS(cells);
    _GLOBAL.RENDER_SVG(cells);
    _GLOBAL.level(cells);
    //*********************************************************
    //-----------------------------------//-----------------------------------
    document.querySelector("#game").addEventListener('click', function (e) {
        var ob = e.target;
        if (ob.id != 'game') {
            var s = ob.id;
            var id_sel = Number(s.substring(1, s.length));
            cells = _GLOBAL.step(id_sel, cells);
        }
    });
    //-----------------------------------//-----------------------------------
    document.querySelector("#smile").addEventListener('click', function (e) {
        var ob = e;
        var th = document.querySelector("#smile");
        var totalOffsetX = 0;
        var totalOffsetY = 0;
        var canvasX = 0;
        var canvasY = 0;
        var currentElement = this;
        do {
            totalOffsetX += currentElement.offsetLeft;
            totalOffsetY += currentElement.offsetTop;
        } while (currentElement = currentElement.offsetParent);
        canvasX = e.pageX - totalOffsetX;
        canvasY = e.pageY - totalOffsetY;
        canvasX = Math.round(canvasX * (this.width / this.offsetWidth));
        canvasY = Math.round(canvasY * (this.height / this.offsetHeight));
        // console.log(canvasX+":"+canvasY+"*");
        var x = canvasX - 2;
        var y = canvasY - 2;
        var col = Math.floor(x / 63);
        var row = Math.floor(y / 63);
        var id_sel = row * 4 + col + 1;
        cells = _GLOBAL.step(id_sel, cells);
    });
    //-----------------------------------//-----------------------------------
    document.querySelector("#svg").addEventListener('click', function (e) {
        var ob = e.target;
        if (ob.id != 'svg') {
            var s = ob.id;
            var id_sel = Number(s.substring(1, s.length));
            cells = _GLOBAL.step(id_sel, cells);
        }
    });
    //-----------------------------------//----------------------------------- 
    document.querySelector("#new_game").addEventListener("click", function () {
        //*********************************************************
        localStorage.clear();
        cells = _GLOBAL.generate();
        _GLOBAL.RENDER_HTML(cells);
        _GLOBAL.RENDER_CANVAS(cells);
        _GLOBAL.RENDER_SVG(cells);
        _GLOBAL.level(cells);
        //*********************************************************
    });
    //-----------------------------------//-----------------------------------   
});
