
var initial_setup = function () {
  // Maybe we want to execute some custom scripts
  $('[data-toggle="popover"]').popover();
};

var libraries_starter = function () {
  // We should start our libraries here
  refresh_objects_listeners();
  AOS.init();
};

var load_page = function (url, callback) {
  $("#content-viewer").load(url, function () {
    initial_setup();
    libraries_starter();
    callback();
    $("html, body").animate({ scrollTop: 0 }, 500);
  });
};

var scrollToLink = function (id) {
  let target = $(id);
  let offset = $("#menu-header").height() + 20;
  console.log(target.hasClass("aos-animate"))
  let extra_offset = target.hasClass("aos-animate")? 0 : 100;
  let target_position = target.offset().top - offset - extra_offset;
  console.log(target.height())
  console.log(target.offset().top)
  $("html, body").animate({ scrollTop: target_position }, 500);
};
