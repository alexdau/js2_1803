let app = new Vue({
    el: '#app',
    data: {
        // State - (React)
        //содержит набор внутренних "состояний" компонента
        url: 'https://raw.githubusercontent.com/Egorarefjev/online-store-api/master/responses/catalogData.json',
        items: [],
        info: 'Hello Vue',

    },
    methods: {
        //методы компонента - которые делают
        async getData() {
            try {
                this.items = await fetch(this.url).then(d => d.json())
            }
            catch(err) {
                console.log(err)
            }
            finally {
                console.log(this.items)
            }
        }
    },
    computed: {
        //вычисляемые свойства
        // "методы", которые возвращают
    },

    //хуки жизненного цикла
    mounted() {
        //когда компонент монтируется в DOM
        // console.log('I am ready')
        this.getData()
    },
    beforeMount() {
        console.log('I want to mount somewhere')
    },
})
