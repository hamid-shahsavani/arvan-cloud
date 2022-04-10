//? hide and show element with click function

function hideAndShow(show, active) {
  $(show).hide();
  $(active).on('click', function () {
    $(show).slideToggle();
    if ($(active).hasClass('active')) {
      $(active).removeClass('active');
    } else {
      $(active).addClass('active');
    }
  });
}

function showSubMenu(subMenu,menu){
  $(subMenu).hide();
  let myVar = 0;
  $(menu).on('click',function(){
    $(menu).find("ul").click(function(){
      $(subMenu).slideDown();
      myVar = 1;
    });
    if(myVar) {
      return
    } 
    $(subMenu).slideToggle();
  });
}

$(document).ready(function () {

  //* for desktop

  //? show language menu in desktop

  $('.active-lang').on('click', function () {
    $('.other').toggleClass('show');
  });

  //? show and hide sub-menu in desktop

  $('.nav-content').hide();
  $('.nav-tab').on('click', function () {
    let clickedId = $(this).attr('id');
    let clickedIdContent = clickedId.replace('-tab', '');
    if ($('#' + clickedId).hasClass('active')) {
      $('#' + clickedId).removeClass('active');
      $('#' + clickedIdContent).slideUp('slow');
      return 0;
    }
    $('.nav-tab').each(function (index) {
      if ($(this).attr('id') == clickedId) {
        $('.nav-tab,.nav-content').eq(index).addClass('active');
        $('.nav-content').eq(index).slideDown();
      } else {
        $('.nav-tab,.nav-content').eq(index).removeClass('active');
        $('.nav-content').eq(index).hide();
      }
    });
  });

  //* for mobile
  
  //? show language menu in mobile

  hideAndShow('.m-change-lang-sub', '.m-change-lang');

  //? add active class to mobile menu icon and show main-menu

  hideAndShow('.mobile-header .m-show-menu', '.mobile-menu-button input');

  //? add active class to mobile menu item and show sub-menu

  for (let i = 1; i <=4 ; i++) {

    //! bug ---> click to sub-menu and slideUp and hide sub-menu !

    // hideAndShow('.m-main-menu .item-'+i+' > .m-sub-menu' , '.m-main-menu .item-'+i);
    hideAndShow('.item-'+i+' > .m-sub-menu' , '.item-'+i);
  }

});
