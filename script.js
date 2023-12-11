document.addEventListener('DOMContentLoaded', function () {
    const heartContainer = document.getElementById('heart-container');


    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerHTML = '❤️';


    heartContainer.appendChild(heart);
  });
