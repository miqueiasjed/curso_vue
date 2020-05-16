new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        alertar() {
            alert('Estou alertando!')
        },
        keyDown(event) { 
            this.valor = event.target.value
        }
    }
})