<template>
  <div class="q-pa-md">
    <div class="col-12 flex justify-between items-center content-center q-mb-md">
        <div class="text-h5">Tratamientos</div>
          <q-btn unelevated rounded color="primary" label="Nuevo Paciente" @click="persistent = true" />
    </div>
    <div class="col-12 row flex justify-around no-wrap">
      <q-card class="my-card col-3 q-mr-md q-mt-md" flat bordered>
        <q-img src="data:image/png;base64,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" />

        <q-card-section>
          <div class="text-overline text-orange-9">Tratamiento</div>
          <div class="text-h5 q-mt-sm q-mb-xs">Psicológico</div>
          <div class="text-caption text-grey">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </q-card-section>

        <q-card-actions>
          <q-btn flat color="dark" label="Asignar" />
          <q-btn flat color="primary" label="Editar" />

          <q-space />

          <q-btn  color="grey" round flat dense :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'" @click="expanded = !expanded" />
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
      <q-card class="my-card col-3 q-mr-md q-mt-md" flat bordered>
        <q-img src="data:image/jpeg;base64,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" />

        <q-card-section>
          <div class="text-overline text-orange-9">Tratamiento</div>
          <div class="text-h5 q-mt-sm q-mb-xs">Físico</div>
          <div class="text-caption text-grey">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </q-card-section>

        <q-card-actions>
          <q-btn flat color="dark" label="Asignar" />
          <q-btn flat color="primary" label="Editar" />

          <q-space />

          <q-btn  color="grey" round flat dense :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'" @click="expanded = !expanded" />
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
      expanded: false,
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
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
