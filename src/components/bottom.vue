<template>
  <div class="footer__container">
    <h2 class="footer__title">HUBUNGI THE THIRD OCEAN TOWER</h2>
    <div class="footer__context">
      <div class="footer__item">
        <p>
          At THE THIRD OCEAN TOWER, we specialize in providing top-notch IT services to help
          you tackle challenges with your digital devices and software. Whether
          it's troubleshooting, system optimization, or customized
          configurations, we're here to ensure your technology works seamlessly
          for you. From computer maintenance to personalized theme setups, we’re
          committed to enhancing your digital experience.
        </p>
      </div>
      <div class="footer__item item_contact">
        <router-link to="/faq">FAQ</router-link>
        <router-link to="/layanan">Service</router-link>
        <router-link to="/kontak">Contact</router-link>
        <router-link to="/condition">Terms and condition</router-link>
        <router-link to="/privacy">Privacy policy</router-link>
        <router-link to="/refund">Refund policy</router-link>
      </div>
      <div class="footer__item">
        <h4>dpsuppkr@gmail.com</h4>
        <h4>+92 03458744788</h4>
        <h4>The Third Ocean Tower Private Limited Office No 30 Floor 3 Anayat Mall Plaza G11 Markaz Islamabad</h4>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer__container {
  width: 100%;
  padding: 106px 0;
  background-color: #ffffff;

  .footer__title {
    text-align: center;
    color: #000000;
    font-size: 32px;
    font-weight: 800;
    margin-bottom: 50px;
  }

  .footer__context {
    width: 1215px;
    margin: 0 auto;
    padding: 0 40px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  .footer__item {
    width: 380px;

    h2 {
      color: #000000;
      font-size: 32px;
      font-weight: 800;
      margin-bottom: 20px;
    }

    h4 {
      font-size: 16px;
      color: #000000;
      margin-bottom: 10px;
      font-weight: normal;
      line-height: 22px;
    }

    a {
      display: block;
      color: #000000;
      font-size: 16px;
      margin-bottom: 10px;
      cursor: pointer;
    }

    p {
      text-align: left;
      color: #000000;
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
    }
  }

  .item_contact {
    padding-left: 100px;
    box-sizing: border-box;
  }
}
</style>
<script setup lang="ts">
</script>