$(document).ready(function(){
  var turn = 1;
  $(".content").click(function(){
    if (turn % 2 === 0) {
      $(this).text("o")
    } else {
      $(this).text("x")
    }
    turn++
  });
$("button#reset").click(function(){
  turn = 1;
  $(".content").text('')
})
});

var Space = function (x, y, clicked){
  this.x = x;
  this.y = y;
  this.clicked = false;
}
