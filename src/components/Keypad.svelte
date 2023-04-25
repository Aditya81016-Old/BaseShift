<script lang="ts">
  export let theme, themeColor;

  import Key from "../units/Key.svelte";
  import { KeyTypes, Theme } from "../variables";

  let bgClass;
  $: bgClass = theme == Theme.Light ? "bg-slate-50" : "bg-slate-900";

  
</script>

<table id="Keypad" class="w-screen {bgClass}">
  <tr class="flex my-2 justify-evenly">
    <td><Key {theme} {themeColor} value="D" type={KeyTypes.Normal} /></td>
    <td><Key {theme} {themeColor} value="E" type={KeyTypes.Normal} /></td>
    <td><Key {theme} {themeColor} value="F" type={KeyTypes.Normal} /></td>
    <td><Key {theme} {themeColor} value="CL" type={KeyTypes.Special} /></td>
  </tr>
  <tr class="flex my-2 justify-evenly">
    <td><Key {theme} {themeColor} value="A" type={KeyTypes.Normal} /></td>
    <td><Key {theme} {themeColor} value="B" type={KeyTypes.Normal} /></td>
    <td><Key {theme} {themeColor} value="C" type={KeyTypes.Normal} /></td>
    <td><Key {theme} {themeColor} value="÷" type={KeyTypes.Operator} /></td>
  </tr>
  <tr class="flex my-2 justify-evenly">
    <td><Key {theme} {themeColor} value="7" type={KeyTypes.Normal} /></td>
    <td><Key {theme} {themeColor} value="8" type={KeyTypes.Normal} /></td>
    <td><Key {theme} {themeColor} value="9" type={KeyTypes.Normal} /></td>
    <td><Key {theme} {themeColor} value="×" type={KeyTypes.Operator} /></td>
  </tr>
  <tr class="flex my-2 justify-evenly">
    <td><Key {theme} {themeColor} value="4" type={KeyTypes.Normal} /></td>
    <td><Key {theme} {themeColor} value="5" type={KeyTypes.Normal} /></td>
    <td><Key {theme} {themeColor} value="6" type={KeyTypes.Normal} /></td>
    <td><Key {theme} {themeColor} value="-" type={KeyTypes.Operator} /></td>
  </tr>
  <tr class="flex my-2 justify-evenly">
    <td><Key {theme} {themeColor} value="1" type={KeyTypes.Normal} /></td>
    <td><Key {theme} {themeColor} value="2" type={KeyTypes.Normal} /></td>
    <td><Key {theme} {themeColor} value="3" type={KeyTypes.Normal} /></td>
    <td><Key {theme} {themeColor} value="+" type={KeyTypes.Operator} /></td>
  </tr>
  <tr class="flex my-2 justify-evenly">
    <td><Key {theme} {themeColor} value="AC" type={KeyTypes.Special} /></td>
    <td><Key {theme} {themeColor} value="0" type={KeyTypes.Normal} /></td>
    <td><Key {theme} {themeColor} value="." type={KeyTypes.Normal} /></td>
    <td><Key {theme} {themeColor} value="=" type={KeyTypes.Special} /></td>
  </tr>
</table>

<style lang="scss"></style>