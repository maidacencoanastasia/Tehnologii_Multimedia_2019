class cell {
   
    id:number;
    valoare:number;

    constructor(p:any){
        this.id = p.id;
        this.valoare = p.valoare;  
    }

    getHTMLofCell(){
        return (this.valoare!=0)
        ? (`<div class="cell" id="c${this.id}">${this.valoare}:${this.id}</div>`)
        : (`<div class="cell zero" id="c${this.id}"></div>`);
    }

    setToCanvas(cx:any){

    }

    setToSVG(svg:any){

    }

}

//********************************
class _GLOBAL{
    //-----------------------------------
    static RENDER_HTML(a:Array<cell>){
      
      let temp:string ='';
        for(let item of a){
            temp +=item.getHTMLofCell();
        }

      let g = document.querySelector("#game");
      g.innerHTML =temp;  

    }
    //-----------------------------------

    static generate():Array<cell>{
        
        let a:Array<number> = [];
        for(let i= 1;i<=15;i++){
            a.push(i);
        }
          
        

         for (let i=1 ;i<=20; i++){
            let i1:number= Math.floor(Math.random()*15);
            let i2:number= Math.floor(Math.random()*15);
            let aux:number = a[i1];
            a[i1]= a[i2];
            a[i2]= aux;
            
         }
         a.push(0);        
          

        let c:Array<cell> =[];

        for (let i=0; i<a.length;i++){

            let ob = {
                id:i+1,
                valoare:a[i]
            }

            c.push(new cell(ob));

        }

       

        return c;
    }
     //-----------------------------------
    static modify(b:Array<cell>,x:number,c:number):Array<cell>{
        
        let v_c = b[c-1].valoare;
        let v_x = b[x-1].valoare;
       
        b[c-1].valoare=v_x;
        b[x-1].valoare=v_c;

        return b;
    } 
}

//********************************


document.addEventListener('DOMContentLoaded',function(){

  var _current_id = 16;  

  var cells:Array<cell> = _GLOBAL.generate();
  _GLOBAL.RENDER_HTML(cells);

  document.querySelector("#game").addEventListener('click', function(e){
    
    let ob:any = e.target;
    
    if (ob.id!='game'){
       
        let s:string = ob.id;
        let id_sel: number = Number(s.substring(1,s.length));

       

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
                _GLOBAL.RENDER_HTML(cells);
             }
             _current_id = id_sel;
        } 
        
        
    }
    
  })


})