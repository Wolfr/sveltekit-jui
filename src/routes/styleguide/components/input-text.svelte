<script>
  import StyleguideIntro from '$lib/StyleguideIntro.svelte';
  import StyleguideCard from '$lib/StyleguideCard.svelte';

  let pageTitle = 'Input';
  
  import Input from '$lib/Input.svelte';
</script>

<StyleguideIntro title={pageTitle} />

<StyleguideCard title={pageTitle}>
  <Input />
</StyleguideCard>

<StyleguideCard title="E-mail"}>
  <Input type="email" />
</StyleguideCard>

<StyleguideCard title="Password"}>
  <Input type="password" />
</StyleguideCard>