<template>
  <div class=" justify-content-center align-items-center w-100" style="margin-left: 160px;padding: 0px 10px;">
    <header class="jumbotron">
      <h3>
        <strong>Dashboard</strong>
      </h3>
    </header>
  </div>
</template>

<script>
import UserService from '../services/user.service';

export default {
  name: 'Home',
  data() {
    return {
      content: ''
    };
  },
  mounted() {
  }
};
</script>
