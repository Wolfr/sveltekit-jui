<script>
  import StyleguideIntro from '$lib/jui-components/StyleguideIntro.svelte';
  import StyleguideCard from '$lib/jui-components/StyleguideCard.svelte';

  import StyleguidePropsTable from '$lib/jui-components/StyleguidePropsTable.svelte';
  let pageTitle = 'Key value';
  
  import Checkbox from '$lib/jui-components/Checkbox.svelte';

</script>

<svelte:head>
  <title>{pageTitle} - Components - JUI</title>
</svelte:head>

<StyleguideIntro title={pageTitle} />

<p>This is a markup component. We recommend implementing it as straight-up markup.</p>

<StyleguideCard title={pageTitle}>

  <dl class="c-key-value">
      <div class="c-key-value__item">
          <dt class="c-key-value__key c-key-value__key--bold">Key</dt>
          <dd class="c-key-value__value">Value</dd>
      </div>
      <div class="c-key-value__item">
          <dt class="c-key-value__key c-key-value__key--bold">Key</dt>
          <dd class="c-key-value__value">Value</dd>
      </div>
      <div class="c-key-value__item">
          <dt class="c-key-value__key c-key-value__key--bold">Key</dt>
          <dd class="c-key-value__value">Value</dd>
      </div>
      <div class="c-key-value__item">
          <dt class="c-key-value__key c-key-value__key--bold">Key</dt>
          <dd class="c-key-value__value">Value</dd>
      </div>
  </dl>

</StyleguideCard>

<StyleguideCard title="Key Value (Horizontal)">

  <dl class="c-key-value c-key-value--horizontal">
      <div class="c-key-value__item">
          <dt class="c-key-value__key">Key</dt>
          <dd class="c-key-value__value">Value</dd>
      </div>
      <div class="c-key-value__item">
          <dt class="c-key-value__key">Key</dt>
          <dd class="c-key-value__value">Value</dd>
      </div>
      <div class="c-key-value__item">
          <dt class="c-key-value__key">Key</dt>
          <dd class="c-key-value__value">Value</dd>
      </div>
      <div class="c-key-value__item">
          <dt class="c-key-value__key">Key</dt>
          <dd class="c-key-value__value">Value</dd>
      </div>
  </dl>
  
</StyleguideCard>