$(window).resize(function() {
    if($(window).width() < 1000){
        $("#forge-frame").hide();
    } else {
        $("#forge-frame").show();
    }
    
    if($(window).width() < 800){
        $("#introduction").removeClass("it");
        $("#introduction").addClass("it-mobile");
    } else {
        $("#introduction").removeClass("it-mobile");
        $("#introduction").addClass("it");
    }
});

$(document).ready(function() {
    if($(window).width() < 1000){
        $("#forge-frame").hide();
    }
    
});