const tg = window.Telegram.WebApp;


export function useTelegram() {

    return {
        username: tg.initDataUnsafe.user.username
    }
    
}