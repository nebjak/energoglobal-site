$(function() {
    $('div.tile a').hover(function(){
        $(this).find('img').animate({
            top:'250px'
        },{
            queue:false,
            duration:500
        });
    }, function(){
        $(this).find('img').animate({
            top:'0px'
        },{
            queue:false,
            duration:1000
        });
    });
});