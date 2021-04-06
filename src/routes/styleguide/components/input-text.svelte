<script>
  import StyleguideIntro from '$lib/StyleguideIntro.svelte';
  import StyleguideCard from '$lib/StyleguideCard.svelte';

  let pageTitle = 'Input (text)';
  
  import Input from '$lib/Input.svelte';
</script>


<svelte:head>
  <title>{pageTitle} - Components - JUI</title>
</svelte:head>

<StyleguideIntro title={pageTitle} content="Inputs for inputting text."/>

<StyleguideCard title={pageTitle}>
  <Input />
</StyleguideCard>

<StyleguideCard title="E-mail"}>
  <Input type="email" />
</StyleguideCard>

<StyleguideCard title="Password"}>
  <Input type="password" />
</StyleguideCard>

<StyleguideCard title="Textarea"}>
  <textarea class="c-input" />
</StyleguideCard>