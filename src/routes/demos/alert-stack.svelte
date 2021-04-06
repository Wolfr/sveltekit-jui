<script>
  import AlertStack from '$lib/AlertStack.svelte';
  import Alert from '$lib/Alert.svelte';

  import Button from '$lib/Button.svelte';

  let alerts = [
    {
      type: "error",
      content: "There was an error with the form."
    },
    {
      type: "success",
      content: "Item saved!"
    },
    {
      closable: true,
      content: "This is a closable alert."
    }
  ];
  
  let newAlertValue = { type: "warning", content: "This is a warning!"}
  
  function spawnAlert() {
    alerts = [...alerts, newAlertValue]
  }

</script>

<svelte:head>
  <title>Alert stack - Demos - JUI</title>
</svelte:head>

<div class="u-spacer-l">

  <div class="container">

    <h2 class="c-h2">Alert stack demo here.</h2>
    <Button on:click={spawnAlert}>Spawn alert</Button>

  </div>

</div>

<AlertStack>
  {#each alerts as alert}
    <Alert type={alert.type} closable={alert.closable}>{alert.content}</Alert>
  {/each}
</AlertStack>