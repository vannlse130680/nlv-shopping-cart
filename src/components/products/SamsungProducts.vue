<script>
import Products from "@/components/products/Products.vue";
import SamsungBanner from "@/components/banner/SamsungBanner.vue";
import Page from "@/components/paging/Page.vue";

export default {
  name: "SamsungProducts",
  components: { Page, SamsungBanner, Products },
  props: {
    samsungProducts: Array,
  },
};
</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <samsung-banner />
      <products :products="samsungProducts" />
    </div>
    <Page />
  </div>
</template>

<style scoped></style>
