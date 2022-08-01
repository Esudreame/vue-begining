<template>
    <div v-for="item in inputList" :key="item.id">
        <my-input :placeholder=item.placeholder :id=item.id>{{item.inputName}}</my-input>
    </div>
    <button @click="post">Create</button>
</template>

<script>
import MyInput from "@/components/content/UI/MyInput";
import axios from "axios";

export default {
    name: "UserForm",
    components: {MyInput},
    data(){
        return{
            inputList: [
                 {id: '1', inputName: 'Name', placeholder: 'Name'},
                 {id: '2', inputName: 'Username', placeholder: 'Username'},
                 {id: '3', inputName: 'Email', placeholder: 'Email'},
            ]
        }
    },
    methods:{
        post(){
            axios.post()
        }
    }
}
</script>

<style scoped>
my-input {

}
</style>