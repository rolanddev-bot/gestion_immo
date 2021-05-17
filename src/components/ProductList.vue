<template>
    <div class="d-flex justify-content-stretch flex-wrap">
       <ProductCard v-for="product in products" :key="product.id" :product="product" />
    </div>
</template>

<script>
import ProductCard from './ProductCard'
import {mapActions, mapState} from "vuex"
export default {
    components:{
        ProductCard
    },
    
    computed:{ 
        ...mapState("product",["products"])   
    },

   
    methods:{
        ...mapActions("product",["getProducts"])
    },

     mounted(){
        this.getProducts();
    }
    
    
}
</script>