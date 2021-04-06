<script>

  import StyleguideCard from '$lib/StyleguideCard.svelte';
  import RichContent from '$lib/RichContent.svelte';
  
  let pageTitle = 'Typography';

</script>

<svelte:head>
  <title>{pageTitle} - Basics - JUI</title>
</svelte:head>

<h1 class="c-h1">{pageTitle}</h1>

<p>This page documents the typography used in the design system. Use the right typography to present your design and content as clearly and efficiently as possible.</p>

<StyleguideCard>
  <h1 class="c-h1">Heading 1</h1>
  <h2 class="c-h2">Heading 2</h2>
  <h3 class="c-h3">Heading 3</h3>
  <h4 class="c-h4">Heading 4</h4>
</StyleguideCard>

<StyleguideCard>
  <p class="c-body-1">Paragraph (Body 1) - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  <p class="c-body-2">Small Paragraph (Body 2) - Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
</StyleguideCard>

<p>By default, every bare HTML element is rendered without any styles, to prevent too much overriding in CSS. When you need rich content, use this component which inserts a wrapper class upon which bare HTML elements do get styled.</p>

<StyleguideCard title="Rich content">

  <RichContent>

    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

    <blockquote>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </blockquote>

    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

    <table>
      <thead>
        <tr>
          <th>Data header</th>
          <th>Data header</th>
          <th>Data header</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Data point</td>
          <td>Data point</td>
          <td>Data point</td>
        </tr>
        <tr>
          <td>Data point</td>
          <td>Data point</td>
          <td>Data point</td>
        </tr>
        <tr>
          <td>Data point</td>
          <td>Data point</td>
          <td>Data point</td>
        </tr>
      </tbody>
    </table>

  </RichContent>

</StyleguideCard>