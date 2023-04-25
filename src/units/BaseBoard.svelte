<script lang="ts">
  import { onMount } from "svelte";

  export let theme, no, base;

  import { Theme } from "../variables";

  let bgClass, textClass;

  $: bgClass = theme == Theme.Light ? "bg-slate-50" : "bg-slate-900";
  $: textClass = theme == Theme.Light ? "text-slate-800" : "text-slate-50";

  $: value = no;

  onMount(() => {});
</script>

<fieldset class="flex w-screen h-1/4">
  <span
    class="{bgClass} {textClass} flex flex-col justify-center p-2 font-medium text-left opacity-60 base"
    >{base}</span
  >
  <input
    readonly
    type="text"
    id="base{base}"
    class="{bgClass} h-1/4 {textClass} w-full font-bold text-left focus:outline-slate-300 baseInput"
    {value}
  />
  <div
    class="{bgClass} {textClass}flex flex-col justify-center p-2 font-medium text-left opacity-60 ans"
  />
</fieldset>

<style lang="scss">
  fieldset {
    padding: 0.3rem 0.7rem;
    max-height: 80px;
  }

  .base {
    border-radius: 0.5rem 0 0 0.5rem;
  }

  .ans {
    border-radius: 0 0.5rem 0.5rem 0;
    max-width: 69px;
    overflow: scroll;
    padding: 0.5rem 1.5rem 0.5rem 0.5rem;
  }

  .baseInput {
    width: 100%;
    overflow: scroll;
    height: 100%;
    max-height: 80px;
    padding-left: 0.5rem;
  }
</style>
