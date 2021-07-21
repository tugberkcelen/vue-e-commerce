<template>
  <!-- Cart start -->
  <div class="cart">
    <router-link class="cart-icon" :to="'cart'">
      <i class="fas fa-shopping-bag"></i>
      <span class="total-price">240$</span>
    </router-link>
    <!-- Sub-cart start -->
    <div class="sub-cart">
      <!-- Cart item start -->
      <div v-for="cart in getCart" :key="cart.id" class="cart-item">
        <a href="">
          <img :src="cart.img" alt="" class="cart-img" />
        </a>
        <a href="/" class="delete-item">
          <i class="fas fa-times"></i>
        </a>
        <div class="cart-details">
          <a href="/" class="cart-title">{{ cart.Title }}</a>
          <div class="cart-total">
            <span class="quantity">1x</span>
            <span class="price">{{ cart.Price }} $</span>
          </div>
        </div>
      </div>
      <!-- Cart item finish -->
      <router-link :to="'cart'" class="cart-btn">Show Cart</router-link>
    </div>
    <!-- Sub-cart finish -->
  </div>
  <!-- Cart finish -->
</template>

<script>
import { mapState } from 'vuex'
export default {

  mounted() {
    this.$store.dispatch('fetchData')
    this.$store.dispatch('fetchCart')
  },

  computed: {
    ...mapState(['getCart'])
  },


}
</script>

<style>
</style>