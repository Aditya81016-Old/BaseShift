<script lang="ts">
  export let theme

  import BaseBoard from "../units/BaseBoard.svelte";
  import j from "jquery"
  import {changeBase} from "../module"
  import {flexibleNo} from "../store"
  import { onMount } from "svelte";
  import Key from "../units/Key.svelte";
  
  // let thisFlex: string;
  // flexibleNo.subscribe(value => {
  //   thisFlex = value
  // })

  $: binaryValue = changeBase(DecimalValue, 2);
  $: OctalValue = changeBase(DecimalValue, 8);
  $: DecimalValue = $flexibleNo
  $: HexadecimalValue = changeBase(DecimalValue, 16).toUpperCase();

  let keypadHeight

  onMount(() => {
    keypadHeight = j("#Keypad").css("height")
  })

</script>

<main class="flex flex-col justify-evenly" style="height: calc(100vh - {keypadHeight})">
  <BaseBoard base="02" no={binaryValue} {theme} />
  <BaseBoard base="08" no={OctalValue} {theme}/>
  <BaseBoard base="10" no={DecimalValue} {theme}/>
  <BaseBoard base="16" no={HexadecimalValue} {theme}/>
</main>

<style lang="scss"></style>