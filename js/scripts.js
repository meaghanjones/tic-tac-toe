$(document).ready(function(){
  var spacesArray = [false, false, false, false, false, false, false, false, false];
  var turn = 1;
  $(".content").click(function(){
    if (spacesArray[parseInt($(this).attr("id"))-1] === false) {
      if (turn % 2 === 0) {
        $(this).text("o")
        spacesArray[parseInt($(this).attr("id"))-1] = "o";
      } else {
        $(this).text("x")
        spacesArray[parseInt($(this).attr("id"))-1] = "x";
      }
      turn++
    } else {
      alert("Please choose an unmarked square");
    }
  });
$("button#reset").click(function(){
  turn = 1;
  $(".content").text('')
})
});
