function makeTableScroll() {
 var maxRows = 4;

 var table = document.getElementById('myTable');
 var wrapper = table.parentNode;
 var rowsInTable = table.rows.length;
 var height = 0;
 if (rowsInTable > maxRows) {
  for (var i = 0; i < maxRows; i++) {
    height += table.rows[i].clientHeight;
  }
  wrapper.style.height = height + "px";
}
}

$(function () {
  makeTableScroll();
  var delta;
  var scroller;
  var _rowHeight = 0;
  function init() {
    _rowHeight = eval($('.scrollingTable').find("tr").height());
    scroller = $('.scrollingTable');
    scroller.onscroll = fixedScroll;
    delta = scroller.scrollTop;
  }
  function fixedScroll(e) {
    if (delta < e.target.scrollTop)
      e.target.scrollTop = delta + _rowHeight;
    if (delta > e.target.scrollTop)
      e.target.scrollTop = delta - _rowHeight;
    delta = e.target.scrollTop;
  }
});

function refresh(){
 $(".reload").click(function(){
  window.location.reload();
 });
}

  setTimeout(function(){
    $('#flash').remove();
  }, 5000);
