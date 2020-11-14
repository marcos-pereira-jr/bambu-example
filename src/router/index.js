import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Usuario from '@/views/Usuario'
import Config from '@/views/Config'
import Register from '@/views/Register'

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
    }, {
      path: '/register',
      name: 'Registro',
      component: Register
    }
    
  ]
})
