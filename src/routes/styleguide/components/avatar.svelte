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

<StyleguideIntro title={pageTitle} />

<StyleguideCard title={pageTitle}>
  <Avatar initials="JC" />
</StyleguideCard>

<StyleguideCard title="Avatar with image">
  <Avatar imgSrc="http://placekitten.com/500/500" />
</StyleguideCard>

<StyleguideCard title="Avatar sizes">
  <Avatar initials="DK" size="xsmall" />
  <Avatar initials="DK" size="small" />
  <Avatar initials="DK"  />
  <Avatar initials="DK" size="medium" />
  <Avatar initials="DK" size="large" />
</StyleguideCard>

<StyleguidePropsTable propsTable={propsTable} />
