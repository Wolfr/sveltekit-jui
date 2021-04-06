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

  let propsTable = [
    {
      name: 'open',
      description: 'Open accordion item.',
      options: [
        {
          name: 'true/false',
          default: false
        }
      ],
      required: false
    }
  ]

</script>

<StyleguideIntro title={pageTitle} />

<StyleguideCard title="Accordion" description="<p>Wraps <code>AccordionItem</code>s together.</p>">
  <Accordion>
      {#each accordionContent as item}
      <AccordionItem title={item.title} open={item.open}>
          {@html item.content}
      </AccordionItem>
      {/each}
  </Accordion>
</StyleguideCard>



<StyleguideIntro title="Accordion Item" />

<StyleguideCard title="Accordion item" code="&lt;AccordionItem title=&quot;Title&quot; open&gt;
  &lt;p&gt;Some HTML content.&lt;/p&gt;
&lt;/AccordionItem&gt;">

  <AccordionItem title="Title" open>
      <p>Some HTML content.</p>
  </AccordionItem>

</StyleguideCard>

<StyleguidePropsTable propsTable={propsTable} />