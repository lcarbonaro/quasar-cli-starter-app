const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'about', component: () => import('pages/AboutPage.vue') },
      { 
        path: 'secret', 
        component: () => import('pages/SecretPage.vue'),
        meta: { requiresAuth: true },
      },
      { 
        path: 'secret2', 
        component: () => import('pages/AnotherSecretPage.vue'),
        meta: { requiresAuth: true },
      },
      { 
        path: 'login', 
        component: () => import('pages/LogInPage.vue'),
        
      },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
