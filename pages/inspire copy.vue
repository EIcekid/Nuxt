<template>
  <div id="bg" class="bg">
    <v-card class="mx-auto" max-width="344" outlined>
      <v-list-item three-line>
        <v-list-item-content>
          <div class="text-overline mb-4">
            OVERLINE
          </div>
          <v-list-item-title class="text-h5 mb-1">
            Headline 5
          </v-list-item-title>
          <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
      </v-list-item>

      <v-card-actions>
        <v-btn outlined rounded text>
          Button
        </v-btn>
      </v-card-actions>
    </v-card>
    <div class="login" @keyup.13="doLogin">
      <div class="form-horizontal login">
        <div class="form-group input-group input-group-lg ">
          <span class="input-group-addon"><i class="fa fa-user-o" aria-hidden="true"></i></span>
          <v-inputs type="text" class=" form-control" placeholder="username" v-model="userInfo.userName"></v-inputs>
        </div>
        <div class="form-group input-group input-group-lg">
          <span class="input-group-addon"><i class="fa fa-key" aria-hidden="true"></i></span>
          <input type="password" class=" form-control" placeholder="password" v-model="userInfo.password">
        </div>
        <div class="form-group">
          <v-btn class="form-control" @click="doLogin">ログイン</v-btn>
          <!-- <button class="btn btn-default btn-sm form-control login-btn" @click="doLogin">登 录</button> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'InspirePage',
  data() {
    return {
      userInfo: {
        userName: '',
        password: '',
      },
      show: false,
    }
  },
  methods: {
    doLogin() {
      if (this.userName == '') {
        alert('用户名不能为空');
        return false
      }
      if (this.password == '') {
        alert('密码名不能为空');
        return false
      }
      axios.post('/login', JSON.stringify(this.userInfo))
        .then(res => {
          console.log(res)
          if (res.status == 200) {
            this.$store.commit('setToken', res.data);
            localStorage.userName = this.userInfo.userName;
            localStorage.token_expire = res.data.expire;
            localStorage.token = res.data.token;
            this.$notify({
              title: '提示信息',
              message: '登录成功',
              type: 'success'
            });
            this.$router.push({ path: '/' })
          } else {
            this.$notify({
              title: '提示信息',
              message: '账号或密码错误',
              type: 'error'
            });
          }
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  mounted() {
    var wi = window.screen.width;
    var hi = window.screen.height;
    document.getElementById("bg").style.width = wi + "px";
    document.getElementById("bg").style.height = hi + "px";
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*.bg {*/
/*!*background-color: aqua;*!*/
/*background-image: url("../assets/bj.jpg");*/
/*background-size:100% 100%*/
/*}*/
.login {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  width: 400px;

}

.login-btn {
  background-color: whitesmoke;
}

.logo {
  font-family: "DejaVu Sans Mono";
  color: lightblue;
  font-size: 50px;
}
</style>