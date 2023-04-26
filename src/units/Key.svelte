<script lang="ts">
  export let value, type;

  import { onMount } from "svelte";
  import { activeInput } from "../store";
  import { Theme, KeyTypes } from "../variables";
  import {themeMode, themeColorMode} from "../store"

  let bgClass, textClass, activeClass;

  // $: bgClass = theme == "light" ? "bg-slate-50" : "bg-slate-800"
  // $: textClass = theme == "light" ? "text-slate-800" : "text-slate-50"

  $: if (type == KeyTypes.Normal) {
    bgClass = $themeMode == Theme.Light ? "bg-slate-50" : "bg-slate-900";
    textClass = $themeMode == Theme.Light ? "text-slate-900" : "text-slate-50";
    activeClass =
      $themeMode == Theme.Light ? "active:bg-slate-200" : "active:bg-slate-700";
  }
  
  $: if (type == KeyTypes.Operator) {
    bgClass = $themeMode == Theme.Light ? "bg-slate-300" : "bg-slate-200";
    textClass = $themeMode == Theme.Light ? "text-slate-800" : "text-slate-800";
    activeClass =
      $themeMode == Theme.Light ? "active:bg-slate-500" : "active:bg-slate-400";
  } 
  
  $: if (type == KeyTypes.Special) {
    bgClass = `bg-${$themeColorMode}-500`;
    textClass = "text-slate-50";
    activeClass = `active:bg-${$themeColorMode}-800`;
  }

  $: base = parseInt($activeInput.replace("base", ""));
  $: isDisabled = (isNaN(value) || value < base) && !(base < 11 && (/[A-F]/i.test(value) && value.length < 2)) ? "" : "disabled";

</script>

<div
  id="key{value}"
  class="{type} {bgClass} {textClass} {activeClass} {isDisabled} text-xl flex justify-center items-center rounded-full w-16 h-16 font-extrabold p-5 key"
>
  {value}
</div>
