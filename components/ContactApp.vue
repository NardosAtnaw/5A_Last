<template>
  <section class="contact">
    <div class="container">
      <div class="contact-box">
        <div class="contact-hours">
          <h2>HOURS FOR CONTACT</h2>
          <p class="desc-p">
            This is the contact hours; please make sure your time is in sync
            with ours.
          </p>
          <div class="time-contact">
            <img src="../assets/Icons/time.svg" alt="" />
            <p>Monday-Thursday 6:00-19:00 GMT</p>
          </div>
          <div class="time-contact">
            <img src="../assets/Icons/time.svg" alt="" />
            <p>Firday-Staurday 7:00-18:00 GMT</p>
          </div>

          <div class="socials">
            <img src="../assets/Icons/decor.svg" alt="" />
            <ul>
              <li>
                <a href="mailto:mesenbet.assefa@aau.edu.et"
                  ><img src="../assets/Icons/mail.svg" alt="" />
                  <p>mesenbet.assefa@aau.edu.et</p></a
                >
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/5a-jurist-consultancy-group/about/?viewAsMember=true"
                  ><img src="../assets/Icons/linkedin.svg" alt="" />
                  <p>5a-jurist-consultancy-group</p></a
                >
              </li>
              <!-- <li>
                <a href=""
                  ><img src="../assets/Icons/facebook.svg" alt="" />
                  <p>5Alawoffice@facebook.com</p></a
                >
              </li> -->
              <li>
                <a href=""
                  ><img src="../assets/Icons/phone.svg" alt="" />
                  <p>0116504949, Fax – 0116505758</p></a
                >
              </li>
            </ul>
          </div>
        </div>

        <div class="contact-form">
          <h2>CONTACT US</h2>
          <p>
            This is the contact form; Please make sure to fill it in order for
            you to reach us
          </p>
          <form
            method="POST"
            action="https://formsubmit.co/mesenbet.assefa@aau.edu.et"
            enctype="multipart/form-data"
            class="myform"
          >
            <img
              class="contact-decor"
              src="../assets/Icons/decor2.svg"
              alt=""
            />
            <div class="input-box">
              <input
                type="text"
                name="name"
                class="line right-margin"
                placeholder="Frist Name"
              />
              <input
                type="email"
                name="email"
                class="line right-margin"
                placeholder="Email"
              />

              <input
                class="line right-margin"
                type="text"
                name="_subject"
                placeholder="Subject"
              />
              <!-- <input
                type="file"
                id="avatar"
                name="avatar"
                accept="image/png, image/jpeg"
              /> -->
              <input type="hidden" name="_template" value="basic" />
              <!-- <div class="file-upload">
                <input type="file" />
                <i class="fa fa-arrow-up"></i>
              </div> -->
            </div>
            <span>
              <p>It is confidential to write your message here .</p>
            </span>
            <textarea class="line" name="Message" id="" cols="30" rows="5">
Message </textarea
            >

            <div class="submit-buttons">
              <button type="submit" class="btn btn-white">SEND MESSAGE</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
.contact {
  margin-top: 8rem;
  margin-bottom: 8rem;
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
          span {
            p {
              color: $A-green;
              text-align: left;
              margin-top: 1rem;
              margin-left: 0.5rem;
            }
          }
          .file-upload {
            height: 20px;
            width: 20px;
            border-radius: 100px;
            position: relative;

            display: flex;
            justify-content: center;
            align-items: center;

            border: 4px solid #ffffff;
            overflow: hidden;
            background-image: linear-gradient(
              to bottom,
              #2590eb 50%,
              #ffffff 50%
            );
            background-size: 100% 200%;
            transition: all 1s;
            color: #ffffff;
            font-size: 100px;

            input[type="file"] {
              height: 20px;
              width: 20px;
              position: absolute;
              top: 0;
              left: 0;
              opacity: 0;
              cursor: pointer;
            }

            &:hover {
              background-position: 0 -100%;

              color: #2590eb;
            }
          }
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
</style>
