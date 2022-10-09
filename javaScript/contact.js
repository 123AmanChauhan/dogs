document.querySelector(".btn2").addEventListener("click", function(){
    document.querySelector("iframe").style.display="block";
    document.querySelector(".cross").style.display="block"
})
document.querySelector(".cross").addEventListener("click", function(){
    document.querySelector("iframe").style.display="none";
    document.querySelector(".cross").style.display="none";
})

$(document).ready(function(){
    $(".service").click(function(e){
        e.preventDefault();
        if($(this).next(".inner").is(":hidden")){
            $(".inner").slideUp();
            $(this).next(".inner").slideDown();
        }
        else{
            $(this).next(".inner").slideUp();
        }
    });
$(".service").focusout(function(e){
        $(".inner").slideUp();
    })
})

$(document).ready(function(){
    $(".icon-but").click(function(){
        $(".o").toggle(500)
    })
})
