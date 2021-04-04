<script>
  import StyleguideIntro from '$lib/StyleguideIntro.svelte';
  import StyleguideCard from '$lib/StyleguideCard.svelte';

  let pageTitle = 'Rich content';

  import RichContent from '$lib/RichContent.svelte';
</script>

<StyleguideIntro title={pageTitle} />

<p>By default, every bare HTML element is rendered without any styles, to prevent too much overriding in CSS. When you need rich content, use this component which inserts a wrapper class upon which bare HTML elements do get styled.</p>

<StyleguideCard title={pageTitle}>

<RichContent>

  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

  <blockquote> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </blockquote>

  <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

</RichContent>

</StyleguideCard>
