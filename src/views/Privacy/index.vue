<template>
  <div>
    <!--头部-->
    <Navbar />

    <!--内容-->
    <div class="faq__container">
      <div class="faq__title">Privacy policy</div>
      <div class="faq-decription">
        <p>Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information when you use our IT services and website.</p>

        <h2>1. Information We Collect</h2>
        <ul>
          <li><strong>Personal Information:</strong> Name, email address, phone number, billing information, etc.</li>
          <li><strong>Technical Information:</strong> IP address, browser type, operating system, and usage data.</li>
          <li><strong>Cookies and Tracking:</strong> We use cookies to enhance user experience and gather analytics.</li>
        </ul>

        <h2>2. How We Use Your Information</h2>
        <ul>
          <li>To provide and improve our services</li>
          <li>To communicate with you regarding support or updates</li>
          <li>To process payments and invoices</li>
          <li>To comply with legal obligations</li>
        </ul>

        <h2>3. Sharing Your Information</h2>
        <p>We do not sell, trade, or rent your personal information to third parties. We may share data with:</p>
        <ul>
          <li>Trusted service providers working on our behalf</li>
          <li>Government or regulatory bodies if required by law</li>
          <li>Payment gateways for processing transactions</li>
        </ul>

        <h2>4. Data Security</h2>
        <p>We implement appropriate technical and organizational measures to safeguard your data from unauthorized access, loss, or misuse.</p>

        <h2>5. Your Rights</h2>
        <p>You have the right to access, correct, or delete your personal information. To exercise these rights, please contact us at
          <a href="mailto:dpsuppkr@gmail.com">dpsuppkr@gmail.com</a>.
        </p>

        <h2>6. Third-Party Links</h2>
        <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices of those sites.</p>

        <h2>7. Changes to This Policy</h2>
        <p>We may update this Privacy Policy periodically. Changes will be posted on this page with the updated revision date.</p>

        <h2>8. Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, please contact us at
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
