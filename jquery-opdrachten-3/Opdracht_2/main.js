let clickCount = 0;

$("#click-add").click(function() {
  clickCount++
  $("#click-count").text(clickCount);
})

$("#click-remove").click(function() {
  clickCount--
  $("#click-count").text(clickCount);
})
