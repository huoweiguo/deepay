<template>
  <div>
    <!--头部-->
    <Navbar />

    <div class="swiper__container">
      <!--轮播图-->
      <swiper
        class="swiper-container"
        :slides-per-view="1"
        :space-between="0"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        :modules="modules"
        :pagination="{ clickable: true }"
        :autoplay="{
          delay: 3500,
          disableOnInteraction: false,
        }"
        navigation
        :loop="true"
      >
        <swiper-slide>
          <div class="swiper__item">
            <img
              width="489"
              src="@/assets/20401285_Tiny_people_protecting_social_media_accounts_with_shield.jpg"
              alt=""
            />
            <div class="swiper__item__title">
              <p>Your reliable partner</p>
              <p>for all things IT</p>
              <p>and digital solutions.</p>
              <!-- <p>Iklan. </p>
              <p>No Repot. </p>
              <p>No Rempong.</p> -->
              <a>Info Pricelist</a>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="swiper__item">
            <img src="@/assets/web-1.png" alt="" />
            <div class="swiper__item__title">
              <p>Website.</p>
              <p>No Repot.</p>
              <p>No Rempong.</p>
              <a>Info Pricelist</a>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="swiper__item">
            <img src="@/assets/web-1.png" alt="" />
            <div class="swiper__item__title">
              <p>Branding.</p>
              <p>No Repot.</p>
              <p>No Rempong.</p>
              <a>Info Pricelist</a>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>

    <!--模块展示1-->
    <div class="section__module">
      <!-- TODO：图片更换 -->
      <div class="module__left">
        <div class="module__left__item">
          <div class="module__item__box item__bg1"></div>
          <h2>BRANDING</h2>
        </div>
        <div class="module__left__item">
          <div class="module__item__box item__bg2"></div>
          <h2>WEBSITE</h2>
        </div>
        <div class="module__left__item">
          <div class="module__item__box item__bg3"></div>
          <h2>DIGITAL MARKETING</h2>
        </div>
        <div class="module__left__item">
          <div class="module__item__box item__bg4"></div>
          <h2>PORTFOLIO</h2>
        </div>
        <div class="module__left__item">
          <div class="module__item__box item__bg5"></div>
          <h2>FAQ</h2>
        </div>
        <div class="module__left__item">
          <div class="module__item__box item__bg6"></div>
          <h2>KONTAK</h2>
        </div>
      </div>
      <div class="module__right">
        <div class="module__right__text">
          <p>Deepay</p>
          <!-- <p>NORE</p> -->
          <p>DIGITAL</p>
          <p>AGENCY.</p>
        </div>
        <div class="module__right__item">
          <div class="module__item__box item__bg7"></div>
          <h2>TENTANG <br />DEEPAY</h2>
        </div>
      </div>
    </div>

    <!--模块展示2-->
    <div class="section__module__part2">
      <div class="module__part2__item">
        <!-- 图片更换 -->
        <img src="../../assets/12085914_20944387.jpg" />
        <h2>Data Recovery for Business and Personal Clients:</h2>
        <div class="module__part2__item__text">
          Recovered critical data from damaged hard drives and formatted
          devices, restoring files and memories securely.
        </div>
        <img src="../../assets/12085708_20944202.jpg" />
        <h2>Comprehensive Malware Removal and Security Setup</h2>
        <div class="module__part2__item__text">
          Detected, removed, and prevented future malware threats on infected
          devices, implementing advanced security solutions for ongoing
          protection.
        </div>
        <img src="../../assets/20945391.jpg" />
        <h2>Mobile Device Integration for Cross-Platform Workflow:</h2>
        <div class="module__part2__item__text">
          Set up seamless integrations for mobile devices across various
          operating systems, enabling a more efficient workflow for busy
          professionals.
        </div>
      </div>
      <div class="module__part2__item">
        <h1>PORTFOLIO</h1>
        <h4>
          Our Work Speaks for Itself Explore more of our work and see how we
          help clients achieve a seamless digital experience.
          <!-- Kami telah berpengalaman dalam menyelesaikan kebutuhan website,
          branding dan digital marketing Anda. -->
        </h4>
        <a class="part2__item__link">MORE</a>
        <img src="../../assets/11668822_20945385.jpg" />
        <h2>Cloud Backup Solutions for Small Enterprises:</h2>
        <div class="module__part2__item__text">
          Configured automated cloud backups to secure data and streamline
          business operations, allowing for seamless file recovery and sharing.
        </div>
      </div>
      <div class="module__part2__item">
        <!-- TODO：图片更换 -->
        <img src="../../assets/11669690_20943875.jpg" />
        <h2>Custom-Built Workstations for Designers and Developers:</h2>
        <div class="module__part2__item__text">
          Designed high-performance systems tailored to the specific needs of
          graphic designers, video editors, and software developers, optimizing
          productivity.
        </div>
        <img src="../../assets/11668759_20945347.jpg" />
        <h2>Network Optimization for Small Businesses:</h2>
        <div class="module__part2__item__text">
          Enhanced network speed and reliability by troubleshooting and
          reconfiguring network hardware, creating an efficient environment for
          daily operations.
        </div>
      </div>
    </div>

    <!--BERITA TERKINI-->
    <!-- <div class="container__box">
      <div class="module__part3">
        <div class="module__part3__title">
          <h1>Berita Terkini</h1>
          <a>SELENGKAPNYA</a>
        </div>
        <div class="module__part3__content">
          <div class="module__part3__content__item">
            <img src="../../assets/berita-1.webp" />
            <a>CV Nore Inovasi Resmi Pindah Kantor</a>
            <div class="module__part3__description">
              Dengan ini CV Nore Inovasi mengumumkan bahwa efektif 1 Agustus
              2024, kantor Nore pindah ke alamat baru sebagai berikut: Jl.
            </div>
          </div>
          <div class="module__part3__content__item">
            <img src="../../assets/berita-2.webp" />
            <a>Bagaimana Peran Digital Agency dalam Branding Online? </a>
            <div class="module__part3__description">
              Di era digital saat ini, kehadiran online yang kuat bukan lagi
              sekadar pilihan, melainkan keharusan bagi setiap merk yang ingin
            </div>
          </div>
          <div class="module__part3__content__item">
            <img src="../../assets/berita-3.webp" />
            <a>MENGAPA BISNIS MODERN MEMBUTUHKAN DIGITAL AGENCY?</a>
            <div class="module__part3__description">
              Dalam era digital saat ini, keberadaan online adalah salah satu
              faktor kunci untuk kesuksesan bisnis. Perusahaan yang ingin tetap
              kompetitif
            </div>
          </div>
        </div>
      </div>
    </div> -->

    <!--模块5-->
    <div class="module__part5">
      <div class="module__part5__inner">
        <img src="../../assets/web-b.webp" />
        <div class="modle__part5__content">
          <p>Your reliable partner</p>
          <p>for all things IT</p>
          <p>and digital solutions.</p>
          <a>deepaym.com</a>
        </div>
      </div>
    </div>

    <!--footer-->
    <Bottom />
  </div>
</template>

<script setup>
import Navbar from "@/components/Navbar.vue";
import Bottom from "@/components/bottom.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const modules = [A11y, Autoplay];
</script>

<style lang="scss" scoped>
.swiper__container {
  height: 470px;
  width: 1215px;
  margin: 150px auto 50px;

  .swiper__item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 470px;

    img {
      height: 470px;
    }

    .swiper__item__title {
      p {
        color: #545454;
        font-size: 71px;
        font-weight: bolder;
        line-height: 84px;
      }

      a {
        display: inline-block;
        width: 190px;
        height: 50px;
        font-size: 23px;
        font-weight: 500;
        border-radius: 100px;
        background-color: #254da7;
        color: #fff;
        line-height: 50px;
        text-align: center;
        margin-top: 30px;
        cursor: pointer;
      }

      a:hover {
        text-decoration: none;
      }
    }
  }
}

.section__module {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1215px;
  margin: 0 auto 30px;

  .module__left {
    width: 870px;
    display: flex;
    flex-wrap: wrap;

    .module__left__item {
      width: 270px;
      display: flex;
      flex-direction: column;
      padding: 40px 46px;
      background-color: #fff;
      cursor: pointer;
      margin-right: 10px;
      margin-bottom: 10px;
      box-sizing: border-box;

      h2 {
        color: #254da7;
        font-size: 28px;
        font-weight: 700;
        text-align: center;
        height: 66px;
        margin-top: 20px;
        text-transform: uppercase;
        line-height: 40px;
      }

      .module__item__box {
        width: 178px;
        height: 178px;
        background-repeat: no-repeat;
        background-position: center;
        background-size: 100% 100%;
      }

      .item__bg1 {
        // background-image: url(../../assets/web-2.webp);
        background-image: url(../../assets/11098.jpg);
        background-size: cover;

        &:hover {
          background-image: url(../../assets/web-2-hover.webp);
        }
      }

      .item__bg2 {
        background-image: url(../../assets/11101.jpg);
        background-size: cover;

        &:hover {
          background-image: url(../../assets/web-3-hover.webp);
        }
      }

      .item__bg3 {
        background-image: url(../../assets/10613714_10168.jpg);
        background-size: cover;

        &:hover {
          background-image: url(../../assets/web-4-hover.webp);
        }
      }

      .item__bg4 {
        background-image: url(../../assets/11235955_11138.jpg);
        background-size: cover;

        &:hover {
          background-image: url(../../assets/web-5-hover.webp);
        }
      }

      .item__bg5 {
        background-image: url(../../assets/11663914_20944706.jpg);
        background-size: cover;

        &:hover {
          background-image: url(../../assets/web-6-hover.webp);
        }
      }

      .item__bg6 {
        background-image: url(../../assets/11668427_20943566.jpg);
        background-size: cover;

        &:hover {
          background-image: url(../../assets/web-7-hover.webp);
        }
      }
    }
  }

  .module__right {
    width: 385px;

    .module__right__text {
      display: flex;
      flex-direction: column;
      margin-bottom: 30px;

      p {
        text-align: right;
        color: #254da7;
        font-size: 52px;
        font-weight: 800;
      }
    }

    .module__right__item {
      padding: 88px 46px;
      background-color: #fff;

      h2 {
        color: #254da7;
        font-size: 33px;
        font-weight: 700;
        text-align: center;
        line-height: 40px;
      }

      .module__item__box {
        width: 205px;
        height: 205px;
        background-repeat: no-repeat;
        background-position: center;
        background-size: 100% 100%;
        margin: 0 auto 40px;

        &.item__bg7 {
          background-image: url(../../assets/11667102_20944989.jpg);

          &:hover {
            background-image: url(../../assets/web-a-hover.webp);
          }
        }
      }
    }
  }
}

.section__module__part2 {
  width: 1215px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0 auto;

  .module__part2__item {
    width: 380px;
    background-repeat: no-repeat;
    background-position: center;

    img {
      width: 100%;
    }

    h1 {
      font-size: 52px;
      font-weight: 800;
      color: #254da7;
      margin-bottom: 30px;
    }

    h2 {
      color: #254da7;
      font-size: 20px;
      font-weight: 800;
      line-height: 32px;
      margin: 20px 0;
    }

    h4 {
      font-size: 18px;
      font-weight: 400;
      color: #333;
      margin-bottom: 30px;
    }

    .part2__item__link {
      display: inline-block;
      line-height: 1;
      background-color: #69727d;
      font-size: 15px;
      padding: 12px 24px;
      border-radius: 25px;
      color: #fff;
      fill: #fff;
      text-align: center;
      transition: all 0.3s;
      margin-bottom: 30px;
      cursor: pointer;

      &:hover {
        transform: scale(1.05);
        text-decoration: none;
      }
    }

    .module__part2__item__text {
      font-size: 16px;
      font-weight: 400;
      color: #333;
      line-height: 26px;
      margin-bottom: 30px;
    }
  }
}

.container__box {
  background-color: #efefef;
}

.module__part3 {
  width: 1215px;
  margin: 0 auto;
  padding: 105px 40px;

  .module__part3__title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;

    h1 {
      color: #254da7;
      font-size: 50px;
      font-weight: 700;
    }

    a {
      font-size: 16px;
      font-weight: 600;
      border-radius: 30px;
      padding: 20px;
      line-height: 1;
      background-color: #69727d;
      color: #fff;
    }
  }

  .module__part3__content {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    .module__part3__content__item {
      width: 370px;

      img {
        display: block;
        width: 370px;
        height: 215px;
        margin-bottom: 30px;
      }

      a {
        display: block;
        color: #254da7;
        font-size: 20px;
        font-weight: 700;
        line-height: 24px;
        margin-bottom: 20px;
      }

      .module__part3__description {
        color: #777;
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
      }
    }
  }
}

.module__part5 {
  background-color: rgba(173, 216, 230, 0.5);

  .module__part5__inner {
    display: flex;
    justify-content: space-between;
    width: 1215px;
    padding: 40px 50px 20px;
    box-sizing: border-box;
    align-items: center;
    margin: 0 auto;

    img {
      height: 380px;
    }

    .modle__part5__content {
      p {
        color: #254da7;
        font-weight: 900;
        text-transform: uppercase;
        line-height: 50px;
        font-size: 36px;
      }

      a {
        display: inline-block;
        line-height: 1;
        background-color: #69727d;
        font-size: 16px;
        font-weight: 600;
        border-radius: 30px;
        padding: 20px 40px;
        color: #fff;
        margin-top: 30px;
      }
    }
  }
}
</style>
