<script lang="ts">
  export let theme, themeColor;
  import { Theme, ThemeColor } from "../variables";
  import { themeMode, themeColorMode } from "../store";
  import { onMount } from "svelte";

  let bgClass, textClass;
  $: bgClass = theme == Theme.Light ? "bg-slate-50" : "bg-slate-900";
  $: textClass = theme == Theme.Light ? "text-slate-900" : "text-slate-50";
  $: mode = theme == Theme.Light ? "Light" : "Dark";

  onMount(() => {
    if ($themeMode == Theme.Dark) jQuery("#themeMode").prop("checked", true);

    jQuery(".switch").on("click", () => {
      if (jQuery("#themeMode").is(":checked")) {
        themeMode.set(Theme.Dark);
      } else {
        themeMode.set(Theme.Light);
      }
    });

    jQuery("#ThemeColorSelect").on("change", () => {
      $themeColorMode =
        jQuery("#ThemeColorSelect option:selected").attr("value") as ThemeColor;
    });
  });
</script>

<main>
  <div id="Header" class="{textClass} {bgClass} z-30 p-3 w-full">
    <div class="selections bg-transparent flex justify-evenly {textClass}">
      <div id="themeSelector">
        <span class="{textClass} font-bold">{mode} Mode</span>
        <label class="switch">
          <input type="checkbox" id="themeMode" />
          <span class="slider round" />
        </label>
      </div>
      <div id="themeColorSelector">
        <select
          class="{bgClass} {textClass} font-bold"
          name="Theme Color"
          id="ThemeColorSelect"
        >
          <option value={ThemeColor.Slate} class="bg-{ThemeColor.Slate}-500"
            >Slate</option
          >
          <option value={ThemeColor.Rose} class="bg-{ThemeColor.Rose}-500"
            >Rose</option
          >
          <option value={ThemeColor.Teal} class="bg-{ThemeColor.Teal}-500"
            >Teal</option
          >
          <option value={ThemeColor.Yellow} class="bg-{ThemeColor.Yellow}-500"
            >Yellow</option
          >
          <option value={ThemeColor.Blue} class="bg-{ThemeColor.Blue}-500"
            >Blue</option
          >
          <option value={ThemeColor.Indigo} class="bg-{ThemeColor.Indigo}-500"
            >Indigo</option
          >
        </select>
      </div>
    </div>
  </div>
</main>

<style lang="scss">
  /* The switch - the box around the slider */
  .switch {
    position: relative;
    display: inline-block;
    width: 3rem;
    height: 1.5rem;
  }

  /* Hide default HTML checkbox */
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  /* The slider */
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    outline: 1px solid #000000;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: #2c3b5c;
    outline: 1px solid #ffffff;
  }

  input:focus + .slider {
    box-shadow: 5px #ffffff;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(24px);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
</style>
