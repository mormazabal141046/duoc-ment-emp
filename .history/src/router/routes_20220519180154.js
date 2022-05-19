
const routes = [
  {
    path: '/',
    redirect: '/pacientes',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/pacientes', component: () => import('pages/Pacientes.vue') },
      { path: '/tratamientos', component: () => import('pages/Tratamientos.vue') },
      { path: '/consulta', component: () => import('pages/Consulta.vue') }
    ]
  },
  {
    path: '/user',
    redirect: '/miprograma',
    component: () => import('layouts/MainLayoutUser.vue'),
    children: [
      { path: '/miprograma', component: () => import('pages/Programa.vue') },
      { path: '/recordatorios', component: () => import('pages/Programa.vue') },
    ]
  },
  {
    path: '/login',
    component: () => import('pages/Login.vue'),
    // children: [
    //   { path: '', component: () => import('pages/Index.vue') }
    // ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
