<template>
  <AppHeader title="rituals"/>
  <Home />
  <AppFooter />
</template>

    <script>
      import AppHeader from './components/common/AppHeader.vue'
import AppFooter from './components/common/AppFooter.vue'

import Home from './views/Home.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    Home,
    AppFooter
  }
}
    </script>


    <!-- #### CSS 설정 #### -->
    <style>
      @import './assets/css/app.css';
      @import './assets/css/components.css';
    </style>
