<template>
  <div>
    <user-modal v-model:show="dialogVisible">
        <user-form></user-form>
    </user-modal>
  </div>

  <div>
    <button @click="openUserDialog">Create User</button>
  </div>
  <div v-for="item in usersInfo" :key="item.id">
    <p>{{ item.name }}</p>
  </div>
</template>

<script>
import axios from "axios";
import UserModal from "@/components/content/UI/MyModal";
import UserForm from "@/components/content/users/UserForm";

export default {
  name: "userZone",
  components: {UserForm, UserModal},
  data() {
    return {
      usersInfo: {
        type: Array
      },
      dialogVisible: false
    }
  },
  methods: {
    openUserDialog() {
      this.dialogVisible = true
    },

  },


  async mounted() {
    const resp = await axios.get('https://jsonplaceholder.typicode.com/users')
    this.usersInfo = resp.data
    // axios.get('https://jsonplaceholder.typicode.com/users').then(response => (this.userInfo = response))
  },

  setup() {

  }
}
</script>

<style scoped>

</style>