<template>
  <div class="q-pa-md">
    <q-table
      :data="data"
      :columns="columns"
      row-key="name"
    />
  </div>
</template>

<script>
export default {
  name:"Pacientes",
  data () {
    return {
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
          tutor: '',
          state: 'Activo',
          advance: '1%',
          options: '',
        },
        {
          name: 'Jorge gabriel',
          lastname: 'Mendez Gonzalez',
          age: 18,
          prev: 'Isapre',
          tutor: '',
          state: 'Activo',
          advance: '1%',
          options: '',
        },
        {
          name: 'Mario Esteban',
          lastname: 'Bross Alegui',
          age: 48,
          prev: 'Fonasa',
          tutor: '',
          state: 'Activo',
          advance: '1%',
          options: '',
        },
        {
          name: 'Pedro Alonso',
          lastname: '',
          age: 25,
          prev: 'Fonasa',
          tutor: '',
          state: 'Activo',
          advance: '1%',
          options: '',
        },
        {
          name: 'Pedro Alonso',
          lastname: '',
          age: 25,
          prev: 'Fonasa',
          tutor: '',
          state: 'Activo',
          advance: '1%',
          options: '',
        },
        {
          name: 'Pedro Alonso',
          lastname: '',
          age: 25,
          prev: 'Fonasa',
          tutor: '',
          state: 'Activo',
          advance: '1%',
          options: '',
        },
        {
          name: 'Pedro Alonso',
          lastname: '',
          age: 25,
          prev: 'Fonasa',
          tutor: '',
          state: 'Activo',
          advance: '1%',
          options: '',
        },
        {
          name: 'Pedro Alonso',
          lastname: '',
          age: 25,
          prev: 'Fonasa',
          tutor: '',
          state: 'Activo',
          advance: '1%',
          options: '',
        },
        {
          name: 'Pedro Alonso',
          lastname: '',
          age: 25,
          prev: 'Fonasa',
          tutor: '',
          state: 'Activo',
          advance: '1%',
          options: '',
        },
        {
          name: 'Pedro Alonso',
          lastname: '',
          age: 25,
          prev: 'Fonasa',
          tutor: '',
          state: 'Activo',
          advance: '1%',
          options: '',
        },
        {
          name: 'Pedro Alonso',
          lastname: '',
          age: 25,
          prev: 'Fonasa',
          tutor: '',
          state: 'Activo',
          advance: '1%',
          options: '',
        },
        {
          name: 'Pedro Alonso',
          lastname: '',
          age: 25,
          prev: 'Fonasa',
          tutor: '',
          state: 'Activo',
          advance: '1%',
          options: '',
        },
        {
          name: 'Pedro Alonso',
          lastname: '',
          age: 25,
          prev: 'Fonasa',
          tutor: '',
          state: 'Activo',
          advance: '1%',
          options: '',
        },
        {
          name: 'Pedro Alonso',
          lastname: '',
          age: 25,
          prev: 'Fonasa',
          tutor: '',
          state: 'Activo',
          advance: '1%',
          options: '',
        },

      ]
    }
  }
}
</script>

<style>

</style>
