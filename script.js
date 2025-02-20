$( function() {
    $(".draggable" ).draggable();
} );

$(".smiski").click(
    function(){
        $(".one").toggleClass("visible");
    }
)

$(".stickers").click(
    function(){
        $(".two").toggleClass("visible");
    }
)

