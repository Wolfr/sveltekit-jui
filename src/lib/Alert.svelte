<script>

  import Button from './Button.svelte';
  import Icon from './Icon.svelte';

  export let type = null;
  export let closable = null;
  export let show = true;

</script>

{#if show}
  <div class="c-alert {type ? 'c-alert--'+type : 'c-alert--default'}" role="alert">
    <div class="c-alert__body">
    {#if !type }
      <Icon icon="circle-information" />
    {/if}
    {#if type == "success"}
      <Icon icon="check" />
    {/if}
    {#if type == "error"}
      <Icon icon="circle-warning" />
    {/if}
    {#if type == "warning"}
      <Icon icon="circle-warning" />
    {/if}
    <slot></slot>
    </div>
    {#if closable}
      <Button icon="close" layout="icon" skin="borderless" on:click="{() => show = false}">Close</Button>
    {/if}
  </div>
{/if}

