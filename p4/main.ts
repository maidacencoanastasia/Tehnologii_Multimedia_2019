class student{
    
    NP:string;    
    note:Array<number>;
    gr:string;

   constructor(ob:any){
        
    this.NP = ob.NP;
    this.note = ob.note;
    this.gr = ob.gr;

   }

 //---------------------------
   getHtmlStudent():string{
       return `
         <tr> 
          <td>${this.NP} </td>
          <td>${this.notaMedie().toFixed(2)} </td>
          <td>${this.gr} </td>          
         </tr>
       `;
   }
//---------------------------
   restanta():boolean{

     for (let nota of this.note){
         if (nota <5) { return true}
     }
     return false;
   }
//---------------------------
   notaMedie(){
       let suma:number=0;              
       for(let nota of this.note){
         suma+=nota;   
       }
       let n = this.note.length;
       return (n>0)?suma/n:0;
   }
  //--------------------------- 

}

/**
 * JSON de studenti
 * 
 */

var JSON_students = `
{
    "students":[
        {
            "NP":"Niconor ION",
            "note":[5,7,9],
            "gr":"is21z"
        },
        {
            "NP":"Mihai Constantin",
            "note":[10,9,9],
            "gr":"mi21z"
        }
    ]
}`;

document.addEventListener('DOMContentLoaded', function(){
    
    let students: Array<student>=[];     

    let JS_students = JSON.parse(JSON_students);
    let info:any = JS_students.students;

    for (let item of info){
        students.push(new student(item));        
    }

   

    // console.log(students);
    let p0 = document.querySelector("#all");
    let p1 = document.querySelector("#is21z");
    let p2 = document.querySelector("#mi21z");

    _RENDER(0);

    p0.addEventListener('click', function(e){
        _RENDER(0);
    })
    
    p1.addEventListener('click', function(e){
        _RENDER(1);
    })

    p2.addEventListener('click', function(e){
        _RENDER(2);
    })


    function _RENDER(p:number){


        p0.classList.remove("selected");
        p1.classList.remove("selected");
        p2.classList.remove("selected");




        if (p==0){

            p0.classList.add("selected");
            let temp = '<table>';
            for(let item of students){
                temp+=item.getHtmlStudent();        
            }
            temp += '</table>';
            let ob = document.querySelector('#lista');
            ob.innerHTML = temp; 
        };

        if (p==1){
            p1.classList.add("selected");
            let temp = '<table>';
            let filtru = students.filter((c)=>c.gr=='is21z');
            for(let item of filtru ){
                temp+=item.getHtmlStudent();        
            }
            temp += '</table>';
            let ob = document.querySelector('#lista');
            ob.innerHTML = temp; 
        }

        if (p==2){
            p2.classList.add("selected");
            let temp = '<table>';
            let filtru = students.filter((c)=>c.gr=='mi21z');
            for(let item of filtru ){
                temp+=item.getHtmlStudent();        
            }
            temp += '</table>';
            let ob = document.querySelector('#lista');
            ob.innerHTML = temp; 
        }



    } 



})