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
    },
    {
      name: 'type',
      description: 'Determines look of the alert.',
      required: false,
      options: [
        {
          name: 'success',
          default: false
        },
        {
          name: 'error',
          default: false
        },
        {
          name: 'warning',
          default: false
        }
      ]
    }
  ]

</script>

<svelte:head>
  <title>{pageTitle} - Components - JUI</title>
</svelte:head>

<StyleguideIntro title={pageTitle} />

<StyleguideCard title={pageTitle} code="&lt;Alert&gt;This is an alert with no specified type.&lt;/Alert&gt;
&lt;br&gt;
&lt;Alert type=&quot;success&quot;&gt;This is a succes message!&lt;/Alert&gt;
&lt;br&gt;
&lt;Alert type=&quot;error&quot;&gt;This is an error message.&lt;/Alert&gt;
&lt;br&gt;
&lt;Alert type=&quot;warning&quot;&gt;This is a warning message.&lt;/Alert&gt;">

  <Alert>This is an alert with no specified type.</Alert>
  <br>
  <Alert type="success">This is a succes message!</Alert>
  <br>
  <Alert type="error">This is an error message.</Alert>
  <br>
  <Alert type="warning">This is a warning message.</Alert>

</StyleguideCard>

<StyleguideCard title="Alert (closable)" code="&lt;Alert closable&gt;Hey, I am a closable alert.&lt;/Alert&gt;">

  <Alert closable>Hey, I am a closable alert.</Alert>

</StyleguideCard>

<StyleguidePropsTable propsTable={propsTable} />

