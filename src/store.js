import Vuex from 'vuex';

export const store = new Vuex.Store({
    state: {
        products: [
            {
                name: "Iphone 13| Chính hãng VNA",
                price: 24990000,
                newPrice: 23490000,
                image: "/image/iphone-13b.jpg",
                brand: 'Apple',
                id: '1',
            },
            {
                name: "Iphone 11| Chính hãng VNA",
                price: 24990000,
                newPrice: 23490000,
                image: "/image/iphone11c.jpg",
                brand: 'Apple',
                id: "2"
            },
            {
                name: "Iphone 12| Chính hãng VNA",
                price: 24990000,
                newPrice: 23490000,
                image: "/image/iphone-12.jpg",
                brand: 'Apple',
                id: "3",
            },
            {
                name: "Iphone X| Chính hãng VNA",
                price: 24990000,
                newPrice: 23490000,
                image: "/image/iphonexb.jpg",
                brand: 'Apple',
                id: "4"
            },
            {
                name: "Iphone 13 Pro Max",
                price: 40990000,
                newPrice: 34490000,
                image: "/image/iphone_13-a.jpg",
                brand: 'Apple',
                id: "5",
            },
            {
                name: "Iphone 12 Pro Max",
                price: 30000000,
                newPrice: 25000000,
                image: "/image/iphone-12.jpg",
                brand: 'Apple',
                id: "6"
            },
            {
                name: "Iphone 11 Pro Max",
                price: 34990000,
                newPrice: 21490000,
                image: "/image/iphone-11.webp",
                brand: 'Apple',
                id: "7"
            },
            {
                name: "Iphone 8 Plus",
                price: 1199000,
                newPrice: 8490000,
                image: "/image/iphone_8.jpg",
                brand: 'Apple',
                id: "8"
            },


            {
                name: "SamSung Galaxy A03",
                price: 24990000,
                newPrice: 23490000,
                image: "/image/a03s.jpg",
                brand: 'Samsung',
                id: "9"
            },
            {
                name: "SamSung Galaxy A12",
                price: 18000000,
                newPrice: 16000000,
                image: "/image/a12.jpg",
                brand: 'Samsung',
                id: "10"
            },
            {
                name: "SamSung Z Fold 3",
                price: 22990000,
                newPrice: 19400000,
                image: "/image/zfold3.jpg",
                brand: 'Samsung',
                id: "11"
            },
            {
                name: "SamSung S20 FE",
                price: 11990000,
                newPrice: 9490000,
                image: "/image/f20fe.jpg",
                brand: 'Samsung',
                id: "12"
            },
            {
                name: "SamSung Galaxy Z Flip",
                price: 40990000,
                newPrice: 36490000,
                image: "/image/zflip.webp",
                brand: 'Samsung',
                id: "12"
            },
            {
                name: "SamSung S20 Ultra",
                price: 30000000,
                newPrice: 25000000,
                image: "/image/sss1.jpg",
                brand: 'Samsung',
                id: "14"
            },
            {
                name: "SamSung Note 20Ultra",
                price: 34990000,
                newPrice: 21490000,
                image: "/image/ssn1.jpg",
                brand: 'Samsung',
                id: "15"
            },
            {
                name: "SamSung Galaxy",
                price: 11990000,
                newPrice: 8490000,
                image: "/image/a52s.webp",
                brand: 'Samsung',
                id: "16"
            },



        ],
        myCart: [],
    },
    mutations: {
        addProductToCart(state, product) {
            state.myCart.push({productId: product.productId, quality: product.quality})
        },
        removeProductFromCart(state, productId) {
            state.myCart = state.myCart.filter(product => product.productId !== productId)
        },
        resetCart(state) {
            state.myCart = []
        }

    },
    actions: {

    },
    getters: {

    },
});


export default store;