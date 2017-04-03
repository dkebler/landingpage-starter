// requires jquery
$(document).ready(function () {

  // initialize
  heroResize();
  itemResize('iframe');
  typeResize(); // for section content
  hljs.initHighlightingOnLoad();
  // resize elements on change
  $(window).resize(function () {
    heroResize();
    itemResize('iframe');
    typeResize();
  });

});;
