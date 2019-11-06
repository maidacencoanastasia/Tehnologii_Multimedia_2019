document.addEventListener('DOMContentLoaded', function(){
  

    var drawingCanvas:any = document.getElementById('smile');
    if(drawingCanvas && drawingCanvas.getContext) {
     var context = drawingCanvas.getContext('2d');
          
     let img = new Image();
     img.src = "srite.jpg";

    img.addEventListener("load",function(){
 
        let i=0;
        let dx = 100;
        let dy = 120;
        
        document.querySelector("#next")
          .addEventListener("click", function(){           
            i++;
            if(i==21) {i=1}      
           
            let x = 0;
            let y = 0; 
            
            if (i>10){ 
                y = dy;
                let n = i - 10;
                x= (n-1)*dx;                
            }
             else {
                x= (i-1)*dx;
                y = 0;
             }
            context.drawImage(img, x, y, dx, dy, 0, 0, dx, dy);

        })
       

        


        
        
    })
    
       
     
    }


   
})