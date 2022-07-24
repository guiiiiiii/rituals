<template>
    <div class="app-header">
        <div class="header-btn left-sec"></div>
        <h1 class="header-tit">{{title}}</h1>
        <div class="header-btn right-sec">
            <button class="ibtn icon-profile"></button>
        </div>
    </div>
</template>

<script>
export default {
  name: 'AppHeader',
  props: {
    title: String
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
