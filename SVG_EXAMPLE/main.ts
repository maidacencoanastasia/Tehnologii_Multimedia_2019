let json_romania = `
{
    "ROU122": "Dolj", 
    "ROU123": "Gorj", 
    "ROU124": "Mehedinti", 
    "ROU126": "Olt", 
    "ROU127": "Teleorman", 
    "ROU128": "Bucharest", 
    "ROU129": "Calarasi", 
    "ROU130": "Dâmbovita", 
    "ROU131": "Giurgiu", 
    "ROU132": "Ialomita", 
    "ROU133": "Constanta", 
    "ROU276": "Arad", 
    "ROU277": "Bihor", 
    "ROU278": "Caras-Severin", 
    "ROU280": "Timis", 
    "ROU287": "Botosani", 
    "ROU294": "Alba", 
    "ROU295": "Bistrita-Nasaud", 
    "ROU296": "Cluj", 
    "ROU297": "Hunedoara", 
    "ROU298": "Maramures", 
    "ROU299": "Mures", 
    "ROU300": "Salaj", 
    "ROU301": "Satu Mare", 
    "ROU302": "Arges", 
    "ROU303": "Sibiu", 
    "ROU304": "Vâlcea", 
    "ROU305": "Brasov", 
    "ROU306": "Covasna", 
    "ROU307": "Harghita", 
    "ROU308": "Iasi", 
    "ROU309": "Neamt", 
    "ROU310": "Prahova", 
    "ROU311": "Suceava", 
    "ROU312": "Bacau", 
    "ROU313": "Braila", 
    "ROU314": "Buzau", 
    "ROU315": "Galati", 
    "ROU316": "Vaslui", 
    "ROU317": "Vrancea", 
    "ROU4844": "Ilfov", 
    "ROU4847": "Tulcea"
}
`

document.addEventListener('DOMContentLoaded', function(){
    
    let js_romania = JSON.parse(json_romania);

    //console.log(js_romania);


   let map =  document.querySelector("#wrap");
   map.addEventListener('click',function(e){
       let ob:any = e.target;
        console.log(js_romania[ob.id]);
    })
   

})