<script>
  import StyleguideIntro from '$lib/StyleguideIntro.svelte';
  import StyleguideCard from '$lib/StyleguideCard.svelte';
  import StyleguidePropsTable from '$lib/StyleguidePropsTable.svelte';

  let pageTitle = 'Avatar';
  import Avatar from '$lib/Avatar.svelte';
  
  let propsTable = [
    {
      name: 'initials',
      description: 'Determines label shown.',
      required: false,
    },
    {
      name: 'imgSrc',
      description: 'If set, shows an avatar image.',
      required: false,
    },
    {
      name: 'size',
      description: 'If set, changes avatar size.',
      required: false,
      options: [
        {
          name: 'xsmall',
          default: false
        },
        {
          name: 'small',
          default: false
        },
        {
          name: 'medium',
          default: false
        },
        {
          name: 'large',
          default: false
        }
      ]
    },
    
  ]

</script>

<svelte:head>
  <title>{pageTitle} - Components - JUI</title>
</svelte:head>

<StyleguideIntro title={pageTitle} content="<p>A profile picture.</p>" />

<StyleguideCard title={pageTitle}
  code="&lt;Avatar initials=&quot;JC&quot; /&gt;">
  <Avatar initials="JC" />
</StyleguideCard>

<StyleguideCard title="Avatar with image" code="&lt;Avatar imgSrc=&quot;http://placekitten.com/500/500&quot; /&gt;">
  <Avatar imgSrc="http://placekitten.com/500/500" />
</StyleguideCard>

<StyleguideCard title="Avatar sizes" code="&lt;Avatar initials=&quot;DK&quot; size=&quot;xsmall&quot; /&gt;
&lt;Avatar initials=&quot;DK&quot; size=&quot;small&quot; /&gt;
&lt;Avatar initials=&quot;DK&quot;  /&gt;
&lt;Avatar initials=&quot;DK&quot; size=&quot;medium&quot; /&gt;
&lt;Avatar initials=&quot;DK&quot; size=&quot;large&quot; /&gt;
">
  <Avatar initials="DK" size="xsmall" />
  <Avatar initials="DK" size="small" />
  <Avatar initials="DK"  />
  <Avatar initials="DK" size="medium" />
  <Avatar initials="DK" size="large" />
</StyleguideCard>

<StyleguidePropsTable propsTable={propsTable} />
