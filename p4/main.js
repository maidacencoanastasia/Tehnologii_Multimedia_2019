var student = /** @class */ (function () {
    function student(ob) {
        this.NP = ob.NP;
        this.note = ob.note;
        this.gr = ob.gr;
    }
    //---------------------------
    student.prototype.getHtmlStudent = function () {
        return "\n         <tr> \n          <td>" + this.NP + " </td>\n          <td>" + this.notaMedie().toFixed(2) + " </td>\n          <td>" + this.gr + " </td>          \n         </tr>\n       ";
    };
    //---------------------------
    student.prototype.restanta = function () {
        for (var _i = 0, _a = this.note; _i < _a.length; _i++) {
            var nota = _a[_i];
            if (nota < 5) {
                return true;
            }
        }
        return false;
    };
    //---------------------------
    student.prototype.notaMedie = function () {
        var suma = 0;
        for (var _i = 0, _a = this.note; _i < _a.length; _i++) {
            var nota = _a[_i];
            suma += nota;
        }
        var n = this.note.length;
        return (n > 0) ? suma / n : 0;
    };
    return student;
}());
/**
 * JSON de studenti
 *
 */
var JSON_students = "\n{\n    \"students\":[\n        {\n            \"NP\":\"Niconor ION\",\n            \"note\":[5,7,9],\n            \"gr\":\"is21z\"\n        },\n        {\n            \"NP\":\"Mihai Constantin\",\n            \"note\":[10,9,9],\n            \"gr\":\"mi21z\"\n        }\n    ]\n}";
document.addEventListener('DOMContentLoaded', function () {
    var students = [];
    var JS_students = JSON.parse(JSON_students);
    var info = JS_students.students;
    for (var _i = 0, info_1 = info; _i < info_1.length; _i++) {
        var item = info_1[_i];
        students.push(new student(item));
    }
    // console.log(students);
    var p0 = document.querySelector("#all");
    var p1 = document.querySelector("#is21z");
    var p2 = document.querySelector("#mi21z");
    _RENDER(0);
    p0.addEventListener('click', function (e) {
        _RENDER(0);
    });
    p1.addEventListener('click', function (e) {
        _RENDER(1);
    });
    p2.addEventListener('click', function (e) {
        _RENDER(2);
    });
    function _RENDER(p) {
        p0.classList.remove("selected");
        p1.classList.remove("selected");
        p2.classList.remove("selected");
        if (p == 0) {
            p0.classList.add("selected");
            var temp = '<table>';
            for (var _i = 0, students_1 = students; _i < students_1.length; _i++) {
                var item = students_1[_i];
                temp += item.getHtmlStudent();
            }
            temp += '</table>';
            var ob = document.querySelector('#lista');
            ob.innerHTML = temp;
        }
        ;
        if (p == 1) {
            p1.classList.add("selected");
            var temp = '<table>';
            var filtru = students.filter(function (c) { return c.gr == 'is21z'; });
            for (var _a = 0, filtru_1 = filtru; _a < filtru_1.length; _a++) {
                var item = filtru_1[_a];
                temp += item.getHtmlStudent();
            }
            temp += '</table>';
            var ob = document.querySelector('#lista');
            ob.innerHTML = temp;
        }
        if (p == 2) {
            p2.classList.add("selected");
            var temp = '<table>';
            var filtru = students.filter(function (c) { return c.gr == 'mi21z'; });
            for (var _b = 0, filtru_2 = filtru; _b < filtru_2.length; _b++) {
                var item = filtru_2[_b];
                temp += item.getHtmlStudent();
            }
            temp += '</table>';
            var ob = document.querySelector('#lista');
            ob.innerHTML = temp;
        }
    }
});
