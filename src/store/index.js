import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  // Veriyi tutucağımız yer
  state: {
    products: [],
    cart: [],
    getCart: []

  },
  //Actionsdan gelen veriyi statede güncelle
  mutations: {
    setProducts(state, getProducts) {
      state.products = getProducts
    },
    createdProducts(state, cartGetProduct) {
      state.cart = cartGetProduct
    },
    setCart(state, getCart) {
      state.getCart = getCart
    }
  },

  //Veriyi veritabanından al
  actions: {
    async fetchData({ commit }) {
      const getProducts = await axios.get('http://localhost:3000/products').then(result => result.data)
      commit('setProducts', getProducts)
    },

    async addToCart({ commit, dispatch }, status) {
      delete status.id
      const cartGetProduct = await axios.post('http://localhost:3000/cart', status)
      commit('createdProducts', cartGetProduct)
      dispatch('fetchCart')
    },

    async fetchCart({ commit }) {
      const getCart = await axios.get('http://localhost:3000/cart').then(result => result.data)
      commit('setCart', getCart)
    }
  },




})
