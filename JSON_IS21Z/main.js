document.addEventListener('DOMContentLoaded', function () {
    /** step1 */
    // let auto_json:any = `    
    //    {
    //        "marca":"MERCEDES D200",
    //        "pret":3400,
    //        "text":"sfdsgsdfgsfdg dfg fdsg sfdg sdfg",
    //        "imagine":"mercedes_e200.jpg"
    //    }
    // ` 
    // let auto_js:any = JSON.parse(auto_json); 
    //    console.log(auto_js.marca);
    //  document.querySelector('#toate').innerHTML=`
    //  <div class="card" style="width: 18rem;">
    //         <img src="images/${auto_js.imagine}" class="card-img-top" alt="...">
    //         <div class="card-body">
    //           <h5 class="card-title">${auto_js.marca}</h5>
    //           <p class="card-text">${auto_js.text}</p>
    //           <a href="#" class="btn btn-primary">Go somewhere</a>
    //         </div>
    //       </div>
    //  `
    /** step1 */
    //     let auto_json:any = ` {
    //         "autos": [   
    //        {
    //            "id":1,
    //             "marca":"MERCEDES D200",
    //            "pret":3400,
    //            "text":"sfdsgsdfgsfdg dfg fdsg sfdg sdfg",
    //            "imagine":"mercedes_e200.jpg"
    //        },
    //        {
    //         "id":2,   
    //         "marca":"MERCEDES D200",
    //         "pret":5000,
    //         "text":"sfdsgsdfgsfdg dfg fdsg sfdg sdfg",
    //         "imagine":"mercedes_e200.jpg"
    //         },
    //         {
    //             "id":3,
    //             "marca":"MERCEDES D200",
    //             "pret":4000,
    //             "text":"sfdsgsdfgsfdg dfg fdsg sfdg sdfg",
    //             "imagine":"mercedes_e200.jpg"
    //         }        
    //     ]
    // }
    //     ` 
    //     let ob:any  = JSON.parse(auto_json);
    //     console.log(ob);
    //     let autos:any = ob.autos;
    //     document.querySelector('#toate').innerHTML='';
    //     for (let item of autos){
    //      document.querySelector('#toate').innerHTML+=`
    //      <div class="card" style="width: 18rem;">
    //             <img src="images/${item.imagine}" class="card-img-top" alt="...">
    //             <div class="card-body">
    //               <h5 class="card-title">${item.marca}</h5>
    //               <p class="card-text">${item.text}</p>
    //               <p class="card-text">${item.pret}</p>
    //               <a href="#" class="btn btn-primary">Go somewhere</a>
    //             </div>
    //           </div>
    //      `
    // }
    var auto_json = " {\n            \"autos\": [   \n           {\n               \"id\":1,\n                \"marca\":\"MERCEDES D200\",\n               \"pret\":3400,\n               \"text\":\"sfdsgsdfgsfdg dfg fdsg sfdg sdfg\",\n               \"imagine\":\"mercedes_e200.jpg\"\n           },\n           {\n            \"id\":2,   \n            \"marca\":\"MERCEDES D200\",\n            \"pret\":5000,\n            \"text\":\"sfdsgsdfgsfdg dfg fdsg sfdg sdfg\",\n            \"imagine\":\"mercedes_e200.jpg\"\n            },\n            {\n                \"id\":3,\n                \"marca\":\"MERCEDES D200\",\n                \"pret\":4000,\n                \"text\":\"sfdsgsdfgsfdg dfg fdsg sfdg sdfg\",\n                \"imagine\":\"mercedes_e200.jpg\"\n            }        \n        ]\n    }\n        ";
    var ob = JSON.parse(auto_json);
    var autos = ob.autos;
    document.querySelector('#toate').innerHTML = '';
    for (var _i = 0, autos_1 = autos; _i < autos_1.length; _i++) {
        var item = autos_1[_i];
        document.querySelector('#toate').innerHTML += "\n         <div class=\"card\" style=\"width: 18rem;\">\n                <img src=\"images/" + item.imagine + "\" class=\"card-img-top\" alt=\"...\">\n                <div class=\"card-body\">\n                  <h5 class=\"card-title\">" + item.marca + "</h5>\n                  <p class=\"card-text\">" + item.text + "</p>\n                  <p class=\"card-text\">" + item.pret + "</p>\n                  <a href=\"#\" name=\"id#" + item.id + "\" class=\"btn btn-primary\">Go somewhere</a>\n                </div>\n              </div>\n         ";
    }
    document.querySelector('#toate').addEventListener('click', function (e) {
        var ob = e.target;
        if (ob.name) {
            console.log(ob.name);
        }
        // console.log(e.target); 
    });
});
