$(function() {
    $('ul.hover_block li').hover(function(){
        $(this).find('img').animate({
            left:'360px'
        },{
            queue:false,
            duration:500
        });
    }, function(){
        $(this).find('img').animate({
            left:'0px'
        },{
            queue:false,
            duration:500
        });
    });
});