<script lang="ts">
    import { onMount } from "svelte";
  
    export let value, type, theme, themeColor;
  
    import { Theme, KeyTypes } from "../variables";
  
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
  </script>
  
  <div
    id="key{value}"
    class="{type} {bgClass} {textClass} {activeClass} text-xl flex justify-center items-center rounded-full w-16 h-16 font-extrabold p-5 key"
  >
    {value}
  </div>