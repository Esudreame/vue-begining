<template>
  <div>
    <button>
      <router-link to="/foo"></router-link>
    </button>
  </div>
</template>

<script>
export default {
  name: "sideBarItem",
  props:{
    id: {
      type: String,
      required: true
    },

  }
}
</script>

<style scoped>

</style>