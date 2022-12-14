<template>
  <header id="app" class="header">
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
                  <!-- <li>
                    <a href="#additional"> Additional Team</a>
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
    <div class="mid-moto">
      <section>
        <div class="slider">
          <!-- <div class="bg-container">
            <div class="bg-block active">
              <img src="../assets/Image/homeslide.jpeg" alt="slider" />
            </div>
            <div class="bg-block">
              <img
                class="mid2"
                src="../assets/Image/homeslide.jpeg"
                alt="slider"
              />
            </div>
            <div class="bg-block">
              <img src="../assets/Image/mission.jpg" alt="slider" />
            </div>
            <div class="bg-block">
              <img src="../assets/Image/homeslide.jpeg" alt="slider" />
            </div>
            <div class="bg-block">
              <img src="../assets/Image/homeslide.jpeg" alt="slider5" />
            </div>
            <div class="bg-block">
              <img src="../assets/Image/homeslide.jpeg" alt="slider2" />
            </div>
          </div>  -->
          <div class="slide_viewer">
            <div class="slide_group">
              <div class="slide">
                <img src="../assets/Image/About.JPG" alt="slider1" />
              </div>
              <div class="slide">
                <img src="../assets/Image/team2.JPG" alt="slider2" />
              </div>

              <div class="slide">
                <img src="../assets/Image/5.JPG" alt="slider2" />
              </div>
              <div class="slide">
                <img src="../assets/Image/6.JPG" alt="slider2" />
              </div>
              <div class="slide">
                <img src="../assets/Image/mission.jpg" alt="slider5" />
              </div>
              <div class="slide">
                <img src="../assets/Image/homeslide.jpeg" alt="slider5" />
              </div>
              <!-- <div class="slide">
                <img src="../assets/Image/home2slide.jpeg" alt="slider5" />
              </div> -->
            </div>
          </div>
        </div>
      </section>
      <div class="container">
        <div
          class="moto-wrapper"
          data-aos="fade-left"
          data-aos-offset="20"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-center"
        >
          <div class="rectangle">
            <img src="../assets/Icons/Rectangle.svg" alt="" />
          </div>
          <div class="moto">
            <p>EXPERTISE.</p>
            <p>EXPERIENCE.</p>
            <p>EXCELLENCE.</p>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";
import $ from "jquery";

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

    $(".slider").each(function () {
      var $this = $(this);
      var $group = $this.find(".slide_group");
      var $slides = $this.find(".slide");
      var bulletArray = [];
      var currentIndex = 0;
      var timeout;

      function move(newIndex) {
        var animateLeft, slideLeft;

        advance();

        if ($group.is(":animated") || currentIndex === newIndex) {
          return;
        }

        bulletArray[currentIndex].removeClass("active");
        bulletArray[newIndex].addClass("active");

        if (newIndex > currentIndex) {
          slideLeft = "100%";
          animateLeft = "-100%";
        } else {
          slideLeft = "-100%";
          animateLeft = "100%";
        }

        $slides.eq(newIndex).css({
          display: "block",
          left: slideLeft,
        });
        $group.animate(
          {
            left: animateLeft,
          },
          function () {
            $slides.eq(currentIndex).css({
              display: "none",
            });
            $slides.eq(newIndex).css({
              left: 0,
            });
            $group.css({
              left: 0,
            });
            currentIndex = newIndex;
          }
        );
      }

      function advance() {
        clearTimeout(timeout);
        timeout = setTimeout(function () {
          if (currentIndex < $slides.length - 1) {
            move(currentIndex + 1);
          } else {
            move(0);
          }
        }, 4000);
      }

      $(".next_btn").on("click", function () {
        if (currentIndex < $slides.length - 1) {
          move(currentIndex + 1);
        } else {
          move(0);
        }
      });

      $(".previous_btn").on("click", function () {
        if (currentIndex !== 0) {
          move(currentIndex - 1);
        } else {
          move(3);
        }
      });

      $.each($slides, function (index) {
        var $button = $('<a class="slide_btn">&bull;</a>');

        if (index === currentIndex) {
          $button.addClass("active");
        }
        $button
          .on("click", function () {
            move(index);
          })
          .appendTo(".slide_buttons");
        bulletArray.push($button);
      });

      advance();
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
    homeSlider() {
      $(".slider").each(function () {
        var $this = $(this);
        var $group = $this.find(".slide_group");
        var $slides = $this.find(".slide");
        var bulletArray = [];
        var currentIndex = 0;
        var timeout;

        function move(newIndex) {
          var animateLeft, slideLeft;

          advance();

          if ($group.is(":animated") || currentIndex === newIndex) {
            return;
          }

          bulletArray[currentIndex].removeClass("active");
          bulletArray[newIndex].addClass("active");

          if (newIndex > currentIndex) {
            slideLeft = "100%";
            animateLeft = "-100%";
          } else {
            slideLeft = "-100%";
            animateLeft = "100%";
          }

          $slides.eq(newIndex).css({
            display: "block",
            left: slideLeft,
          });
          $group.animate(
            {
              left: animateLeft,
            },
            function () {
              $slides.eq(currentIndex).css({
                display: "none",
              });
              $slides.eq(newIndex).css({
                left: 0,
              });
              $group.css({
                left: 0,
              });
              currentIndex = newIndex;
            }
          );
        }

        function advance() {
          clearTimeout(timeout);
          timeout = setTimeout(function () {
            if (currentIndex < $slides.length - 1) {
              move(currentIndex + 1);
            } else {
              move(0);
            }
          }, 4000);
        }

        $(".next_btn").on("click", function () {
          if (currentIndex < $slides.length - 1) {
            move(currentIndex + 1);
          } else {
            move(0);
          }
        });

        $(".previous_btn").on("click", function () {
          if (currentIndex !== 0) {
            move(currentIndex - 1);
          } else {
            move(3);
          }
        });

        $.each($slides, function (index) {
          var $button = $('<a class="slide_btn">&bull;</a>');

          if (index === currentIndex) {
            $button.addClass("active");
          }
          $button
            .on("click", function () {
              move(index);
            })
            .appendTo(".slide_buttons");
          bulletArray.push($button);
        });

        advance();
      });
    },
  },
  created() {},
};
</script>

<style lang="scss">
.body-main {
  .slider {
    background-color: #09499233;
    margin-top: -8rem;
    z-index: 999;
    
  }
  .slide_viewer {
    height: 95vh;
    z-index: -99999;
    overflow: hidden;
    position: relative;
  }

  .slide img {
    width: 100%;
    height: 95vh;
 
    object-fit: cover;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .slide_group {
    height: 100%;
    position: relative;
    width: 100%;
  }

  .slide {
    display: none;
    height: 100%;
    position: absolute;
    width: 100%;
  }

  .slide:first-child {
    display: block;
  }
  .slide_buttons {
    left: 0;
    position: absolute;
    right: 0;
    text-align: center;
  }

  a.slide_btn {
    color: #aaa;
    font-size: 25px;
    margin: 0 0.175em;
    -webkit-transition: all 0.4s ease-in-out;
    -moz-transition: all 0.4s ease-in-out;
    -ms-transition: all 0.4s ease-in-out;
    -o-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
  }

  .slide_btn.active,
  .slide_btn:hover {
    color: #428cc6;
    cursor: pointer;
  }

  .directional_nav {
    height: 340px;
    margin: 0 auto;
    max-width: 740px;
    position: relative;
    top: -240px;
  }
  .previous_btn {
    bottom: 0;
    left: 50px;
    margin: auto;
    position: absolute;
    top: 0;
  }
  .next_btn {
    bottom: 0;
    margin: auto;
    position: absolute;
    right: 50px;
    top: 0;
  }
  .previous_btn,
  .next_btn {
    cursor: pointer;
    height: 65px;
    opacity: 0.5;
    -webkit-transition: opacity 0.4s ease-in-out;
    -moz-transition: opacity 0.4s ease-in-out;
    -ms-transition: opacity 0.4s ease-in-out;
    -o-transition: opacity 0.4s ease-in-out;
    transition: opacity 0.4s ease-in-out;
    width: 65px;
  }

  .previous_btn:hover,
  .next_btn:hover {
    opacity: 1;
  }

  @media only screen and (max-width: 767px) {
    .previous_btn {
      left: 50px;
    }
    .next_btn {
      right: 50px;
    }
  }

  @keyframes move-s {
    0% {
      opacity: 0;
    }

    40%,
    90% {
      opacity: 1;
      transform: translateX(-100%);
    }

    100% {
      transform: translateX(0);
    }
  }

  @keyframes move-heart {
    0%,
    40% {
      opacity: 0;
    }

    90% {
      opacity: 1;
      transform: translateX(50%);
    }

    100% {
      transform: translateX(0) scale(1.5);
    }
  }

  @keyframes confetti {
    0% {
      background-size: calc(2 * var(--radius)) calc(2 * var(--radius));
      background-position: 64% 39%, 33% 50%, 30% 66%, 54% 46%, 44% 41%, 32% 46%,
        49% 66%, 53% 69%, 42% 35%, 68% 39%, 53% 51%, 61% 33%, 47% 54%, 57% 67%,
        46% 33%, 50% 61%, 50% 46%, 48% 41%, 61% 68%, 68% 44%, 41% 57%, 35% 45%,
        33% 38%, 46% 40%, 55% 43%, 68% 53%, 31% 69%, 61% 66%, 34% 69%, 35% 41%,
        32% 42%, 42% 39%, 64% 48%, 55% 63%, 58% 48%, 68% 59%, 57% 62%, 47% 40%,
        58% 69%, 58% 48%, 44% 45%, 39% 43%, 40% 52%, 30% 47%, 69% 53%, 39% 55%,
        70% 66%, 63% 48%, 60% 38%, 40% 52%;
    }

    45% {
      background-size: calc(2 * var(--radius)) calc(2 * var(--radius));
    }

    100% {
      background-position: 83% 23%, 17% 87%, -3% 65%, 35% 83%, 14% 72%, 82% 95%,
        59% 78%, 16% 61%, 51% 62%, 26% 0%, 6% 17%, 106% 78%, 24% 46%, 36% 43%,
        28% 19%, 50% 12%, 49% 51%, 79% 19%, 42% 36%, 54% 51%, 68% 101%, 57% 7%,
        79% 29%, 28% 90%, 100% 73%, 65% 51%, 22% 81%, 84% 89%, 70% 91%, 18% 22%,
        -9% 77%, 39% -11%, 89% 3%, 36% 96%, 97% 38%, 94% 83%, 63% 95%, 45% 32%,
        62% 115%, 74% 26%, 70% 14%, 79% 55%, 60% 63%, 14% 80%, 40% 101%, 86% 73%,
        120% 40%, 27% 0%, 56% 11%, -9% 26%;
      background-size: 0 0;
    }
  }

  @keyframes glow {
    100% {
      /* filter: drop-shadow( 0 0 1em #D1B464 ); */
    }
  }

  @keyframes change-text {
    0%,
    10%,
    100% {
      content: "Sarit";
      opacity: 1;
    }

    25% {
      content: "Sarit";
      opacity: 0;
    }

    26% {
      content: "19/07";
      opacity: 0;
    }

    50%,
    60% {
      content: "19/07";
      opacity: 1;
    }

    75% {
      content: "19/07";
      opacity: 0;
    }

    76% {
      content: "Sarit";
      opacity: 0;
    }
  }
  .content a {
    display: inline-block;
    text-decoration: none;
    color: #fff;
    border: 1px solid #fff;
    padding: 10px 15px;
    width: 200px;
    margin-top: 1em;
    transition: 0.3s all ease;
  }
  .content a:hover {
    color: #091921;
    background-color: #fff;
  }
  .cover {
    position: fixed;
    height: 100vh;
    width: 100vw;
    top: 0;
    left: -100vw;
    z-index: 1000;
  }
  .transition.slide .cover1 {
    background-color: skyblue;
    animation: slide 0.3s ease-in-out forwards;
  }
  .transition.slide .cover2 {
    background-color: teal;
    animation: slide 0.3s ease-in-out forwards;
    animation-delay: 0.3s;
  }
  .transition.slide .cover3 {
    background-color: #094992;
    animation: slide 0.3s ease-in-out forwards;
    animation-delay: 0.6s;
  }
  @keyframes slide {
    from {
      left: -100vw;
    }
    to {
      left: 0;
    }
  }
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
    // background: url("../assets/Image/home.jpg") no-repeat;
    background-position: center center;
    background-size: cover;
    background-blend-mode: overlay;
    width: 100%;
    height: 90vh;

    nav {
      .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .logo {
          margin-top: 1rem;
     
          img {
            // z-index: 99999999999;
            width: 11rem;
          }
        }
        .menu-bar {
          margin-top: 1rem;
          z-index: 9999;
          .hr {
            margin: auto;
            margin-top: 0.5rem;
            color: $A-white !important;
           border: 1 !important;
            border-style: solid !important;
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
                font-weight: 600;
                color: #fff;
              }
              .sublinks,
              .sublinks2,
              .sublinks3 {
                margin: 0.5rem 0;
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
    .mid-moto {
      .container {
        margin-top: -55rem;
        margin-left: 2rem;
        @include responsive($md) {
          margin-left: -3rem;
        }
        .moto-wrapper {
          display: grid;
          place-items: center;
          // margin-top: -20rem;
         

          .rectangle {
            @include responsive($xl) {
            margin-left: 40rem;
          }
            img {
              margin-top: 20rem;

              @include responsive($md) {
                margin-top: 10rem;
                // width: 25rem;
              }
              width: 15rem;
            }
          }
          .moto {
            margin-top: -2rem;
            p {
              margin-top: 0rem;
              font-size: 2rem;
              color: $A-white;
              font-weight: 700;
              text-transform: uppercase;
              text-align: left;
              margin-left: 1rem;
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
            justify-content: left;

            margin-top: 5rem;
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
    header {
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
      .mid-moto {
        .container {
          .moto-wrapper {
            margin-top: 10rem;

            .moto {
              margin-top: 10rem;
              p {
                margin-top: 0.5rem;
              }
            }
          }
        }
      }
    }
  }
  @include responsive($xl) {
    header {
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
                  right: 30px;

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
      .mid-moto {
        .container {
          .moto-wrapper {
            justify-content: left;
            margin-left: -34rem;
            margin-top: 5rem;
            .rectangle {
              img {
                width: 20rem;
              }
            }

            .moto {
              margin-top: 15rem;
              p {
                font-size: 3.5rem;
                margin-top: 1.5rem;
                line-height: 2rem;
                margin-left: -2rem;
              }
            }
          }
        }
      }
    }
  }
}
</style>
