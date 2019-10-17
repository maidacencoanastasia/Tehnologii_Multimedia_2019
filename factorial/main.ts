document.addEventListener('DOMContentLoaded',function () {

    let but:any=document.querySelector('#sub');

    //---------------------------------------------
    but.addEventListener('click',function () {
        let html_n:any=document.querySelector('#n');
        let n :number =Number(html_n.value);
        document.querySelector('#otvet').innerHTML=`<h3>${V(n)}</h3>`
        // console.log(V(n));
    })
    //---------------------------------------------
    //---------------------------------------------
    function F(n:number):number{

        let p:number=1;
        for(let i=1;i<=n;i++){
            p*=i;
        }
        return p;

    }
    //---------------------------------------------
    function V(n:number):string{

        let temp:string=n.toLocaleString()+'!=';

        for(let i=1;i<n;i++){
            temp+=i.toString()+'*';
        }

        temp+=n.toString()+'='+F(n).toString();========

        return temp;
    }
})
