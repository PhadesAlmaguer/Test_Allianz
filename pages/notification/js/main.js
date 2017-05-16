$(function() {
  notifications("#icon-notification1", "#containerNots1", ".badge-cont1");
  notifications("#icon-avisos1", "#containerAvisos1", ".badge-cont2");

  $(".notification-item").click(function() {
    console.log("dos");
    if ($(this).hasClass("notRead")) {
      //this.attr("src","img/1-alert.png");
      console.log("notRead");
      //$(this+" .img-read").attr("src","img/1-alert.png");
      //$(this+" .img-read").destroy();
      console.log("dos: "+this);
      $(this).removeClass("notRead");
    }else{
      console.log("Read");
    }
  });
});

function notifications(element, containerNots, badgeContainer) {

  $(badgeContainer).append("90");
  showList(element, containerNots);
}

function showList(element, containerNots) {
  $(element).click(function() {
    //$('.container-nots').hide();
    if ($(window).width() > 792) {
      //$('.container-nots').hide();
      if ($(containerNots).css("display") == "block") {
        contToggle(containerNots);
      } else {
        contToggle(containerNots);
      }
    } else {
      openNav();
    }

  });
}

function contToggle(containerNots) {
  $(containerNots).toggle("fade", function() {

  });
}

function openNav() {
  $("#mySidenav").width('100%');
}

function closeNav() {
  $("#mySidenav").width('0');
}

/**
 * section to change notification/aviso status
 */

var avisos = [
  "Saab",
  "Volvo",
  "BMW"
];

/**
 * reading notifications
 */
