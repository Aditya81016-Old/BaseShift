<script lang="ts">
  import Bases from "./components/Bases.svelte";
  import Keypad from "./components/Keypad.svelte";
  import {Theme, ThemeColor} from "./variables"

  $: theme = Theme.Dark
  $: themeColor = ThemeColor.Rose 

  let bgClass
  $: bgClass = theme == Theme.Light ? "bg-slate-100" : "bg-slate-800" 

</script>

<main class="w-screen h-screen {bgClass}">
  <Bases {theme}/>
  <Keypad {theme} {themeColor}/>
</main>

<style lang="scss">
</style>
