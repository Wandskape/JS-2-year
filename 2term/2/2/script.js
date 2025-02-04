function save() {
    var height = document.getElementById("height").value;
    var width = document.getElementById("width").value;
    var bollDiameter = document.getElementById("diameter").value;
    var images = document.querySelectorAll('.nap img');
    var boll = document.querySelector('.boll');

    if(height === "" || width === "" || bollDiameter === ""){
        alert("Введите все данные");
        return;
    }

    for (var i = 0; i < images.length; i++) {
        images[i].style.width = width + 'px';
        images[i].style.height = height + 'px';
    }

    if(height<bollDiameter*4){
        boll.style.width = height/4 + 'px';
        boll.style.height = height/4 + 'px';
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function moveBoll(index) {
    var images = document.querySelectorAll('.nap img');
    var boll = document.querySelector('.boll');
    boll.remove();

    var wrapper = document.createElement('div');
    wrapper.style.position = 'relative';
    wrapper.appendChild(images[index].cloneNode());
    wrapper.appendChild(boll);
    images[index].replaceWith(wrapper);
}

var randstart = getRandomInt(0, 2);
moveBoll(randstart);

var isAnimating = false;
var fisrtFlag = true;

var randomIndex = getRandomInt(0, 2);

function guessCup(index) {
    var result = document.getElementById("result");
    var currentResult = parseInt(result.value) || 0;
    var gameAnswer = document.querySelector('.GameAnswer');

    //correct
    var correctAnswer = document.createElement('video');
    correctAnswer.src = 'http://127.0.0.1:5501/videos/Верно1.mp4';

    var videoPlayed = false;

    correctAnswer.controls = false;
    correctAnswer.autoplay = true;
    correctAnswer.loop = false;
    correctAnswer.muted = true;
    correctAnswer.width = 400;
    correctAnswer.height = 300;

    correctAnswer.addEventListener('ended', function() {
        gameAnswer.removeChild(correctAnswer);
    });


    //notCorrectAnswer
    var notCorrectAnswer = document.createElement('video');
    notCorrectAnswer.src = 'http://127.0.0.1:5501/videos/Неверно1.mp4';

    var videoPlayed = false;

    notCorrectAnswer.controls = false;
    notCorrectAnswer.autoplay = true;
    notCorrectAnswer.loop = false;
    notCorrectAnswer.muted = true;
    notCorrectAnswer.width = 400;
    notCorrectAnswer.height = 300;

    notCorrectAnswer.addEventListener('ended', function() {
        gameAnswer.removeChild(notCorrectAnswer);
    });


    //nishy
    var nishy = document.createElement('video');
    nishy.src = 'http://127.0.0.1:5501/videos/Нищий1.mp4';

    var videoPlayed = false;

    nishy.controls = false;
    nishy.autoplay = true;
    nishy.loop = false;
    nishy.muted = true;
    nishy.width = 400;
    nishy.height = 300;

    nishy.addEventListener('ended', function() {
        gameAnswer.removeChild(nishy);
    });


    //mln40
    var mln40 = document.createElement('video');
    mln40.src = 'http://127.0.0.1:5501/videos/40Лямов1.mp4';

    var videoPlayed = false;

    mln40.controls = false;
    mln40.autoplay = true;
    mln40.loop = false;
    mln40.muted = true;
    mln40.width = 400;
    mln40.height = 300;

    mln40.addEventListener('ended', function() {
        gameAnswer.removeChild(mln40);
    });


    if (isAnimating) {
        return;
    }

    isAnimating = true;

    var imgElement = document.getElementById("Image" + index);

    imgElement.style.transition = "transform 1s ease-in-out";
    imgElement.style.transform = "translateY(-150px)";

    setTimeout(function () {
        imgElement.style.transition = "transform 1s ease-in-out";
        imgElement.style.transform = "translateY(0)";
    }, 2000);

    setTimeout(() => {
        isAnimating = false;
    }, 4000);

    if(fisrtFlag){
        if (index === randstart) {
            result.value = currentResult + 5;
            //gameAnswer.textContent = 'Верно';

            gameAnswer.appendChild(correctAnswer);
            videoPlayed = true;
            correctAnswer.muted = false;
        } else {
            result.value = currentResult - 5;
            //gameAnswer.textContent = 'Не угадали';

            gameAnswer.appendChild(notCorrectAnswer);
            videoPlayed = true;
            notCorrectAnswer.muted = false;

            let Startcorrect = document.getElementById("Image" + randstart);

            setTimeout(function () {
                Startcorrect.style.transition = "transform 1s ease-in-out";
                Startcorrect.style.transform = "translateY(-150px)";
            }, 500);
        
            setTimeout(function () {
                Startcorrect.style.transition = "transform 1s ease-in-out";
                Startcorrect.style.transform = "translateY(0)";
            }, 2000);
        }
        fisrtFlag = false;
    }
    else{
        if (index === randomIndex) {
            result.value = currentResult + 5;

            if(result.value == 10){
                gameAnswer.appendChild(mln40);
                videoPlayed = true;
                mln40.muted = false;
            }
            else{
                gameAnswer.appendChild(correctAnswer);
                videoPlayed = true;
                correctAnswer.muted = false;
            }
            // gameAnswer.textContent = 'Верно';
        } else {
            result.value = currentResult - 5;
            //gameAnswer.textContent = 'Не угадали';

            if(result.value == -10){
                gameAnswer.appendChild(nishy);
                videoPlayed = true;
                nishy.muted = false;
            }
            else{
                gameAnswer.appendChild(notCorrectAnswer);
                videoPlayed = true;
                notCorrectAnswer.muted = false;
            }

            let Gamecorrect = document.getElementById("Image" + randomIndex);

            setTimeout(function () {
                Gamecorrect.style.transition = "transform 1s ease-in-out";
                Gamecorrect.style.transform = "translateY(-150px)";
            }, 500);
        
            setTimeout(function () {
                Gamecorrect.style.transition = "transform 1s ease-in-out";
                Gamecorrect.style.transform = "translateY(0)";
            }, 2000);
        }
    }   

    setTimeout(() => {
        isAnimating = false;
        randomIndex = getRandomInt(0, 2);
        moveBoll(randomIndex);
    }, 3500);
}

  
function refresh() {
    var result = document.getElementById("result");
    var images = document.querySelectorAll('.nap img');
    var boll = document.querySelector('.boll');
    var gameAnswer = document.querySelector('.GameAnswer');

    for (var i = 0; i < images.length; i++) {
        images[i].style.width = 360 + 'px';
        images[i].style.height = 360 + 'px';
    }

    boll.style.width = 90 + 'px';
    boll.style.height = 90 + 'px';

    var notCorrectAnswer = document.createElement('video');
    notCorrectAnswer.src = 'http://127.0.0.1:5501/videos/Возня2.mp4';

    var videoPlayed = false;

    notCorrectAnswer.controls = false;
    notCorrectAnswer.autoplay = true;
    notCorrectAnswer.loop = false;
    notCorrectAnswer.muted = true;
    notCorrectAnswer.width = 400;
    notCorrectAnswer.height = 300;

    notCorrectAnswer.addEventListener('ended', function() {
        gameAnswer.removeChild(notCorrectAnswer);
    });

    gameAnswer.appendChild(notCorrectAnswer);
    videoPlayed = true;
    notCorrectAnswer.muted = false;

    result.value = 0;
}