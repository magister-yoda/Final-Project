function setup() {
    var socket = io();
    var side = 15;
    var matrix = [];

    let weatherCountElement = document.getElementById('weather');

    let grassCountElement = document.getElementById('grassCount');
    let grassLiveCountElement = document.getElementById('grassLiveCount');

    let grassEaterCountElement = document.getElementById('grassEaterCount');
    let grassEaterLiveCountElement = document.getElementById('grassEaterLiveCount');

    let hunterCountElement = document.getElementById('hunterCount');
    let hunterLiveCountElement = document.getElementById('hunterLiveCount');

    let predatorCountElement = document.getElementById('predatorCount');
    let predatorLiveCountElement = document.getElementById('predatorLiveCount');

    let tradeCountElement = document.getElementById('tradeCount');
    let tradeLiveCountElement = document.getElementById('tradeLiveCount');

    let waterCountElement = document.getElementById('waterCount');
    let waterLiveCountElement = document.getElementById('waterLiveCount');

    let fishCountElement = document.getElementById('fishCount');
    let fishLiveCountElement = document.getElementById('fishLiveCount');


    socket.on("data", drawCreatures);

    function drawCreatures(data) {



        matrix = data.matrix;
        weatherCountElement.innerText = data.weather;


        grassCountElement.innerText = data.grassCounter;
        grassLiveCountElement.innerText = data.grassLiveCounter;

        grassEaterCountElement.innerText = data.grassEaterCounter;
        grassEaterLiveCountElement.innerText = data.grassEaterLiveCounter;

        hunterCountElement.innerText = data.hunterCounter;
        hunterLiveCountElement.innerText = data.hunterLiveCounter;

        predatorCountElement.innerText = data.predatorCounter;
        predatorLiveCountElement.innerText = data.predatorLiveCounter;

        tradeCountElement.innerText = data.tradeCounter;
        tradeLiveCountElement.innerText = data.tradeLiveCounter;

        waterCountElement.innerText = data.waterCounter;
        waterLiveCountElement.innerText = data.waterLiveCounter;

        fishCountElement.innerText = data.fishCounter;
        fishLiveCountElement.innerText = data.fishLiveCounter;



        createCanvas(matrix[0].length * side, matrix.length * side)

        background('#acacac');

        for (var i = 0; i < matrix.length; i++) {
            for (var j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j] == 1) {
                    if (data.weather == "summer") {
                        fill("green");
                    } else if (data.weather == "autumn") {
                        fill("orange");
                    } else if (data.weather == "winter") {
                        fill("white");
                    } else if (data.weather == "spring") {
                        fill("rgb(123, 163, 107)");
                    }
                    rect(j * side, i * side, side, side);

                } else if (matrix[i][j] == 2) {
                    if (data.weather == "summer") {
                        fill("rgb(230,184,0)");
                    } else if (data.weather == "autumn") {
                        fill("rgb(255,204,0)");
                    } else if (data.weather == "winter") {
                        fill("rgb(255,209,26)");
                    } else if (data.weather == "spring") {
                        fill("rgb(255,214,51)");
                    }
                    rect(j * side, i * side, side, side);

                } else if (matrix[i][j] == 0) {
                    fill('#acacac');
                    rect(j * side, i * side, side, side);

                } else if (matrix[i][j] == 3) {
                    if (data.weather == "summer") {
                        fill("rgb(204,0,41)");
                    } else if (data.weather == "autumn") {
                        fill("rgb(230,0,46)");
                    } else if (data.weather == "winter") {
                        fill("rgb(230,0,46)");
                    } else if (data.weather == "spring") {
                        fill("rgb(255,26,71)");
                    }
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 4) {
                    fill('blue');
                    rect(j * side, i * side, side, side);

                } else if (matrix[i][j] == 5) {
                    fill('#41261B');
                    rect(j * side, i * side, side, side);
                }
                else if (matrix[i][j] == 6) {
                    fill('#3977ff');
                    rect(j * side, i * side, side, side);
                }
                else if (matrix[i][j] == 7) {
                    fill('gold');
                    rect(j * side, i * side, side, side);
                }


            }
        }
    }
}
