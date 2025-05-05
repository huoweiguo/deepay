<template>
  <div>
    <!--头部-->
    <Navbar />

    <!--内容-->
    <div class="faq__container">
      <div class="faq__title">Terms and Conditions</div>
      <div class="faq-decription">
        <p>These Terms and Conditions ("Terms") govern your use of our website and IT services. By accessing or using our services, you agree to be bound by these Terms. If you do not agree, please do not use our services.</p>

        <h2>1. Services</h2>
        <p>We provide IT-related services such as development, consulting, support, and other technical solutions. The scope of each service is defined in the corresponding service agreement or order confirmation.</p>

        <h2>2. User Responsibilities</h2>
        <ul>
          <li>You agree to provide accurate and complete information when using our services.</li>
          <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
          <li>You agree not to misuse our services or use them for any unlawful activity.</li>
        </ul>

        <h2>3. Payments and Billing</h2>
        <ul>
          <li>All fees must be paid as outlined in the invoice or service agreement.</li>
          <li>Failure to pay on time may result in suspension or termination of services.</li>
          <li>All prices are subject to change with prior notice.</li>
        </ul>

        <h2>4. Intellectual Property</h2>
        <p>All content, code, and deliverables provided as part of our services remain our intellectual property until full payment is received. After full payment, ownership terms will follow the signed agreement.</p>

        <h2>5. Limitation of Liability</h2>
        <p>We are not liable for any indirect, incidental, or consequential damages arising from the use or inability to use our services, including data loss or service interruption.</p>

        <h2>6. Termination</h2>
        <p>We reserve the right to suspend or terminate your access to our services if you violate these Terms or applicable laws. You may terminate the service with written notice as specified in the service agreement.</p>

        <h2>7. Governing Law</h2>
        <p>These Terms are governed by and construed in accordance with the laws of [Your Country/State]. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts located in [Your City/Country].</p>

        <h2>8. Changes to Terms</h2>
        <p>We may update these Terms from time to time. Any changes will be posted on this page, and your continued use of our services constitutes acceptance of the updated Terms.</p>

        <h2>9. Contact Us</h2>
        <p>If you have any questions about these Terms and Conditions, please contact us at
          <a href="mailto:dpsuppkr@gmail.com">dpsuppkr@gmail.com</a>.
        </p>
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
