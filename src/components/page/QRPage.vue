<script>
export default {
  name: "QRPage",
};
</script>

<template>
  <div class="container">
    <div class="container-fluid">
      <div
        class="qr-code-wrapper d-flex align-items-center justify-content-center"
      >
        <img class="qr-code" alt="qr-code" src="/image/QR.png" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.qr-code-wrapper {
  height: 100vh;
}

.qr-code {
  max-width: 50%;
}
</style>
