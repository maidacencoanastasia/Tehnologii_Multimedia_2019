class Punct{

    x:number;
    y:number;
    litera:string;
    visible:boolean;

    constructor(x:number){
       this.litera = String.fromCharCode(65+x-1);
       // this.x = ((Math.random()>0.5)?-1:1)*(Math.random()*100).toFixed(2);
       // this.y = ((Math.random()>0.5)?-1:1)*(Math.random()*100).toFixed(2);
        this.x =Math.floor(((Math.random()>0.5)?-1:1)*(Math.random()*100).toFixed(2));
        this.y =Math.floor(((Math.random()>0.5)?-1:1)*(Math.random()*100).toFixed(2));
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
    }





})