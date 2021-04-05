<script>
  import StyleguideIntro from '$lib/StyleguideIntro.svelte';
  import StyleguideCard from '$lib/StyleguideCard.svelte';

  import SelectMenu from '$lib/SelectMenu.svelte';
  import SelectMenuItem from '$lib/SelectMenuItem.svelte';

  let pageTitle = 'Menu (Selection)';

  let optionSet1 = [
    {
        name:'Option 1',
        selected: true
    },
    {
        name:'Option 2',
    },
    {
        name:'Option 3',
    },
  ]

</script>

<StyleguideIntro title={pageTitle} />

<StyleguideCard title="Select menu (native)">

  <div class="c-select-holder">
    <select class="c-select">
      <option>Item 1</option>
      <option>Item 2</option>
      <option>Item 3</option>
    </select>
  </div>

</StyleguideCard>

<StyleguideCard
  title="Select menu (custom) (singular selection)"
  description="<p>@todo proper event dispatching</p><p>@todo proper selection logic</p>"
>

  <SelectMenu>
    {#each optionSet1 as option, index}
      <SelectMenuItem selected="{option.selected}">{option.name}</SelectMenuItem>
    {/each}
  </SelectMenu>

</StyleguideCard>
