<script>
  import StyleguideIntro from '$lib/jui-components/StyleguideIntro.svelte';
  import StyleguideCard from '$lib/jui-components/StyleguideCard.svelte';

  let pageTitle = 'Multi select';

  import MultiSelect from '$lib/jui-components/MultiSelect.svelte';
  let valueMultiSelect = null;

</script>


<svelte:head>
  <title>{pageTitle} - Components - JUI</title>
</svelte:head>

<StyleguideCard title={pageTitle} style="height: 400px;">
  <MultiSelect id='category' activeOption="false" bind:valueMultiSelect>
    <option id="FR">French</option>
    <option id="IN">Indian</option>
    <option id="IT">Italian</option>
    <option id="JP">Japanese</option>
    <option id="MEX">Mexican</option>
    <option id="AFR">African</option>
    <option id="AM">American</option>
    <option id="BR">British</option>
    <option id="CAR">Caribbean</option>
    <option id="CH">Chinese</option>
    <option id="GR">Greek</option>
    <option id="KOR">Korean</option>
    <option id="MOR">Moroccan</option>
    <option id="PAK">Pakistani</option>
    <option id="POR">Portuguese</option>
    <option id="SA">South American</option>
    <option id="SP">Spanish</option>
    <option id="TH">Thai</option>
    <option id="ME">Middle Eastern</option>
    <option id="OT">Other</option>
  </MultiSelect>
</StyleguideCard>

