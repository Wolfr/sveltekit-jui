<script>
  import StyleguideIntro from '$lib/StyleguideIntro.svelte';
  import StyleguideCard from '$lib/StyleguideCard.svelte';

  let pageTitle = 'Menu (Navigation)';

</script>

<StyleguideIntro title={pageTitle} />

<StyleguideCard title="Select menu">

  <ul class="c-menu">
    <li><a href="#">Item</a></li>
    <li><a href="#">Item</a></li>
    <li><a href="#">Item</a></li>
  </ul>

</StyleguideCard>

