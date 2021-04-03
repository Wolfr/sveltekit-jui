
<script>

    import ButtonInnerLayout from './ButtonInnerLayout.svelte';

    // a link, type="button" or type="submit"
    export let type = false;

    // Extra class
    export let classValue = null;

    // if it contains a link
    export let href = false;

    // Disabled
    export let disabled = false;

    // Styling
    export let style = null;
    export let block = null;
    export let icon = null;
    export let layout = null;
    export let variant = null;

</script>

<!--
    @todo de-duplicate some logic here
    @see discussion around classNames package
-->

{#if href}
   <a
    href="{href}"
    {style}
    class="c-button {classValue ? classValue : ''}"
    class:c-button--primary={variant=='primary'}
    class:c-button--secondary={!variant}
    class:c-button--block={block}
    class:c-button--icon={layout=="icon"}
  >
        <ButtonInnerLayout {icon} {layout}><slot></slot></ButtonInnerLayout>
   </a>
{:else}
    {#if type == "submit"}
        <button
            type="submit"
            {disabled}
            class="c-button {classValue ? classValue : ''}"
            {style}
            class:c-button--primary={variant=='primary'}
            class:c-button--secondary={!variant}
            class:c-button--block={block}
            class:c-button--icon={layout=="icon"}
            on:submit|preventDefault on:click|preventDefault
        >
            <ButtonInnerLayout {icon} {layout}><slot></slot></ButtonInnerLayout>
        </button>
    {:else}
        <button
            type="button"
            {disabled}
            class="c-button {classValue ? classValue : ''}"
            {style}
            on:submit|preventDefault on:click|preventDefault
            class:c-button--primary={variant=='primary'}
            class:c-button--secondary={!variant}
            class:c-button--block={block}
            class:c-button--icon={layout=="icon"}
        >
            <ButtonInnerLayout {icon} {layout}><slot></slot></ButtonInnerLayout>
        </button>
    {/if}
{/if}
