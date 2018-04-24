<template>
  <div id="app">
    <music-header></music-header>
    <tab></tab>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <player></player>
  </div>
</template>
<script>
import MusicHeader from 'components/music-header/MusicHeader'
import Tab from 'components/tab/Tab'
import Player from 'components/player/Player'

export default {
  name: 'App',
  components: {
    MusicHeader,
    Tab,
    Player
  }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
</style>
