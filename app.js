// Telegram WebApp API'yi başlat
Telegram.WebApp.ready();

// Query ID'yi al
let queryID = Telegram.WebApp.initDataUnsafe.query_id;

// Bot tokeninizi ve chat_id'nizi girin
let botToken = 'YENİ_BOT_TOKENINIZ';  // BotFather'dan aldığınız token
let chatId = 'KULLANICI_CHAT_ID';     // Kullanıcının chat_id'sini girin

// Bot API URL'si
let botUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

// Query ID'yi botunuza gönderin
fetch(botUrl, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        chat_id: chatId,
        text: `Alınan Query ID: ${queryID}`
    })
})
.then(response => response.json())
.then(data => {
    console.log("Bot yanıtı:", data);
    document.getElementById('status').innerText = "Query ID gönderildi.";
})
.catch(error => {
    console.error("Hata oluştu:", error);
    document.getElementById('status').innerText = "Hata oluştu.";
});
