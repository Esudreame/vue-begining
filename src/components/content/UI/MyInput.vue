<template>
    <div class="instance">
        <div>
         <slot></slot>
        </div>
        <div>
            <input type="text" :placeholder="placeholder">
        </div>
    </div>

</template>

<script>
export default {
    name: "MyInput",
    props:{
        id:{
          type:String,
          required: true
        },
        value: {
          type: String,
          default: ''
        },
        placeholder: {
            type: String,
            default: ''
        },
    }
}
</script>

<style scoped>
.instance{
    border: solid;
}


</style>