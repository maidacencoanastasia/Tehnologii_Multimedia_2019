/**
 * Created by User on 2019-10-09.
 */
document.addEventListener('DOMContentLoaded', function()
{

   let html_a:any=document.querySelector("#a");
   let a:number=html_a.value;

   let html_b:any=document.querySelector("#b");
   let b:number=html_b.value;

   let html_c:any=document.querySelector("#c");
   let c:number=html_c.value;

    let html_x:any=document.querySelector("#x");
    let x:number=html_x.value;


    html_x.addEventListener('click', function(){
        let a: number=html_a.value;
        let b: number=html_b.value;
        let c: number=html_c.value;
        console.log("Ecuatii de gradul 2");
        let raspuns:string ='';
        let d:number =Math.pow(b,2)-4*a*c;
        if(d<0) { raspuns='Ecuatia nu are solutii'}
        if(d = 0) {
            let x1:number=((-1 * b) / (2 * a));
            raspuns = "Ecuatia are o solutie x=" + x1.toString();
        }
        if(d>0) { raspuns="Ecuatia are 2 solutii x1="+(((-1*b)+Math.sqrt(d))/(2*a)).toFixed(2).toString()+'x2='+(((-1*b)-Math.sqrt(d))/(2*a)).toFixed(2).toString()}

     console.log(raspuns);
    });
});


