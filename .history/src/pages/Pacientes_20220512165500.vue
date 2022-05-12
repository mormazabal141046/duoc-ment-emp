<template>
  <div class="q-pa-md">
    <div class="col-12 flex justify-between items-center content-center q-mb-md">
        <div class="text-h5">Pacientes</div>
          <q-btn unelevated rounded color="primary" label="Nuevo Paciente" />
    </div>
    <q-table
      :data="data"
      :columns="columns"
      row-key="name"
      rows-per-page-label="Resultados por página"
      :pagination="pagination"
    />
    <q-dialog v-model="persistent" persistent transition-show="scale" transition-hide="scale">
      <q-card class="bg-teal text-white" style="width: 300px">
        <q-card-section>
          <div class="text-h6">Nuevo Paciente</div>
        </q-card-section>

        <q-card-section class=" bg-white q-pb-md">
          <q-input rounded outlined v-model="text" label="Rounded outlined" stack-label dense class="q-mt-md" />
          <q-input rounded outlined v-model="text" label="Rounded outlined" stack-label dense class="q-mt-md" />
        </q-card-section>

        <q-card-actions align="right" class="bg-white text-teal">
          <q-btn flat label="OK" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
export default {
  name:"Pacientes",
  data () {
    return {
      text:"",
      persistent:true,
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
