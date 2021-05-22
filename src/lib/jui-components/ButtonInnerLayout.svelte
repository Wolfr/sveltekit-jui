<script>

    /*
      Button inner layout - Set layout style

      @export {string} layout
        * label --> a button with just a label (default)
        * icon --> a button with just an icon
        * label-icon --> a button with an icon on the left
        * icon-label --> a button with an icon on the right

      @export {string} icon - name of the icon (if any)
    */

    import Icon from './Icon.svelte';

    export let layout = "label";
    export let icon = null;
    export let iconAnimatedClass = null;

</script>

<div class="c-button__content">
  {#if layout == "icon"}
      <span class="c-button__icon-wrap"><Icon {icon} {iconAnimatedClass} /></span>
      <span class="u-d-sr-accessible"><slot></slot></span>
  {:else if layout == "label-icon"}
      <span class="c-button__label"><slot></slot></span>
      <Icon {icon} />
  {:else if layout == "icon-label" || icon}
      <Icon {icon} />
      <span class="c-button__label"><slot></slot></span>
  {:else}
      <span class="c-button__label"><slot></slot></span>
  {/if}
</div>