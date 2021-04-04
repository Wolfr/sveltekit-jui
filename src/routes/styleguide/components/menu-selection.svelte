<script>
  import StyleguideIntro from '$lib/StyleguideIntro.svelte';
  import StyleguideCard from '$lib/StyleguideCard.svelte';

  let pageTitle = 'Menu (Selection)';

</script>

<StyleguideIntro title={pageTitle} />

<StyleguideCard title="Select menu">

  <div class="c-select-holder">
    <select class="c-select">
      <option>Item 1</option>
      <option>Item 2</option>
      <option>Item 3</option>
    </select>
  </div>

</StyleguideCard>

<!-- <StyleguideCard title="Select menu (custom)">

   @TODO

</StyleguideCard> -->
