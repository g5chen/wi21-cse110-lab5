// main.js

// TODO
var volumeNum = document.getElementById("volume-slider");
var volumeImage = document.getElementById("volume-image");
var honkbutton = document.getElementById("honk-btn");
var audio = document.getElementById("horn-sound");

document.getElementById("volume-slider").addEventListener("input", changeVolume);

function changeVolume(event) {
    var newVolume = document.getElementById("volume-slider").value;
    document.getElementById("volume-number").value = newVolume;
    audio.volume = newVolume / 100;
    if (newVolume <= 0) {
        volumeImage.setAttribute("src", "./assets/media/icons/volume-level-0.svg");
        honkbutton.disabled = true;
    }else if (newVolume >= 1 && newVolume <= 33) {
        volumeImage.setAttribute("src", "./assets/media/icons/volume-level-1.svg");
        honkbutton.disabled = false;
    }else if (newVolume >= 34 && newVolume <= 66) {
        volumeImage.setAttribute("src", "./assets/media/icons/volume-level-2.svg");
        honkbutton.disabled = false;
    }else if (newVolume >= 67) {
        volumeImage.setAttribute("src", "./assets/media/icons/volume-level-3.svg");
        honkbutton.disabled = false;
    }
};

document.getElementById("volume-number").addEventListener("input", changeSlider);

function changeSlider(event) {
    var newVolume = document.getElementById("volume-number").value;
    document.getElementById("volume-slider").value = newVolume;
    audio.volume = newVolume / 100;
    if (newVolume <= 0) {
        volumeImage.setAttribute("src", "./assets/media/icons/volume-level-0.svg");
        honkbutton.disabled = true;
    }else if (newVolume >= 1 && newVolume <= 33) {
        volumeImage.setAttribute("src", "./assets/media/icons/volume-level-1.svg");
        honkbutton.disabled = false;
    }else if (newVolume >= 34 && newVolume <= 66) {
        volumeImage.setAttribute("src", "./assets/media/icons/volume-level-2.svg");
        honkbutton.disabled = false;
    }else if (newVolume >= 67) {
        volumeImage.setAttribute("src", "./assets/media/icons/volume-level-3.svg");
        honkbutton.disabled = false;
    }
};

var airhorn = document.getElementById("radio-air-horn");
var carhorn = document.getElementById("radio-car-horn");
var partyhorn = document.getElementById("radio-party-horn");
var sound_image = document.getElementById("sound-image");

airhorn.addEventListener("change", airhornimagefunc);


function airhornimagefunc(event) {
    sound_image.setAttribute("src", "./assets/media/images/air-horn.svg");
};

carhorn.addEventListener("change", carhornimagefunc);

function carhornimagefunc(event) {
    sound_image.setAttribute("src", "./assets/media/images/car.svg");
};

partyhorn.addEventListener("change", partyhornimagefunc);


function partyhornimagefunc(event) {
    sound_image.setAttribute("src", "./assets/media/images/party-horn.svg");
};

document.getElementById("honk-btn").addEventListener("click", playfunc);

function playfunc(event) {
    event.preventDefault();
    if (airhorn.checked) {
        audio.setAttribute("src", "./assets/media/audio/air-horn.mp3");
        audio.play();
    }
    else if (carhorn.checked) {
        audio.setAttribute("src", "./assets/media/audio/car-horn.mp3");
        audio.play();
    }
    else {
        audio.setAttribute("src", "./assets/media/audio/party-horn.mp3");
        audio.play();
    }
}
