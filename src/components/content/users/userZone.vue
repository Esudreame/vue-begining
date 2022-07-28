<template>
  <div>

  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "userZone",
  data() {
    return {
      userInfo: ''
    }
  },
  mounted() {
    axios.get('https://jsonplaceholder.typicode.com/users').then(response => (this.userInfo = response))
  }
}
</script>

<style scoped>

</style>