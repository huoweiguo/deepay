<template>
  <div>
    <!--头部-->
    <Navbar />

    <!--内容-->
    <div class="layanan__container">
      <h1>layanan</h1>
      <div class="layanan__content__layout">
        <div class="layanan__content__item">
          <p>BRANDING</p>
          <img src="../../assets/web-2.webp" alt="" />
        </div>
        <div class="layanan__content__item">
          <p>WEBSITE</p>
          <img src="../../assets/web-3.webp" alt="" />
        </div>
        <div class="layanan__content__item">
          <p>digital marketing</p>
          <img src="../../assets/web-4.webp" alt="" />
        </div>
      </div>

      <div class="layanan__module">
        <div class="layanan__module__box">
          <h2>company profile</h2>
          <div class="layanan__module__box__inner">Company profile sangat penting untuk menginformasikan kepada klien
            maupun calon klien terkait dengan usaha atau jasa Anda. Company profile sangat penting untuk
            menginformasikan kepada klien
            maupun calon klien terkait dengan usaha atau jasa Anda. </div>

          <div class="layanan__module__outer">
            <div class="layanan__module__outer__left">
              <h3>LANGGANAN</h3>
              <ul>
                <li>Company profile PDF ukuran A4</li>
                <li>Desain cover depan & belakang</li>
                <li>Minimal 8 halaman (kelipatan 4)</li>
                <li>Desain berbasis AI </li>
                <li>Revisi tanpa batas selama 1 tahun</li>
              </ul>
              <a>KONTAK KAMI SEKARANG</a>
            </div>
            <div class="layanan__module__outer__left">
              <h3>LEPAS</h3>
              <ul>
                <li>Company profile PDF ukuran A4</li>
                <li>Desain cover depan & belakang</li>
                <li>Minimal 8 halaman (kelipatan 4)</li>
                <li>Desain berbasis AI </li>
                <li>Revisi tanpa batas selama 1 tahun</li>
              </ul>
              <a>KONTAK KAMI SEKARANG</a>
            </div>
          </div>


        </div>
      </div>

      <div class="layanan__module">
        <div class="layanan__module__box">
          <h2>content creation</h2>
          <div class="layanan__module__box__inner">Content Creation merupakan jasa pembuat gambar untuk konten yang
            dapat digunakan di berbagai platform media sosial.
            Content Creation merupakan jasa pembuat gambar untuk konten yang dapat digunakan di berbagai platform media
            sosial.</div>

          <div class="layanan__module__outer">
            <div class="layanan__module__outer__left">
              <h3>STARTER</h3>
              <div class="layanan__module__text">Anda mendapatkan 8 poin dengan maksimal 6 desain</div>
              <a>KONTAK KAMI SEKARANG</a>
            </div>
            <div class="layanan__module__outer__left">
              <h3>PRO</h3>
              <div class="layanan__module__text">Anda mendapatkan 15 poin dengan maksimal 10 desain</div>
              <a>KONTAK KAMI SEKARANG</a>
            </div>
          </div>


        </div>
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
.layanan__container {
  width: 1215px;
  margin: 150px auto 0;
  padding: 70px 40px;

  h1 {
    color: #254DA7;
    font-size: 52px;
    font-weight: 800;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 30px;
  }

  .layanan__content__layout {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 30px;

    .layanan__content__item {
      display: flex;
      width: 380px;
      background-color: #fff;
      padding: 40px 45px;
      box-sizing: border-box;
      flex-direction: column;
      align-items: center;

      p {
        display: flex;
        color: #254DA7;
        font-size: 33px;
        font-weight: 700;
        text-transform: uppercase;
        text-align: center;
        height: 66px;
        align-items: center;
        margin-bottom: 20px;
      }

      img {
        display: block;
        height: 270px;
      }
    }
  }

  .layanan__module {
    width: 1200px;
    padding: 40px 45px;
    margin: 0 auto 30px;
    background-color: #fff;
    box-sizing: border-box;

    .layanan__module__box {

      .layanan__module__box__inner {
        color: #545454;
        font-size: 16px;
        font-weight: 400;
        text-align: left;
        line-height: 30px;
        margin-bottom: 30px;
      }

      .layanan__module__outer {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;

        .layanan__module__outer__left {
          flex: 1;

          h3 {
            color: #254DA7;
            font-size: 32px;
            font-weight: 700;
            text-transform: uppercase;
            line-height: 57px;
          }

          .layanan__module__text {
            margin-top: 20px;
            font-size: 16px;
            color: #545454;
            font-weight: 400;
          }

          ul {
            padding-left: 5px;

            li {
              padding-left: 20px;
              font-size: 16px;
              color: #545454;
              font-weight: 400;
              margin-bottom: 10px;
              background: url('../../assets/check.svg') no-repeat left center;
              background-size: 20px 20px;
            }
          }

          a {
            display: block;
            width: 240px;
            color: #fff;
            background-color: #69727D;
            font-size: 15px;
            font-weight: 600;
            border-radius: 47px;
            padding: 20px 0;
            cursor: pointer;
            text-align: center;
            margin-top: 45px;
            text-decoration: none;
            transition: 0.3s;

            &:hover {
              transform: scale(1.05);
            }
          }
        }

        .layanan__module__outer__right {
          img {
            display: block;
            height: 270px;
          }
        }
      }

      h2 {
        text-align: center;
        font-size: 44px;
        font-weight: 700;
        text-transform: uppercase;
        line-height: 57px;
        color: #254DA7;
        margin-bottom: 20px;
      }
    }
  }
}
</style>