document.addEventListener('DOMContentLoaded', function(){
   
    /**
     * !!! FOARTE NEOPTIM
     * 
     * 
     */
    let d1 = document.querySelector("#d1");
    let d2 = document.querySelector("#d2");
    let d3 = document.querySelector("#d3");
    let d4 = document.querySelector("#d4");

    d1.innerHTML = '0';
    d2.innerHTML = '0';
    d3.innerHTML = '0';
    d4.innerHTML = '0';

    let v1:number =0;
    let v2:number =0;
    let v3:number =0;
    let v4:number =0;


    d1.addEventListener('click',function(){
        v1++;
        d1.innerHTML = v1.toString();
        if (v1==1){
            d1.classList.add('st1');
        }
        if (v1==2){
            d1.classList.add('st2');
        }
        if (v1==3){
            d1.classList.add('st3');
        }
        if (v1==4){
            d1.classList.add('st4');
        }
    })

    
    d2.addEventListener('click',function(){
        v2++;
        d2.innerHTML = v2.toString();
        if (v2==1){
            d2.classList.add('st1');
        }
        if (v2==2){
            d2.classList.add('st2');
        }
        if (v2==3){
            d2.classList.add('st3');
        }
        if (v2==4){
            d2.classList.add('st4');
        }
    })

    d3.addEventListener('click',function(){
        v3++;
        d3.innerHTML = v3.toString();
    })

    d4.addEventListener('click',function(){
        v4++;
        d4.innerHTML = v4.toString();
    })

   
})