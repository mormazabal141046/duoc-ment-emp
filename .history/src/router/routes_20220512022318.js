
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/pacientes', component: () => import('pages/Pacientes.vue') }
      { path: '/tratamientos', component: () => import('pages/Tratamientos.vue') }
      { path: '', component: () => import('pages/Index.vue') }
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