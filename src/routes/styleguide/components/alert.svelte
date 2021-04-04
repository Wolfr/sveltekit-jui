<script>
  import StyleguideIntro from '$lib/StyleguideIntro.svelte';
  import StyleguideCard from '$lib/StyleguideCard.svelte';
  import StyleguidePropsTable from '$lib/StyleguidePropsTable.svelte';

  let pageTitle = 'Alert';
  import Alert from '$lib/Alert.svelte';

  let propsTable = [
    {
      name: 'closable',
      description: 'Alert is closable.',
      required: false,
    }
  ]

</script>

<StyleguideIntro title={pageTitle} />

<StyleguideCard title={pageTitle}>

  <Alert>This is an alert with no specified type.</Alert>
  <br>
  <Alert type="success">This is a succes message!</Alert>
  <br>
  <Alert type="error">This is an error message.</Alert>
  <br>
  <Alert type="warning">This is a warning message.</Alert>

</StyleguideCard>

<StyleguideCard title={pageTitle}>

  <Alert closable>Hey, I am a closable alert.</Alert>

</StyleguideCard>

<StyleguidePropsTable propsTable={propsTable} />
