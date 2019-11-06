document.addEventListener('DOMContentLoaded', function () {
    var drawingCanvas = document.getElementById('smile');
    if (drawingCanvas && drawingCanvas.getContext) {
        var context = drawingCanvas.getContext('2d');
        var img_1 = new Image();
        img_1.src = "srite.jpg";
        img_1.addEventListener("load", function () {
            var i = 0;
            var dx = 100;
            var dy = 120;
            document.querySelector("#next")
                .addEventListener("click", function () {
                i++;
                if (i == 21) {
                    i = 1;
                }
                var x = 0;
                var y = 0;
                if (i > 10) {
                    y = dy;
                    var n = i - 10;
                    x = (n - 1) * dx;
                }
                else {
                    x = (i - 1) * dx;
                    y = 0;
                }
                context.drawImage(img_1, x, y, dx, dy, 0, 0, dx, dy);
            });
        });
    }
});
