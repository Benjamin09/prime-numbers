//back end
var sift=function(number){
  var list = [];
  for (var i = 2; i <= number ; i++) {
    list.push(i);
  }
  for (var prime = 2; prime <=7 ; prime++ ){
    for (var i = 0; i <= number; i++) {
      if((list[i]%prime) === 0 && list[i] !== prime){
        list.splice(i,1);
      }
    }
  }
return list;
}

//front end
$(function(){
  $("form#input").submit(function(event){
    event.preventDefault();

    var number = parseInt($("#number").val());

    $("#output").text(sift(number));


  });
});
