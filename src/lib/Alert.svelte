<script>

    import Button from './Button.svelte';
    import Icon from './Icon.svelte';

    export let message = "Default message";
    export let type = null;
    export let dismissible = null;
    export let show = true;

</script>

{#if show}
    <div class="c-alert {type ? 'c-alert--'+type : 'c-alert--default'}" role="alert">
      <div class="c-alert__body">
        {#if type == "success"}
          <Icon icon="check" />
        {/if}
        {#if type == "error"}
          <Icon icon="circle-warning" />
        {/if}
        <slot></slot>
        {#if dismissible}
            <Button icon="close" layout="icon" on:click="{() => show = false}">Close</Button>
        {/if}
      </div>
    </div>
{/if}

