<template>
  <div class="grid">
    <div class="sidebar">
      <side-bar></side-bar>
    </div>
    <div class="content">

    </div>
  </div>
</template>

<script>


import SideBar from "@/components/side/SideBar";
export default {
  name: 'App',
  components: {SideBar},
}
</script>

<style>
.grid {
  display: grid;

  grid-template-areas:

  "nav content content";
  grid-template-rows: 60px 1fr;
  grid-template-columns: 2fr 10fr;
  grid-gap: 10px;

}


.sidebar {
  grid-area: nav;
}

.content {
  grid-area: content;
}


</style>
