<template>
  <div>
    <!--头部-->
    <Navbar />

    <!--内容-->
    <div class="kontak__container">
      <div class="kontak__title">CONTACT US</div>
      <div class="kontak__form">
        <h2>Contact information</h2>
        <p><img src="../../assets/phone_05.svg" alt="" /> +92 03458744788</p>
        <p><img src="../../assets/message.svg" alt="" />dpsuppkr@gmail.com</p>
        <!-- <p><img src="../../assets/position-fill.svg" alt="">Jl. Wologito Tengah I No.1, RT.7/RW.6, Kembangarum, Kec.
          Semarang Barat, Kota Semarang, Jawa Tengah 50183</p> -->
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d6641.136320158137!2d72.99366040533751!3d33.66834968654159!3m2!1i1024!2i768!4f13.1!2m1!1sNo%2030%20Floor%203%20Anayat%20Mall%20Plaza%20G11%20Markaz%20Islamabad!5e0!3m2!1szh-CN!2ssg!4v1751384206205!5m2!1szh-CN!2ssg"
            width="520" height="380" style="border:0;" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

        <h3>Sent Request</h3>
        <p><input type="text" placeholder="Name" /></p>
        <p><input type="text" placeholder="Email" /></p>
        <p><textarea type="text" placeholder="information"></textarea></p>
        <a class="kirim__button">Sent</a>
      </div>
    </div>

    <!--footer-->
    <Bottom />
  </div>
</template>

<script setup>
import Navbar from "@/components/Navbar.vue";
import Bottom from "@/components/bottom.vue";
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
    color: #254da7;
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
      color: #254da7;
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
        border: 1px solid #69727d;
      }

      textarea {
        width: 100%;
        height: 100px;
        padding: 10px;
        border: 1px solid #69727d;
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
      background-color: #254da7;
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
