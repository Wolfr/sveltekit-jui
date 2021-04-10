<script>
  import StyleguideIntro from '$lib/StyleguideIntro.svelte';
  import StyleguideCard from '$lib/StyleguideCard.svelte';

  import StyleguidePropsTable from '$lib/StyleguidePropsTable.svelte';
  let pageTitle = 'Checkbox Group';
  
  import Checkbox from '$lib/Checkbox.svelte';
  
</script>

<svelte:head>
  <title>{pageTitle} - Components - JUI</title>
</svelte:head>

<StyleguideIntro title={pageTitle} />

<StyleguideCard title={pageTitle}>

  <div class="o-form-group-layout o-form-group-layout--standard">
      <div class="o-form-group">
          <label class="o-form-group__label">Value</label>
          <div class="o-form-group__controls">
              <div class="c-checkbox-group">
                  <div class="c-checkbox">
                      <label>
                          <input type="checkbox" />Value 1
                      </label>
                  </div>
                  <div class="c-checkbox">
                      <label>
                          <input type="checkbox" />Value 2
                      </label>
                  </div>
                  <div class="c-checkbox">
                      <label>
                          <input type="checkbox" checked="checked" />Value 3
                      </label>
                  </div>
              </div>
          </div>
      </div>
  </div>


</StyleguideCard>
