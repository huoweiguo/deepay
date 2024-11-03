<template>
  <div>
    <!--头部-->
    <Navbar />

    <!--内容-->
    <div class="container_context">
      <div class="profolio-title">Portofolio</div>
      <div class="profolio-tabar">
        <a :class="{ 'active': currentIndex === '1' }" @click="currentIndex = '1'">branding</a>
        <a :class="{ 'active': currentIndex === '2' }" @click="currentIndex = '2'">digital marketing</a>
      </div>

      <div class="profolio-content">
        <!--branding-->
        <div class="branding" v-if="currentIndex === '1'">
          <div class="branding-item">
            <img src="../../assets/web-c-1.webp">
            <h2>Prolab Sukses</h2>
            <p>Company Profile</p>
          </div>
          <div class="branding-item">
            <img src="../../assets/web-c-2.webp">
            <h2>PT Shabe Properti Indonesia</h2>
            <p>Company Profile</p>
          </div>
          <div class="branding-item">
            <img src="../../assets/web-c-3.webp">
            <h2>Fixcool</h2>
            <p>Company Profile</p>
          </div>

          <div class="branding-item">
            <img src="../../assets/web-c-1.webp">
            <h2>Prolab Sukses</h2>
            <p>Company Profile</p>
          </div>
          <div class="branding-item">
            <img src="../../assets/web-c-2.webp">
            <h2>PT Shabe Properti Indonesia</h2>
            <p>Company Profile</p>
          </div>
          <div class="branding-item">
            <img src="../../assets/web-c-3.webp">
            <h2>Fixcool</h2>
            <p>Company Profile</p>
          </div>

          <div class="branding-item">
            <img src="../../assets/web-c-1.webp">
            <h2>Prolab Sukses</h2>
            <p>Company Profile</p>
          </div>
          <div class="branding-item">
            <img src="../../assets/web-c-2.webp">
            <h2>PT Shabe Properti Indonesia</h2>
            <p>Company Profile</p>
          </div>
          <div class="branding-item">
            <img src="../../assets/web-c-3.webp">
            <h2>Fixcool</h2>
            <p>Company Profile</p>
          </div>
        </div>
        <!--digital marketing-->
        <div class="branding marketing" v-if="currentIndex === '2'">
          <div class="branding-item">
            <img src="../../assets/web-c-4.webp">
            <p>Google Ads</p>
          </div>
          <div class="branding-item">
            <img src="../../assets/web-c-5.webp">
            <p>Google Ads</p>
          </div>
          <div class="branding-item">
            <img src="../../assets/web-c-6.webp">
            <p>Google Ads</p>
          </div>
          <div class="branding-item">
            <img src="../../assets/web-c-4.webp">
            <p>Google Ads</p>
          </div>
          <div class="branding-item">
            <img src="../../assets/web-c-5.webp">
            <p>Google Ads</p>
          </div>
          <div class="branding-item">
            <img src="../../assets/web-c-6.webp">
            <p>Google Ads</p>
          </div>
          <div class="branding-item">
            <img src="../../assets/web-c-4.webp">
            <p>Google Ads</p>
          </div>
          <div class="branding-item">
            <img src="../../assets/web-c-5.webp">
            <p>Google Ads</p>
          </div>
          <div class="branding-item">
            <img src="../../assets/web-c-6.webp">
            <p>Google Ads</p>
          </div>
        </div>
      </div>
    </div>

    <!--底部-->
    <Bottom />
  </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue';
import Bottom from '@/components/bottom.vue';
import { ref } from 'vue';
const currentIndex = ref('1');
</script>

<style lang="scss" scoped>
.container_context {
  width: 1215px;
  margin: 150px auto 0;

  .profolio-title {
    color: #254DA7;
    font-size: 50px;
    font-weight: 800;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 50px;
  }

  .profolio-tabar {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;

    a {
      display: block;
      width: 230px;
      color: #545454;
      font-size: 20px;
      font-weight: 700;
      text-transform: capitalize;
      height: 60px;
      line-height: 60px;
      text-align: center;
      cursor: pointer;

      &:hover {
        text-decoration: none;
      }

      &.active {
        color: #fff;
        background-color: #254DA7;
        border-radius: 15px 15px 0 0;
      }
    }
  }

  .profolio-content {
    width: 1215px;
    margin: 0 auto;

    .branding {
      width: 1235px;
      display: flex;
      flex-wrap: wrap;

      .branding-item {
        flex: 1;
        padding: 20px;
        background-color: #fff;
        box-sizing: border-box;
        margin-right: 40px;
        box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.06);
        border-radius: 15px;
        margin-bottom: 40px;

        img {
          display: block;
          height: 165px;
          margin-bottom: 20px;
        }

        h2 {
          color: #545454;
          font-size: 20px;
          font-weight: 700;
          text-transform: none;
          text-align: center;
          margin-bottom: 10px;
        }

        P {
          text-align: center;
          font-size: 16px;
          font-weight: 400;
          font-style: italic;
        }
      }
    }

    .marketing {
      display: flex;
      width: 1245px;

      .branding-item {
        flex: none !important;
        display: flex;
        width: 375px;
        flex-direction: column;
        align-items: center;

        img {
          width: 127px;
          height: 127px;
        }
      }
    }
  }
}
</style>