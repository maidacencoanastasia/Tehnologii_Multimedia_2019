class cell {
   
    id:number;
    valoare:number;

    constructor(p:any){
        this.id = p.id;
        this.valoare = p.valoare;  
    }
    //-----------------------------------
    getHTMLofCell(){
        return (this.valoare!=16)
        ? (`<div class="cell" id="c${this.id}">${this.valoare}</div>`)
        : (`<div class="cell zero" id="c${this.id}"></div>`);
    }
    //-----------------------------------
    setToCanvas(context,img){
        
        //determinam ce copiem         
        let i = this.valoare;        
        
        let col_c = i%4;
        if  (col_c == 0) {col_c = 4} 

        let row_c = (Math.floor(i/4));         
        row_c = (i%4==0)?row_c-1:row_c;          

        let x = 25 + 63*(col_c-1);
        let y = 25 + 63*(row_c);       
        

        //determinam x,y unde plasam
        i = this.id;
        if (i==0) {i=16}

        col_c = i%4;
        if  (col_c == 0) {col_c = 4}       

        row_c = (Math.floor(i/4));         
        row_c = (i%4==0)?row_c-1:row_c;          

        let xp =2 + 63*(col_c-1);
        let yp =2 + 63*(row_c);       

        //fixare pe canvas           
        context.drawImage(img,x,y,63,63,xp,yp,63,63);
    }
    //-----------------------------------
    getSVG(){

        let col = this.id%4;
        if (col==0) {col=4};
        let x= (col -1)*63+2; 
        
        let row = Math.floor(this.id/4);       
        let y = (this.id%4==0)?(row-1)*63+2:(row)*63+2;        
        

        return (this.valoare!=16)
        ? 
        `   <rect 
                id="s${this.id}" 
                x="${x}" 
                y="${y}"  
                width="63" 
                height="63" 
                style="stroke-width:3;stroke:rgb(0,0,0)" 
            />

            <text 
                id="t${this.id}" 
                x="${x+22}" 
                y="${y+40}" 
                fill="red">
                ${this.valoare}
            </text>
        `
        : 
        
        ` 
            <rect  
                id="s${this.id}" 
                x="${x}" 
                y="${y}"  
                width="63" 
                height="63" 
                style="fill:rgb(125,125,125);stroke-width:3;stroke:rgb(0,0,0)" 
            />
        `;   
            

    }
    //-----------------------------------
    isCorrect(){
        return this.id==this.valoare;        
    }
    //-----------------------------------
    getDif(){
        return Math.abs(this.id-this.valoare);        
    }
    //-----------------------------------

}

//********************************
class _GLOBAL{
   
    //-----------------------------------//-----------------------------------
    static RENDER_CANVAS(cells:Array<cell>){
        var drawingCanvas:any = document.getElementById('smile');
        if(drawingCanvas && drawingCanvas.getContext) {
         var context:any = drawingCanvas.getContext('2d');
         
         context.clearRect(10, 10, 400, 400);
        
         let img = new Image() ;
        img.src = "ptn.png";
        img.addEventListener('load',function(){ 
                
        let i=0;
        let j=0;    
        for (let item of cells){
        /**
         * varianta 1 - generare
         */
        //  i++;   

        //  let col_c = i%4;
        //  if  (col_c == 0) {col_c = 4}       
        //  let row_c = (Math.floor(i/4));         
        //  row_c = (i%4==0)?row_c-1:row_c;                

        
        //  let x =x_init + col_c*w;
        //  let y =y_init + row_c*h;
        // let w =62;
        // let h =62;   
        // let x_init = -37;
        // let y_init = 27;

        //  if (item.valoare!=0){
        //  context.strokeStyle = "#000";
        //  context.fillStyle = "#fc0";
        //  context.beginPath();
        //  context.rect(x, y, w, h);
        //  context.strokeText(item.valoare,x+w/2,y+h/2);
        //  context.stroke();
        // } else {
        //     context.strokeStyle = "#000";
        //     context.fillStyle = "#fff";
        //     context.beginPath();
        //     context.rect(x, y, w, h);            
        //     context.stroke();  
        // }


        /*
          varianta 2 
        */
             
            item.setToCanvas(context,img);

        }

    })
    }
    }
    //-----------------------------------//-----------------------------------
    static RENDER_HTML(a:Array<cell>){
      
      let temp:string ='';
        for(let item of a){
            temp +=item.getHTMLofCell();
        }

      let g = document.querySelector("#game");
      g.innerHTML =temp;  

    }
    //-----------------------------------//-----------------------------------
    static RENDER_SVG(a:Array<cell>){
        let svg = document.querySelector("#svg");
        svg.innerHTML = '';
        let temp = `<svg id="svg_dom" width="258" height="258" version="1.1" xmlns="http://www.w3.org/2000/svg" id="svg">`;
            for(let item of a){
                temp += item.getSVG();
            }
        temp+='</svg>';        
        svg.innerHTML = temp;
    }
    //-----------------------------------//-----------------------------------
    static generate():Array<cell>{



        
        // //creez un vector din 15 elemente
        let a:Array<number> = [];
        for(let i= 1;i<=15;i++){
            a.push(i);
        }
          
        
        //amestec vectorul 
         for (let i=1 ;i<=20; i++){
            let i1:number= Math.floor(Math.random()*15);
            let i2:number= Math.floor(Math.random()*15);
            let aux:number = a[i1];
            a[i1]= a[i2];
            a[i2]= aux;
            
         } 
         a.push(16); _current_id = 16;

         let KEY = localStorage.getItem('myGame');
         
         
         if (KEY){
           let n = JSON.parse(KEY);           
           for(let i=0; i<a.length; i++){
             a[i] = Number(n[i].valoare);
             if (a[i]==16){_current_id = i+1}               
           }
         }
         
          
        // creez vectorul de obiecte cell
        let c:Array<cell> =[];

        for (let i=0; i<a.length;i++){
            // preiau din vectorul sursa datele si le transmit ca parametru
            let ob = {
                id:i+1,
                valoare:Number(a[i])
            }
            // CREAREA UNUI ELEMENT prin trasmiterea contrutorului necesarele
            c.push(new cell(ob));

        }
      
        return c;
    }
     //-----------------------------------//-----------------------------------
    static modify(b:Array<cell>,x:number,c:number):Array<cell>{
        
        let v_c = b[c-1].valoare;
        let v_x = b[x-1].valoare;
       
        b[c-1].valoare=v_x;
        b[x-1].valoare=v_c;

        _GLOBAL.RENDER_HTML(b);
        _GLOBAL.RENDER_CANVAS(b);
        _GLOBAL.RENDER_SVG(b);       
        
        _GLOBAL.level(b);
        
        if(_GLOBAL.gameOver(b)){
            console.log('GameOver');
        }      
        
        let KEY = JSON.stringify(b);
        localStorage.setItem('myGame',KEY);

        return b;
    } 
    //-----------------------------------//-----------------------------------
    static gameOver(b:Array<cell>):boolean{

    for(let item of b){
        if(item.isCorrect()==false){
            return false           
        }
    };

    return true;
    }
    //-----------------------------------//-----------------------------------
    static step(id_sel:number,cells:Array<cell>){
       
        let col_c = id_sel%4;
        let col_s = _current_id%4;


        let row_c = (Math.floor(_current_id/4));
        let row_s = (Math.floor(id_sel/4));
        row_c = (_current_id%4==0)?row_c-1:row_c;
        row_s = (id_sel%4==0)?row_s-1:row_s;
        

        

        if ((row_c==row_s)||(col_c==col_s))
         {
           
            let pas = 0;

             if (row_c==row_s){
                pas = (id_sel>_current_id)?-1:1;
             }


             if (col_c==col_s){
                pas = (id_sel>_current_id)?-4:4;
             }

             
             for(let i=_current_id;i!=id_sel;i=i-pas){                       
                 cells = _GLOBAL.modify(cells, i,i-pas);                                
             }
             _current_id = id_sel;
        } 

        return cells;
    }
    //-----------------------------------//-----------------------------------
    static getLevel(cells){
        let sum = 0;
        for(let item of cells){
            sum+=item.getDif();
        }
        return sum/225*100;
    }
    //-----------------------------------//-----------------------------------
    static level(b:Array<cell>){
        
        let procent =(Math.abs(_GLOBAL.getLevel(b)-100)).toFixed(2);      
        
        let temp =`
         <div class="progress-bar" role="progressbar" style="width: ${procent}%;" aria-valuenow="${procent}" aria-valuemin="0" aria-valuemax="100">${procent}%</div>
        `;
        
        let dom = document.querySelector("#progress");
        dom.innerHTML = temp;
    }
    //-----------------------------------//-----------------------------------
}


    //********************************
        var _current_id = 16;
    //********************************

document.addEventListener('DOMContentLoaded',function(){
   
  //*********************************************************
        var cells:Array<cell> = _GLOBAL.generate();
        _GLOBAL.RENDER_HTML(cells);
        _GLOBAL.RENDER_CANVAS(cells);
        _GLOBAL.RENDER_SVG(cells);
        _GLOBAL.level(cells);
  //*********************************************************

//-----------------------------------//-----------------------------------
  document.querySelector("#game").addEventListener('click', function(e:any){
    
    let ob:any = e.target;
    
    if (ob.id!='game'){       
        
        let s:string = ob.id;
        let id_sel: number = Number(s.substring(1,s.length));
        
        cells = _GLOBAL.step(id_sel,cells);            
        
    }
    
  })
//-----------------------------------//-----------------------------------
  document.querySelector("#smile").addEventListener('click',function(e:any){
    
    let ob:any = e;
    let th:any =  document.querySelector("#smile");


    var totalOffsetX = 0;
    var totalOffsetY = 0;
    var canvasX = 0;
    var canvasY = 0;
    var currentElement = this;

    do {
        totalOffsetX += currentElement.offsetLeft;
        totalOffsetY += currentElement.offsetTop;
    }
    while (currentElement = currentElement.offsetParent)

    canvasX = e.pageX - totalOffsetX;
    canvasY = e.pageY - totalOffsetY;


    canvasX = Math.round( canvasX * (this.width / this.offsetWidth) );
    canvasY = Math.round( canvasY * (this.height / this.offsetHeight) );
    
    // console.log(canvasX+":"+canvasY+"*");
    let x = canvasX- 2;
    let y = canvasY - 2;


    let col = Math.floor(x/63);
    let row = Math.floor(y/63);
    let id_sel = row*4+col+1;

    cells = _GLOBAL.step(id_sel,cells);

  })
//-----------------------------------//-----------------------------------
  document.querySelector("#svg").addEventListener('click',function(e:any){

    let ob:any = e.target;
 
   if (ob.id!='svg'){       
       
    let s:string = ob.id;
    let id_sel: number = Number(s.substring(1,s.length));
 
 
    cells = _GLOBAL.step(id_sel,cells);            
    
    
}

  })
//-----------------------------------//----------------------------------- 
  document.querySelector("#new_game").addEventListener("click",function(){
    //*********************************************************
        localStorage.clear();
        cells = _GLOBAL.generate();
        _GLOBAL.RENDER_HTML(cells);
        _GLOBAL.RENDER_CANVAS(cells);
        _GLOBAL.RENDER_SVG(cells);
        _GLOBAL.level(cells);
    //*********************************************************
  }) 
//-----------------------------------//-----------------------------------   

})