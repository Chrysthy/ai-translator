let inputText = document.querySelector(".input-text")

async function translate() {

    let url = "https://api.mymemory.translated.net/get?q="
        + inputText.value
        + "&langpair=pt-BR|en"

    let resposta = await fetch(url)

    let data = await resposta.json()

    console.log(data)

}
