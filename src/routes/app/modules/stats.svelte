<script>
	  import Panel from '$lib/jui-components/Panel.svelte';
    import PanelHeader from '$lib/jui-components/PanelHeader.svelte';
    import PanelBody from '$lib/jui-components/PanelBody.svelte';
</script>

<div class="u-spacer-l">

  <div class="o-dynamic-grid">
    <div class="o-dynamic-grid__item">
      <Panel>
          <PanelHeader title="Panel header" />
          <PanelBody>
              <p>I am HTML content.</p>
          </PanelBody>
      </Panel>
    </div>
    <div class="o-dynamic-grid__item">
      <Panel>
          <PanelHeader title="Panel header" />
          <PanelBody>
              <p>I am other HTML content.</p>
          </PanelBody>
      </Panel>
    </div>
    <div class="o-dynamic-grid__item">
      <Panel>
        <PanelHeader>
            <div slot="panel-header">
              <h2 class="c-toolbar__title">Hey, I am the header with customized HTML</h2>
             </div>
          </PanelHeader>
          <PanelBody>
              <p>I am other HTML content.</p>
          </PanelBody>
          <PanelBody>
            <p>I am the 2nd panel body.</p>
          </PanelBody>
      </Panel>
    </div>
  </div>

</div>
