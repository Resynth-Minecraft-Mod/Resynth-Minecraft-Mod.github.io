$(window).resize(function() {
    if($(window).width() < 1000){
        $("#forge-frame").hide();
    } else {
        $("#forge-frame").show();
    }
});

$(document).ready(function() {
    if($(window).width() < 1000){
        $("#forge-frame").hide();
    }
});