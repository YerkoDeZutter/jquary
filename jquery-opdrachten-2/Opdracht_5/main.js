// Write your solution here
$("input").focus(function(){
  $(this).css("border", "1px solid green");
})

$("input").blur(function(){
  $(this).css("border", "1px solid red");
})
