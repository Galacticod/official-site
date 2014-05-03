//wait until main document is loaded
window.addEventListener('load',function(){
  // add hover over effect
  var imgs = document.querySelectorAll('#team-list img');
  var dir = 'img/galacticod/';

  for (var i = 0; i < imgs.length; i++) {
  	imgs[i].onmouseover = function() {
  		this.src = dir + this.getAttribute('data-fish-face');
  	}
  	imgs[i].onmouseout = function() {
  		this.src = dir + this.getAttribute('data-normal-face');
  	}

  };
}); //end addEventListener
