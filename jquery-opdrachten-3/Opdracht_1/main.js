let clickCount = 0;

$("#clicker").click(function() {
  clickCount++
  $("#click-count").text(clickCount);
})
