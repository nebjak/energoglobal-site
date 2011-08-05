$(function() {
    function showInfo(tile) {
        switch(tile.id) {
            case 'mhe':
                $("#info_tile").html("MHE");
                break;
            case 'dea':
                $("#info_tile").html("DEA");
                break;
        }
    }
                
    function resetInfo() {
        $("#info_tile").html("ENERGOGLOBAL D.O.O.");
    }
                
    $(".tile").hover(
        function () {
            $(this).addClass("hover");
            $("#info_tile").addClass("hover");
            $(this).animate({
                opacity: 0.8
            }, {
                duration: 1000
            });
            showInfo($(this));
        },
        function () {
            $(this).removeClass("hover");
            $("#info_tile").removeClass("hover");
            $(this).animate({
                opacity: 1
            }, {
                duration: 1000
            });
            resetInfo();
        }
        );
});