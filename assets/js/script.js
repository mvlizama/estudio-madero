$(function(){

  $("a").click(function(event){
  if (this.hash !== "") {
    event.preventDefault();

    var gato = this.hash;

    $("html, body").animate({
      scrollTop: $(gato).offset().top
    }, 800, function(){
      window.location.hash = gato;
    });
  }
  });
  $('[data-bs-toggle="popover"]').popover();


$('[data-toogle="tooltip"]').tooltip()

$("#title ").on("dblclick", function(event){
  $(this).css({
    "color" : "red",
  });
});

}
