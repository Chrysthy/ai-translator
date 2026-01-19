let inputText = document.querySelector(".input-text");
let translateText = document.querySelector(".translation");
let languageSelect = document.querySelector(".language");

async function translationText() {

    let url = "https://api.mymemory.translated.net/get?q="
        + inputText.value
        + "&langpair=en|"
        + languageSelect.value;

    let resposta = await fetch(url)

    let data = await resposta.json()

    translateText.textContent = data.responseData.translatedText;

}

function hearVoice() {

    let speech = window.webkitSpeechRecognition
    let recognition = new speech();

    recognition.lang = "en";
    recognition.onresult = (event) => {

        let transcript = event.results[0][0].transcript;
        inputText.textContent = transcript;

        translationText();

    }

    recognition.start();
}