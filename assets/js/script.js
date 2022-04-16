//* copyright SYS113 / 2022 - april.

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

//? add active class to product-tab & solution-tab

function showAndHideTab(tabType) {
  $(`.${tabType}-tab`).click(function () {
    let tabId = '#' + this.id.replace('tab', 'content');
    $(`.${tabType}-content`).removeClass('active');
    $(tabId).addClass('active');
    $(`.${tabType}-tab`).removeClass('active');
    $(this).addClass('active');
  });
}

//? run ready function

$(document).ready(function () {

  swal({
    title: "یک لحضه وایسا ...",
    text: "اینجا صرفا یک صفحه غیر رسمی از وب سایت آروان کلود هست!",
    icon: "warning",
    button: "بزن بریم!",
  });

  //* ===> mobile & desktop

  //? show product tab content

  showAndHideTab('product');

  //? show solution tab content

  showAndHideTab('solution');

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

  //? show language menu header and footer in desktop

  function showLangList(x) {
    $(`.active-lang-${x}`).on('click', function () {
      $('.other').toggleClass('show');
    });
  }

  showLangList('header');
  showLangList('footer');

  //? show and hide sub-menu in desktop

  $('.main-menu-content').hide();

  $('.main-menu-tab').on('click', function () {
    let clickedId = $(this).attr('id');
    let clickedIdContent = clickedId.replace('-tab', '');
    if ($('#' + clickedId).hasClass('active')) {
      $('#' + clickedId).removeClass('active');
      $('#' + clickedIdContent).slideUp('slow');
      return 0;
    }
    $('.main-menu-tab').each(function (index) {
      if ($(this).attr('id') == clickedId) {
        $('.main-menu-tab,.main-menu-content').eq(index).addClass('active');
        $('.main-menu-content').eq(index).slideDown();
      } else {
        $('.main-menu-tab,.main-menu-content').eq(index).removeClass('active');
        $('.main-menu-content').eq(index).hide();
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
