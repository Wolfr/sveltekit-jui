<script>
  import StyleguideIntro from '$lib/StyleguideIntro.svelte';
  import StyleguideCard from '$lib/StyleguideCard.svelte';

  let pageTitle = 'Panel';

  import Panel from '$lib/Panel.svelte';
  import PanelHeader from '$lib/PanelHeader.svelte';
  import PanelBody from '$lib/PanelBody.svelte';

</script>

<svelte:head>
  <title>{pageTitle} - Components - JUI</title>
</svelte:head>

<StyleguideIntro title={pageTitle} />

<StyleguideCard title={pageTitle} code="&lt;Panel&gt;
  &lt;PanelBody&gt;
    &lt;p&gt;I am a single panel body.&lt;/p&gt;
  &lt;/PanelBody&gt;
&lt;/Panel&gt;">

  <Panel>
    <PanelBody>
      <p>I am a single panel body.</p>
    </PanelBody>
  </Panel>

</StyleguideCard>

<StyleguideCard title="Panel body only" code="&lt;Panel&gt;
  &lt;PanelHeader title=&quot;Panel title&quot; /&gt;
  &lt;PanelBody&gt;
    &lt;p&gt;I am a panel body.&lt;/p&gt;
  &lt;/PanelBody&gt;
&lt;/Panel&gt;">

  <Panel>
    <PanelHeader title="Panel title" />
    <PanelBody>
      <p>I am a panel body.</p>
    </PanelBody>
  </Panel>

</StyleguideCard>

<StyleguideCard title="Panel with 2 bodies" code="&lt;Panel&gt;
  &lt;PanelHeader title=&quot;Panel title&quot; /&gt;
    &lt;PanelBody&gt;
      &lt;p&gt;I am the 1st panel body.&lt;/p&gt;
    &lt;/PanelBody&gt;
    &lt;PanelBody&gt;
      &lt;p&gt;I am the 2nd panel body.&lt;/p&gt;
    &lt;/PanelBody&gt;
&lt;/Panel&gt;">

  <Panel>
    <PanelHeader title="Panel title" />
      <PanelBody>
        <p>I am the 1st panel body.</p>
      </PanelBody>
      <PanelBody>
        <p>I am the 2nd panel body.</p>
      </PanelBody>
  </Panel>

</StyleguideCard>


