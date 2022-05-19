<template>
  <q-layout view="lHh lpR lFf">

    <q-header elevated class="bg-accent text-white" height-hint="98">
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
        <q-route-tab to="/miprograma" label="Mi Programa" />
        <q-route-tab to="/recordatorios" label="Recordatorios" />
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
      <q-img class="absolute-top" style="height: 150px; background:#23126a;">
        <div class="absolute-bottom bg-transparent">
          <q-avatar size="56px" class="q-mb-sm">
            <img src="img/user.png">
          </q-avatar>
          <div class="text-weight-bold">Mr. White</div>
          <div>Paciente</div>
        </div>
      </q-img>
    </q-drawer>
    <q-page-container>
      <q-page class="q-pa-xl">
        <router-view />
      </q-page>
    </q-page-container>

  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'
const linksData = [
  {
    title: 'Mi Programa',
    caption: 'Listado de actividades',
    icon: 'las la-tasks',
    link: '/miprograma'
  },
  {
    title: 'Recordatorios',
    caption: 'Mis eventos a recordar',
    icon: 'las la-history',
    link: '/recordatorios'
  },
];
export default {
  name: 'MainLayoutUser',
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
