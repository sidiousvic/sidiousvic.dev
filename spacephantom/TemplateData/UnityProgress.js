function UnityProgress(gameInstance, progress) {
  if (!gameInstance.Module) return;
  if (!gameInstance.logo) {
    gameInstance.logo = document.createElement("div");
    gameInstance.logo.className =
      "logo " + gameInstance.Module.splashScreenStyle;
    gameInstance.container.appendChild(gameInstance.logo);
  }
  if (!gameInstance.progress) {
    gameInstance.progress = document.createElement("div");
    gameInstance.progress.className =
      "progress " + gameInstance.Module.splashScreenStyle;
    gameInstance.progress.empty = document.createElement("div");
    gameInstance.progress.empty.className = "empty";
    gameInstance.progress.appendChild(gameInstance.progress.empty);
    gameInstance.progress.full = document.createElement("div");
    gameInstance.progress.full.className = "full";
    gameInstance.progress.appendChild(gameInstance.progress.full);
    gameInstance.container.appendChild(gameInstance.progress);
  }
  gameInstance.progress.full.style.width = 100 * progress + "%";
  gameInstance.progress.empty.style.width = 100 * (1 - progress) + "%";
  if (progress == 1)
    gameInstance.logo.style.display = gameInstance.progress.style.display =
      "none";
}

let counter = 20;
const loader = setInterval(() => {
  console.log(counter);
  loadingMsg = document.querySelector("#loadingMsg");
  if (counter >= 0) loadingMsg.innerText += "/";
  counter--;
}, 500);

setTimeout(() => {
  loading = document.querySelector(".loading");
  loading.style.display = "none";
  clearInterval(loader);
}, 15000);
