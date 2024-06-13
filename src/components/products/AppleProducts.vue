<script>
import Products from "@/components/products/Products.vue";
import Page from "@/components/paging/Page.vue";
import AppleBanner from "@/components/banner/AppleBanner.vue";

export default {
  name: "AppleProducts",
  components: { AppleBanner, Page, Products },
  props: {
    appleProducts: Array,
  },
};
</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <AppleBanner />
      <products :products="appleProducts" />
    </div>
    <Page />
  </div>
</template>

<style scoped></style>
