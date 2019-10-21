class Punct{

    x:number;
    y:number;
    litera:string;
    visible:boolean;

    constructor(x:number){
       this.litera = String.fromCharCode(65+x-1);
       // this.x = ((Math.random()>0.5)?-1:1)*(Math.random()*100).toFixed(2);
       // this.y = ((Math.random()>0.5)?-1:1)*(Math.random()*100).toFixed(2);
        this.x =Math.floor(((Math.random()>0.5)?-1:1)*(Math.random()*100));
        this.y =Math.floor(((Math.random()>0.5)?-1:1)*(Math.random()*100));
        this.visible = true;

    }

//
    getHTMLPoint(){
    // poluciti poreadcovii nomer iz buckvi
    return `<tr>
             <td></td>
             <td>${this.litera}</td>
             <td>${this.x}</td>
             <td>${this.y}</td>
             <td>${this.getCadran()}</td>
            </tr>`;
    }
//
    getCadran(){

        if ((this.x>0)&&(this.y>0)){return 'I'}
        if ((this.x<0)&&(this.y>0)){return 'II'}
        if ((this.x<0)&&(this.y<0)){return 'III'}
        if ((this.x>0)&&(this.y<0)){return 'IV'}
        if ((this.x==0)||(this.y==0)){return 'AXA'}

    }

}

document.addEventListener('DOMContentLoaded',function () {

    let but:any = document.querySelector('#check');
    let puncte:Array<Punct>=[];

    but.addEventListener('click',function () {

        puncte =[];
        let html_n:any=document.querySelector('#n');

        let n:number =Number(html_n.value);
        for (let i=1;i<=n;i++){
            let p:Punct = new Punct(i);
            puncte.push(p);

        }

        console.log(puncte);
        RENDER();

    })


    function RENDER(){

        let temp:string = `<table>
           <tr>
             <td>Nr</td>
             <td>Litera</td>
             <td>X</td>
             <td>Y</td>
             <td>CADRAN</td>
            </tr>
        
        `;

        for(let item of puncte){
           // if (item.getCadran()=='II')
           //      {item.visible=true}
           // else
           //     {item.visible=false}
           //     // zameniti map

           if(item.visible){ temp+=item.getHTMLPoint()};


        }

      temp +='</table>'

       document.querySelector('#raspuns').innerHTML = temp;

       //------------ CANVAS-------------------

       var drawingCanvas:any = document.getElementById('smile');
       if(drawingCanvas && drawingCanvas.getContext) {
        var context:any = drawingCanvas.getContext('2d');

        let x0= 250;
        let y0 =250;

        context.clearRect(0,0,500,500);

        context.beginPath();
        context.moveTo(x0,0);
        context.lineTo(x0,500);
        context.moveTo(0,y0);
        context.lineTo(500,x0);
        context.closePath();
        context.stroke();
        context.fill();


        for (let p of puncte){
        context.strokeStyle = "#000";
        context.fillStyle = "#fc0";
        context.beginPath();
        context.arc(x0+p.x,y0-p.y,5,0,Math.PI*2,true);
        context.fillText(p.litera, x0+p.x -10 ,y0-p.y-10);
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


   





})