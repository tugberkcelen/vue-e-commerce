<template>
  <div class="quantity">
    <span @click="changeQuantity(false)" class="minis-btn">-</span>
    <input v-model="quantity_count" type="text" />
    <span @click="changeQuantity(true)" class="plus-btn">+</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      quantity_count: '1'
    }
  },

  methods: {
    changeQuantity(status) {
      if (!status) {

        if (this.quantity_count > 1) {
          this.quantity_count--
        }
      }
      else {
        this.quantity_count++
      }
    }
  }
}
</script>

<style>
</style>