<script>
  import StyleguideIntro from '$lib/StyleguideIntro.svelte';
  import StyleguideCard from '$lib/StyleguideCard.svelte';

  let pageTitle = 'Media Card';
  
  import Card from '$lib/Card.svelte';
  import MediaCard from '$lib/MediaCard.svelte';
  import Button from '$lib/Button.svelte';

</script>

<svelte:head>
  <title>{pageTitle} - Components - JUI</title>
</svelte:head>

<StyleguideIntro title={pageTitle} />

<StyleguideCard title="Media card">
 <MediaCard
   tags={['Tag 1', 'Tag 2', 'Tag 2']}
   title="Title of the media card"
   description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  />

</StyleguideCard>
<StyleguideCard title="Media card (interactive)">
  <MediaCard
    tags={['Tag 1', 'Tag 2', 'Tag 2']}
    title="Title of the media card"
    href="/"
    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
   />
  
</StyleguideCard>