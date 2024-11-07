<template>
  <div class="navbar__container">
    <div class="navbar__header">
      <div>
        <img src="../assets/logo.png" alt="DEEPAY" class="header__logo" />
      </div>
      <div class="navbar__header--menu">
        <ul>
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/layanan">Service</router-link>
          </li>
          <li>
            <router-link to="/faq">FAQ</router-link>
          </li>
          <li>
            <router-link to="/kontak">Contact</router-link>
          </li>
        </ul>
        <a class="navbar__header--primary">Contact Us</a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.navbar__container {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  padding: 25px 0;
  height: 105px;
  box-sizing: border-box;
  z-index: 100;
  background-color: rgb(230, 243, 247);

  .navbar__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1215px;
    height: 100%;
    margin: 0 auto;

    .header__logo {
      height: 100px;
    }

    .navbar__header--menu {
      display: flex;
      align-items: center;

      ul {
        display: flex;
        margin-right: 80px;

        li {
          list-style: none;
          padding-left: 27px;
          padding-right: 27px;

          a {
            color: #254da7;
            fill: #254da7;
            font-size: 24px;
            font-weight: bolder;
          }
        }
      }

      .navbar__header--primary {
        font-weight: bolder;
        text-transform: uppercase;
        background-color: #254da7;
        border-radius: 47px 47px 47px 47px;
        padding: 20px 40px 20px 40px;
        color: #fff;
        font-size: 20px;
        cursor: pointer;
        transition: 0.3s;
      }

      .navbar__header--primary:hover {
        transform: scale(1.05);
        text-decoration: none;
      }
    }
  }
}
</style>
