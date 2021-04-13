<script>
  import StyleguideIntro from '$lib/StyleguideIntro.svelte';
  import StyleguideCard from '$lib/StyleguideCard.svelte';

  let pageTitle = 'Pagination';
  
  import Pagination from '$lib/Pagination.svelte';
  import StyleguidePropsTable from '$lib/StyleguidePropsTable.svelte';

  let propsTable = [
    {
      name: 'currentPage',
      description: 'Determines current page.',
      required: true,
      defaultValue: "1"
    },
    {
      name: 'totalPages',
      description: 'Determines total pages',
      required: true,
      defaultValue: "10"
    },
    {
      name: 'pageLimit',
      description: 'Determines limit of pages shown in pagination',
      required: true,
      defaultValue: "7"
    }
  ]
  
</script>

<svelte:head>
  <title>{pageTitle} - Components - JUI</title>
</svelte:head>

<StyleguideIntro title={pageTitle} />

<StyleguideCard title={pageTitle}>
  <Pagination totalPages=10 currentPage=1 />
</StyleguideCard>

<StyleguideCard title="Many pages">
  <Pagination totalPages=30 currentPage=12 />
</StyleguideCard>

<StyleguidePropsTable propsTable={propsTable} />

