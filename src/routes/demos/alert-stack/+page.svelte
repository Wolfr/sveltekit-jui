<script>
  import { fly } from 'svelte/transition';

  import AlertStack from '$lib/jui-components/AlertStack.svelte';
  import Alert from '$lib/jui-components/Alert.svelte';

  import Button from '$lib/jui-components/Button.svelte';

  import { alerts } from '$lib/jui-components/alert-stack.js';

  let warningAlertValue = { type: "warning", content: "This is a warning!", visible: true}
  let successAlertValue = { type: "success", content: "Done!", visible: true}
  
  function spawnWarningAlert() {
    $alerts = [...$alerts, warningAlertValue]
  }
  
  function spawnSuccessAlert() {
    $alerts = [...$alerts, successAlertValue]
  }

</script>

<svelte:head>
  <title>Alert stack - Demos - JUI</title>
</svelte:head>

<div class="u-spacer-l">

  <div class="container">

    <h2 class="c-h2">Alert stack demo here.</h2>
    <Button on:click={spawnWarningAlert}>Spawn warning alert</Button>
    <Button on:click={spawnSuccessAlert}>Spawn success alert</Button>

  </div>

</div>

<AlertStack>
  {#each $alerts.slice(Math.max($alerts.length - 5, 0)) as alert}
    {#if alert.visible}
      <div transition:fly="{{delay: 250, duration: 300, x: 0, y: 100, opacity: 0.5}}" style="margin-top: 1.6rem">
        <Alert type={alert.type} closable={alert.closable}>{alert.content}</Alert>
      </div>
    {/if}
  {/each}
</AlertStack>
