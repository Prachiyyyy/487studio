
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.add("hidden");
    }

    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("border-green-500");
        tablinks[i].classList.add("border-transparent");
    }

    document.getElementById(tabName).classList.remove("hidden");
    evt.currentTarget.classList.add("border-green-500");
    evt.currentTarget.classList.remove("border-transparent");
}


document.addEventListener("DOMContentLoaded", function() {
    document.getElementsByClassName("tablink")[0].click();
});

function replaceImage(src) {
    document.getElementById('largephoto h-full').src = src;
}
document.getElementById('showDiv1').addEventListener('click', function() {
    document.getElementById('myDiv1').style.display = 'block';
    document.getElementById('myDiv2').style.display = 'none';
});

document.getElementById('showDiv2').addEventListener('click', function() {
    document.getElementById('myDiv1').style.display = 'none';
    document.getElementById('myDiv2').style.display = 'block';
});

document.getElementById('colorDiv').addEventListener('click', function() {
    this.classList.toggle('color1');
    this.classList.toggle('color2');
});

function changeImage(imageSrc) {
    document.getElementById('main-image').src = imageSrc;
}
var tempImage = new Image();
tempImage.src = newSrc;
tempImage.className = 'w-full h-full object-cover absolute slide-enter-active slide-enter-from';

tempImage.onload = function() {
    document.querySelector('.relative').appendChild(tempImage);

    // Trigger reflow for the animation to start
    tempImage.offsetHeight;

    // Add classes to start slide-in and slide-out animations
    largeImage.classList.add('slide-leave-active', 'slide-leave-from');
    largeImage.classList.remove('slide-leave-to');
    tempImage.classList.remove('slide-enter-from');
    tempImage.classList.add('slide-enter-to');

    setTimeout(function() {
      // Remove the old image and reset classes
      largeImage.remove();
      tempImage.classList.remove('slide-enter-active', 'slide-enter-to');
      tempImage.classList.add('absolute');
      tempImage.id = 'largeImage';
    }, 500); // Duration of slide effect
  };

  document.addEventListener('DOMContentLoaded', function() {
    const colorbox = document.getElementById('colorbox');
    colorbox.addEventListener('click', function() {
        if (colorbox.classList.contains('bg-custom-color-1')) {
            colorbox.classList.remove('bg-custom-color-1');
            colorbox.classList.add('bg-custom-color-2');
        } else {
            colorbox.classList.remove('bg-custom-color-2');
            colorbox.classList.add('bg-custom-color-1');
        }
    });
});
