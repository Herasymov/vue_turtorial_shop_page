const app = Vue.createApp({
    data: function() {
        return {
            cart: 0,
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            inStock: false,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'blue', image: './assets/images/socks_blue.jpg' },
                { id: 2235, color: 'green', image: './assets/images/socks_green.jpg' },
            ]
        }
    },
    methods: {
        addToCart() {
            this.cart += 1

        },
        updateImage(variantImage){
            this.image = variantImage
        }
    }
})