document.addEventListener('DOMContentLoaded',function(){
 
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


let auto_json:any = ` {
            "autos": [   
           {
               "id":1,
                "marca":"MERCEDES D200",
               "pret":3400,
               "text":"sfdsgsdfgsfdg dfg fdsg sfdg sdfg",
               "imagine":"mercedes_e200.jpg"
           },
           {
            "id":2,   
            "marca":"MERCEDES D200",
            "pret":5000,
            "text":"sfdsgsdfgsfdg dfg fdsg sfdg sdfg",
            "imagine":"mercedes_e200.jpg"
            },
            {
                "id":3,
                "marca":"MERCEDES D200",
                "pret":4000,
                "text":"sfdsgsdfgsfdg dfg fdsg sfdg sdfg",
                "imagine":"mercedes_e200.jpg"
            }        
        ]
    }
        ` 
        let ob:any  = JSON.parse(auto_json);     
    
        let autos:any = ob.autos;
         
        document.querySelector('#toate').innerHTML='';
        for (let item of autos){
    
        
         
         document.querySelector('#toate').innerHTML+=`
         <div class="card" style="width: 18rem;">
                <img src="images/${item.imagine}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${item.marca}</h5>
                  <p class="card-text">${item.text}</p>
                  <p class="card-text">${item.pret}</p>
                  <a href="#" name="id#${item.id}" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
         `
    }

    document.querySelector('#toate').addEventListener('click',function(e){
        
        let ob:any =e.target;
        if (ob.name) {
          console.log(ob.name);
        } 
        // console.log(e.target); 
    })

     

})