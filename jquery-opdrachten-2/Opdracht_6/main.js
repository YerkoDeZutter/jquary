// Write your solution here

$(".color").mouseover(function() {
  $("#text").css("color", $(this).attr("id"))
})

$(".color").mouseout(function() {
  $("#text").css("color", "black")
})
