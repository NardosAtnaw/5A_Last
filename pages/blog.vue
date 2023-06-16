<template>
  <div class="body-main">
    <header id="app" class="header">
      <NavApp />
      <div class="mid-title">
        <div
          class="wrapper"
          data-aos="slide-right"
          data-aos-offset="20"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-center"
        >
          <p>BLOG</p>
        </div>
      </div>
    </header>
    <!-- <section class="links">
      <div class="container">
        <div class="link">
          <ul class="public-link">
            <li>
              <a href="#"> Laws</a>
            </li>
           
            <li><a href="#"> Journal</a></li>
            <li><a href="#"> Research</a></li>
            <li><a href="#"> Proclamations</a></li>
          </ul>
        </div>
      </div>
    </section> -->
    <section class="publication-post">
      <div class="container">
        <div class="search">
          <div class="search-object">
            <ul class="search-list">
              <li>
                          <a href="indu"
                            >Industrials, Manufacturing & Transportation</a
                          >
                        </li>

                        <li>
                          <a href="energy">Energy, Mining & Infrastructure</a>
                        </li>

                        <li><a href="health">Healthcare & Life Sciences</a></li>
                        <li><a href="hotel">Hotels, Resorts & Tourism</a></li>

                        <li><a href="finance"> Financial Institutions</a></li>
                        <li><a href="consumer">Consumer Goods & Retail</a></li>
                        <li><a href="private">Private Equity</a></li>
                        <li>
                          <a href="telecom"
                            >Technology, Media & Telecommunications</a
                          >
                        </li>
                        <li><a href="real">Real Estate</a></li>
              <li>
                <a href="coporate"> Coporate and Commercial</a>
              </li>
              <li><a href="power">Power and Energy</a></li>
              <li><a href="mining">Mining</a></li>
              <li><a href="telecom">ICT & Telecom</a></li>

              <li><a href="employee">Employement and Immigration</a></li>
              <li><a href="charity">Charities & Nonprofit Organizations</a></li>
              <li>
                          <a href="employee">Employment & Immigration</a>
                        </li>
                        <li>
                          <a href="construction"
                            >Construction & Design</a
                          >
                        </li>
                        <li>
                          <a href="antitrust">Antitrust & Competition</a>
                        </li>
            </ul>
    
          </div>
       
        </div>
        <div class="all">
          <div
            class="publcation-wrapper"
            v-for="row in allData"
            :key="row.post_id"
          >
            <div class="single-publication">
              <div class="img-wrapper">
                <div class="lists">
                  <img
                    class="pub-img"
                    :src="
                      'https://5alawoffice.com/5Adb/post_img/' + row.post_image
                    "
                    alt=""
                  />
                </div>
              </div>
              <div class="publication-desc">
                <h4>{{ row.post_title }}</h4>
                <p>
                  {{ row.post_content }}
                </p>
              </div>
            </div>
            <div class="arrow"></div>
          </div>
        </div>
      </div>
    </section>
    <!-- <section class="other-publication">
      <div class="container">
        <h2>Other Publications</h2>
        <div class="wrapper">
         
      <a href="blog">
 <div
            data-tilt
            class="lists"
            data-aos="zoom-out-up"
            data-aos-offset="20"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
          >
            <img class="pub-img" src="../assets/Image/pub4.svg" alt="" />
            <div class="pub-title">Contract of Mandate</div>
          </div>
      </a>
         <a href="journal">
       <div
            data-tilt
            class="lists"
            data-aos="zoom-out-up"
            data-aos-offset="20"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
          >
            <img class="pub-img" src="../assets/Image/pub2.svg" alt="" />
            <div class="pub-title">Childrens Law in Ethiopia</div>
          </div>
         </a>
   
          <div
            data-tilt
            class="lists"
            data-aos="zoom-out-up"
            data-aos-offset="20"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
          >
            <img class="pub-img" src="../assets/Image/pub3.svg" alt="" />
            <div class="pub-title">Human Right</div>
          </div>
          <div
            class="lists"
            data-aos="zoom-out-up"
            data-aos-offset="20"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
          >
            <img class="pub-img" src="../assets/Image/pub4.svg" alt="" />
            <div class="pub-title">Democratic in Ethiopia</div>
          </div>
        </div>
      </div>
    </section> -->
 
    <section class="space"></section>
    <FooterApp />
  </div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";

const config = {
  headers: {
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,POST,OPTIONS,DELETE,PUT",
  },
};
export default {
  data() {
    return {
      allData: [],
      searchTerm: "",
    };
  },
  mounted() {
    AOS.init({
      duration: 900,
      offset: 120,
      easing: "ease",
      once: false,
      anchorPlacement: "top-bottom",
    });
    var Tawk_API = Tawk_API || {},
      Tawk_LoadStart = new Date();
    (function () {
      var s1 = document.createElement("script"),
        s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = "https://embed.tawk.to/62220908a34c245641296e76/1ftaf6j28";
      s1.charset = "UTF-8";
      s1.setAttribute("crossorigin", "*");
      s0.parentNode.insertBefore(s1, s0);
    })();
  },
  methods: {
    async search() {
      try {
        await axios
          .post(
            "/5Adb/",
            {
              action: "search",
              term: this.searchTerm,
            },
            config
          )
          .then((res) => {
            console.log(res.data);
            this.allData = res.data;
          });
      } catch (err) {
        console.log(err.message);
      }
    },
    async fetchData() {
      try {
        await axios
          .post(
            "/5Adb/",
            {
              action: "blog",
            },
            config
          )
          .then((res) => {
            console.log("response", res.data);
            this.allData = res.data;
          });
      } catch (err) {
        console.log(err);
      }
    },
  },
  created() {
    this.fetchData();
  },
};
</script>

<style lang="scss" scoped>
.body-main {
  .show-links,
  .show-links2 {
    display: flex !important;
  }
  .fixed {
    position: fixed !important;
    top: 0;
    width: 100%;
    padding-bottom: 0.5rem;
    background: $A-darkerblue;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    z-index: 999999;
  }
  header {
    background: url("../assets/Image/publication.jpg") rgba(3, 42, 86, 0.3)
      no-repeat;
    background-position: center center;
    background-size: cover;
    background-blend-mode: overlay;
    height: 70vh;
    width: 100%;

    .mid-title {
      display: grid;
      place-content: center;
      .wrapper {
        margin-top: 15rem;
        p {
          margin-top: 0.94rem;
          font-size: 2rem;
          color: $A-white;
          font-weight: 700;
          text-transform: uppercase;
        }
      }
    }
  }
  @include responsive($md) {
    header {
      .mid-title {
        .wrapper {
          margin-top: 15rem;
          p {
            font-size: 2.3rem;
          }
        }
      }
    }
  }
  @include responsive($lg) {
    header {
      .mid-title {
        .wrapper {
          margin-top: 20rem;
        }
      }
    }
  }
  @include responsive($xl) {
    header {
      .mid-title {
        .wrapper {
          margin-top: 15rem;
          p {
            font-size: 3rem;
          }
        }
      }
    }
  }
  .links {
    margin-top: 3rem;
    .container {
      display: grid;
      place-items: center;

      .link {
        .public-link {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 2rem;
          li {
            a {
              @extend .text;
              font-size: 1rem;
              font-weight: 500;
              color: $A-darkerblue;
            }
          }
          &:hover {
            color: $A-lightblue;
            font-size: 1.3rem;
            font-weight: 600;
          }
        }
      }
    }
  }
  @include responsive($md) {
    .links {
      .container {
        .link {
          .public-link {
            display: flex;
          }
        }
      }
    }
  }
  @include responsive($lg) {
    .links {
      .container {
        .link {
          .public-link {
            display: flex;
            li {
              a {
                margin-left: 2rem;
              }
            }
          }
        }
      }
    }
  }
  .publication-post {
    margin-top: 5rem;
    .container {
      .all {
        .publcation-wrapper {
          background: $A-lightblue;
          padding: 1rem;
          position: relative;
          .single-publication {
            .img-wrapper {
              .lists {
                display: grid;
                place-items: center;
                position: relative;
                margin-top: 2rem;

                .pub-img {
                  width: 20rem;
                  object-fit: cover;
                  // position: relative;
                }
                .pub-title {
                  position: absolute;
                  // top: 0;
                  margin-left: 2rem;
                  margin-right: 2rem;
                  @extend .title;

                  text-align: left;
                  color: #fff;
                }
              }
            }
            .publication-desc {
              margin-top: 2rem;
              h4 {
                @extend .title;
                font-weight: 500;
                color: #fff;
                text-align:left;
                line-height: 2rem;
              }
              p {
                @extend .text;
                text-align:left;
                margin-top: 0.94rem;
                color: #fff;
              }
            }
          }
          .arrow {
            display: flex;
            justify-content: right;
            margin-top: 5rem;
            img {
              width: 3rem;
            }
          }
        }
      }
      .search {
        display: grid;
        place-items: center;

        margin-top: 5rem;
        .input-container {
          display: flex;
          flex-direction: row-reverse;
          width: 13rem;
          height: 0.4rem;
          margin-bottom: 3rem;
          margin-right: -3rem;
          margin-left: -1rem;
          .search-button {
            background: none;
            border: none;
            padding: 0;
            margin: 0;
          }
          .icon {
            height: 2.11rem;
            padding: 5px;

            min-width: 50px;
            // background: #fff;
            border: 2px solid $A-darkerblue;
            border-start-end-radius: 20px;
            border-end-end-radius: 20px;
            border-left: none;
          }
          ::placeholder {
            color: $A-darkerblue;
            opacity: 1; /* Firefox */
          }
          :-ms-input-placeholder {
            /* Internet Explorer 10-11 */
            color: #fff;
          }
          ::-ms-input-placeholder {
            /* Microsoft Edge */
            color: #fff;
          }
          .input-field {
            width: 100%;
            padding: 15px;
            color: $A-darkerblue;
            font-size: 1rem;
            outline: none;
            background: none;
            border-style: solid;
            border-color: $A-darkerblue;
            border-start-start-radius: 20px;
            border-end-start-radius: 20px;
            border-right: none;
          }
        }
        .search-object {
          margin-top: 0rem;
          margin-bottom: 5rem;
          .search-list {
            li {
              margin-top: 0.94rem;
              // text-transform: lowercase;
              a {
                color: $A-darkerblue;
              }
            }
          }
          .recent-blog {
            margin-top: 5rem;
            h2 {
              @extend .title;
              margin-top: 0.94rem;
              font-size: 1.5rem;
              text-align: center;
              color: $A-darkerblue;
            }
            .wrapper {
              .recent {
                display: flex;
                align-items: center;
                gap: 2rem;
                margin-top: 2rem;
                .blog-picture {
                  width: 5rem;
                  height: 5rem;
                  object-fit: cover;
                }
              }
            }
          }
        }
      }
    }
  }
  @include responsive($md) {
    .publication-post {
      .container {
        display: flex;
        flex-direction: row-reverse;
        justify-content: start;
        gap: 1rem;
        .all {
          .publcation-wrapper {
            padding: 1rem;
            .single-publication {
              .publication-desc {
                margin-top: 4rem;
                p {
                  margin-top: 2rem;
                }
              }
            }
          }
        }
        .search {
          margin-top: 0rem;
          // position: sticky;
          top: 0;
          .search-object {
            .recent-blog {
              .wrapper {
                .recent {
                  display: flex;
                  // align-items: center;
                  gap: 2rem;
                  margin-top: 2rem;
                  .blog-picture {
                    width: 5rem;
                    height: 5rem;
                    object-fit: cover;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  @include responsive($lg) {
    .publication-post {
      margin-top: 8rem;
      .container {
        gap: 3rem;
        .all {
          .publcation-wrapper {
            padding-left: 5rem;
            padding-right: 5rem;
            .single-publication {
              .publication-desc {
                margin-top: 4rem;
                p {
                  margin-top: 2rem;
                }
              }
            }
          }
        }
      }
    }
  }
  @include responsive($xl) {
    .publication-post {
      .container {
        .all {
          .publcation-wrapper {
            padding-left: 5rem;
            padding-right: 5rem;
            padding-top: 5rem;
            padding-bottom: 5rem;
            .single-publication {
              .publication-desc {
                margin-top: 4rem;
                p {
                  margin-top: 2rem;
                }
              }
            }
          }
        }
        // .search {
        //   .search-object {
        //   }
        // }
      }
    }
  }
  .other-publication {
    margin-top: 8rem;
    .container {
      h2 {
        @extend .title;
        margin-top: 0.94rem;
        text-align: center;
        color: $A-darkerblue;
      }
      .wrapper {
        .lists {
          display: grid;
          place-items: center;
          position: relative;
          margin-top: 2rem;

          .pub-title {
            position: absolute;
            // top: 0;
            margin-left: 2rem;
            margin-right: 2rem;
            @extend .text;
            font-size: 1.5rem;
            margin-top: 0.94rem;
            text-align: center;
            color: #fff;
          }
        }
      }
    }
  }
  @include responsive($md) {
    .other-publication {
      .container {
        .wrapper {
          display: flex;
          gap: 1rem;
          margin-top: 3rem;
          .lists {
            .pub-img {
              width: 30rem;
            }
            .pub-title {
              font-size: 1.3rem;
            }
          }
        }
      }
    }
  }
  @include responsive($md) {
    .other-publication {
      .container {
        .wrapper {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 1rem;
          margin-top: 3rem;
          .lists {
            .pub-title {
              font-size: 1.3rem;
            }
          }
        }
      }
    }
  }
  @include responsive($xl) {
    .other-publication {
      margin-top: 10rem;
      .container {
        .wrapper {
          margin-top: 5rem;
          .lists {
            .pub-title {
              margin-left: 5rem;
              margin-right: 5rem;
              font-size: 1.7rem;
            }
          }
        }
      }
    }
  }
  .contact {
    margin-top: 8rem;
    .container {
      .contact-box {
        .contact-form {
          background: $A-darkerblue;
          padding: 1rem;
          padding-right: 3rem;
          margin-top: 5rem;
          position: relative;
          .contact-decor {
            position: absolute;
            right: 0.5rem;
            top: 0;
            width: 2rem;
            height: 70vh;
          }
          h2 {
            @extend .title;
            margin-top: 0.94rem;
            text-align: center;
            line-height: 1.3rem;
            color: #fff;
          }
          p {
            @extend .text;
            margin-top: 0.94rem;
            text-align: center;
            font-size: 0.8rem;
            line-height: 1.3rem;
            color: #e1e9f2;
          }
          .myform {
            place-content: center;

            input,
            textarea {
              background: $A-darkerblue;
              border: solid #fff;
              border-style: none;
              outline: none;
              width: 100%;
              margin-top: 1rem;
              border: none;
              border-bottom: 1px solid #fff;
            }
            input {
              color: #fff;

              &::placeholder {
                color: #fff;
              }
            }
            input[type="text"],
            input[type="email"] {
              padding: 1rem 0.8rem;
              color: #fff;
            }
            textarea {
              padding: 1rem 0.8rem;
              color: #ffff;
            }
            // .list-areas {
            //   div {
            //     input {

            //     }
            //   }
            // }

            .submit-buttons {
              margin-top: 5rem;
              display: flex;
              justify-content: center;
            }
          }
        }
        .contact-hours {
          background: url("../assets/Image/hours.jpg") rgba(42, 46, 83, 0.7)
            no-repeat;
          background-position: center;
          background-size: cover;
          background-blend-mode: overlay;
          // height: 70vh;
          margin-top: 5rem;
          padding: 1rem;
          h2 {
            @extend .title;
            margin-top: 0.94rem;
            text-align: left;
            color: #fff;
            line-height: 2rem;
          }
          .desc-p {
            @extend .text;
            margin-top: 0.94rem;
            text-align: left;
            font-size: 0.8rem;
            line-height: 1.3rem;
            color: #e1e9f2;
          }
          .time-contact {
            display: flex;
            align-items: center;
            margin-top: 0.8rem;
            p {
              @extend .text;

              text-align: left;
              margin-left: 1rem;
              color: #e1e9f2;
            }
          }
          .socials {
            display: flex;
            margin-top: 3rem;
            align-items: center;
            gap: 1rem;
            ul {
              li {
                a {
                  display: flex;
                  color: #e1e9f2;
                  margin-top: 2rem;
                  p {
                    margin-left: 0.94rem;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  @include responsive($md) {
    .contact {
      .container {
        .contact-box {
          display: flex;
          .contact-form {
            background: $A-darkerblue;
            padding: 1rem;
            padding-right: 4rem;
            // height: 60vh;

            .contact-decor {
              width: 2.3rem;
            }
            h2 {
              margin-top: 0.94rem;
              text-align: center;
              color: #fff;
            }
            p {
              margin-top: 0.94rem;
              text-align: center;
              font-size: 0.8rem;
              line-height: 1.3rem;
              color: #e1e9f2;
            }
          }
          .contact-hours {
            // height: 65vh;
            margin-top: 5rem;
            padding: 1rem;
            // width: 100%;
            h2 {
              margin-top: 0.94rem;
              text-align: left;
              color: #fff;
            }
            .desc-p {
              margin-top: 0.94rem;
              text-align: left;
              font-size: 0.8rem;
              line-height: 1.3rem;
              color: #e1e9f2;
            }
            .time-contact {
              display: flex;
              align-items: center;
              margin-top: 0.8rem;
              p {
                text-align: left;
                margin-left: 1rem;
                color: #e1e9f2;
              }
            }
            .socials {
              display: flex;
              margin-top: 3rem;
              align-items: center;
              gap: 1rem;
              ul {
                li {
                  a {
                    display: flex;
                    color: #e1e9f2;
                    margin-top: 2rem;
                    p {
                      margin-left: 0.94rem;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  @include responsive($lg) {
    .contact {
      .container {
        .contact-box {
          display: flex;
          .contact-form {
            padding: 1rem;
            // height: 60vh;
            margin-top: 0rem;
            padding-right: 5rem;
            .contact-decor {
              margin-top: 1rem;
            }
            h2 {
              margin-top: 2.5rem;
              text-align: center;
              color: #fff;
            }
            p {
              margin-top: 0.94rem;
              text-align: center;
              font-size: 0.8rem;
              line-height: 1.3rem;
              color: #e1e9f2;
            }
          }
          .contact-hours {
            // height: 65vh;
            margin-top: 5rem;

            padding: 3rem;
            // width: 100%;
            h2 {
              margin-top: 0.94rem;
              text-align: left;
              color: #fff;
            }
            .desc-p {
              margin-top: 0.94rem;
              text-align: left;
              font-size: 0.8rem;
              line-height: 1.3rem;
              color: #e1e9f2;
            }
            .time-contact {
              display: flex;
              align-items: center;
              margin-top: 0.8rem;
              p {
                text-align: left;
                margin-left: 1rem;
                color: #e1e9f2;
              }
            }
            .socials {
              display: flex;
              margin-top: 3rem;
              align-items: center;
              gap: 1rem;
              ul {
                li {
                  a {
                    display: flex;
                    color: #e1e9f2;
                    margin-top: 2rem;
                    p {
                      margin-left: 0.94rem;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  @include responsive($xl) {
    .contact {
      margin-top: 10rem;
    }
  }
  .footer {
    background: $A-darkerblue;
    margin-top: 6.25rem;

    .container {
      // width: 100%;
      .footer-wrapper {
        .footer-link-container {
          .upper {
            display: grid;
            // grid-template-columns: 1fr 1fr;
            place-items: center;
            .map {
              display: flex;
              justify-content: center;
              img {
                margin-top: 1rem;
              }
            }
            .desti {
              .desti-title {
                color: #fff;
                @extend .title;
                margin-top: 4.37rem;
                text-align: center;
                font-size: 1.13rem;
                font-weight: 500;
                text-transform: uppercase;
              }
              .desti-list {
                text-align: center;
                margin-top: 1.88rem;
                margin-bottom: 1.88rem;
                // margin-left: 2rem;
                // gap: 3.31rem;
                .links {
                  display: grid;

                  grid-template-columns: 1fr 1fr;
                  place-items: left;
                  gap: 1.88rem;

                  li {
                    a {
                      font-size: 0.8rem;
                    }
                  }
                }
                div {
                  // display: grid;
                  // place-items: left;
                  gap: 1rem;
                  margin-top: 0.8rem;

                  .footer-link {
                    a {
                      color: #fff;
                      font-size: 0.8rem;
                    }
                  }
                  p {
                    color: #fff;
                    @extend .text;

                    text-align: center;
                    font-size: 0.8rem;
                  }
                  .icon-container {
                    display: flex;
                    // align-items: center;
                    justify-content: center;
                    gap: 1.88rem;
                    margin-top: 0.88rem;
                  }
                }
              }
            }
          }
        }
      }
      hr {
        margin-top: 1.37rem;
        color: #fff;
      }
      .lower {
        display: grid;
        place-items: center;
        margin-top: 4.37rem;
        // margin-bottom: 5rem;
        img {
          width: 12rem;
        }
        p {
          color: #fff;
          font-size: 1rem;
          margin-top: 1.88rem;
          line-height: 1.3rem;
          text-align: center;
        }
      }
      .copyright {
        display: grid;
        place-items: center;
        margin-top: 5.37rem;

        p {
          color: #fff;
          font-size: 0.88rem;
          margin-top: 1.88rem;
          line-height: 1.3rem;
          text-align: center;
          a {
            color: $A-lightblue;
          }
        }
      }
    }
  }
  @include responsive($md) {
    .footer {
      .container {
        .footer-wrapper {
          .footer-link-container {
            display: flex;
            // align-items: center;

            .upper {
              display: grid;
              grid-template-columns: 1fr 1fr;
              place-items: center;
              .map {
                margin-top: 4.37rem;
                img {
                  width: 50rem;
                }
              }
              .desti {
                .desti-title {
                  text-align: center;
                }
                .desti-list {
                  text-align: left;
                  margin-top: 0.98rem;
                  margin-bottom: 0.98rem;

                  div {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 1.3rem;
                    margin-top: 0.98rem;
                    .footer-link {
                      a {
                        font-size: 0.8rem;
                        text-align: left;
                      }
                    }
                  }
                }
              }
            }
          }
        }

        .lower {
          img {
            width: 15rem;
          }
        }
      }
    }
  }
  @include responsive($lg) {
    .footer {
      margin-top: 8.13rem;
      .container {
        .footer-wrapper {
          .footer-link-container {
            place-items: center;
            .upper {
              gap: 4rem;
              .desti {
                .desti-title {
                  text-align: center;
                }
                .desti-list {
                  text-align: center;
                  margin-top: 0.98rem;
                  margin-bottom: 0.98rem;
                }
              }
            }
          }
        }

        .lower {
          margin-bottom: 0rem;
          display: flex;
          justify-content: space-between;
          img {
            margin-bottom: 1rem;
            // width: 20rem;
          }
          p {
            font-size: 1.3rem;
          }
        }
      }
    }
  }
  @include responsive($xl) {
    .footer {
      margin-top: 10rem;
      .container {
        .footer-wrapper {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          gap: 5rem;
          .footer-link-container {
            .upper {
              display: grid;
              grid-template-columns: 1fr 1fr 1fr 1fr;
              align-items: flex-start;
              gap: 5rem;
            }
          }
        }
      }
    }
  }
  @include responsive($xxl) {
    .footer {
      .container {
        .footer-wrapper {
          gap: 10rem;
          .footer-link-container {
            .upper {
              gap: 10rem;
            }
          }
        }
      }
    }
  }
}
</style>
