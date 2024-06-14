<script>
import { formatNumber } from "@/helper/numberFormat.js";
import router from "@/router/index.js";
import cart from "@/components/page/Cart.vue";

export default {
  name: "Products",
  computed: {
    addedProduct() {
      return this.$store.state.myCart;
    },
  },
  props: {
    products: Array,
  },
  methods: {
    formatNumber,
    goToProduct(productId) {
      router.push(`products/${productId}`);
    },
    addProductToCart(productId) {
      if (
        !this.addedProduct.find((product) => product.productId === productId)
      ) {
        this.$store.commit("addProductToCart", {
          productId: productId,
          quality: 1,
        });
      }

      router.push({ name: "cart" });
    },
  },
};
</script>

<template>
  <div
    id="scrollspyProducts"
    data-bs-spy="scroll"
    data-bs-target="#navbar-example2"
    data-bs-offset="0"
    tabindex="0"
    class="row"
  >
    <div
      v-for="(product, index) in products"
      :key="index"
      class="col-3"
      style="margin-top: 20px"
    >
      <div class="item-product text-center">
        <div class="image">
          <a @click="goToProduct(product.id)">
            <img
              :src="product.image"
              style="width: 200px; height: 200px"
              alt="iphone13"
            />
          </a>

          <h4>{{ product.name }}</h4>
        </div>
        <div class="price-c">
          <p class="price">
            <s>{{ formatNumber(product.price) }} ₫</s> <br /><span
              class="giamoi"
              >{{ formatNumber(product.newPrice) }} ₫
            </span>
          </p>
        </div>
        <a>
          <button
            @click="addProductToCart(product.id)"
            type="button"
            class="btn btn-danger"
          >
            Mua hàng
          </button>
        </a>
        <a>
          <button
            @click="goToProduct(product.id)"
            type="button"
            class="btn btn-light"
          >
            Sản phẩm
          </button>
        </a>
      </div>
    </div>
    <hr style="margin-top: 15px" />
  </div>
</template>

<style scoped></style>
