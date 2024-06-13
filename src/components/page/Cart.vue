<script>
import Header from "@/components/header/Header.vue";
import { formatNumber } from "@/helper/numberFormat.js";

export default {
  name: "Cart",
  components: { Header },
  data() {
    return {
      addedProduct: this.$store.state.myCart,
    };
  },
  computed: {
    addedProductStore() {
      return this.$store.state.myCart;
    },
    totalPrice() {
      let totalPrice = 0;
      this.addedProduct.forEach((product) => {
        totalPrice =
          totalPrice +
          this.getProductById(product.productId)?.newPrice * product.quality;
      });
      return totalPrice;
    },
    numberOfProduct() {
      let counter = 0;
      this.addedProduct.forEach((product) => {
        counter = counter + product.quality;
      });
      return counter;
    },
    allProducts() {
      return this.$store.state.products;
    },
    isEmptyCart() {
      return this.addedProduct.length === 0;
    },
  },
  mounted() {
    const toastTrigger = document.getElementById("liveToastBtn");
    const toastLiveExample = document.getElementById("liveToast");
    if (toastTrigger) {
      toastTrigger.addEventListener("click", function () {
        var toast = new bootstrap.Toast(toastLiveExample);

        toast.show();
      });
    }
  },
  methods: {
    getProductById(id) {
      return this.allProducts.find((item) => item.id === id);
    },
    formatNumber,
    updateQuality(value) {
      console.log(value);
    },
    removeProductFromCart(id) {
      this.$store.commit("removeProductFromCart", id);
    },
    onCheckout() {
      this.$store.commit("resetCart");
      this.$router.push({ name: "home" });
      alert("Thanh toan gio hang thanh cong");
    },
  },
  watch: {
    addedProductStore() {
      console.log("lololo");
      this.addedProduct = this.addedProductStore;
    },
  },
};
</script>

<template>
  <div class="container">
    <Header />

    <section class="h-100 h-custom" style="background-color: white">
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-12">
            <div
              class="card card-registration card-registration-2"
              style="border-radius: 15px"
            >
              <div class="card-body p-0">
                <div class="row g-0">
                  <div class="col-lg-8">
                    <div class="p-5">
                      <div
                        class="d-flex justify-content-between align-items-center mb-5"
                      >
                        <h1 class="cart-header-text fw-bold mb-0 text-black">
                          Giỏ Hàng
                        </h1>

                        <h6 class="mb-0 text-muted">
                          {{ numberOfProduct }} sản phẩm
                        </h6>
                      </div>
                      <hr class="my-4" />

                      <template v-if="isEmptyCart">
                        <div class="text-center">
                          Bạn chưa có sản phẩm nào trong giỏ hàng.
                        </div>
                      </template>
                      <template v-else>
                        <div
                          v-for="(product, index) in addedProduct"
                          :key="index"
                          class="row mb-4 d-flex justify-content-between align-items-center"
                        >
                          <div class="col-md-2 col-lg-2 col-xl-2">
                            <img
                              :src="getProductById(product.productId)?.image"
                              class="img-fluid rounded-3"
                              alt="Cotton T-shirt"
                            />
                          </div>
                          <div class="col-md-3 col-lg-3 col-xl-3">
                            <h6 class="text-muted">
                              {{ getProductById(product.productId)?.name }}
                            </h6>
                          </div>
                          <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                            <input
                              id="form1"
                              min="0"
                              name="quantity"
                              @change="updateQuality(product.quality)"
                              v-model="product.quality"
                              type="number"
                              class="form-control form-control-sm"
                            />
                          </div>
                          <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                            <h6 class="mb-0">
                              {{
                                formatNumber(
                                  getProductById(product.productId).newPrice *
                                    product.quality,
                                )
                              }}
                              đ
                            </h6>
                          </div>
                          <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                            <button
                              class="btn btn-danger"
                              @click="removeProductFromCart(product.productId)"
                            >
                              <i class="bi bi-trash"></i>
                            </button>
                          </div>
                        </div>
                      </template>

                      <hr class="my-4" />

                      <div class="pt-5">
                        <h6 class="mb-0">
                          <a
                            @click="$router.push({ name: 'home' })"
                            class="text-body"
                            ><i class="fas fa-long-arrow-alt-left me-2"></i>Trở
                            lại cửa hàng</a
                          >
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 bg-grey">
                    <div class="p-5">
                      <h3 class="fw-bold mb-5 mt-2 pt-1">Tóm lược</h3>
                      <hr class="my-4" />

                      <div class="d-flex justify-content-between mb-4">
                        <h5 class="text-uppercase">
                          {{ numberOfProduct }} sản phẩm
                        </h5>
                        <h5>{{ formatNumber(totalPrice) }} đ</h5>
                      </div>

<!--                      <h5 class="text-uppercase mb-3">Mã giảm giá</h5>-->

<!--                      <div class="mb-5">-->
<!--                        <div class="form-outline">-->
<!--                          <input-->
<!--                            type="text"-->
<!--                            id="form3Examplea2"-->
<!--                            class="form-control form-control-lg"-->
<!--                          />-->
<!--                          <label class="form-label" for="form3Examplea2"-->
<!--                            >Nhập mã giảm giá của bạn</label-->
<!--                          >-->
<!--                        </div>-->
<!--                      </div>-->

                      <hr class="my-4" />

                      <div class="d-flex justify-content-between mb-5">
                        <h5 class="text-uppercase">Tổng tiền</h5>
                        <h5>{{ formatNumber(totalPrice) }}</h5>
                      </div>

                      <button
                        type="button"
                        class="btn btn-primary"
                      >
                        Thanh Toán
                      </button>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped></style>
