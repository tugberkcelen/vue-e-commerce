<template>
  <!-- Header start -->
  <header class="main-header">
    <!-- Header top start -->
    <div class="header-top">
      <div class="container">
        <div class="sign">
          <a href="login.html"> Sign or Register </a>
        </div>
      </div>
      <!-- Header top finish -->
    </div>
    <!-- Header bottom start -->
    <div class="header-bottom">
      <div class="container">
        <div class="bottom-wrapper">
          <!-- Logo start -->
          <a href="/" class="logo"> E-commerce</a>
          <!-- Logo finish -->
          <!-- Main menu start -->
          <nav class="main-menu">
            <a href="/" class="nav-item">Anasayfa</a>
            <a href="/urun-detay.html" class="nav-item">Ürün Detay</a>
            <a href="/urunler.html" class="nav-item">Ürünler</a>
            <a href="/" class="nav-item">Hakkımızda</a>
            <a href="/" class="nav-item">İletişim</a>
          </nav>
          <!-- Main menu finish -->
          <!-- Cart start -->
          <mini-cart />
          <!-- Cart finish -->
        </div>
      </div>
    </div>
    <!-- Header bottom finish -->
  </header>
  <!-- Header Finish -->
</template>

<script>
import MiniCart from '@/components/MiniCart'
import { mapState } from 'vuex'
export default {
  name: 'Header',

  components: {
    MiniCart
  },


  computed: {
    ...mapState(['cart'])
  },
}
</script>

<style>
</style>