<script lang="ts">
  import Bases from "./components/Bases.svelte";
  import Header from "./components/Header.svelte";
  import Keypad from "./components/Keypad.svelte";
  import {Theme, ThemeColor} from "./variables"
  import {themeMode, themeColorMode} from "./store"

  $: theme = $themeMode
  $: themeColor = $themeColorMode

  let bgClass
  $: bgClass = theme == Theme.Light ? "bg-slate-100" : "bg-slate-800" 

</script>

<main class="w-screen h-screen {bgClass}" id="App">
  <Header {theme} {themeColor}/>
  <Bases {theme}/>
  <Keypad {theme} {themeColor}/>
</main>

<style lang="scss">
  
</style>
