/*  var go=document.getElementById("goTop");
go.addEventListener("click", function(){
    window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth"
    })
})
 */
$(document).ready(function(){
    $(".icon-but").click(function(){
        $(".o").toggle(500)
    })
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
    $(".wrap3 .helloBox1").waypoint(function(direction){
        $(".wrap3 .helloBox1").addClass("animated rotateInDownLeft")
    },{
         offset:"50%"
     })
})

$(document).ready(function(){
    $(".wrap3 .helloBox2").waypoint(function(direction){
        $(".wrap3 .helloBox2").addClass("animated rotateInDownRight")
    }, {
        offset:"50%"
    })
})

$(document).ready(function(){
    $(".wrap4 .box1 .helloBox3").waypoint(function(direction){
        $(".wrap4 .box1 .helloBox3").addClass("animated fadeInLeft")
    }, {
        offset:"70%"
    })
})

$(document).ready(function(){
    $(".wrap4 .helloBox4").waypoint(function(direction){
        $(".wrap4 .helloBox4").addClass("animated rotateIn")
    }, {
        offset:"70%"
    })
})

$(document).ready(function(){
    $(".wrap4 .box3 .helloBox5").waypoint(function(direction){
        $(".wrap4 .box3 .helloBox5").addClass("animated fadeInRight")
    }, {
        offset:"70%"
    })
})

$(document).ready(function(){
    $(".wrap5 .helloBox6").waypoint(function(direction){
        $(".wrap5 .helloBox6").addClass("animated rotateInDownLeft")
    }, {
        offset:"80%"
    })
})
$(document).ready(function(){
    $(".wrap5 .helloBox7").waypoint(function(direction){
        $(".wrap5 .helloBox7").addClass("animated rotateInDownRight")
    }, {
        offset:"80%"
    })
})

$(document).ready(function(){
    $(".wrap6 .helloBox8").waypoint(function(direction){
        $(".wrap6 .helloBox8").addClass("animated fadeInLeft")
    }, {
        offset:"85%"
    })
})

$(document).ready(function(){
    $(".wrap6 .helloBox9").waypoint(function(direction){
        $(".wrap6 .helloBox9").addClass("animated rotateIn")
    }, {
        offset:"85%"
    })
})

$(document).ready(function(){
    $(".wrap6 .helloBox10").waypoint(function(direction){
        $(".wrap6 .helloBox10").addClass("animated fadeInRight")
    }, {
        offset:"85%"
    })
})
