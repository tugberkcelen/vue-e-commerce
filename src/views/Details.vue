<template>
  <Header />
  <!-- Product details start -->
  <div class="product-details">
    <div class="container">
      <div class="product-wrapper">
        <!-- Product left content start -->
        <div class="product-image">
          <img :src="productData.img" alt="" class="product-img" />
        </div>
        <!-- Product left content finish -->
        <div class="product-content">
          <h2 class="product-title">{{ productData.Title }}</h2>
          <p class="single-product-content">
            {{ productData.Description }}
          </p>
          <span class="product-price"> {{ productData.Price }} $ </span>
          <span class="maker">
            Maker: <strong>{{ productData.Maker }}</strong>
          </span>
          <div class="tt-row-content">
            <Quantity />
            <a href="" class="add-product-cart">Add To Cart</a>
          </div>
        </div>
        <!-- Product right content start -->
        <!-- Product comment start -->

        <!-- Product comment finish -->
      </div>

      <!-- Product right content finish -->
    </div>
  </div>
  <!-- Product details finish -->
</template>


<script>
import Header from '@/components/Header'
import Quantity from '@/components/Quantity'
import axios from 'axios'
export default {
  components: {
    Header, Quantity
  },
  data() {
    return {
      productData: {},
    }
  },
  async created() {
    this.getProductList()
  },

  methods: {
    async getProductList() {
      const { id } = this.$route.params
      const getProduct = await axios.get(`http://localhost:3000/products/${id}`).then(result => result.data)
      console.log(getProduct)
      this.productData = getProduct
    }
  }
}
</script>

<style>
</style>