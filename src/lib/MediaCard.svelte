<script>
  export let tags = null;
  export let href = null;
  export let title = null;
  export let description = null;

  import PillList from '$lib/PillList.svelte';
  import PillListItem from '$lib/PillListItem.svelte';
  import Pill from '$lib/Pill.svelte';
  
  import ImagePlaceholder from '$lib/ImagePlaceholder.svelte';

</script>

<div class="c-media-card">
  {#if href}
    <a {href} class="c-media-card__inner c-media-card__inner--interactive">
      <ImagePlaceholder alt="" />
      
      <div class="c-media-card__content">
        <h4 class="c-h4">{title}</h4>
        <p class="c-body-2">{description}</p>
        <PillList>
          {#each tags as tag}
          <PillListItem>
            <Pill>{tag}</Pill>
          </PillListItem>
          {/each}
        </PillList>
      </div>

    </a>
  {:else}
  <div class="c-media-card__inner">
    <ImagePlaceholder alt="" />
    <div class="c-media-card__content">
      <h4 class="c-h4">{title}</h4>
      <p class="c-body-2">{description}</p>
      <PillList>
        {#each tags as tag}
        <PillListItem>
          <Pill>{tag}</Pill>
        </PillListItem>
        {/each}
      </PillList>
    </div>
  </div>
  {/if}
</div>

