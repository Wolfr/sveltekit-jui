<script>
  import StyleguideIntro from '$lib/StyleguideIntro.svelte';
  import StyleguideCard from '$lib/StyleguideCard.svelte';
  import StyleguidePropsTable from '$lib/StyleguidePropsTable.svelte';

  let pageTitle = 'Alert stack';
  import Alert from '$lib/Alert.svelte';
  import AlertStack from '$lib/AlertStack.svelte';

</script>

<svelte:head>
  <title>{pageTitle} - Components - JUI</title>
</svelte:head>

<StyleguideIntro title={pageTitle} />

<StyleguideCard title={pageTitle} id="alert-stack-demo">
  <AlertStack>
    <Alert closable>This is an alert with no specified type.</Alert>
    <Alert type="success">This is a succes message!</Alert>
  </AlertStack>
</StyleguideCard>

<div class="u-spacer-top">
  <h3 class="c-h3">Open issues</h3>
  <Alert>Accessibility: Needs accessibility audit.</Alert>
  <div class="u-spacer-top">
    <Alert>Quality: Need animations.</Alert>
  </div>
</div>

<style>

  :global(#alert-stack-demo .c-styleguide-card-inner) {
    position: relative;
    min-height: 40rem;
  }

  :global(#alert-stack-demo .c-styleguide-card-inner .c-alert-stack) {
    position: absolute;
  }

</style>

