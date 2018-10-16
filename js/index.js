//A bunch of window size detection for mobile...

$( window ).resize(function() {
    if($(window).width() < 1000) {
        $("#forge-frame").hide();
    } else {
        $("#forge-frame").show();
    }
    
    if($(window).width() < 800) {
        $("#introduction").removeClass("it");
        $("#introduction").addClass("it-mobile");
        $("#img-0").addClass("image-mobile");
        $("#img-1").addClass("image-mobile");
        $("#img-2").addClass("image-mobile");
    } else {
        $("#introduction").removeClass("it-mobile");
        $("#introduction").addClass("it");
        $("#img-0").removeClass("image-mobile");
        $("#img-1").removeClass("image-mobile");
        $("#img-2").removeClass("image-mobile");
    }
});

$(document).ready(function() {
    if($(window).width() < 1000) {
        $("#forge-frame").hide();
    }
    
    if($(window).width() < 800) {
        $("#introduction").removeClass("it");
        $("#introduction").addClass("it-mobile");
        $("#img-0").addClass("image-mobile");
        $("#img-1").addClass("image-mobile");
        $("#img-2").addClass("image-mobile");
    } else {
        $("#introduction").removeClass("it-mobile");
        $("#introduction").addClass("it");
        $("#img-0").removeClass("image-mobile");
        $("#img-1").removeClass("image-mobile");
        $("#img-2").removeClass("image-mobile");
    }
});