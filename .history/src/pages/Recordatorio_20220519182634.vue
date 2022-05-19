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
      <q-card class="my-card col-3 q-mr-md" flat bordered>
        <q-item>
          <q-item-section avatar>
            <q-avatar>
              <img src="img/reminder.png">
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-item-label><div class="text-h6">Llamar a Médico</div></q-item-label>
            <q-item-label caption>
              20-05-2022 14:00
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-separator />
        <q-card-section>
          <div class="text-overline">Detalles</div>
          <div class="text-caption">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, ullam eius aspernatur odit non nostrum excepturi maxime officiis, est reprehenderit dolorum repellendus commodi dolore in natus eum molestiae, inventore voluptas!</div>
          <div class="flex row justify-center items-center content-center">
            <q-btn unelevated rounded color="accent" label="POSPONER" @click="persistent = true" />
          </div>
        </q-card-section>
      </q-card>
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
      estado:false

    }
  }
}
</script>

<style>

</style>
