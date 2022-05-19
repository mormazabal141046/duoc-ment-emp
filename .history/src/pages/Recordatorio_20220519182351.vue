<template>
  <div class="q-pa-md">
    <div class="col-12 flex justify-between items-center content-center q-mb-md">
      <div class="text-h5">Recordatorios</div>
      <q-btn unelevated rounded color="accent" label="Nuevo Recordatorio" @click="persistent = true" />
    </div>
    <div>
      <q-input v-model="search" type="search" hint="Buscar recordatorio" rounded outlined dense full-width>
        <template v-slot:append>
          <q-icon name="search" />
        </template>
      </q-input>
    </div>
    <div class="col-12 flex justify-start items-center content-center q-mb-md q-mt-xl">
      <div class="text-h5">Agendados para hoy</div>
    </div>
    <div class="col-12 row flex justify-around no-wrap">

    </div>
  </div>
</template>

<script>
export default {
  name:"Recordatorio",
  data(){
    return{
      search:"",
      persistent:false,

    }
  }
}
</script>

<style>

</style>
