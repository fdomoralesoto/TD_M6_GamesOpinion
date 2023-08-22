import { createRouter, createWebHistory } from 'vue-router';
import Inicio from '@/views/Inicio.vue';
import Opiniones from '@/views/Opiniones.vue';
import Administracion from '@/views/Administracion.vue';
import NotFound from '@/views/NotFound.vue';

const routes = [
  {
    path: '/',
    name: 'inicio',
    component: Inicio
  },
  {
    path: '/opiniones/:name',
    name: 'opiniones',
    component: Opiniones
  },
  {
    path: '/administracion',
    name: 'administracion',
    component: Administracion
  },
  {
    path: '/:catchAll(.*)',
    component: NotFound
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
