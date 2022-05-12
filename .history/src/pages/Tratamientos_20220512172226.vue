<template>
  <div class="q-pa-md">
    <div class="col-12 flex justify-between items-center content-center q-mb-md">
        <div class="text-h5">Tratamientos</div>
          <q-btn unelevated rounded color="primary" label="Nuevo Paciente" @click="persistent = true" />
    </div>
    <div class="col-12 row flex justify-around no-wrap">
       <q-card class="my-card" flat bordered>
      <q-img
        src="https://cdn.quasar.dev/img/parallax2.jpg"
      />

      <q-card-section>
        <div class="text-overline text-orange-9">Overline</div>
        <div class="text-h5 q-mt-sm q-mb-xs">Title</div>
        <div class="text-caption text-grey">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </q-card-section>

      <q-card-actions>
        <q-btn flat color="dark" label="Share" />
        <q-btn flat color="primary" label="Book" />

        <q-space />

        <q-btn
          color="grey"
          round
          flat
          dense
          :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
          @click="expanded = !expanded"
        />
      </q-card-actions>

      <q-slide-transition>
        <div v-show="expanded">
          <q-separator />
          <q-card-section class="text-subitle2">
            {{ lorem }}
          </q-card-section>
        </div>
      </q-slide-transition>
    </q-card>
    </div>
    <q-dialog v-model="persistent" persistent transition-show="scale" transition-hide="scale">
      <q-card class="bg-primary text-white" style="width: 300px">
        <q-card-section>
          <div class="text-h6">Nuevo Tratamiento</div>
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
  data () {
    return {
      first:false,
      text:"",
      model:"Seleccione",
      options:["Fonasa","Isapre"],
      persistent:false,
      pagination:{
        rowsPerPage:"12"
      },
      columns: [
        {
          name: 'name',
          required: true,
          label: 'Nombres',
          align: 'left',
          field: row => row.name,
          format: val => `${val}`,
          sortable: true,
          classes: 'bg-grey-2 ellipsis',
          style: 'max-width: 100px',
          headerClasses: 'bg-primary text-white'
        },
        { name: 'lastname', align: 'center', label: 'Apellidos', field: 'lastname', sortable: true },
        { name: 'age', label: 'Edad', field: 'age', sortable: true },
        { name: 'prev', label: 'Previsión', field: 'prev' },
        { name: 'tutor', label: 'Tutor/a', field: 'tutor' },
        { name: 'state', label: 'Estado', field: 'state' },
        { name: 'advance', label: 'Avance Tratamiento', field: 'advance', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
        { name: 'options', label: 'Opciones', field: 'options', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
      ],
      data: [
        {
          name: 'Pedro Alonso',
          lastname: 'Guitierrez Paz',
          age: 25,
          prev: 'Fonasa',
          tutor: 'N/A',
          state: 'Activo',
          advance: '51%',
          options: '',
        },
        {
          name: 'Jorge gabriel',
          lastname: 'Mendez Gonzalez',
          age: 18,
          prev: 'Isapre',
          tutor: 'N/A',
          state: 'Activo',
          advance: '12%',
          options: '',
        },
        {
          name: 'Mario Esteban',
          lastname: 'Bross Alegui',
          age: 48,
          prev: 'Fonasa',
          tutor: 'N/A',
          state: 'Activo',
          advance: '35%',
          options: '',
        },
        {
          name: 'Alexis Persival',
          lastname: 'Sanchez Sanchez',
          age: 25,
          prev: 'Fonasa',
          tutor: 'N/A',
          state: 'Activo',
          advance: '11%',
          options: '',
        },
        {
          name: 'Arturo Erasmo',
          lastname: 'Vidal Bravo',
          age: 25,
          prev: 'Fonasa',
          tutor: 'N/A',
          state: 'Activo',
          advance: '38%',
          options: '',
        },
        {
          name: 'Caludio Andres',
          lastname: 'Bravo Jola',
          age: 25,
          prev: 'Isapre',
          tutor: 'N/A',
          state: 'Inactivo',
          advance: '0%',
          options: '',
        },
        {
          name: 'Angelo Josuelo',
          lastname: 'Sagal Paraquetetraje',
          age: 25,
          prev: 'Fonasa',
          tutor: 'N/A',
          state: 'Activo',
          advance: '1%',
          options: '',
        },
        {
          name: 'Pedro Alonso',
          lastname: 'Guitierrez Paz',
          age: 25,
          prev: 'Fonasa',
          tutor: 'N/A',
          state: 'Activo',
          advance: '51%',
          options: '',
        },
        {
          name: 'Jorge gabriel',
          lastname: 'Mendez Gonzalez',
          age: 18,
          prev: 'Isapre',
          tutor: 'N/A',
          state: 'Activo',
          advance: '12%',
          options: '',
        },
        {
          name: 'Mario Esteban',
          lastname: 'Bross Alegui',
          age: 48,
          prev: 'Fonasa',
          tutor: 'N/A',
          state: 'Activo',
          advance: '35%',
          options: '',
        },
        {
          name: 'Alexis Persival',
          lastname: 'Sanchez Sanchez',
          age: 25,
          prev: 'Fonasa',
          tutor: 'N/A',
          state: 'Activo',
          advance: '11%',
          options: '',
        },
        {
          name: 'Arturo Erasmo',
          lastname: 'Vidal Bravo',
          age: 25,
          prev: 'Fonasa',
          tutor: 'N/A',
          state: 'Activo',
          advance: '38%',
          options: '',
        },
        {
          name: 'Caludio Andres',
          lastname: 'Bravo Jola',
          age: 25,
          prev: 'Isapre',
          tutor: 'N/A',
          state: 'Inactivo',
          advance: '0%',
          options: '',
        },
        {
          name: 'Angelo Josuelo',
          lastname: 'Sagal Paraquetetraje',
          age: 25,
          prev: 'Fonasa',
          tutor: 'N/A',
          state: 'Activo',
          advance: '1%',
          options: '',
        }
      ]
    }
  }
}
</script>

<style>

</style>
