$(function(){
  notifications("#icon-notification1", "dos dos dos");
});

function notifications(element, icon, ws){
  $(element).addClass("dos");
  // /console.log("WS: "+ws);
  $(element+" .badge-count").append("90");
  showList(element);
}

function showList(element){
  $(element).click(function() {
    if($(window).width() > 792){
      $(element+" .container-nots" ).toggle( "fade", function() {
        $.getJSON('../files/notificaciones.json', function(data) {
              var output="<ul>";
              for (var i in data.users) {
                  output+="<li>" + data.users[i].firstName + " " + data.users[i].lastName + "--" + data.users[i].joined.month+"</li>";
              }
              output+="</ul>";
              $(".container-nots .panel-body").innerHTML=output;
        });
        // Animation complete.
      });
    }else {

      //alert("version movil");
      openNav();
    }
  });
}


function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
