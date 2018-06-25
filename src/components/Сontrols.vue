<template>
  <div>
    <button class="btns" @click="$emit('addSimpleBlock')">Добавить простой блок</button>
    <button class="btns" @click="$emit('addExtBlock')">Добавить сложный  блок</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        msg: 'Buttons controls'
      }
    }
  }
</script>

<style>
  .btns {
    margin: 10px;
    border-radius: 4px;
    min-width: 50px;
    padding: 4px;
    background-color: white;
    color: black;
    border: 1px solid;
    font-weight: 800;
  }
</style>
