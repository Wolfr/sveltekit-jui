<script>
    import Icon from './Icon.svelte';

    // layouts: icon, label-icon, icon-label, icon-label-icon, icon-label-narrow-icon
    export let layout = "label";

    export let icon = null;

</script>

<div class="c-button__content">
  {#if layout == "icon"}
      <span class="c-button__icon-wrap"><Icon {icon} /></span>
      <span class="u-d-sr-only"><slot></slot></span>
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