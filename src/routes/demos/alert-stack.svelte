<script>
  import AlertStack from '$lib/AlertStack.svelte';
  import Alert from '$lib/Alert.svelte';
</script>

<div class="u-spacer-l">

  <div class="container">

    <h2 class="c-h2">Alert stack demo here.</h2>

  </div>

</div>

<AlertStack>
  <Alert closable>Hey</Alert>
  <Alert closable>Hey</Alert>
  <Alert closable>Hey</Alert>
</AlertStack>