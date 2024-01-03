document.getElementById('btn').addEventListener('click', function () {
    var textToSpeak = document.getElementById('textToSpeak').value;

    if ('speechSynthesis' in window) {
        var speech = new SpeechSynthesisUtterance();
        speech.default=false
                  speech.lang="hi-IN"
                  speech.localService=false
                  speech.name="Google हिन्दी"
                  speech.voiceURI="Google हिन्दी"
        speech.text = textToSpeak;

        window.speechSynthesis.speak(speech);
    } else {
        alert('Text-to-speech is not supported in this browser. Please try a different one.');
    }
});