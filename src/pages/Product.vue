<template>
   <div class="row mt-5" v-if="product">
     <div class="col-4">
       <img class="w-100" v-bind:src="product.image" alt="">
     </div>
     <div class="col-8">
       <h1>{{ product.title }} </h1>
       <h3>Prix : {{ product.price }} FCFA</h3>
       <input type="number" class="text-center col-1 mr-2 p-1" v-model.number="quantity">
       <button class="btn btn-danger" @click="addToCart">Add to cart</button>
       <p class="mt-4"> {{ product.description }} </p>
     </div>
   </div>
</template>

<script>
import { mapActions, mapState } from "vuex"
export default {
  
  props: ["id"],
  data() {
    return {
      quantity:1
    }
  },
  
   mounted(){
        this.getProduct(this.id);
    },

    computed:{
      
      
        ...mapState("product",["product"])
      
    },

    methods:{
     ...mapActions("cart",["addProductToCart"]),
     ...mapActions("product",["getProduct"]),
      addToCart(){
        return this.addProductToCart({
          product:this.product,
          quantity:this.quantity
        });
      }
  }

};
</script>

<style>
</style>