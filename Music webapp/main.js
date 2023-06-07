bara_time_song= "";
ham_star_song= "";


function setup(){
    canvas = createCanvas(600,530);
    canvas.center();

    video= createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video, 0, 0, 600, 530);
}

function preload()
{
    bara_time_song = loadSound("ham_star.mp3");
    ham_star_song = loadSound("bara_time.mp3");
}
