const fileEl = document.getElementById("file");
const btnEl = document.getElementById("btn");

const emoji = [];

const apiKey ="https://emoji-api.com/emojis?access_key=5bbdfcedd88f14e7e0e01a3aa37385c931ec80aa";

async function addGetEmoji() {
    let response = await fetch(apiKey);
    data = await response.json();
    console.log(data);
    for (let i = 0; i < 1500; i++) {
        emoji.push({
            emojiName: data[i].character,
            emojiCode: data[i].group,
        });
    }
}
addGetEmoji();

btnEl.addEventListener("click", () => {
    const randomnumber = Math.floor(Math.random() * emoji.length);
    btnEl.innerText = emoji[randomnumber].emojiName;
    fileEl.innerText = emoji[randomnumber].emojiCode;
});
