<template>
  <div>
    <!--头部-->
    <Navbar />

    <!--内容-->
    <div class="faq__container">
      <div class="faq__title">FrequentlyAsked Questions</div>
      <div class="faq-decription">
        We’ve gathered the most frequently asked questions from our users and
        answered them here in detail. We hope this information will help you
        better understand our services and make the most of what we offer. If
        you have additional questions not covered here, please don’t hesitate to
        reach out to our support team.
      </div>

      <div class="faq__section">
        <!-- <h2>Branding</h2> -->
        <div
          class="faq__item"
          v-for="item in brandList"
          :key="item.id"
          :class="{ active: item.open }"
          @click="toggle(item)"
        >
          <div class="faq__item__question">{{ item.title }}</div>
          <div class="faq__item__answer" v-if="item.children.length > 0">
            <ul>
              <li v-for="attr in item.children" :key="attr.id">
                {{ attr.answer }}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="faq__section">
        <h2>Digital Marketing</h2>

        <div
          class="faq__item"
          v-for="item in marketList"
          :key="item.id"
          :class="{ active: item.open }"
          @click="toggle(item)"
        >
          <div class="faq__item__question">{{ item.title }}</div>
          <div class="faq__item__answer" v-if="item.children.length > 0">
            <ul>
              <li v-for="attr in item.children" :key="attr.id">
                {{ attr.answer }}
              </li>
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
import Navbar from "@/components/Navbar.vue";
import Bottom from "@/components/bottom.vue";
import { ref } from "vue";
const brandList = ref([
  {
    title: "What types of IT services do you offer?",
    id: 1,
    open: false,
    children: [
      {
        answer:
          "We offer a range of IT services including system reinstallation, computer performance optimization, hardware and software upgrades, custom configurations, data recovery, and remote support.",
        id: 1,
      },
      // { answer: 'Layanan pembuatan company profile.', id: 2 },
      // { answer: 'Layanan Konten feeds Instagram.', id: 3 },
      // { answer: 'Layanan pembuatan Brosur.', id: 4 }
    ],
  },
  {
    title: "Do I need to bring my device to your office for assistance?",
    id: 2,
    open: false,
    children: [
      {
        answer:
          "No, we provide both remote and onsite services. Many issues can be resolved remotely, and our technicians can guide you through the process.",
        id: 1,
      },
      // { answer: 'Layanan pembuatan company profile.', id: 2 },
      // { answer: 'Layanan Konten feeds Instagram.', id: 3 },
      // { answer: 'Layanan pembuatan Brosur.', id: 4 }
    ],
  },
  {
    title: "How long does a typical service take?",
    id: 3,
    open: false,
    children: [
      {
        answer:
          "Service times vary based on the type of work. For example, system reinstallation generally takes 2-4 hours, while performance optimization can take around 1-2 hours.",
        id: 1,
      },
      // { answer: 'Layanan pembuatan company profile.', id: 2 },
      // { answer: 'Layanan Konten feeds Instagram.', id: 3 },
      // { answer: 'Layanan pembuatan Brosur.', id: 4 }
    ],
  },
  {
    title: "Can you help with both Windows and macOS systems?",
    id: 4,
    open: false,
    children: [
      {
        answer:
          "Yes, our team is equipped to handle both Windows and macOS systems, ensuring your device runs smoothly regardless of the operating system.",
        id: 1,
      },
      // { answer: 'Layanan pembuatan company profile.', id: 2 },
      // { answer: 'Layanan Konten feeds Instagram.', id: 3 },
      // { answer: 'Layanan pembuatan Brosur.', id: 4 }
    ],
  },
]);

const marketList = ref([
  {
    title: "Is there a warranty on the services provided?",
    id: 1,
    open: false,
    children: [
      {
        answer:
          "Yes, we provide a limited warranty for our services to ensure customer satisfaction. Please contact our support team for specific warranty details.",
        id: 1,
      },
      // { answer: "Layanan pembuatan company profile.", id: 2 },
      // { answer: "Layanan Konten feeds Instagram.", id: 3 },
      // { answer: "Layanan pembuatan Brosur.", id: 4 },
    ],
  },
  {
    title: "How do I book a service or consultation?",
    id: 2,
    open: false,
    children: [
      {
        answer:
          "You can easily book a service or consultation through our website’s booking form, by phone, or by emailing our support team. Our representatives will confirm the appointment details with you.",
        id: 1,
      },
      // { answer: "Layanan pembuatan company profile.", id: 2 },
      // { answer: "Layanan Konten feeds Instagram.", id: 3 },
      // { answer: "Layanan pembuatan Brosur.", id: 4 },
    ],
  },
  {
    title: "Do you offer customized PC builds or setups?",
    id: 3,
    open: false,
    children: [
      {
        answer:
          "Absolutely! We offer custom PC builds and configurations tailored to your specific needs, whether for gaming, professional use, or personal projects.",
        id: 1,
      },
      // { answer: "Layanan pembuatan company profile.", id: 2 },
      // { answer: "Layanan Konten feeds Instagram.", id: 3 },
      // { answer: "Layanan pembuatan Brosur.", id: 4 },
    ],
  },
  {
    title: "What payment options do you accept?",
    id: 4,
    open: false,
    children: [
      {
        answer:
          "We accept various payment methods including credit cards, debit cards, and digital payments. Membership plans can also be conveniently paid online through our secure platform.",
        id: 1,
      },
      // { answer: "Layanan pembuatan company profile.", id: 2 },
      // { answer: "Layanan Konten feeds Instagram.", id: 3 },
      // { answer: "Layanan pembuatan Brosur.", id: 4 },
    ],
  },
]);

const toggle = (item) => {
  item.open = !item.open;
};
</script>

<style lang="scss" scoped>
.faq__container {
  width: 1215px;
  margin: 150px auto 0;

  .faq__title {
    color: #254da7;
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
      color: #254da7;
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
        background-image: url("../../assets/up.png");
      }

      .faq__item__answer {
        height: auto;
      }
    }

    .faq__item__question {
      background-color: #254da7;
      padding: 30px;
      font-size: 18px;
      font-weight: 600;
      line-height: 32px;
      color: #fff;
      background-position: right 20px center;
      background-repeat: no-repeat;
      background-image: url("../../assets/down.png");
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
