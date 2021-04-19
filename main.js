//impostare la pagina per scrivere il tuo codice
$(document).ready(function(){

  //referenze
  var menuBurger =$(".header-right > a");
  var menu = $(".hamburger-menu");
  var chiusura = $(".close");

  menuBurger.click(function(){
    menu.show();
  });
  chiusura.click(function(){
    menu.hide();
  });

});