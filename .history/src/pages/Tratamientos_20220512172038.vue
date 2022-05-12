<template>
  <div class="q-pa-md">
    <div class="col-12 flex justify-between items-center content-center q-mb-md">
        <div class="text-h5">Tratamientos</div>
          <q-btn unelevated rounded color="primary" label="Nuevo Paciente" @click="persistent = true" />
    </div>
    <q-table
      :data="data"
      :columns="columns"
      row-key="name"
      rows-per-page-label="Resultados por página"
      :pagination="pagination"
    />
    <q-dialog v-model="persistent" persistent transition-show="scale" transition-hide="scale">
      <q-card class="bg-primary text-white" style="width: 300px">
        <q-card-section>
          <div class="text-h6">Nuevo Paciente</div>
        </q-card-section>

        <q-card-section class=" bg-white">
          <q-input rounded outlined v-model="text" label="Nombres" stack-label dense class="q-mt-md" />
          <q-input rounded outlined v-model="text" label="Apellidos" stack-label dense class="q-mt-md" />
          <q-select rounded outlined v-model="model" :options="options" label="Previsión" dense class="q-mt-md" />
          <q-input rounded outlined v-model="text" label="Tutor" stack-label dense class="q-mt-md" />
          <q-toggle
            v-model="first"
            icon="las la-check-circle"
            label="Estado"
            class="text-primary"
          />
        </q-card-section>

        <q-card-actions align="right" class="bg-white text-primary">
          <q-btn flat label="Ingresar" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
export default {
  name:"Tratamientos",
  data(){
    return{
      persistent:false,
    }
  }
}
</script>

<style>

</style>
