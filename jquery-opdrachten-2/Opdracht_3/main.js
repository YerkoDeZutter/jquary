// Write your solution here
let text = $("#text");

$("#show").click(function(){
  text.removeAttr("hidden");
})

$("#hide").click(function(){
  text.attr("hidden", "hidden");
})
