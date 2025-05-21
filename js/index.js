document.querySelector(".pashalka").addEventListener("click", (event) => {
    document.body.innerHTML = '<img style="width: 100vw; height: 100vh;" src="img/soggycat.webp" alt=""><audio autoplay src="https://wh1teheaven1337wat.github.io/Homiverse/img/pashalco.mp3" class="player"></audio>'
});
document.querySelector(".pashalka2").addEventListener("click", (event) => {
    document.body.innerHTML = '<img style="width: 100vw; height: 100vh;" src="img/soggycat.webp" alt=""><audio autoplay src="https://wh1teheaven1337wat.github.io/Homiverse/img/pashalco.mp3" class="player"></audio>'
});
document.querySelector(".pashalka3").addEventListener("click", (event) => {
    document.body.innerHTML = '<img style="width: 100vw; height: 100vh;" src="img/soggycat.webp" alt=""><audio autoplay src="https://wh1teheaven1337wat.github.io/Homiverse/img/pashalco.mp3" class="player"></audio>'
});


window.fetch('https://api.gamemonitoring.ru/servers/9287429')
.then((response) => response.json())
.then((data) => document.querySelector(".online").textContent = data.response.numplayers)

setInterval(() => {
    window.fetch('https://api.gamemonitoring.ru/servers/9287429')
.then((response) => response.json())
.then((data) => document.querySelector(".online").textContent = data.response.numplayers)
}, 30000)