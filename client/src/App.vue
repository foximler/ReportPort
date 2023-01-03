<template>
  <div id="app">
    <sidebar v-if="currentUser" :role="currentUser.roles"/>
    <div class="widthSetter">      
      <router-view />
    </div>
  </div>
</template>

<script>
import sidebar from './views/sidebar.vue'
import AuthService from '@/services/auth.service';
export default {
  name: "app",
  components: {
    sidebar},
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
    showAdminBoard() {
      if (this.currentUser && this.currentUser.roles) {
        return this.currentUser.roles.includes('ROLE_ADMIN');
      }
      return false;
    },
    showModeratorBoard() {
      if (this.currentUser && this.currentUser.roles) {
        return this.currentUser.roles.includes('ROLE_MODERATOR');
      }
      return false;
    }
  },
  mounted() {
    this.checkSession();
  },
  methods: {
    logOut() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/login');
    },
    checkSession(){
      AuthService.getAuthStatus().then(
            (response) => {
              if(response.status== 403 || response.status == 401){
                this.logOut()
              }
            },
            (error) => {
              console.log("error")
            }
        );
    }
  }
};
</script>
<style>
  @import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');

html, body {
  font-family: 'Raleway', sans-serif;
}

#app {
  font-family: 'Raleway', sans-serif;
}
  .widthSetter{
    width: 100%;
    height:100vh;
    overflow-x:hidden;
    padding-left:160px;
  }
</style>