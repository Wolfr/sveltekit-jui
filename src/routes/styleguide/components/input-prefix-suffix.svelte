<script>
  import StyleguideIntro from '$lib/StyleguideIntro.svelte';
  import StyleguideCard from '$lib/StyleguideCard.svelte';

  let pageTitle = 'Inputs (prefix/suffix)';
  
</script>

<svelte:head>
  <title>{pageTitle} - Components - JUI</title>
</svelte:head>

<StyleguideIntro title={pageTitle} />

<StyleguideCard title={pageTitle}>

  <div class="o-form-group-layout o-form-group-layout--standard">
    <div class="o-form-group">
      <label class="o-form-group__label" for="amountId">Amount</label>
      <div class="o-form-group__controls">
        <div class="c-input-prefix-holder">
          <div class="c-input-prefix">€</div>
          <input class="c-input" id="amountId" type="number" value="0" />
        </div>
      </div>
    </div>
    <div class="o-form-group">
      <label class="o-form-group__label" for="amountId">Area</label>
      <div class="o-form-group__controls">
        <div class="c-input-prefix-holder">
          <input class="c-input" id="amountId" type="number" value="0" />
          <div class="c-input-suffix">m²</div>
        </div>
      </div>
    </div>
  </div>

</StyleguideCard>
