<template>
  <div>
    <!--头部-->
    <Navbar />

    <!--内容-->
    <div class="layanan__container">
      <h1>service</h1>
      <div class="layanan__content__layout">
        <div class="layanan__content__item">
          <p>BRANDING</p>
          <img src="../../assets/12084798_20943953.jpg" alt="" />
        </div>
        <div class="layanan__content__item">
          <p>WEBSITE</p>
          <img src="../../assets/11669276_20945851.jpg" alt="" />
        </div>
        <div class="layanan__content__item">
          <p>digital marketing</p>
          <img src="../../assets/11668479_20943593.jpg" alt="" />
        </div>
      </div>

      <div class="layanan__module">
        <div class="layanan__module__box">
          <h2>About Us</h2>
          <div class="layanan__module__box__inner">
            At Deepay, we are dedicated to providing expert IT solutions
            designed to simplify and enhance your digital experience. We
            understand that technology can be complex and overwhelming, which is
            why we offer a comprehensive range of IT services to meet the
            diverse needs of our clients. From system installations and device
            optimization to custom configurations, we provide tailored solutions
            that empower both individuals and businesses to make the most of
            their technology.
          </div>

          <div class="layanan__module__outer">
            <div class="layanan__module__outer__left">
              <h3>Our Mission</h3>

              <div class="layanan__module__text">
                Our mission is to be a trusted partner in solving digital and IT
                challenges, offering reliable, effective, and customer-centric
                solutions. We pride ourselves on our technical expertise and
                commitment to excellent service, ensuring that every project
                reflects our high standards. With a focus on quality and
                efficiency, we deliver services that enhance productivity and
                simplify the tech-related aspects of daily life and business.
              </div>
              <a>contact us</a>
            </div>
            <div class="layanan__module__outer__left">
              <h3>Why Choose Us?</h3>
              <div class="layanan__module__text">
                With Deepay, you gain access to a team of experienced IT
                professionals who are passionate about helping clients achieve a
                seamless, optimized digital experience. We stand out for our
                personalized approach, adaptability to different systems and
                needs, and dedication to providing timely, high-quality
                services. Whether you're looking for a quick fix or a full-scale
                upgrade, we are here to guide you every step of the way.
              </div>

              <a>contact us</a>
            </div>
          </div>
        </div>
      </div>

      <div class="layanan__module">
        <div class="layanan__module__box">
          <h2>Membership & Recharge Plans</h2>
          <div class="layanan__module__box__inner">
            Boost your IT experience with our exclusive membership and recharge
            plans! Designed to provide greater value and flexibility, our plans
            allow you to access premium services at discounted rates while
            enhancing your digital experience.
          </div>

          <div class="layanan__module__outer">
            <div class="layanan__module__outer__left">
              <h3>Silver Membership Plan</h3>
              <div class="layanan__module__text">
                Gain access to essential IT services with additional perks：
              </div>
              <ul>
                <li>
                  Includes: 10 hours of remote support, priority scheduling for
                  onsite visits, and 1 free system optimization.
                </li>
                <li>
                  Promo: Sign up now and receive 20% off on your first system
                  reinstallation or free data recovery for up to 50GB.
                </li>
                <li>Price: $49/month</li>
              </ul>
              <a>contact us</a>
            </div>
            <div class="layanan__module__outer__left">
              <h3>PRO</h3>
              <div class="layanan__module__text">
                Enjoy comprehensive IT support with exclusive benefits designed
                for power users and businesses:
              </div>
              <ul>
                <li>
                  Includes: 20 hours of remote support, free consultations on
                  custom configurations, 1 complete system reinstallation, and 2
                  free optimizations per year.
                </li>
                <li>
                  Promo: Purchase a 6-month plan and get one month free, plus a
                  complimentary hardware upgrade assessment.
                </li>
                <li>Price: $79/month</li>
              </ul>
              <a>contact us</a>
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
import Navbar from "@/components/Navbar.vue";
import Bottom from "@/components/bottom.vue";
</script>

<style lang="scss" scoped>
.layanan__container {
  width: 1215px;
  margin: 150px auto 0;
  padding: 70px 40px;

  h1 {
    color: #254da7;
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
        color: #254da7;
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
            color: #254da7;
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
              background: url("../../assets/check.svg") no-repeat left center;
              background-size: 20px 20px;
            }
          }

          a {
            display: block;
            width: 240px;
            color: #fff;
            background-color: #69727d;
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
        color: #254da7;
        margin-bottom: 20px;
      }
    }
  }
}
</style>
