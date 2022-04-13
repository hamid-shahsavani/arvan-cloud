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
  //* ===> mobile & desktop

  //? add active class to product-tab

  $('.product-tab').click(function () {
    let tabId = '#' + this.id.replace('tab', 'content');
    $('.product-content').removeClass('active');
    $(tabId).addClass('active');
    $('.product-tab').removeClass('active');
    $(this).addClass('active');
  });

  //* ===> for desktop

  $(window).scroll(function () {
    // for main-menu
    let mainMenu = $('.main-menu'),
      scrollMainMenu = $(window).scrollTop();
    if (scrollMainMenu >= 200) {
      mainMenu.addClass('main-menu-fixed');
    } else {
      mainMenu.removeClass('main-menu-fixed');
    }
    // for sub-menu
    let subMenu = $('.sub-menu'),
      scrollSubMenu = $(window).scrollTop();
    if (scrollSubMenu >= 200) {
      subMenu.addClass('sub-menu-fixed');
    } else {
      subMenu.removeClass('sub-menu-fixed');
    }
  });

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

  //* ===> for mobile

  //? show language menu in mobile

  hideAndShow('.m-change-lang-sub', '.m-change-lang');

  //? add active class to mobile menu icon and show main-menu

  hideAndShow('.mobile-header .m-show-menu', '.mobile-menu-button input');

  //? add active class to mobile menu item and show sub-menu

  for (let i = 1; i <= 4; i++) {
    hideAndShow('.m-sub-menu-' + i, '.m-item-' + i);
  }
});
