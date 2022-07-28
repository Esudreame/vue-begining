<template>
  <div v-for="item in items" :key="item.id">
    <side-bar-item :id="item.id" :route="item.route">{{item.value}}</side-bar-item>
  </div>
</template>

<script>
import SideBarItem from "@/components/side/sideBarItem";
export default {
  name: "SideBar",
  components: {SideBarItem},
  data(){
    return{
      items: [
        {id: '1', value: 'Users', route: "/users"},
        {id: '2', value: 'Schedule', route: '/schedules'},
        {id: '3', value: 'Groups', route: '/groups'},
      ]
    }
  }

}
</script>

<style scoped>

</style>