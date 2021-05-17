<template>
  <div
    class="dropdown-menu p-2"
    style="min-width:320px; right:0; left:auto"
    aria-labelledby="triggerId"
  >
    <div v-for="item in cart" :key="item.product.id">
      <div class="px-2 d-flex justify-content-between">
        <div>
          <strong>{{ item.product.title}}</strong>
          <br /><p> {{ item.quantity}} x {{ item.product.price}}FCFA =><b class="ml-3"> {{ item.quantity * item.product.price }} FCFA</b></p>
         
        </div>
        <div>
          <a
            href="#"
            class="badge badge-secondary"
            @click.prevent="RemoveCartItem(item.product)" 
          >Supprimer</a>
        </div>
      </div>
      <hr />
    </div>

    <div class="d-flex justify-content-between">
      <span>Total: {{ TotalPrice }} FCFA</span>
      <a  class="ml-3" href="#" @click.prevent="RemoveAllCartItem()">Vider</a> 
      <a href="#" @click.prevent="RemoveAllProduct()">Voir</a> 
    </div>
  </div>
</template>

<script>
import {mapGetters, mapState, mapActions} from "vuex"
export default {

  computed:{

   
   ...mapState("cart",["cart"]), 

    ...mapGetters("cart",["TotalPrice"])
  },

 
  methods:{
    ...mapActions("cart",[
      "RemoveCartItem",
      "RemoveAllCartItem",
      "getCartItems"
      ])
   
  },
  
   mounted() {
    this.getCartItems();
  },
  
};
</script>

<style>
</style>