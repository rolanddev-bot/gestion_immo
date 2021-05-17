<template>
  <div>
    <div class="container mt-5">
      <button
        class="btn btn-success"
        data-toggle="modal"
        data-target="#myModal"
      >
        Add product
      </button>
      <table class="table table-bordered mt-3">
        <thead>
          <th>nom</th>
          <th>description</th>
          <th>prix</th>
          <th>quantite</th>
          <th>action</th>
        </thead>
        <tbody>
          <tr v-for="product in products" :key="product.id">
            <td>{{ product.title }}</td>
            <td>{{ product.description }}</td>
            <td>{{ product.price }}</td>
            <td>{{ product.quantity }}</td>
            <td>
              <a
                class="btn btn-primary"
                @click="EditProd(product.id)"
                data-toggle="modal"
                data-target="#myEditModal"
                >update</a
              >
              <a class="btn btn-danger" @click="deleteProd(product.id)"
                >delete</a
              >
            </td>
          </tr>
        </tbody>
      </table>

      <!-- The Modal -->
      <div class="modal" id="myModal">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <!-- Modal Header -->
            <div class="modal-header">
              <h4 class="modal-title">Fiche Produit</h4>
              <button type="button" class="close" data-dismiss="modal">
                &times;
              </button>
            </div>

            <!-- Modal body -->
            <div class="modal-body">
              <div class="form-group">
                <label for="">Nom produit</label>
                <input
                  type="text"
                  class="form-control"
                  id="title"
                  name="title"
                  v-model="FormData.title"
                />
              </div>

              <div class="form-group">
                <label for="">Prix</label>
                <input
                  type="number"
                  class="form-control"
                  v-model="FormData.price"
                  name="price"
                  id="price"
                />
              </div>

              <div class="form-group">
                <label for="">Quantité</label>
                <input
                  type="number"
                  class="form-control"
                  v-model="FormData.quantity"
                  name="quantity"
                  id="quantity"
                />
              </div>
              <div class="form-group">
                <label for="">Description</label>
                <textarea
                  v-model="FormData.description"
                  name="description"
                  id="description"
                  cols="3"
                  rows="3"
                  class="form-control"
                ></textarea>
              </div>
            </div>

            <!-- Modal footer -->
            <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-dismiss="modal">
                Close
              </button>
              <button
                type="button"
                @click.prevent="ajouterproduit"
                class="btn btn-primary"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- The Modal To Edit -->
      <div class="modal" id="myEditModal">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <!-- Modal Header -->
            <div class="modal-header">
              <h4 class="modal-title">Edit Fiche Produit</h4>
              <button type="button" class="close" data-dismiss="modal">
                &times;
              </button>
            </div>

            <!-- Modal body -->
            <div class="modal-body">
              <div class="form-group">
                <label for="">Nom produit</label>
                <input
                  type="text"
                  class="form-control"
                  id="title"
                  name="title"
                  v-model="product.title"
                />

                <input type="hidden" name="id" id="id" v-model="product.id" />
              </div>

              <div class="form-group">
                <label for="">Prix</label>
                <input
                  type="number"
                  class="form-control"
                  v-model="product.price"
                  name="price"
                  id="price"
                />
              </div>

              <div class="form-group">
                <label for="">Quantité</label>
                <input
                  type="number"
                  class="form-control"
                  v-model="product.quantity"
                  name="quantity"
                  id="quantity"
                  value="product.quantity"
                />
              </div>
              <div class="form-group">
                <label for="">Description</label>
                <textarea
                  v-model="product.description"
                  name="description"
                  id="description"
                  cols="3"
                  rows="3"
                  class="form-control"
                ></textarea>
              </div>
            </div>

            <!-- Modal footer -->
            <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-dismiss="modal">
                Close
              </button>
              <button
                type="button"
                @click.prevent="Updateproduct"
                class="btn btn-primary"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      FormData: {
        title: "",
        price: "",
        description: "",
        quantity: "",
        image: "",
      },
      id: "",
      product: {},
    };
  },

  computed: {
    ...mapState("product", ["products"]),
    // ...mapState("product", ["product"]),
  },

  methods: {
    ...mapActions("product", [
      "getProducts",
      "AddProduct",
      "DeleteProduct",
      "UpdateProduct",
      "EditProduct",
      "getProduct",
    ]),

    ajouterproduit() {
      var newVariable = {
        title: this.FormData.title,
        price: this.FormData.price,
        description: this.FormData.description,
        quantity: this.FormData.quantity,
        image: this.FormData.image,
      };

      this.AddProduct(newVariable),
        //"#myModal".modal("hide");
        (this.FormData = {
          title: "",
          price: "",
          description: "",
          quantity: "",
        });
    },

    Updateproduct() {
      var DataToUpdate = {
        id:this.product.id,
        title:this.product.title,
        price:this.product.price,
        description:this.product.description,
        quantity:this.product.quantity,

      };

      this.UpdateProduct(DataToUpdate);
    },

    deleteProd(idp) {
      if (confirm("voulez supprimer cet Element")) {
        this.DeleteProduct(idp);
      }
      this.getProducts();
    },

    EditProd(id) {
      this.product = this.products.find((item) => item.id == id);
    },
  },

  mounted() {
    this.getProducts();
  },
};
</script>
