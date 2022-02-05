//link- https://teachablemachine.withgoogle.com/models/BmVjCiMV9/model.json 

function start(){
    navigator.mediaDevices.getUserMedia({
        audio:true
    });
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/BmVjCiMV9/model.json",modelReady);
}
function modelReady(){
    classifier.classify(getResult);
}

function getResult(error,results){
    console.log(results);
}