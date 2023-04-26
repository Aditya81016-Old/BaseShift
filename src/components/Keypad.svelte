<script lang="ts">
  import { onMount } from "svelte";

  export let theme, themeColor;

  import Key from "../units/Key.svelte";
  import { KeyTypes, Theme } from "../variables";
  import { activeInput, flexibleNo, flexibleAns, themeMode } from "../store";
  import { changeBase } from "../module"


  $: bgClass = $themeMode == Theme.Light ? "bg-slate-50" : "bg-slate-900";


  onMount(() => {
    jQuery(".key").on("click", (e) => {
      let activeInputValue: string = String(jQuery(`#${$activeInput}`).val());
      let arr = activeInputValue.split(" ");
      let ln = activeInputValue.length;
      let key = e.currentTarget;
      let ignore = false

      if (key.classList.contains(KeyTypes.Normal)) {
        
        if (
          !(
            key.innerHTML == "." &&
            (arr[arr.length - 1].indexOf(".") > -1 ||
              activeInputValue[ln - 1] == " " || ln == 0)
          )
        )
          jQuery(`#${$activeInput}`).val(activeInputValue + key.innerHTML);

        if (key.innerHTML == ".") {
          ignore = true
        }
          
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

        if (jQuery(`#${$activeInput}`).val()[String(jQuery(`#${$activeInput}`).val()).length - 1] == ".")
          ignore = true
          
      } else if (
        key.classList.contains(KeyTypes.Special) &&
        key.innerHTML == "AC"
      ) {
        
        jQuery(`#${$activeInput}`).val("");
        
      } else if (
        key.classList.contains(KeyTypes.Special) &&
        key.innerHTML == "="
      ) {
        
        jQuery(`#${$activeInput}`).val($flexibleAns);
        
      }

      if (!ignore) {
        $flexibleNo = changeBase(String(jQuery(`#${$activeInput}`).val()), Number($activeInput.replaceAll("base", "")), 10)
        let no = $flexibleNo.replaceAll("÷", "/").replaceAll("×", "*")
        let ans = String(eval(no))
        $flexibleAns = ans
      }
    });
  });
</script>

<table id="Keypad" class="w-screen {bgClass}">
  <tr class="flex my-2 justify-evenly">
    <td><Key  value="D" type={KeyTypes.Normal} /></td>
    <td><Key value="E" type={KeyTypes.Normal} /></td>
    <td><Key value="F" type={KeyTypes.Normal} /></td>
    <td><Key  value="CL" type={KeyTypes.Special} /></td>
  </tr>
  <tr class="flex my-2 justify-evenly">
    <td><Key value="A" type={KeyTypes.Normal} /></td>
    <td><Key  value="B" type={KeyTypes.Normal} /></td>
    <td><Key value="C" type={KeyTypes.Normal} /></td>
    <td><Key value="÷" type={KeyTypes.Operator} /></td>
  </tr>
  <tr class="flex my-2 justify-evenly">
    <td><Key  value="7" type={KeyTypes.Normal} /></td>
    <td><Key value="8" type={KeyTypes.Normal} /></td>
    <td><Key value="9" type={KeyTypes.Normal} /></td>
    <td><Key  value="×" type={KeyTypes.Operator} /></td>
  </tr>
  <tr class="flex my-2 justify-evenly">
    <td><Key  value="4" type={KeyTypes.Normal} /></td>
    <td><Key  value="5" type={KeyTypes.Normal} /></td>
    <td><Key value="6" type={KeyTypes.Normal} /></td>
    <td><Key  value="-" type={KeyTypes.Operator} /></td>
  </tr>
  <tr class="flex my-2 justify-evenly">
    <td><Key value="1" type={KeyTypes.Normal} /></td>
    <td><Key  value="2" type={KeyTypes.Normal} /></td>
    <td><Key value="3" type={KeyTypes.Normal} /></td>
    <td><Key  value="+" type={KeyTypes.Operator} /></td>
  </tr>
  <tr class="flex my-2 justify-evenly">
    <td><Key value="AC" type={KeyTypes.Special} /></td>
    <td><Key  value="0" type={KeyTypes.Normal} /></td>
    <td><Key value="." type={KeyTypes.Normal} /></td>
    <td><Key value="=" type={KeyTypes.Special} /></td>
  </tr>
</table>

<style lang="scss"></style>
