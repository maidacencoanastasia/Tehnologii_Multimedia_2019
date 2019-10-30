var json_romania = "\n{\n    \"ROU122\": \"Dolj\", \n    \"ROU123\": \"Gorj\", \n    \"ROU124\": \"Mehedinti\", \n    \"ROU126\": \"Olt\", \n    \"ROU127\": \"Teleorman\", \n    \"ROU128\": \"Bucharest\", \n    \"ROU129\": \"Calarasi\", \n    \"ROU130\": \"D\u00E2mbovita\", \n    \"ROU131\": \"Giurgiu\", \n    \"ROU132\": \"Ialomita\", \n    \"ROU133\": \"Constanta\", \n    \"ROU276\": \"Arad\", \n    \"ROU277\": \"Bihor\", \n    \"ROU278\": \"Caras-Severin\", \n    \"ROU280\": \"Timis\", \n    \"ROU287\": \"Botosani\", \n    \"ROU294\": \"Alba\", \n    \"ROU295\": \"Bistrita-Nasaud\", \n    \"ROU296\": \"Cluj\", \n    \"ROU297\": \"Hunedoara\", \n    \"ROU298\": \"Maramures\", \n    \"ROU299\": \"Mures\", \n    \"ROU300\": \"Salaj\", \n    \"ROU301\": \"Satu Mare\", \n    \"ROU302\": \"Arges\", \n    \"ROU303\": \"Sibiu\", \n    \"ROU304\": \"V\u00E2lcea\", \n    \"ROU305\": \"Brasov\", \n    \"ROU306\": \"Covasna\", \n    \"ROU307\": \"Harghita\", \n    \"ROU308\": \"Iasi\", \n    \"ROU309\": \"Neamt\", \n    \"ROU310\": \"Prahova\", \n    \"ROU311\": \"Suceava\", \n    \"ROU312\": \"Bacau\", \n    \"ROU313\": \"Braila\", \n    \"ROU314\": \"Buzau\", \n    \"ROU315\": \"Galati\", \n    \"ROU316\": \"Vaslui\", \n    \"ROU317\": \"Vrancea\", \n    \"ROU4844\": \"Ilfov\", \n    \"ROU4847\": \"Tulcea\"\n}\n";
document.addEventListener('DOMContentLoaded', function () {
    var js_romania = JSON.parse(json_romania);
    //console.log(js_romania);
    var map = document.querySelector("#wrap");
    map.addEventListener('click', function (e) {
        var ob = e.target;
        console.log(js_romania[ob.id]);
    });
});
