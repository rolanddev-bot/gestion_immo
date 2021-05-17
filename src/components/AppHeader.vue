<template>
  <div>
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <div class="container">
        <div class="nav navbar-nav">
          <router-link to="/" class="nav-tem nav-link">Home</router-link>

          <router-link to="/Productslist" class="nav-item nav-link"
            >Product</router-link
          >
          <router-link to="/Login" class="nav-item nav-link">Login</router-link>

          <router-link to="/Register" class="nav-item nav-link"
            >Register</router-link
          >
        </div>

        <div>
          <div class="dropdown open">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              id="triggerId"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {{ CartItemCount }} Cart
            </button>
            <div @click="$event.stopPropagation()">
              <mini-cart />
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import MiniCart from "./MiniCart";
import { mapGetters } from "vuex";

export default {
  components: { MiniCart },

  computed: {
    ...mapGetters("cart", ["CartItemCount"]),
  },
};
</script>

<style>
</style>