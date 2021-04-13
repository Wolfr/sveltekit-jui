<style>
  :global(.tooltip) {
    font-size: 1.2rem;
    text-transform: uppercase;
  }
</style>

<script>

    import ButtonInnerLayout from './ButtonInnerLayout.svelte';

    // a link, type="button" or type="submit"
    export let type = false;

    // Extra class
    export let cssClass = null;

    // if it contains a link
    export let href = false;

    // Disabled
    export let disabled = false;

    // Styling
    export let style = null;
    export let block = null;
    export let icon = null;
    export let layout = null;
    export let active = null;
    export let skin = null;
    export let ariaExpanded = null;
    export let ariaControls = null;
    export let iconAnimatedClass = null;

    let computedSkinValue = '';

    if (skin) {
      computedSkinValue = 'c-button--'+skin;
    } else {
       computedSkinValue = 'c-button--secondary';
    }

</script>

{#if href}
   <a
    href="{href}"
    {style}
    class="c-button { cssClass ? cssClass : '' } { computedSkinValue }"
    class:c-button--block={block}
    class:c-button--icon={layout=="icon"}
    class:c-button--disabled={disabled}
    class:c-button--active={active}
  >
        <ButtonInnerLayout {icon} {iconAnimatedClass} {layout}><slot></slot></ButtonInnerLayout>
   </a>
{:else}
    {#if type == "submit"}
        <button
            type="submit"
            {disabled}
            class="c-button { cssClass ? cssClass : '' } { computedSkinValue }"
            {style}
            aria-expanded={ariaExpanded}
            aria-controls={ariaControls}
            class:c-button--block={block}
            class:c-button--icon={layout=="icon"}
            class:c-button--active={active}
            on:submit|preventDefault on:click|preventDefault
        >
            <ButtonInnerLayout {icon} {iconAnimatedClass} {layout}><slot></slot></ButtonInnerLayout>
        </button>
    {:else}
        <button
            type="button"
            {disabled}
            class="c-button { cssClass ? cssClass : '' } { computedSkinValue }"
            {style}
            aria-expanded={ariaExpanded}
            aria-controls={ariaControls}
            on:submit|preventDefault on:click|preventDefault
            class:c-button--block={block}
            class:c-button--icon={layout=="icon"}
            class:c-button--active={active}
        >
            <ButtonInnerLayout {icon} {iconAnimatedClass} {layout}><slot></slot></ButtonInnerLayout>
        </button>
    {/if}
{/if}
