<script>
  import MediaCard from '$lib/MediaCard.svelte';
</script>

<svelte:head>
  <title>Media grid- Site example - JUI</title>
</svelte:head>

<div style="overflow: scroll; height: 100%;">
  <div class="u-spacer-l">

    <div class="container">

      <h2 class="c-h2">My [category] favorites.</h2>

      <div class="o-dynamic-grid">
        {#each {length: 20} as elem}
        <div class="o-dynamic-grid__item">
           <MediaCard
             tags={['Tag 1', 'Tag 2', 'Tag 2']}
             href="/"
             title="Title of the media card"
             description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
        </div>
        {/each}
      </div>

    </div>
  </div>
</div>