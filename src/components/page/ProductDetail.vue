<script>
import Header from "@/components/header/Header.vue";
import {formatNumber} from "@/helper/numberFormat.js";
import router from "@/router/index.js";

export default {
  name: "ProductDetail",
  components: {Header},
  computed: {
    productInfo() {
      return this.$store.state.products.find(item => item.id === this.$route.params.id)
    },
    addedProduct() {
      return this.$store.state.myCart
    }
  },

  mounted() {
    console.log(this.productInfo)

  },
  methods: {
    formatNumber,
    addProductToCart(productId) {
      if(!this.addedProduct.find(product => product.productId === productId)) {
        this.$store.commit('addProductToCart', {productId: productId, quality: 1})
      }

      router.push({name: 'cart'})
    }
  }
}
</script>

<template>
  <div class="container">
    <Header/>
    <div class="main">
      <div class="row">
        <div class="col-5 text-center bg-white" style="margin-top: 15px;">
          <h5>{{productInfo.name}} </h5>
        </div>
      </div>
      <div class="container-fluid" style="margin-top:20px">
        <div class="row">
          <div class="col-sm-4 bg-white">
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
                        aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3"
                        aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4"
                        aria-label="Slide 5"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5"
                        aria-label="Slide 6"></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                      src="/image/iphone13a.jpg"
                      class="d-block w-100" alt="..." style="width: 300px; height: 400px;">

                </div>
                <div class="carousel-item">
                  <img
                      src="/image/iphone-13b.jpg"
                      class="d-block w-100" alt="..." style="width: 300px; height: 400px;">

                </div>
                <div class="carousel-item">
                  <img
                      src="/image/iphone-13c.jpg"
                      class="d-block w-100" alt="..." style="width: 300px; height: 400px;">

                </div>
                <div class="carousel-item">
                  <img
                      src="/image/iphone-13d.jpg"
                      class="d-block w-100" alt="..." style="width: 300px; height: 400px;">

                </div>
                <div class="carousel-item">
                  <img
                      src="/image/iphone-13e.jpg"
                      class="d-block w-100" alt="..." style="width: 300px; height:400px;">

                </div>
                <div class="carousel-item">
                  <img
                      src="/image/iphone-13f.jpg"
                      class="d-block w-100" alt="..." style="width: 300px; height: 400px;">

                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                      data-bs-slide="prev">
                <span style="background-color: gray; border-radius: 50%" class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                      data-bs-slide="next">
                <span style="background-color: gray; border-radius: 50%" class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div class="col-sm-4 bg-white" style="padding-left: 10px;">
            <h4 style="color: red; font-family:tahoma ;">{{formatNumber(productInfo.newPrice) }} đ</h4>
            <s>{{ formatNumber(productInfo.price) }}  đ</s>
            <div class="btn-toolbar" style="padding-top:15px;">

              <button type="button" class="btn btn-light">526GB <h6>29.490.000 đ</h6></button>

              <button type="button" class="btn btn-light" style="margin-left: 15px;">256GB <h6>26.490.000 đ</h6>
              </button>
              <button type="button" class="btn btn-light" style="margin-left: 15px;">128GB <h6>23.490.000 đ</h6>
              </button>
            </div>

            <a href="#" class="btn btn-danger btn-lg disabled text-center" style="width: 360px;margin-top: 18px;"><img
                src="/image/icon.svg" style="margin-bottom: 3px;"> Khuyến mại
            </a>
            <a href="#" class="btn btn-danger btn-lg disabled text-center" style="width: 360px;margin-top: 10px;"><h6
                style="color: black;">Thời gian đặt hàng dự kiến: Từ 15 - 21/10, trả hàng từ 22/10</h6>
              <span style="text-decoration: underline; font-size: 15px; margin-right: 131px;">Thu cũ lên đời trợ giá 3 triệu</span>

            </a>
            <a @click="addProductToCart(productInfo.id)" class="btn btn-danger btn-lg  text-center" style="width: 360px;margin-top: 10px;">
              Mua ngay

            </a>


          </div>

          <div class="col-sm-3 bg-white">
            <table class="table table-striped">
              <thead>
              <tr>
                <h3>Thông số kĩ thuật</h3>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>Kích thước màn hình</td>
                <td>6.1 inches</td>

              </tr>
              <tr>
                <td>Công nghệ màn hình</td>
                <td>OLED</td>

              </tr>
              <tr>
                <td>Camera sau</td>
                <td>Camera góc rộng: 12MP, f/1.6
                  Camera góc siêu rộng: 12MP, ƒ/2.4
                </td>

              </tr>
              <tr>
                <td>Camera trước</td>
                <td>12MP, f/2.2</td>
              </tr>
              <tr>
                <td>Chipset</td>
                <td>Apple A15</td>
              </tr>
              <tr>
                <td>Dung lượng RAM</td>
                <td>4 GB</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
    <div class="content" style="margin-top: 50px;">
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-8 bg-white">
            <h3>Đánh giá iPhone 13 - Flagship được mong chờ năm 2021
            </h3>
            <p style=" font-size: 15px;">Cuối năm 2020, bộ 4 iPhone 12 đã được ra mắt với nhiều cái tiến. Sau đó, mọi sự
              quan tâm lại đổ dồn vào sản phẩm tiếp theo – iPhone 13. Vậy iP 13 sẽ có những gì, hãy tìm hiểu ngay sau
              đây.</p>
            <h4>Thiết kế với nhiều đột phá</h4>
            <p style="font-size: 15px;">Về kích thước, iPhone 13 sẽ có 4 phiên bản khác nhau và kích thước không đổi so
              với series iPhone 12 hiện tại. Nếu iPhone 12 có sự thay đổi trong thiết kế từ góc cạnh bo tròn (Thiết kế
              được duy trì từ thời iPhone 6 đến iPhone 11 Pro Max) sang thiết kế vuông vắn (đã từng có mặt trên iPhone 4
              đến iPhone 5S, SE).</p>
            <p style="font-size: 15px;">Thì trên điện thoại iPhone 13 vẫn được duy trì một thiết kế tương tự. Máy vẫn có
              phiên bản khung viền thép, một số phiên bản khung nhôm cùng mặt lưng kính. Tương tự năm ngoái, Apple cũng
              sẽ cho ra mắt 4 phiên bản là iPhone 13, 13 mini, 13 Pro và 13 Pro Max.</p>
            <img
                src="/image/IPHONE-13-1.webp">
            <p style="font-size: 15px;">Phần tai thỏ trên iPhone 13 cũng có thay đổi so với thế hệ trước, cụ thể tai thỏ
              này được làm nhỏ hơn so với 20%, trong khi đó độ dày của máy vẫn được giữ nguyên. Điểm khác biệt nhất về
              thiết kế trên thế hệ iPhone 2021 này đó là camera chéo.

              Màu sắc trên mẫu iPhone mới này cũng đa dạng hơn, trong đó nổi bật là iPhone 13 màu hồng. Các màu sắc còn
              lại đề đã từng được xuất hiện trên các phiên bản trước đó như trắng, đen, đỏ, xanh blue.</p>
            <img
                src="/image/iphone-13-13.png">
            <h4>Màn hình màn hình Super Retina XDR độ sáng cao</h4>
            <p style="font-size: 15px;">Điện thoại iPhone 13 sẽ được sử dụng tấm nền OLED chất lượng cao và có kích
              thước 6.1 inch, lớn hơn iPhone 13 mini (5.4 inch). Với tấm nền này với công nghệ ProMotion giúp iPhone 13
              tiết kiệm pin đến tối đa khi sử dụng. Người dùng cũng có thể dễ dàng điều chỉnh tốc độ làm tươi tùy theo ý
              thích.</p>

          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>