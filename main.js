function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    }

    function draw(){
        circle(30, 30, 20);
        ellipse(56, 46, 55, 55);
        rect(30, 20, 55, 55);
    }

    Webcam.set.canvas({
        width: 360,
    height: 240,
    image_format: 'jpeg',
    jpeg_quality: 90

    })
    camera = document.getElementById("camera");