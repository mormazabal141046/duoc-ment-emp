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
              <img src="img/exercise.png">
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
          <div class="text-overline">Rutina</div>
          <div class="text-caption">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, ullam eius aspernatur odit non nostrum excepturi maxime officiis, est reprehenderit dolorum repellendus commodi dolore in natus eum molestiae, inventore voluptas!</div>
          <q-checkbox v-model="estado" label="Estado" />
        </q-card-section>
      </q-card>
      <q-card class="my-card col-3 q-mr-md" flat bordered>
        <q-item>
          <q-item-section avatar>
            <q-avatar>
              <img src="img/food.png">
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-item-label>Comida del Día</q-item-label>
            <q-item-label caption>
              25 min
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-separator />
        <q-card-section>
          <div class="text-overline">Almuerzo del día</div>
          <div class="text-caption">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, ullam eius aspernatur odit non nostrum excepturi maxime officiis, est reprehenderit dolorum repellendus commodi dolore in natus eum molestiae, inventore voluptas!</div>
          <q-checkbox v-model="estado" label="Estado" />
        </q-card-section>
      </q-card>
      <q-card class="my-card col-3 q-mr-md" flat bordered>
        <q-item>
          <q-item-section avatar>
            <q-avatar>
              <img src="img/team.png">
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-item-label>Actividades Familiares</q-item-label>
            <q-item-label caption>
              45 min
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-separator />
        <q-card-section>
          <div class="text-overline">Juego en equipo</div>
          <div class="text-caption">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, ullam eius aspernatur odit non nostrum excepturi maxime officiis, est reprehenderit dolorum repellendus commodi dolore in natus eum molestiae, inventore voluptas!</div>
          <q-checkbox v-model="estado" label="Estado" />
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
      estado:true,

    }
  }
}
</script>

<style>

</style>
