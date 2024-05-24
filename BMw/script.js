function changeScrollbarColor() {
  var colors = ['white', 'red', 'blue'];
  var i = 0;
  var scrollbar = document.documentElement.style;
  setInterval(function() {
    scrollbar.setProperty('--scrollbar-color', colors[i]);
    i = (i + 1) % colors.length;
  }, 5000); // Change color every 5 seconds (5000 milliseconds)
}

window.onload = function() {
  changeScrollbarColor();
};




function toggleContentAndImages() {
  var contentDiv1 = document.getElementById("contentDiv1");
  var contentDiv2 = document.getElementById("contentDiv2");
  var contentImg = document.getElementById("contentImg");
  var content1Img = document.getElementById("content1");

  if (contentDiv1.style.display === "none") {
    contentDiv1.style.display = "block";
    contentDiv2.style.display = "none";
    contentImg.style.display = "none";
    content1Img.style.display = "block";
  } else {
    contentDiv1.style.display = "none";
    contentDiv2.style.display = "block";
    contentImg.style.display = "block";
    content1Img.style.display = "none";
  }
}




var imageUrls = [
  "https://files.hodoor.world/main/1e7e7442-9a30-4664-aefe-8e0195a6c4de.jpg",
  "https://files.hodoor.world/main/6f3a4e80-3961-453c-b890-cdec2e836b5b.jpg",
  "https://files.hodoor.world/main/bcc2e442-2a87-470f-9ab5-ed1b4630c1bc.jpg",
  "https://files.hodoor.world/main/15ffaa61-5341-4f43-a81b-08dc65794e61.jpg",
  "https://files.hodoor.world/main/4d97f509-a008-43b0-a9d9-29f4214ccd83.jpg",
  "https://files.hodoor.world/main/6d7f8191-8344-4bcc-8b33-0726f87912ba.jpg"
];


function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}


function shuffleImages() {
  var shuffledUrls = shuffle(imageUrls);
  var shuffleImage = document.getElementById("shuffleImage");
  var index = 0;

  setInterval(function() {
    shuffleImage.src = shuffledUrls[index];
    index = (index + 1) % shuffledUrls.length;
  }, 2000);
}


shuffleImages();


document.addEventListener("DOMContentLoaded", function() {
  const audio = document.getElementById("hover-sound");
  const soundV8 = document.getElementById("sound-v8");
  const playButton = document.getElementById("play-audio-button");
  const playV8Button = document.getElementById("play-v8-button");

  playButton.addEventListener("click", function() {
    audio.currentTime = 0;
    audio.play();
  });

  playV8Button.addEventListener("click", function() {
    soundV8.currentTime = 0;
    soundV8.play();
  });
});




window.onload = function() {
    var preloader = document.querySelector('.preloader');
    preloader.style.display = 'none';
};




