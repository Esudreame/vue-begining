<template>
    <router-link :to="route">
      <div class="btn"><slot/></div>
    </router-link>
</template>

<script>
export default {
  name: "sideBarItem",
  props:{
    id: {
      type: String,
      required: true
    },
    route: {
      type: String,
      required: true
    }

  }
}
</script>

<style scoped>
.btn {
  display:inline-block;
  color:#444;
  border:1px solid #CCC;
  background:#DDD;
  box-shadow: 0 0 5px -1px rgba(0,0,0,0.2);
  cursor:pointer;
  vertical-align:middle;
  max-width: 100px;
  padding: 5px;
  text-align: center;
}
.btn:active {
  color:red;
  box-shadow: 0 0 5px -1px rgba(0,0,0,0.6);
}

router-link {
  font: small-caps bold 24px/1 sans-serif;
}


</style>