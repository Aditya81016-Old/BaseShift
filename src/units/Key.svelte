<script lang="ts">
  export let value, type, theme, themeColor;

  import { onMount } from "svelte";
  import { activeInput } from "../store";
  import { Theme, KeyTypes } from "../variables";
  import { isNumeric } from "jquery";

  let bgClass, textClass, activeClass;

  // $: bgClass = theme == "light" ? "bg-slate-50" : "bg-slate-800"
  // $: textClass = theme == "light" ? "text-slate-800" : "text-slate-50"

  if (type == KeyTypes.Normal) {
    bgClass = theme == Theme.Light ? "bg-slate-50" : "bg-slate-900";
    textClass = theme == Theme.Light ? "text-slate-900" : "text-slate-50";
    activeClass =
      theme == Theme.Light ? "active:bg-slate-200" : "active:bg-slate-700";
  } else if (type == KeyTypes.Operator) {
    bgClass = theme == Theme.Light ? "bg-slate-400" : "bg-slate-200";
    textClass = theme == Theme.Light ? "text-slate-800" : "text-slate-800";
    activeClass =
      theme == Theme.Light ? "active:bg-slate-500" : "active:bg-slate-400";
  } else if (type == KeyTypes.Special) {
    bgClass = `bg-${themeColor}-500`;
    textClass = "text-slate-50";
    activeClass = `active:bg-${themeColor}-800`;
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
