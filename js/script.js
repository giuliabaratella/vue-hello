const { createApp } = Vue;

createApp({
    data() {
        return{
            message: 'Ho stampato un messaggio con Vue',
            picture: 'img/yay.png',
            isPink: true
        }
    },
    methods: {
        changeColor(){
            this.isPink = !this.isPink;
        }
    }

}).mount('#app')