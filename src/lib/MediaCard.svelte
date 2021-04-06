<script>
  export let tags = null;
  export let href = null;
  export let title = null;
  export let description = null;

  import PillList from '$lib/PillList.svelte';
  import PillListItem from '$lib/PillListItem.svelte';
  import Pill from '$lib/Pill.svelte';

</script>

<div class="c-media-card">
  <a {href}>
    <img src="placeholder.png" alt="">
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
</div>

