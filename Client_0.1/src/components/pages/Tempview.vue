<template>
 <div>
      <header class="header">
      <div class="container">
        <div class="logo">Social <span>Network</span></div>
        <div class="right-section">
          <button class="register">Register</button>
          <button class="register">login</button>
        </div>
      </div>
    </header>
    <main>
      <div class="container">
        <div class="row">
          <div class="col-lg-6 offset-lg-3">
            <div class="create-post-card">
              <div class="btn btn-primary">Create Post</div>
            </div>
            <div class="social-card">
              <div class="social-card-header">
                <div class="user-wrapper">
                  <img src="/static/user.jfif" alt="" class="user" />
                  <div class="user-details">Anna Agrawal</div>
                </div>
              </div>
              <div class="social-card-body">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Mollitia eius praesentium accusamus illo nesciunt assumenda
                  voluptate aliquid blanditiis. Fugiat similique cumque eum
                  consequatur ad, laboriosam voluptate recusandae quae
                  architecto eius?
                </p>
              </div>
              <div class="social-card-footer">
                <a href="#">Like</a>

                <a href="#">Comment</a>
              </div>
            </disv>
            <div class="social-card">
              <div class="social-card-header">
                <div class="user-wrapper">
                  <img src="/static/user.jfif" alt="" class="user" />
                  <div class="user-details">Anna Agrawal</div>
                </div>
              </div>
              <div class="social-card-body">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Mollitia eius praesentium accusamus illo nesciunt assumenda
                  voluptate aliquid blanditiis. Fugiat similique cumque eum
                  consequatur ad, laboriosam voluptate recusandae quae
                  architecto eius?
                </p>
              </div>
              <div class="social-card-footer">
                <a href="#">Like</a>

                <a href="#">Comment</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <footer>
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <p class="copyright">&copy; Copyright 2021 Abhi barge</p>
          </div>
        </div>
      </div>
    </footer>
 </div>
</template>
<script>
  import axios from 'axios'
  import VueJWT from 'vuejs-jwt'
export default {
  name: 'loginScreen',
  data () {
    return {
      login:{}
    }
  },
  methods: {
    LoginUser () {
    }
  }
}
</script>
<style scoped>
body {
  margin: 0;
  padding: 0;
  font-size: 15px;
  line-height: 1.4;
  background: #fafafa;
  font-family: 'Nunito', sans-serif;
}

.header {
  background: #ddd;
  padding: 15px 0;
}

.header .container {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
}

.header .container .logo {
  font-size: 26px;
  text-transform: uppercase;
}

.header .container .logo span {
  color: #3afe;
  font-weight: 700;
}

.header .container .right-section .register {
  padding: 8px 30px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

main {
  padding: 30px 0;
  min-height: 500px;
}

main .create-post-card {
  background: #fff;
  padding: 25px;
  border-radius: 4px;
  border: 1px solid #f2f2f2;
  margin-bottom: 35px;
}

main .social-card {
  border: 1px solid #f2f2f2;
  margin-bottom: 35px;
  border-radius: 4px;
}

main .social-card .social-card-header {
  padding: 10px 25px;
  background: #f2f2f2;
}

main .social-card .social-card-header .user-wrapper {
  width: 150px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
}

main .social-card .social-card-header .user-wrapper .user {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  -o-object-fit: cover;
     object-fit: cover;
}

main .social-card .social-card-header .user-wrapper .user-details {
  font-size: 16px;
  margin: 0;
}

main .social-card .social-card-body {
  padding: 25px;
  background: #fff;
}

main .social-card .social-card-body p:last-child {
  margin: 0;
}

main .social-card .social-card-footer {
  background: #f2f2f2;
  padding: 25px;
}

main .social-card .social-card-footer a {
  background: #3afe;
  padding: 8px 10px;
  border-radius: 6px;
  color: #fff;
  -webkit-box-flex: 1;
      -ms-flex: 1 1 auto;
          flex: 1 1 auto;
  text-align: center;
}

footer {
  background: #181818;
  padding: 8px 0;
}

footer .copyright {
  font-size: 13px;
  margin: 0;
  text-align: center;
  color: #f2f2f2;
}

</style>
