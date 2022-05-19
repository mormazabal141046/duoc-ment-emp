<template>
  <div class="q-pa-md">
    <div class="col-12 flex justify-start items-center content-center q-mb-md">
      <div class="text-h5">Programa</div>
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
            <q-item-label>Actividad para Ejercicios</q-item-label>
            <q-item-label caption>
              25 min
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-separator />
        <q-card-section>
          <div class="text-caption">Control</div>
          <div class="text-overline">11-05-2022 15:41 hrs</div>
          <div class="text-caption">Receta Médica</div>
          <div class="text-overline">Si</div>
          <div class="text-caption">Próxima Visita</div>
          <div class="text-overline">22-06-2022 16:00 hrs</div>
        </q-card-section>
      </q-card>
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
