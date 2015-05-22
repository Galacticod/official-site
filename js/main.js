window.addEventListener('load',function(){
  // add hover over effect
  var fishFaces = document.querySelectorAll('.profile-pic div');
  for (var i = 0; i < fishFaces.length; i++) {
    
    var url = fishFaces[i].getAttribute('data-fish')
    fishFaces[i].style.backgroundImage = "url('" + url + "')";
  };

  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 3000);
        return false;
      }
    }
  });
});
