<script lang="ts">
  export let theme;

  import BaseBoard from "../units/BaseBoard.svelte";
  import j from "jquery";
  import { changeBase } from "../module";
  import { flexibleNo, flexibleAns, activeInput } from "../store";
  import { onMount } from "svelte";
  import Key from "../units/Key.svelte";

  // let thisFlex: string;
  // flexibleNo.subscribe(value => {
  //   thisFlex = value
  // })


  $: BinaryValue = changeBase($flexibleNo, 10, 2);
  $: OctalValue = changeBase($flexibleNo, 10, 8);
  $: DecimalValue = changeBase($flexibleNo, 10, 10);
  $: HexadecimalValue = changeBase($flexibleNo, 10, 16).toUpperCase();

  $: BinaryAns = changeBase($flexibleAns, 10, 2);
  $: OctalAns = changeBase($flexibleAns, 10, 8)
  $: DecimalAns = changeBase($flexibleAns, 10, 10);
  $: HexadecimalAns = changeBase($flexibleAns, 10, 16).toUpperCase()

  let keypadHeight, headerHeight;

  onMount(() => {
    keypadHeight = j("#Keypad").css("height");
    headerHeight = j("#Header").css("height");

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
  style="height: calc(100vh - {keypadHeight} - {headerHeight} )"
>
  <BaseBoard base="02" no={BinaryValue} ans={BinaryAns} {theme} />
  <BaseBoard base="08" no={OctalValue} ans={OctalAns} {theme} />
  <BaseBoard base="10" no={DecimalValue} ans={DecimalAns} {theme} />
  <BaseBoard base="16" no={HexadecimalValue} ans={HexadecimalAns} {theme} />
</main>

<style lang="scss"></style>
