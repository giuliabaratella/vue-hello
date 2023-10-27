const { createApp } = Vue;

createApp({
    data() {
        return{
            message: 'Ho stampato un messaggio con Vue',
            picture: 'img/yay.png'
        }
    }
}).mount('#app')