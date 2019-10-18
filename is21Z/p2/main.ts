document.addEventListener('DOMContentLoaded', function(){
    
    let a: any = [];    
    let html_g:any= document.querySelector("#g");

// ---------------------------------------------------
    html_g.addEventListener('click',function(){
        
        a=[];
        let html_v:any= document.querySelector("#v");
        let n = html_v.value;

        // generam valori 

        for (let i=1; i<=n; i++){
            let b:Array<Number> = [];
            for(let j=1;j<=n;j++){
                let  vl=((Math.random()>0.5)?-1:1)* Math.floor(Math.random()*10);
                b.push(vl);
            }
            a.push(b);
        }
// ----------------------------------------------
        let suma = 0;
        for(let i=0;i<=n-1;i++){
            suma+=a[i][i];
        }
// ----------------------------------------------

        console.log(n);
        console.log(a);
        console.log(a[0][0])
        console.log('suma pe diagonala principala '+suma);


        _RENDER();

        function _RENDER(){

            let temp= '<table>';
            
            for( let i=0; i<n; i++){
                temp += '<tr>';
                for(let j=0; j<n; j++){
                    
                if(i!=j){
                    temp += `<td>${a[i][j]}</td>`;  
                } else {
                    temp += `<td class='select'>${a[i][j]}</td>`;  
                }
                }
                temp += '</tr>';
            }          

            temp+= '</table>';

            temp+=`<br><h1>${suma}<h1>`;
            let ras_html = document.querySelector("#ras");
            ras_html.innerHTML = temp;

        }



    })
// ---------------------------------------------------



    

})