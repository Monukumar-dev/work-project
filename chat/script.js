document.addEventListener('DOMContentLoaded', function () {
    const magnifyGlass = document.getElementById('magnifyGlass');
    const magnifyImage = document.getElementById('magnifyImage');
    
    magnifyImage.addEventListener('mousemove', function (e) {
      // Get the cursor position relative to the image
      const posX = e.pageX - this.offsetLeft;
      const posY = e.pageY - this.offsetTop;
      
      // Calculate the position of the magnify glass
      const glassPosX = posX - magnifyGlass.offsetWidth / 2;
      const glassPosY = posY - magnifyGlass.offsetHeight / 2;
      
      // Set the position of the magnify glass
      magnifyGlass.style.left = `${glassPosX}px`;
      magnifyGlass.style.top = `${glassPosY}px`;
      
      // Update the background position of the magnify glass to show the corresponding portion of the magnified image
      const ratioX = magnifyImage.offsetWidth / magnifyGlass.offsetWidth;
      const ratioY = magnifyImage.offsetHeight / magnifyGlass.offsetHeight;
      magnifyGlass.style.backgroundPosition = `-${posX * ratioX}px -${posY * ratioY}px`;
    });
    
    magnifyImage.addEventListener('mouseenter', function () {
      magnifyGlass.style.display = 'block';
    });
    
    magnifyImage.addEventListener('mouseleave', function () {
      magnifyGlass.style.display = 'none';
    });
    
    // Change the background image of the magnify glass
    magnifyGlass.style.backgroundImage = 'url(another-image.jpg)';
  });
  