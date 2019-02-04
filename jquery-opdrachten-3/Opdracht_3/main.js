let ranNum = Math.floor(Math.random()*100);

console.log(ranNum);

$("#guess-knop").click(function() {
  if(parseInt($("#guess").val()) < ranNum) {

    alert("meer");

  } else if (parseInt($("#guess").val()) > ranNum) {

    alert("minder");

  } else {

    alert("juist");

  }
})
