$(document).ready(()=>{
    //DETECTANDO LA ALTURA DEL BANNER
    let altura = $("#banner").height();
    //HACIENDO QUE EL MENU CREZCA SEGUN LA POSICION DEL SCROLL
    $(document).scroll(()=>{
        if(window.scrollY > altura){
            $("nav img").css({"height":"10vh"})
        }else{
            $("nav img").css({"height":"15vh"})
        }
    });
    //AÑADIENDO EL ESTILO AL HACER CLICK A LOS ITEMS DEL MENU
    $(".item").click((e)=>{
        console.log(e)
        $(".clicked").removeClass("clicked");
        $(e.currentTarget).addClass("clicked")
    });
});