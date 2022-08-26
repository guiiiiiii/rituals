<template>
  <AppHeader title="rituals"/>
  <!--<Home />-->
  <router-view></router-view>
  <AppFooter  isFooterShow='false' />
</template>

<script>
  import AppHeader from './components/common/AppHeader.vue'
  import AppFooter from './components/common/AppFooter.vue'

  export default {
    name: 'App',
    components: {
      AppHeader,
      AppFooter
    }
  }
</script>


    <!-- #### CSS 설정 #### -->
    <style>
      @import './assets/css/app.css';
    </style>
