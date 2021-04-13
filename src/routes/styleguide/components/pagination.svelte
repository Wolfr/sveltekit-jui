<script>
  import StyleguideIntro from '$lib/StyleguideIntro.svelte';
  import StyleguideCard from '$lib/StyleguideCard.svelte';

  let pageTitle = 'Pagination';
  
  import Pagination from '$lib/Pagination.svelte';
</script>

<svelte:head>
  <title>{pageTitle} - Components - JUI</title>
</svelte:head>

<StyleguideIntro title={pageTitle} />

<StyleguideCard title={pageTitle}>
  <Pagination totalPages=1 currentPage=1 />
  <br/>
  <Pagination totalPages=2 currentPage=1 />
  <br/>
  <Pagination totalPages=3 currentPage=2 />
  <br/>
  <Pagination totalPages=4 currentPage=2 />
  <br/>
  <Pagination totalPages=5 currentPage=2 />
  <br/>
  <Pagination totalPages=6 currentPage=2 />
  <br/>
  <Pagination totalPages=7 currentPage=2 />
  <br/>
  <Pagination totalPages=8 currentPage=2 />
  <br/>
  <Pagination totalPages=9 pageLimit=7 currentPage=2 />
  <br/>
  
  <p>Current page is 12, totalpages 20</p>
  <br/>
  <Pagination totalPages=20 currentPage=12 />
  
  <br/>
  
  <p>Current page is 12, totalpages 30</p>
  <br/>
  <Pagination totalPages=30 currentPage=12 />

  <p>Current page is 1, totalpages 100</p>
  <br/>
  <Pagination totalPages=100 currentPage=1 />
  <br/>

  <p>Current page is 54, totalpages 70</p>
  <!-- <Pagination totalPages=70 currentPage=54 /> -->

</StyleguideCard>
