<template>
  <div>
    <!--头部-->
    <Navbar />

    <!--内容-->
    <div class="faq__container">
      <div class="faq__title">Refund policy</div>
      <div class="faq-decription">
          <p>Thank you for choosing our IT services. We strive to provide the highest quality solutions to meet your needs. However, if you are not completely satisfied with our service, we’re here to help.</p>

          <h2>1. Eligibility for Refund</h2>
          <ul>
            <li>The request is made within <strong>7 days</strong> of the initial payment.</li>
            <li>The service has not been fully delivered or significantly consumed.</li>
            <li>The issue cannot be resolved after reasonable efforts from our support team.</li>
          </ul>

          <h2>2. Non-Refundable Services</h2>
          <ul>
            <li>Services that have been fully delivered or completed.</li>
            <li>Customized solutions or development work after approval and delivery.</li>
            <li>Third-party licensing or subscription fees paid on your behalf.</li>
            <li>Emergency support services or express delivery fees.</li>
          </ul>

          <h2>3. How to Request a Refund</h2>
          <p>
            To request a refund, please contact our support team at
            <a href="mailto:dpsuppkr@gmail.com">dpsuppkr@gmail.com</a> with:
          </p>
          <ul>
            <li>Your full name and contact information</li>
            <li>Service order number</li>
            <li>Reason for the refund request</li>
          </ul>
          <p>
            All refund requests will be reviewed within <strong>5 business days</strong>.
            We reserve the right to approve or decline refund requests based on the terms outlined above.
          </p>

          <h2>4. Refund Processing</h2>
          <p>Approved refunds will be issued via the original payment method within <strong>7–10 business days</strong>.</p>

          <h2>5. Changes to This Policy</h2>
          <p>We may update this Refund Policy from time to time. Changes will be posted on this page with the updated revision date.</p>
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
