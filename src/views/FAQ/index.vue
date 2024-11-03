<template>
  <div>
    <!--头部-->
    <Navbar />


    <!--内容-->
    <div class="faq__container">
      <div class="faq__title">FAQ</div>
      <div class="faq-decription">Kami telah mengumpulkan pertanyaan yang paling sering diajukan oleh pengguna kami dan
        menjawabnya secara lengkap di sini. Kami harap informasi yang tersedia akan membantu Anda memahami layanan kami
        dengan lebih baik. Jika Anda memiliki pertanyaan lain yang tidak tercakup di sini, jangan ragu untuk menghubungi
        tim dukungan kami.Frequently Asked Questions</div>

      <div class="faq__section">
        <h2>Branding</h2>
        <div class="faq__item" v-for="item in brandList" :key="item.id" :class="{ 'active': item.open }"
          @click="toggle(item)">
          <div class="faq__item__question">{{ item.title }}</div>
          <div class="faq__item__answer" v-if="item.children.length > 0">
            <ul>
              <li v-for="attr in item.children" :key="attr.id">{{ attr.answer }}</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="faq__section">
        <h2>Digital Marketing</h2>

        <div class="faq__item" v-for="item in marketList" :key="item.id" :class="{ 'active': item.open }"
          @click="toggle(item)">
          <div class="faq__item__question">{{ item.title }}</div>
          <div class="faq__item__answer" v-if="item.children.length > 0">
            <ul>
              <li v-for="attr in item.children" :key="attr.id">{{ attr.answer }}</li>
            </ul>
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
import { ref } from 'vue';
const brandList = ref([
  {
    title: 'Layanan pembuatan Logo', id: 1, open: false, children: [
      { answer: 'Layanan pembuatan Logo.', id: 1 },
      { answer: 'Layanan pembuatan company profile.', id: 2 },
      { answer: 'Layanan Konten feeds Instagram.', id: 3 },
      { answer: 'Layanan pembuatan Brosur.', id: 4 }
    ]
  },
  {
    title: 'Layanan pembuatan company profile', id: 2, open: false, children: [
      { answer: 'Layanan pembuatan Logo.', id: 1 },
      { answer: 'Layanan pembuatan company profile.', id: 2 },
      { answer: 'Layanan Konten feeds Instagram.', id: 3 },
      { answer: 'Layanan pembuatan Brosur.', id: 4 }
    ]
  },
  {
    title: 'Layanan Konten feeds Instagram', id: 3, open: false, children: [
      { answer: 'Layanan pembuatan Logo.', id: 1 },
      { answer: 'Layanan pembuatan company profile.', id: 2 },
      { answer: 'Layanan Konten feeds Instagram.', id: 3 },
      { answer: 'Layanan pembuatan Brosur.', id: 4 }
    ]
  },
  {
    title: 'Layanan pembuatan Brosur', id: 4, open: false, children: [
      { answer: 'Layanan pembuatan Logo.', id: 1 },
      { answer: 'Layanan pembuatan company profile.', id: 2 },
      { answer: 'Layanan Konten feeds Instagram.', id: 3 },
      { answer: 'Layanan pembuatan Brosur.', id: 4 }
    ]
  },
]);

const marketList = ref([
  {
    title: 'Layanan pembuatan Logo', id: 1, open: false, children: [
      { answer: 'Layanan pembuatan Logo.', id: 1 },
      { answer: 'Layanan pembuatan company profile.', id: 2 },
      { answer: 'Layanan Konten feeds Instagram.', id: 3 },
      { answer: 'Layanan pembuatan Brosur.', id: 4 }
    ]
  },
  {
    title: 'Layanan pembuatan company profile', id: 2, open: false, children: [
      { answer: 'Layanan pembuatan Logo.', id: 1 },
      { answer: 'Layanan pembuatan company profile.', id: 2 },
      { answer: 'Layanan Konten feeds Instagram.', id: 3 },
      { answer: 'Layanan pembuatan Brosur.', id: 4 }
    ]
  },
  {
    title: 'Layanan Konten feeds Instagram', id: 3, open: false, children: [
      { answer: 'Layanan pembuatan Logo.', id: 1 },
      { answer: 'Layanan pembuatan company profile.', id: 2 },
      { answer: 'Layanan Konten feeds Instagram.', id: 3 },
      { answer: 'Layanan pembuatan Brosur.', id: 4 }
    ]
  },
  {
    title: 'Layanan pembuatan Brosur', id: 4, open: false, children: [
      { answer: 'Layanan pembuatan Logo.', id: 1 },
      { answer: 'Layanan pembuatan company profile.', id: 2 },
      { answer: 'Layanan Konten feeds Instagram.', id: 3 },
      { answer: 'Layanan pembuatan Brosur.', id: 4 }
    ]
  },
]);

const toggle = (item) => {
  item.open = !item.open;
}

</script>

<style lang="scss" scoped>
.faq__container {
  width: 1215px;
  margin: 150px auto 0;

  .faq__title {
    color: #254DA7;
    font-size: 50px;
    font-weight: 800;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 30px;
  }

  .faq-decription {
    width: 730px;
    margin: 0 auto 30px;
    text-align: center;
    color: #545454;
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
  }

  .faq__section {
    width: 730px;
    margin: 0 auto 30px;

    h2 {
      color: #254DA7;
      font-size: 20px;
      font-weight: 600;
      text-align: center;
      margin-bottom: 20px;
    }
  }

  .faq__item {
    width: 730px;
    margin-bottom: 20px;

    &.active {
      .faq__item__question {
        background-image: url('../../assets/up.png');
      }

      .faq__item__answer {
        height: auto;
      }
    }

    .faq__item__question {
      background-color: #254DA7;
      padding: 30px;
      font-size: 18px;
      font-weight: 600;
      line-height: 32px;
      color: #fff;
      background-position: right 20px center;
      background-repeat: no-repeat;
      background-image: url('../../assets/down.png');
      cursor: pointer;
    }

    .faq__item__answer {
      height: 0;
      overflow: hidden;
      transition: 0.3s;
      padding: 0 40px;
      margin: 20px 0;

      ul {
        li {
          list-style: disc;
          font-size: 16px;
          font-weight: 400;
          line-height: 26px;
        }
      }
    }


  }
}
</style>