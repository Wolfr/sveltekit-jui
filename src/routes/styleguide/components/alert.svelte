<script>
  import StyleguideIntro from '$lib/StyleguideIntro.svelte';
  import StyleguideCard from '$lib/StyleguideCard.svelte';
  import StyleguidePropsTable from '$lib/StyleguidePropsTable.svelte';

  let pageTitle = 'Alert';
  import Alert from '$lib/Alert.svelte';

</script>

<StyleguideIntro title={pageTitle} />

<StyleguideCard title={pageTitle}>

  <Alert type="success" icon="check">Hey</Alert>
  <br>
  <Alert type="error">Hey</Alert>
  <br>
  <Alert>Hey</Alert>

</StyleguideCard>

<StyleguideCard title={pageTitle}>

  <Alert dismissible>Hey</Alert>

</StyleguideCard>

