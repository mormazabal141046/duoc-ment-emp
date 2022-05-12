<template>
  <div class="q-pa-md">
    <div class="col-12 flex justify-between items-center content-center q-mb-md">
      <div class="text-h5">Consulta</div>
      <q-btn unelevated rounded color="primary" label="Nuevo Consulta" @click="persistent = true" />
    </div>
    <div>
      <q-input v-model="search" type="search" hint="Buscar pacientes" rounded outlined dense full-width>
        <template v-slot:append>
          <q-icon name="search" />
        </template>
      </q-input>
    </div>
    <div class="col-12 flex justify-start items-center content-center q-mb-md q-mt-xl">
      <div class="text-h5">Vistos recientemente</div>
    </div>
    <div>
<q-card class="my-card" flat bordered>
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
      <q-card-section>
        <div class="text-overline">ULTIMA VISITA</div>
      </q-card-section>
    </q-card>
    </div>
  </div>
</template>

<script>
export default {
  name:"Consulta",
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
