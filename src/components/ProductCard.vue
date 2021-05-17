<template>
  <div class="col-3 mt-5">
    <div class="card text-left" style="width: 20rem">
      <img v-bind:src="product.image" class="card-img-top w-100" alt="..." />
      <div class="card-body">
        <h5 class="card-title">
          <router-link :to="{ name: 'product', params: { id: product.id } }">{{
            product.title
          }}</router-link>
        </h5>
        <strong>prix: {{ product.price }} FCFA</strong>

        <p class="card-text">{{ product.description }}</p>
        <div>
          <a class="btn btn-primary" @click="addToCart()">Add to cart</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: ["product"],

  methods: {
    ...mapActions("cart", ["addProductToCart"]),

    addToCart() {
      return this.addProductToCart({
        product: this.product,
        quantity: 1,
      });
    },
  },
};
</script>

<style>
</style>