<template>
<div class="sidenav">
  <div class="logo d-flex justify-content-center align-items-center">
       <img src="http://reportport.ca/logowhite.png"  style="width: 120px;">
      </div>
  <a href="#" @click="$router.push('/')" :class="{active: 'home' == $route.name}">Dashboard</a>
  <a href="#" @click="$router.push('/reporting/daily')" :class="{active: 'dailyReporting' == $route.name}">Report</a>
  <a @click="$router.push('/staff')" href="#" :class="{active: 'staff' == $route.name}">Staff</a>
  <a @click="$router.push('/profile')" href="#" :class="{active: 'profile' == $route.name}">Profile</a>
  <a href="#" @click="logOut" style="bottom:0; position:absolute; margin-bottom:20px;">Logout <font-awesome-icon icon="sign-out-alt" size="xs"/></a>
</div>
</template>

<script>
export default {
  name: 'Sidebar',
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
  methods: {
    logOut() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/login');
    },

  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push('/login');
    }
  }
};
</script>
<style>
.sidenav {
  height: 100%; /* Full-height: remove this if you want "auto" height */
  width: 160px; /* Set the width of the sidebar */
  position: fixed; /* Fixed Sidebar (stay in place on scroll) */
  z-index: 1; /* Stay on top */
  top: 0; /* Stay at the top */
  left: 0;
  background-color: #111; /* Black */
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 20px;
}

/* The navigation menu links */
.sidenav a {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
}

/* When you mouse over the navigation links, change their color */
.sidenav a:hover {
  color: #f1f1f1;
}

/* Style page content */
.main {
  margin-left: 160px; /* Same as the width of the sidebar */
  padding: 0px 10px;
}

/* On smaller screens, where height is less than 450px, change the style of the sidebar (less padding and a smaller font size) */
@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 18px;}
}
.active{
  color: white !important;
}
</style>
  