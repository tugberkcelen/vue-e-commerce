<template>
  <Header />
  <div class="slider-container">
    <div class="container">
      <h2>Slider Title</h2>
      <h3>Slider Sub Title</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui provident
        necessitatibus earum magnam assumenda pariatur nisi beatae illum
        voluptatem eum.
      </p>
    </div>
  </div>
  <product-list />
</template>
<script>  
import Header from '@/components/Header'
import ProductList from '@/components/ProductList'
export default {
  name: 'Home',
  components: {
    Header, ProductList
  }
}
</script>
