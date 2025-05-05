<template>
  <div class="footer__container">
    <div class="footer__context">
      <div class="footer__item">
        <h2>THE THIRD OCEAN TOWER</h2>
        <p>
          At THE THIRD OCEAN TOWER, we specialize in providing top-notch IT services to help
          you tackle challenges with your digital devices and software. Whether
          it's troubleshooting, system optimization, or customized
          configurations, we're here to ensure your technology works seamlessly
          for you. From computer maintenance to personalized theme setups, we’re
          committed to enhancing your digital experience.
        </p>
      </div>
      <div class="footer__item">
        <h2>HUBUNGI THE THIRD OCEAN TOWER</h2>
        <router-link to="/faq">FAQ</router-link>
        <router-link to="/layanan">Service</router-link>
        <router-link to="/kontak">Contact</router-link>
      </div>
      <div class="footer__item">
        <h2>HUBUNGI THE THIRD OCEAN TOWER</h2>
        <h4>dpsuppkr@gmail.com</h4>
        <h4>+92 03458744788</h4>
        <h4>Office No 1 Floor No 1 Abbas Plaza,post Office Maini</h4>
        <h4>Tehsil Bhera district Sargodha, Sargodha, Sargodha, Punjab</h4>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer__container {
  width: 100%;
  background-color: #254da7;

  .footer__context {
    width: 1215px;
    margin: 0 auto;
    padding: 106px 40px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  .footer__item {
    width: 380px;

    h2 {
      color: #ffffff;
      font-size: 32px;
      font-weight: 800;
      margin-bottom: 20px;
    }

    h4 {
      font-size: 20px;
      font-weight: 600;
      color: #fff;
      margin-bottom: 10px;
    }

    a {
      display: block;
      color: #fff;
      font-size: 16px;
      font-weight: 600;
      margin-bottom: 10px;
      cursor: pointer;
    }

    p {
      text-align: left;
      color: #ffffff;
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
    }
  }
}
</style>
