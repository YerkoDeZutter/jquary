let rechthoek = $("#rechthoek")

$("#RHknop_1").click(function() {

  if(parseInt(rechthoek.css("width")) < 100){
  rechthoek.css("width", (parseInt(rechthoek.css("width")) + 10))
} else {
  rechthoek.css("width", 10);
}

})

$("#RHknop_2").click(function() {
  rechthoek.css("background", "green");
})

$("#RHknop_3").click(function() {
  rechthoek.css("background", "blue");
})

$("#RHknop_4").click(function() {
  rechthoek.css("display", "none");
})

$("#RHknop_5").click(function() {
  rechthoek.css("display", "block");
})
