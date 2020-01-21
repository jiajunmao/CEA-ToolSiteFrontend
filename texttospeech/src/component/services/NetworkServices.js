export function ttsRequest(input, speed, pitch, callback) {

    var request = new XMLHttpRequest();
    var data = "";
    request.open('POST', 'http://thinkpad.kentailab.org:8082/SpringText/tts/request', true);
    request.setRequestHeader('Access-Control-Allow-Origin', '*');
    request.setRequestHeader('Content-Type', 'application/json');

    var requestBody = '{'
        + '"email" : "text@test.com",'
        + '"requestText" : "' + input + '",'
        + '"speakingSpeed" : ' + speed + ','
        + '"pitch" : ' + pitch
        + '}'

    request.send(requestBody)

    request.onreadystatechange = (e) => {

        if (request.readyState === XMLHttpRequest.DONE && request.status === 200) {
            data = JSON.parse(request.responseText)
            callback(data["filename"])
        }
    }
}

export function download(filename, callback) {
    var fileUrl = "http://thinkpad.kentailab.org:8082/SpringText/download/" + filename;
    window.location.href = fileUrl;
    callback();
}