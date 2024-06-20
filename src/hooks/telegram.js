const tg = window?.Telegram?.WebApp;


export function useTelegram() {
    console.log(tg, "message")
    const user_name = tg.initDataUnsafe?.user?.username

    console.log(user_name)
    if (typeof user_name === 'undefined') {
        console.log(true)
        return {
            username : false
        }
    }else {
        console.log(false)
        return {
            username: user_name
        }
    }
}