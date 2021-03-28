<script>

    import Button from './Button.svelte';

    export let message = "Default message";
    export let type = null;;
    export let dismissible = null;
    export let show = true;

</script>

<style>

</style>

{#if show}
    <div class="c-alert {type ? 'c-alert--'+type : 'c-alert--default'}" role="alert">
        <slot></slot>
        {#if dismissible}
            <Button icon="close" layout="icon-only" on:click="{() => show = false}">Close</Button>
        {/if}
    </div>
{/if}

