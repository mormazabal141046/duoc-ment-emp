<template>
  <div class="q-pa-md">
    <q-table
      :data="data"
      :columns="columns"
      row-key="name"
    />
  </div>
</template>

<script>
export default {
  name:"Pacientes",
  data(){
    return{

    }
  }
}
</script>

<style>

</style>
