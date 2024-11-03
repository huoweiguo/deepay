<template>
  <div>
    <!--头部-->
    <Navbar />

    <!--内容-->
    <div class="kontak__container">
      <div class="kontak__title">kontak kami</div>
      <div class="kontak__form">
        <h2>informasi kontak</h2>
        <p><img src="../../assets/phone_05.svg" alt=""> 0812-3456-7890</p>
        <p><img src="../../assets/message.svg" alt="">DEEPAY@google.com</p>
        <p><img src="../../assets/position-fill.svg" alt="">Jl. Wologito Tengah I No.1, RT.7/RW.6, Kembangarum, Kec.
          Semarang Barat, Kota Semarang, Jawa Tengah 50183</p>

        <h3>kirimkan pesan</h3>
        <p><input type="text" placeholder="Nama"></p>
        <p><input type="text" placeholder="Email"></p>
        <p><textarea type="text" placeholder="Pesan"></textarea></p>
        <a class="kirim__button">Kirim</a>
      </div>
    </div>

    <!--footer-->
    <Bottom />
  </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue';
import Bottom from '@/components/bottom.vue';


</script>

<style lang="scss" scoped>
.kontak__container {
  width: 1215px;
  margin: 150px auto 30px;

  .kontak__title {
    text-align: center;
    font-size: 50px;
    font-weight: 800;
    text-transform: uppercase;
    color: #254DA7;
    margin-bottom: 50px;
  }

  .kontak__form {
    width: 520px;
    margin: 0 auto;

    h2,
    h3 {
      font-size: 25px;
      font-weight: 700;
      text-transform: capitalize;
      color: #254DA7;
      margin-bottom: 20px;
    }

    h3 {
      margin: 30px 0 20px;
    }

    p {
      font-size: 16px;
      font-weight: 400;
      color: #808000;
      display: flex;
      align-items: flex-start;
      margin-bottom: 20px;
      line-height: 24px;
      cursor: pointer;

      &:hover {
        color: #666;
      }

      img {
        width: 20px;
        margin-top: 3px;
        margin-right: 5px;
      }

      input[type="text"] {
        width: 100%;
        height: 40px;
        padding: 0 10px;
        border: 1px solid #69727D;
      }

      textarea {
        width: 100%;
        height: 100px;
        padding: 10px;
        border: 1px solid #69727D;
      }
    }

    .kirim__button {
      display: block;
      width: 175px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      color: #fff;
      border-radius: 20px;
      background-color: #254DA7;
      font-size: 16px;
      font-weight: 400;
      cursor: pointer;

      &:hover {
        background-color: #40a9ff;
        text-decoration: none;
      }
    }
  }
}
</style>