(function(){
  var flashLight = document.getElementById("flashLight");
  var switchEye = document.getElementById("switchEye");
  var screenPhoto = document.getElementById("screenPhoto");
  var snapshot = document.getElementById("snapshot");
  var photo = document.getElementById("photo");

  screenPhoto.addEventListener("animationend", takeShot);
  photo.addEventListener("transitionend", function() {
    setTimeout(function() {
      photo.style.left = "-70px";
    }, 2000);
  });

  function playComponentsAnimation() {
    flashLight.style.animation = "showComponents 0.3s ease-out forwards";
    switchEye.style.animation = "showComponents 0.3s 0.1s ease-out forwards";
    snapshot.style.animation = "showComponents 0.3s 0.2s ease-out forwards";
    setTimeout(function() {
      showScreenPhoto();
    }, 400);
  }

  function showScreenPhoto() {
    screenPhoto.style.opacity = 1;
    screenPhoto.style.animation = "moveScreenPhoto 5s 1.2s ease-in-out forwards";
  }

  // take a pic
  function takeShot(e) {
    if(e.animationName == "moveScreenPhoto") {
      screenPhoto.style.backgroundPosition = "50% 50%";
      screenPhoto.style.animation = "takeShot 0.2s 0.5s linear forwards";
      setTimeout(function() {
        // photo.style.animation = "showComponents 0.3s ease-out forwards";
        photo.classList.add("smallPhoto");
      }, 800);
    }
  }
  playComponentsAnimation();
})();
