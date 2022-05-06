'use strict';

$(function () {
  $('#hamburger').on('click', function () {
    $('#nav-menu, .line, #main').toggleClass('open');
  })
})