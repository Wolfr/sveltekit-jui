<script>
  import StyleguideIntro from '$lib/StyleguideIntro.svelte';
  import StyleguideCard from '$lib/StyleguideCard.svelte';
  import StyleguidePropsTable from '$lib/StyleguidePropsTable.svelte';

  let pageTitle = 'Accordion Item';
  import AccordionItem from '$lib/AccordionItem.svelte';

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

<StyleguideCard title="Accordion item" code="&lt;AccordionItem title=&quot;Title&quot; open&gt;
  &lt;p&gt;Some HTML content.&lt;/p&gt;
&lt;/AccordionItem&gt;">

  <AccordionItem title="Title" open>
      <p>Some HTML content.</p>
  </AccordionItem>

</StyleguideCard>

<StyleguidePropsTable propsTable={propsTable} />