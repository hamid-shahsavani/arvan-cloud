
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

//? run ready function

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

  for (let i = 1; i <= 4; i++) {

    hideAndShow('.m-sub-menu-' + i , '.m-item-' + i);
  }

});
