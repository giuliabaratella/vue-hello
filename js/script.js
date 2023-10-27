const { createApp } = Vue;

createApp({
    data() {
        return{
            message: 'Ho stampato un messaggio con Vue'
        }
    }
}).mount('#app')