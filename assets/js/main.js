$(document).ready(function(){
    $('input').iCheck({
      checkboxClass: 'icheckbox_square-orange',
      radioClass: 'iradio_square-orange',
      increaseArea: '20%' // optional
    });
  });

$(document).ready(function(){
  $("#cars-input").hide();
  })
  
$("#category").change(function(){
  var categoryType = $("#category").val();
  if (categoryType == 1)
  { 
    $("#cars-input").show();

  } else
  {
    $("#cars-input").hide();
  }
});