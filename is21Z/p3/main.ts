document.addEventListener('DOMContentLoaded', function(){
    
    var i:number=0;
    var cliks:Array<any>=[];

    document.addEventListener('click', function(e){
       
        
        if (i==5){
            console.log(cliks);
        } else{
            i++;               
        
            console.log('x'+i+':'+e.screenX);
            console.log('y'+i+':'+e.screenY);
        
            let obj:Object={
                id:i,
                x:e.screenX,
                y:e.screenY
            };

        cliks.push(obj);

        let temp='<table>'
        for (let item of cliks ){
            temp+=`<tr>
                <td>${item.x}</td>
                <td>${item.y}</td>
                </tr>`;
        }
        temp+='<table>';

        let t = document.querySelector('#ras');
        t.innerHTML = temp;

        }

    })


})