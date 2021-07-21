<template>
  <!-- Product container start -->
  <div class="product-container">
    <div class="container">
      <div class="title-heading">
        <h2 class="title">Ürünler</h2>
      </div>
      <!-- Product wrapper start -->
      <div class="product-wrapper">
        <div v-for="product in products" :key="product.id" class="product-box">
          <router-link :to="`/product/${product.id}`">
            <img class="product-img" :src="product.img" alt="" />
            <h3 class="product-title">{{ product.Title }}</h3>
            <span class="price">{{ product.Price }}$</span>
          </router-link>
          <a @click="addToCart(product)" class="add-to-cart">Sepete Ekle</a>
        </div>
      </div>
      <!-- Product wrapper finish -->
    </div>
  </div>
  <!-- Product container finish -->
</template>

<script>
import { mapState } from 'vuex'
export default {

  mounted() {
    this.$store.dispatch('fetchData')
  },
  computed: {
    ...mapState(['products'])
  },
  methods: {
    addToCart(product) {

      this.$store.dispatch('addToCart', product)
      console.log(product)
    }
  }

}
</script>

<style>
</style>