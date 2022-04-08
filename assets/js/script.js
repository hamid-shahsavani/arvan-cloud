
//? show language menu 

$(document).ready(function(){
    $('.active-lang').on('click', function(){
        $('.other').toggleClass('show');
    });
});

//? show and hide sub-menu 

$(document).ready(function () { 
    $('.nav-content').hide();
    $('.nav-tab').on("click", function () {
        let clickedId = $(this).attr("id");
        let clickedIdContent = clickedId.replace('-tab','');
        if ($("#"+clickedId).hasClass('active')){
            $("#"+clickedIdContent).slideUp("slow");

            $("#"+clickedId).removeClass('active');
            return 0;
        }
        $('.nav-tab').each(function (index) {
            if ($(this).attr("id") == clickedId) {
                $('.nav-tab,.nav-content').eq(index).addClass('active');
                $(".nav-content").eq(index).slideDown();
            } else {
                $('.nav-tab,.nav-content').eq(index).removeClass('active');
                $(".nav-content").eq(index).hide();
            }
        });
    });  
});