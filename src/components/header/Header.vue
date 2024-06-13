<script>
export default {
  name: "Header"
}
</script>

<template>
  <div class="banner">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">

      <div class="container-fluid">
        <button @click="$router.push({name: 'home'})">
          <h1>ITKC</h1>
        </button>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" @click="$router.push({name: 'cart'})"
                 style="padding-left: 25px; padding-right: 25px;"><strong>Giỏ hàng</strong></a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#"
                 style="padding-left: 25px; padding-right: 25px;"><strong>Tra cứu đơn hàng</strong></a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                 data-bs-toggle="dropdown" aria-expanded="false"
                 style="padding-left: 25px; padding-right: 25px;">
                <strong>Chọn địa điểm quán </strong></a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#"><strong>Hà Nội</strong></a></li>
                <li><a class="dropdown-item" href="#"><strong>Hồ Chí Minh</strong></a></li>
              </ul>
            </li>
          </ul>
          <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  </div>

</template>

<style scoped>

</style>