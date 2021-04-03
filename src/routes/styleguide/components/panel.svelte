<script>
  import StyleguideIntro from '$lib/StyleguideIntro.svelte';
  import StyleguideCard from '$lib/StyleguideCard.svelte';

  let pageTitle = 'Panel';

  import Panel from '$lib/Panel.svelte';
  import PanelHeader from '$lib/PanelHeader.svelte';
  import PanelBody from '$lib/PanelBody.svelte';

</script>

<StyleguideIntro title={pageTitle} />

<StyleguideCard title={pageTitle}>

  <Panel minimal>
    <PanelHeader title="Panel title" />
      <PanelBody>
        <p>I am the 1st panel body.</p>
      </PanelBody>
      <PanelBody>
        <p>I am the 2nd panel body.</p>
      </PanelBody>
  </Panel>

</StyleguideCard>
