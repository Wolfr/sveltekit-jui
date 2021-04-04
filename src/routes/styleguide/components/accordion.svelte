<script>
  import StyleguideIntro from '$lib/StyleguideIntro.svelte';
  import StyleguideCard from '$lib/StyleguideCard.svelte';
  import StyleguidePropsTable from '$lib/StyleguidePropsTable.svelte';

  let pageTitle = 'Accordion';
  import Accordion from '$lib/Accordion.svelte';
  import AccordionItem from '$lib/AccordionItem.svelte';

  let accordionContent = [
    {
      title: "Title",
      content: "<p>Content 1</p>",
      open: true
    },
    {
      title: "Title 2",
      content: "<p>Content 2</p>",
      open: true
    },
    {
      title: "Title 3",
      content: "<p>Content 3</p>",
      open: false
    }
  ]
</script>

<StyleguideIntro title={pageTitle} />

<StyleguideCard title="Inline accordion">
  <Accordion>
      {#each accordionContent as item}
      <AccordionItem title={item.title} open={item.open}>
          {@html item.content}
      </AccordionItem>
      {/each}
  </Accordion>
</StyleguideCard>
