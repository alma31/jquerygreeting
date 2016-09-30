$("button").click(function(){
  var first = $('input[name=first_name]').val();
  var last = $('input[name=last_name]').val();
  var city =$('input[name="city').val();
  var final =$('#username').html(first+" "+" "+ last+" "+ "de"+" " +city);
});

