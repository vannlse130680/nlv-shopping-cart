<script>
import Header from "@/components/header/Header.vue";
import ProductCarousel from "@/components/ProductCarousel.vue";
import NavigationMenu from "@/components/NavigationMenu.vue";
import SideBarImages from "@/components/SideBarImages.vue";
import {formatNumber} from "@/helper/numberFormat.js";
import Products from "@/components/products/Products.vue";
import Footer from "@/components/footer/Footer.vue";
import AppleBanner from "@/components/banner/AppleBanner.vue";
import SamsungBanner from "@/components/banner/SamsungBanner.vue";
import Page from "@/components/paging/Page.vue";
import AppleProducts from "@/components/products/AppleProducts.vue";
import SamsungProducts from "@/components/products/SamsungProducts.vue";

export default {
  name: "Home",
  components: {
    SamsungProducts,
    AppleProducts,
    Page,
    SamsungBanner, AppleBanner, Footer, Products, SideBarImages, NavigationMenu, ProductCarousel, Header
  },
  data() {
    return {
      myProducts: this.$store.state.products
    }
  },
  computed: {
    appleProducts() {
      return this.myProducts.filter(item => item.brand === 'Apple')
    },
    samsungProducts() {
      return this.myProducts.filter(item => item.brand === 'Samsung')
    }
  },
  mounted() {
    console.log(this.myProducts)
  },
  methods: {
    formatNumber
  }

}
</script>

<template>
  <div class="container">
    <Header/>
    <div class="container-fluid">
      <div class="row">
        <NavigationMenu/>
        <ProductCarousel/>
        <SideBarImages/>
      </div>
    </div>
    <div class="main" style="margin-top: 40px;">
      <apple-products :apple-products="appleProducts"/>
      <samsung-products :samsung-products="samsungProducts"/>
    </div>
    <Footer/>
  </div>

</template>

<style scoped>


</style>