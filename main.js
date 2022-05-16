Webcam.set({
width: 350,
height: 300,
image_format: 'png',
png_quality: 90
});

camera = document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot() {
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="capture_image" src="'+data_uri+'"/>';
    });
}
console.log("ml5 version is", ml5.version);


classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/FBuqrYfB8/model.json", modelloaded);

function modelloaded() {
    console.log("Model Is Loaded");
}

function identify() {
    img = document.getElementById('capture_image');
    classifier.classify(img, gotResult);
}

function gotResult(error,results) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(results);
        document.getElementById("result_emotion_name").innerHTML = results[0].label;
        prediction = results[0].label;
        
        speak();
        if(results[0].label == "happy") {
            document.getElementById("update_emoji").innerHTML = "&#128522;";
        }

        if(results[0].label == "sad") {
            document.getElementById("update_emoji").innerHTML = "&#128532;";
        }

        if(results[0].label == "angry") {
            document.getElementById("update_emoji").innerHTML = "&#128548;";
        }
