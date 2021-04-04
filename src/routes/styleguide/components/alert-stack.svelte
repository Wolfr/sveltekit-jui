<script>
  import StyleguideIntro from '$lib/StyleguideIntro.svelte';
  import StyleguideCard from '$lib/StyleguideCard.svelte';
  import StyleguidePropsTable from '$lib/StyleguidePropsTable.svelte';

  let pageTitle = 'Alert stack';
  import Alert from '$lib/Alert.svelte';
  import AlertStack from '$lib/AlertStack.svelte';

</script>

<StyleguideIntro title={pageTitle} />

<StyleguideCard title={pageTitle}>
  <AlertStack>
    <Alert>This is an alert with no specified type.</Alert>
    <Alert type="success">This is a succes message!</Alert>
  </AlertStack>
</StyleguideCard>

