<script lang="ts">
  export let theme;

  import BaseBoard from "../units/BaseBoard.svelte";
  import j from "jquery";
  import { changeBase } from "../module";
  import { flexibleNo, activeInput } from "../store";
  import { onMount } from "svelte";
  import Key from "../units/Key.svelte";

  // let thisFlex: string;
  // flexibleNo.subscribe(value => {
  //   thisFlex = value
  // })

  console.log(changeBase("A.8", 16, 10));

  $: binaryValue = changeBase($flexibleNo, 10, 2);
  $: OctalValue = changeBase($flexibleNo, 10, 8);
  $: DecimalValue = changeBase($flexibleNo, 10, 10);
  $: HexadecimalValue = changeBase($flexibleNo, 10, 16).toUpperCase();

  let keypadHeight;

  onMount(() => {
    keypadHeight = j("#Keypad").css("height");

    j(`#${$activeInput}`).addClass("activeInput");

    j(".baseInput").on("click", (e) => {
      $activeInput = e.currentTarget.id;
      j(".activeInput").removeClass("activeInput");
      j(`#${$activeInput}`).addClass("activeInput");
    });
  });
</script>

<main
  class="flex flex-col justify-evenly"
  style="height: calc(100vh - {keypadHeight})"
>
  <BaseBoard base="02" no={binaryValue} {theme} />
  <BaseBoard base="08" no={OctalValue} {theme} />
  <BaseBoard base="10" no={DecimalValue} {theme} />
  <BaseBoard base="16" no={HexadecimalValue} {theme} />
</main>

<style lang="scss"></style>
