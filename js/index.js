document.querySelector(".pashalka").addEventListener("click", (event) => {
    document.body.innerHTML = '<img style="width: 100vw; height: 100vh;" src="img/soggycat.webp" alt=""><audio autoplay src="https://wh1teheaven1337wat.github.io/Homiverse/img/pashalco.mp3" class="player"></audio>'
});
document.querySelector(".pashalka2").addEventListener("click", (event) => {
    document.body.innerHTML = '<img style="width: 100vw; height: 100vh;" src="img/soggycat.webp" alt=""><audio autoplay src="https://wh1teheaven1337wat.github.io/Homiverse/img/pashalco.mp3" class="player"></audio>'
});
document.querySelector(".pashalka3").addEventListener("click", (event) => {
    document.body.innerHTML = '<img style="width: 100vw; height: 100vh;" src="img/soggycat.webp" alt=""><audio autoplay src="https://wh1teheaven1337wat.github.io/Homiverse/img/pashalco.mp3" class="player"></audio>'
});

document.querySelector(".downBtn").addEventListener("click", (event) => {
    window.scrollTo({
        top: 700,
        behavior: 'smooth'
    });
})

document.querySelector(".runPlay").addEventListener("click", (event) => {
    window.open("steam://connect/185.159.128.74:27015", "_blank");
})
document.querySelector(".runConnect").addEventListener("click", (event) => {
    navigator.clipboard.writeText("connect 185.159.128.74");
})
document.querySelector(".runDiscord").addEventListener("click", (event) => {
    window.open("https://discord.gg/EKQTNvKJHB", "_blank");
})


window.fetch('https://api.gamemonitoring.ru/servers/9287429')
    .then((response) => response.json())
    .then((data) => document.querySelector(".online").textContent = data.response.numplayers)

setInterval(() => {
    window.fetch('https://api.gamemonitoring.ru/servers/9287429')
        .then((response) => response.json())
        .then((data) => document.querySelector(".online").textContent = data.response.numplayers)
}, 30000)