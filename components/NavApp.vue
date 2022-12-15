<template>
  <nav class="nav" id="nav">
    <div class="container banner">
      <nuxt-link to="/">
        <div class="logo">
          <img src="../assets/Icons/logonew.svg" alt="" />
        </div>
      </nuxt-link>
      <div class="menu-bar menu">
        <hr />
        <hr />
        <hr />
      </div>

      <div class="links-container">
        <img src="../assets/Icons/close.svg" class="close-btn" alt="" />
        <div class="upper-nav">
          <p>mesenbet.assefa@aau.edu.et | +25116504949</p>
          <ul>
            <li>
              <a href="mailto:mesenbet.assefa@aau.edu.et"
                ><img src="../assets/Icons/mail.svg" alt="" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/5aJurist"
                ><img src="../assets/Icons/twitter.svg" alt="" />
              </a>
            </li>
            <li>
              <a href=""><img src="../assets/Icons/facebook.svg" alt="" /> </a>
            </li>
            <li>
              <a href="https://t.me/FiveAJuristConsultancyGroup"
                ><img src="../assets/Icons/telegram.svg" alt="" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/5a-jurist-consultancy-group/about/?viewAsMember=true"
                ><img src="../assets/Icons/linkedin.svg" alt="" />
              </a>
            </li>
            <!-- <li>
              <a href=""><img src="../assets/Icons/youtube.svg" alt="" /> </a>
            </li> -->
          </ul>
          <div class="social"></div>
        </div>
        <ul class="nav-links">
          <li><a href="" class="scroll-link"> Home</a></li>
          <li class="drop">
            <a href="practice" class="scroll-link drop-down-link"
              >Sector & Practice Area</a
            >
            <ul class="sublinks">
              <div class="corp-link">
                <li>
                  <a href="coporate"> Sector</a>
                  <ul class="double-link">
                    <div class="links">
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
                    </div>
                  </ul>
                </li>

                <li>
                  <a href="practice"> Pactice Area</a>
                  <ul class="double-link">
                    <div class="links2">
                      <li><a href="coporate">Corporate and Commercial</a></li>
                      <li>
                        <a href="tax">Taxation</a>
                      </li>
                      <li><a href="litigation">Litigation</a></li>
                      <li><a href="merge">Mergers and Acquisitions</a></li>
                      <li>
                        <a href="restaurant">Restaurant & Beverage</a>
                      </li>
                      <li><a href="mining">Mining</a></li>
                      <li><a href="int">Intellectual Property</a></li>
                      <li>
                        <a href="power">Power and Energy</a>
                      </li>
                      <li>
                        <a href="charity">Nonprofit Organizations</a>
                      </li>
                      <li>
                        <a href="dispute">Dispute Resolution</a>
                      </li>
                      <li>
                        <a href="telecom">Ict & Telecom</a>
                      </li>
                      <li>
                        <a href="manufacture">Manufacturing & Industries</a>
                      </li>
                      <li>
                        <a href="probond">Pro Bond</a>
                      </li>
                      <li>
                        <a href="real">Real Estate</a>
                      </li>
                      <li>
                        <a href="employee">Employment & Immigration</a>
                      </li>
                      <li>
                        <a href="construction">Construction & Design</a>
                      </li>
                      <li>
                        <a href="antitrust">Antitrust & Competition</a>
                      </li>
                      <li>
                        <a href="bank">Banking & Finance</a>
                      </li>
                      <li>
                        <a href="market">Capital Markets</a>
                      </li>
                      <li>
                        <a href="invest">Compliance & Investigations</a>
                      </li>
                      <li>
                        <a href="enviromental">Environmental Change</a>
                      </li>
                      <li>
                        <a href="trade">International Commercial </a>
                      </li>
                      <li>
                        <a href="private">Private Equity</a>
                      </li>
                      <!-- <li>
                          <a href="">Projects</a>
                        </li> -->

                      <li>
                        <a href="rest">Restructuring & Insolvency</a>
                      </li>
                    </div>
                  </ul>
                </li>
              </div>
            </ul>
          </li>

          <li class="drop">
            <a href="team" class="scroll-link">Teams</a>
            <ul class="sublinks3">
              <div class="corp-link">
                <li><a href="partners">Partners</a></li>
                <li><a href="partners">Leader</a></li>
                <!-- <li><a href="#additional"> Additional Team</a>
                  </li> -->
              </div>
            </ul>
          </li>
          <li class="drop">
            <a href="insight" class="scroll-link drop-down-link">Insight</a>
            <ul class="sublinks2">
              <div class="corp-link">
                <li><a href="blog">Blog</a></li>
                <!-- <li><a href="news">News</a></li>
                <li>
                  <a href="publication"> Publication</a>
                </li>

                <li><a href="journal">Journal</a></li> -->
              </div>
            </ul>
          </li>
          <li>
            <a href="about" class="scroll-link">About Us</a>
          </li>
          <li><a href="contact" class="scroll-link">Contact Us</a></li>
          <li>
            <!-- <a href="publication"><img src="../assets/Icons/search1.svg" class="search" alt="" /></a>  -->
            <!-- <div class="input-container">
              <button
                @click="search"
                type="submit"
                name="submit"
                class="search-button"
              >
                <img src="../assets/Icons/search1.svg" class="icon" alt="" />
              </button>
              <input
                class="input-field"
                type="search"
                v-model="searchTerm"
                placeholder="Search..."
                name="search"
              />
            </div> -->
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";
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

    const menu = document.querySelector(".menu");
    const sidebar = document.querySelector(".links-container");
    const close = document.querySelector(".close-btn");
    const banner = document.querySelector(".banner");
    menu.addEventListener("click", () => {
      sidebar.style.right = "0";
    });
    close.addEventListener("click", () => {
      sidebar.style.right = "-70vw";
    });
    const scrollLink = document.querySelectorAll(".scroll-link");
    window.addEventListener("load", () => {
      scrollLink.forEach((link) => {
        if (link.href === path) {
          link.style.color = "#71deb5";
          link.style.fontWeight = "bold";
        }
      });
    });

    window.addEventListener("scroll", () => {
      const nav = document.querySelector(".nav");
      const menu = document.querySelector(".menu");
      const logo = document.querySelector(".logo a");
      const navHeight = nav.getBoundingClientRect().height;
      const scrollHeight = window.pageYOffset;

      if (navHeight < scrollHeight) {
        nav.classList.add("fixed");
        logo.innerHTML = `<picture>
    <source media="(min-width:650px)" srcset=" ">
   <img src="../assets/Icons/Logo.svg" alt="" />
  </picture>`;

        if (window.innerWidth > 768) {
          scrollLink.forEach((link) => {
            link.classList.add("black");
            if (link.href === path) {
              link.classList.remove("black");
              link.style.color = "#71deb5";
            }
          });
        }
      } else {
        nav.classList.remove("fixed");

        if (window.innerWidth > 768) {
          scrollLink.forEach((link) => {
            link.classList.remove("black");
          });
        }
      }
    });
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
              action: "fetchAll",
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
  created() {},
};
</script>

<style lang="scss">
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

  nav {
    .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .logo {
        margin-top: 1rem;
        img {
          width: 11rem;
        }
      }
      .menu-bar {
        margin-top: 1rem;
        hr {
          margin: auto;
          margin-top: 0.5rem;
          color: $A-white;
          border-style: solid;
          width: 2.35rem;
        }
      }
      .links-container {
        position: fixed;
        top: 0;
        right: -70vw;
        height: 100vh;
        width: 70vw;
        background: $A-darkerblue;
        z-index: 9999999999;
        transition: $trans;
        .upper-nav {
          display: none;
        }
        .close-btn {
          padding: 1rem;
          width: 5rem;
          position: absolute;
          top: 0rem;
          right: 0rem;
        }
        .nav-links {
          height: 50%;
          padding-top: 25rem;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          padding-left: 2rem;
          .drop-down2 {
            a {
              color: #fff;
            }
          }
          li {
            margin-bottom: 0.5rem;
            .input-container {
              display: flex;
              flex-direction: row-reverse;
              width: 13rem;
              height: 0.4rem;
              margin-bottom: 0rem;
              margin-right: -3rem;
              margin-left: -1rem;
              .search-button {
                background: none;
                border: none;
                padding: 0;
                margin: 0;
              }
              .icon {
                height: 2.1rem;
                padding: 5px;

                min-width: 50px;
                // background: #fff;
                border: 2px solid $A-white;
                border-start-end-radius: 20px;
                border-end-end-radius: 20px;
                border-left: none;
              }
              ::placeholder {
                color: #fff;
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
                color: $A-white;
                font-size: 1rem;
                outline: none;
                background: none;
                border-style: solid;
                border-color: $A-white;
                border-start-start-radius: 20px;
                border-end-start-radius: 20px;
                border-right: none;
              }
            }
            .scroll-link {
              @extend .text-medium;
              font-size: 1rem;
              color: #fff;
            }
            .sublinks,
            .sublinks2,
            .sublinks3 {
              margin: 1rem 0;

              color: $A-lightblue;

              h3 {
                font-family: "medium bt";
                font-weight: 500;
                font-size: 1rem;
                line-height: 1.5rem;
                margin-bottom: 1rem;
              }
              img {
                width: 1.2rem;
              }
              li {
                margin-bottom: 0.5rem;
                margin-left: 1rem;

                a {
                  font-family: "light bt";
                  font-size: 0.88rem;
                  display: flex;
                  gap: 0.5rem;
                  color: $A-white;
                  transition: color 0.2s linear;
                  img {
                    width: 0.5rem;
                  }
                }
                .double-link {
                  display: none;
                }
              }
            }
          }
        }
      }
    }
  }

  @include responsive($md) {
    header {
      .mid-moto {
        .container {
          .moto-wrapper {
            display: flex;
            justify-content: center;
            margin-top: 15rem;
            .rectangle {
              img {
                width: 18rem;
              }
            }
            .moto {
              margin-top: 10rem;
              p {
                font-size: 3rem;
                margin-top: 1rem;
                margin-left: -2rem;
              }
            }
          }
        }
      }
    }
  }
  @include responsive($lg) {
    nav {
      .container {
        .links-container {
          width: 30vh;
          .close-btn {
            width: 6rem;
          }
          .nav-links {
            padding-top: 15rem;
          }
        }
      }
    }
  }
  @include responsive($xl) {
    nav {
      .container {
        .logo {
          img {
            width: 15rem;
          }
        }
        .menu-bar {
          display: none;
        }
        .links-container {
          display: block;
          position: static;
          // width: 50%;
          height: auto;
          z-index: 9999999999;
          transition: $trans;
          background: none;
          width: auto;
          .close-btn {
            display: none;
          }
          .upper-nav {
            display: flex;
            justify-content: space-between;
            margin-top: 1.5rem;
            padding-left: 2rem;
            gap: 3rem;
            p {
              color: #fff;
              font-size: 0.9rem;
            }
            ul {
              display: flex;
              gap: 1rem;
              li {
                a {
                  img {
                    width: 1rem;
                  }
                }
              }
            }
          }
          .nav-links {
            height: auto;
            display: flex;
            padding-top: 0%;
            flex-direction: row;
            gap: 2rem;
            margin-top: 1rem;
            padding-left: 2rem;
            position: relative;
            li {
              .scroll-link {
                font-size: 1rem;
                color: #fff;
              }
              a {
                font-size: 0.8rem;

                &:hover {
                  color: $A-lightblue;
                  font-size: 1.1rem;
                  font-weight: 600;
                }
              }
            }

            .drop {
              .sublinks,
              .sublinks2,
              .sublinks3 {
                position: absolute;
                width: auto;
                background: rgba(77, 90, 133, 0.88);
                padding: 1.2rem 1rem 1rem 0.5rem;
                border-radius: 1rem;
                display: none;
                top: 53px;
                h3 {
                  font-size: 1.13rem;
                  margin-bottom: 1.2rem;
                }
                li {
                  margin-bottom: 1rem;
                  width: 170px;
                  float: none;
                  display: list-item;
                  position: relative;
                  a {
                    color: $A-white;
                    font-size: 1rem;
                  }
                  .double-link {
                    display: none;
                    position: absolute;
                    width: auto;
                    background: rgba(77, 90, 133, 0.88);
                    padding: 1.2rem 1rem 1rem 0.5rem;
                    border-radius: 1rem;
                    .links {
                      display: grid;
                      grid-template-columns: 1fr 1fr;

                      li {
                        a {
                          font-size: 0.9rem;
                        }
                      }
                    }

                    .links2 {
                      display: grid;
                      grid-template-columns: 1fr 1fr 1fr;

                      li {
                        a {
                          font-size: 0.9rem;
                        }
                      }
                    }
                  }
                  &:hover {
                    ul {
                      display: block;
                      margin-top: -2.8rem;
                      // width: 300px;
                      left: 10.5rem;
                      position: absolute;
                    }
                  }
                }
              }
              &:hover {
                cursor: pointer;
                .sublinks {
                  display: block;
                  margin-top: -1.3rem;
                  width: 200px;
                  left: 7rem;
                  position: absolute;
                }
                .sublinks2 {
                  display: block;
                  margin-top: -1.3rem;
                  width: 200px;
                  left: 23rem;
                  position: absolute;
                }
                .sublinks3 {
                  display: block;
                  margin-top: -1.3rem;
                  width: 200px;
                  left: 18rem;
                  position: absolute;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
