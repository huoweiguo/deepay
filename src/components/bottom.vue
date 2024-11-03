<template>
  <div class="footer__container">
    <div class="footer__context">
      <div class="footer__item">
        <h2>DEEPAY</h2>
        <p>Solusi branding yang mengedepankan kemudahan untuk pelanggan sesuai motto perusahaan “No Repot No Rempong”.
          Dengan tim IT dan desain berpengalaman, Nore Digital Agency (NDA) siap melayani berbagai kebutuhan branding
          mulai dari branding perusahaan (logo, company profile, social media content, dll), digital marketing, hingga
          pembuatan website semua No Repot, No Rempong NDA.</p>
      </div>
      <div class="footer__item">
        <h2>HUBUNGI DEEPAY</h2>
        <a>FAQ</a>
        <a>Portofolio</a>
        <a>Kontak</a>
      </div>
      <div class="footer__item">
        <h2>HUBUNGI DEEPAY</h2>
        <h4>cs@nore.web.id</h4>
        <h4>+62 811-2772-788</h4>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer__container {
  width: 100%;
  background-color: #254DA7;

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
      color: #FFFFFF;
      font-size: 32px;
      font-weight: 800;
      margin-bottom: 20px;
    }

    h4 {
      font-size: 20px;
      font-weight: 600;
      color: #fff;
      margin-bottom: 10px
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
      color: #FFFFFF;
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
    }
  }
}
</style>