$(document).keydown(function(evt){
  if (evt.keyCode == 38){
    $("#rect").css("margin-top", parseInt($("#rect").css("margin-top")) - 10)
  } else if (evt.keyCode == 40){
    $("#rect").css("margin-top", parseInt($("#rect").css("margin-top")) + 10)
  } else if (evt.keyCode == 37) {
    $("#rect").css("margin-left", parseInt($("#rect").css("margin-left")) - 10)
  } else if (evt.keyCode == 39) {
    $("#rect").css("margin-left", parseInt($("#rect").css("margin-left")) + 10)
  }
})
