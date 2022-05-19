<template>
  <div class="q-pa-md">
    <div class="col-12 flex justify-between items-center content-center q-mb-md">
      <div class="text-h5">Programa</div>
      <q-btn unelevated rounded color="primary" label="Nueva Consulta" @click="persistent = true" />
    </div>
    <div>
      <q-input v-model="search" type="search" hint="Buscar actividades" rounded outlined dense full-width>
        <template v-slot:append>
          <q-icon name="search" />
        </template>
      </q-input>
    </div>
    <div class="col-12 flex justify-start items-center content-center q-mb-md q-mt-xl">
      <div class="text-h5">Vistos recientemente</div>
    </div>
    <div class="col-12 row flex justify-around no-wrap">
      <q-card class="my-card col-3 q-mr-md" flat bordered>
        <q-item>
          <q-item-section avatar>
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-item-label>Pedro Alonso</q-item-label>
            <q-item-label caption>
              Gonzalez Parra
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-separator />
    </div>
  </div>
</template>

<script>
export default {
  name:"Programa",
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
