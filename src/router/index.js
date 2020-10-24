import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Usuario from '@/components/Usuario'
import Config from '@/components/Config'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/usuario',
      name: 'UsuarioPage',
      component: Usuario
    }, {
      path: '/config',
      name: 'Configuração',
      component: Config
    }
  ]
})
