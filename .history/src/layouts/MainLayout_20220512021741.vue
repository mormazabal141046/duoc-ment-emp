<template>
  <q-layout view="lHh lpR lFf">

    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />

        <q-toolbar-title>
          <q-avatar>
            <img src="img/logo.png">
            <!-- <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg"> -->
          </q-avatar>
          DUOC - Mentalidad Emprendedora
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs align="left">
        <q-route-tab to="/page1" label="Pacientes" />
        <q-route-tab to="/page2" label="Tratamientos" />
        <q-route-tab to="/page3" label="Consulta" />
      </q-tabs>
    </q-header>

    <q-drawer show-if-above v-model="left" side="left" bordered>
      <!-- drawer content -->
      <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
        <q-list>
          <q-item-label header class="text-grey-8">Atenciones</q-item-label>
          <EssentialLink v-for="link in essentialLinks" :key="link.title" v-bind="link" />
        </q-list>
      </q-scroll-area>
      <q-img class="absolute-top" bg-color="black" style="height: 150px">
        <div class="absolute-bottom bg-transparent">
          <q-avatar size="56px" class="q-mb-sm">
            <img src="img/doc.png">
          </q-avatar>
          <div class="text-weight-bold">Luis Pay</div>
          <div>Médico General</div>
        </div>
      </q-img>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'
const linksData = [
  {
    title: 'Pacientes',
    caption: 'Listado de pacientes',
    icon: 'las la-user-circle',
    link: 'https://quasar.dev'
  },
  {
    title: 'Tratamientos',
    caption: 'Guía de tratamientos',
    icon: 'las la-file-prescription',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Consulta',
    caption: 'Revisión del status',
    icon: 'las la-search',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Examenes',
    caption: 'Revisión de resultados',
    icon: 'las la-x-ray',
    link: 'https://forum.quasar.dev'
  }
];
export default {
  name: 'MainLayout',
  components: {
    EssentialLink
  },
  data () {
    return {
      left: false,
      essentialLinks: linksData
    }
  }
}
</script>
