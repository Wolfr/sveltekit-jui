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
    export let variant = null;

    let variantValue = '';

    if (variant) {
      variantValue = 'c-button--'+variant;
    } else {
       variantValue = 'c-button--secondary';
    }

</script>

<!--
    @todo de-duplicate some logic here
    @see discussion around classNames package
-->

{#if href}
   <a
    href="{href}"
    {style}
    class="c-button { cssClass } { variantValue }"
    class:c-button--block={block}
    class:c-button--icon={layout=="icon"}
    class:c-button--disabled={disabled}
    class:c-button--active={active}
  >
        <ButtonInnerLayout {icon} {layout}><slot></slot></ButtonInnerLayout>
   </a>
{:else}
    {#if type == "submit"}
        <button
            type="submit"
            {disabled}
            class="c-button { cssClass } { variantValue }"
            {style}
            class:c-button--block={block}
            class:c-button--icon={layout=="icon"}
            class:c-button--active={active}
            on:submit|preventDefault on:click|preventDefault
        >
            <ButtonInnerLayout {icon} {layout}><slot></slot></ButtonInnerLayout>
        </button>
    {:else}
        <button
            type="button"
            {disabled}
            class="c-button { cssClass } { variantValue }"
            {style}
            on:submit|preventDefault on:click|preventDefault
            class:c-button--block={block}
            class:c-button--icon={layout=="icon"}
            class:c-button--active={active}
        >
            <ButtonInnerLayout {icon} {layout}><slot></slot></ButtonInnerLayout>
        </button>
    {/if}
{/if}
