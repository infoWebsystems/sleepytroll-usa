$( document ).ready(function() {
  $(".select-country").click(function(){
    $(this).siblings(".country-dropdown").toggle();
  });
});