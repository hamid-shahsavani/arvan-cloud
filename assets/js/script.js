
//? show language menu 

$(document).ready(function(){
    $('.active-lang').on('click', function(){
        $('.other').toggleClass('show');
    });
});

//? hide sub-menu 

$(document).ready(function(){
    $('.sub-menu .item-1').hide();
    $('.sub-menu .item-2').hide();
    $('.sub-menu .item-4').hide();
    $('.sub-menu .item-5').hide();
    $('.main-menu .item-1').click(function() {
        $('.sub-menu .item-1').slideToggle("slow");
    });
});

