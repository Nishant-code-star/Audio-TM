function start(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/LDA-l1AMS/model.json",modelready);
}

function modelready(){
    classifier.classify(gotresults);
}

function gotresults(error,results){
    console.log("gotresult")
}