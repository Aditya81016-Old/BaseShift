<script lang="ts">
  import { onMount } from "svelte";

  export let theme, themeColor;

  import Key from "../units/Key.svelte";
  import { KeyTypes, Theme } from "../variables";
  import { activeInput } from "../store";

  let bgClass;
  $: bgClass = theme == Theme.Light ? "bg-slate-50" : "bg-slate-900";

  onMount(() => {
    jQuery(".key").on("click", (e) => {
      let activeInputValue: string = String(jQuery(`#${$activeInput}`).val());
      let arr = activeInputValue.split(" ");
      let ln = activeInputValue.length;
      let key = e.currentTarget;

      if (key.classList.contains(KeyTypes.Normal)) {
        if (
          !(
            key.innerHTML == "." &&
            (arr[arr.length - 1].indexOf(".") > -1 ||
              activeInputValue[ln - 1] == " ")
          )
        )
          jQuery(`#${$activeInput}`).val(activeInputValue + key.innerHTML);
      } else if (key.classList.contains(KeyTypes.Operator)) {
        if (
          !(activeInputValue[ln - 1] == "." || activeInputValue[ln - 1] == " ")
        )
          jQuery(`#${$activeInput}`).val(
            activeInputValue + " " + key.innerHTML + " "
          );
      } else if (
        key.classList.contains(KeyTypes.Special) &&
        key.innerHTML == "CL"
      ) {
        if (activeInputValue[ln - 1] == " ")
          jQuery(`#${$activeInput}`).val(activeInputValue.substring(0, ln - 3));
        else
          jQuery(`#${$activeInput}`).val(activeInputValue.substring(0, ln - 1));
      } else if (
        key.classList.contains(KeyTypes.Special) &&
        key.innerHTML == "AC"
      ) {
        jQuery(`#${$activeInput}`).val("");
      }
    });
  });
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
