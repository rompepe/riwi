function themepage(){
    var themepage = document.getElementById('theme').value;
    console.log("teme es...",themepage)
    if(themepage == 'light' || themepage != 'dark'){
        document.getElementById('body').classList.remove('theme-dark');
        document.getElementById('body').classList.add('theme-light');
        
    }else{
        document.getElementById('body').classList.remove('theme-light');
        document.getElementById('body').classList.add('theme-dark');

    }

}

function cambiaridioma(){
    var idioma = document.getElementById('idioma').value;
    if(idioma == 'es'){ //español
        Texto = [
        {
            titulo : "BBQ crunch",
            parrafo : "1 sandwich BBQ crunch (1 filete de pollo apanado)...",
        },
        {
            titulo : "kentucky sandwich",
            parrafo : "1 kentuchy hamburguesa / sandwich 1 filete de pechuga de pollo apanado, pepinillos)...",
        },
        {
            titulo : "combo BBQ crunch",
            parrafo : "1 sandwich BBQ crunch ( 1filete de pollo apanado)+ 1 papas pequeñas +1 gaseosapet)...",
        },
        {
            titulo : "kemtuchy coronal",
            parrafo : "1 kentichy coronal hamburguesa / sandwich filete de pechuga de pollo apanado, ensalada )...",
        },
        {
            titulo : "combo kentuchy sandwich",
            parrafo : "1 kentuchy hamburguesa/sandwich(1 filete de pechuga de pollo apanado))...",
        },
        {
            titulo : "combo kentuchy coronel sandwich",
            parrafo : "1 kentuchy coronal hamburguesa/sandwich 1 filete de pechuga de pollo apanado ensalada...",
        },
        {
            titulo : "sandwich crispy BBQ",
            parrafo : "1 sandwich crispy BBQ 1 filete de pechuga extra grande triple empanizado cebolla crisp)...",
        },
        {
            titulo : "combo sandwich crispy BBQ",
            parrafo : "1 sandwich crispy BBQ 1 filete de pechuga extra grande triple empanizado cebolla crispi...",
        }
    ];
    }else{//ingles
        Texto = [{
            titulo : "BBQ crunch",
            parrafo : "1 BBQ crunch sandwich (1 breaded chicken fillet)...",
        },
        {
            titulo : "kentucky sandwich",
            parrafo : "1 Kentucky hamburger / sandwich 1 breaded chicken breast fillet, pickles)...",
        },
        {
            titulo : "combo BBQ crunch",
            parrafo : "1 BBQ crunch sandwich (1 breaded chicken fillet) + 1 small potatoes + 1 soft drink)...",
        },
        {
            titulo : "kemtuchy coronal",
            parrafo : "1 kentichy coronal burger / sandwich breaded chicken breast fillet, salad)...",
        },
        {
            titulo : "combo kentuchy sandwich",
            parrafo : "1 Kentucky hamburger/sandwich (1 breaded chicken breast fillet)...",
        },
        {
            titulo : "combo kentuchy coronel sandwich",
            parrafo : "1 kentuchy coronal hamburger/sandwich 1 breaded chicken breast fillet salad...",
        },
        {
            titulo : "sandwich crispy BBQ",
            parrafo : "1 crispy BBQ sandwich 1 extra large breast fillet triple breaded crispy onion)...",
        },
        {
            titulo : "combo sandwich crispy BBQ",
            parrafo : "1 crispy BBQ sandwich 1 extra large breast fillet triple breaded crispy onion...",
        }
    ];
    }
    contador = 1;
    texto.foreach(function(vuelta){
        document.getElementById('titulo-'+contador).innerText = vuelta.titulo
        document.getElementById('parrafo-'+contador).innerText = vuelta.parrafo
        contador++;

    })
}