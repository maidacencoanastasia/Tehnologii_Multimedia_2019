var cell = /** @class */ (function () {
    function cell(p) {
        this.id = p.id;
        this.valoare = p.valoare;
    }
    cell.prototype.getHTMLofCell = function () {
        return (this.valoare != 0)
            ? ("<div class=\"cell\" id=\"c" + this.id + "\">" + this.valoare + ":" + this.id + "</div>")
            : ("<div class=\"cell zero\" id=\"c" + this.id + "\"></div>");
    };
    cell.prototype.setToCanvas = function (cx) {
    };
    cell.prototype.setToSVG = function (svg) {
    };
    return cell;
}());
//********************************
var _GLOBAL = /** @class */ (function () {
    function _GLOBAL() {
    }
    //-----------------------------------
    _GLOBAL.RENDER_HTML = function (a) {
        var temp = '';
        for (var _i = 0, a_1 = a; _i < a_1.length; _i++) {
            var item = a_1[_i];
            temp += item.getHTMLofCell();
        }
        var g = document.querySelector("#game");
        g.innerHTML = temp;
    };
    //-----------------------------------
    _GLOBAL.generate = function () {
        var a = [];
        for (var i = 1; i <= 15; i++) {
            a.push(i);
        }
        for (var i = 1; i <= 20; i++) {
            var i1 = Math.floor(Math.random() * 15);
            var i2 = Math.floor(Math.random() * 15);
            var aux = a[i1];
            a[i1] = a[i2];
            a[i2] = aux;
        }
        a.push(0);
        var c = [];
        for (var i = 0; i < a.length; i++) {
            var ob = {
                id: i + 1,
                valoare: a[i]
            };
            c.push(new cell(ob));
        }
        return c;
    };
    //-----------------------------------
    _GLOBAL.modify = function (b, x, c) {
        var v_c = b[c - 1].valoare;
        var v_x = b[x - 1].valoare;
        b[c - 1].valoare = v_x;
        b[x - 1].valoare = v_c;
        return b;
    };
    return _GLOBAL;
}());
//********************************
document.addEventListener('DOMContentLoaded', function () {
    var _current_id = 16;
    var cells = _GLOBAL.generate();
    _GLOBAL.RENDER_HTML(cells);
    document.querySelector("#game").addEventListener('click', function (e) {
        var ob = e.target;
        if (ob.id != 'game') {
            var s = ob.id;
            var id_sel = Number(s.substring(1, s.length));
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
                    _GLOBAL.RENDER_HTML(cells);
                }
                _current_id = id_sel;
            }
        }
    });
});
