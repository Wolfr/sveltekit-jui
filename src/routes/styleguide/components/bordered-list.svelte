<script>
  import StyleguideIntro from '$lib/StyleguideIntro.svelte';
  import StyleguideCard from '$lib/StyleguideCard.svelte';

  let pageTitle = 'Bordered list';
  

  
</script>


<svelte:head>
  <title>{pageTitle} - Components - JUI</title>
</svelte:head>


<StyleguideIntro title={pageTitle} />

<p>This is a markup component. We recommend implementing it as straight-up markup.</p>

<StyleguideCard title="Regular ">
  <ul class="c-bordered-list">
    <li><a href="/">Link</a></li>
    <li><a href="/">Link</a></li>
    <li><a href="/">Link</a></li>
    <li><a href="/">Link</a></li>
  </ul>
</StyleguideCard>

<StyleguideCard title="Regular ">
  <ul class="c-bordered-list">
    <li><span>Static list item</span></li>
    <li><span>Static list item</span></li>
    <li><span>Static list item</span></li>
    <li><span>Static list item</span></li>
  </ul>
</StyleguideCard>

<StyleguideCard title="Regular - 2 levels">
  <ul class="c-bordered-list">
    <li>
      <a href="/">Link</a>
    </li>
    <li>
        <span>Category value</span>
        <ul>
          <li><a href="/">Link level 2</a></li>
          <li><a href="/">Link level 2</a></li>
        </ul>
    </li>
  </ul>
</StyleguideCard>

<StyleguideCard title="Small - 2 levels">
  <ul class="c-bordered-list c-bordered-list--small">
    <li>
      <a href="/">Link</a>
    </li>
    <li>
        <span>Category value</span>
        <ul>
          <li><a href="/">Link level 2</a></li>
          <li><a href="/">Link level 2</a></li>
        </ul>
    </li>
  </ul>
</StyleguideCard>
