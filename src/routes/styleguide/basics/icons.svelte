<script>
  import StyleguideIntro from '$lib/StyleguideIntro.svelte';
  import StyleguideCard from '$lib/StyleguideCard.svelte';
  import Icon from '$lib/Icon.svelte';
  
  let list =     [
      'archive',
      'arrow-down',
      'arrow-left-down',
      'arrow-left-up',
      'arrow-left',
      'arrow-right-down',
      'arrow-right-up',
      'arrow-right',
      'arrow-up',
      'attachment',
      'backspace',
      'ban',
      'bar-chart-alt',
      'bar-chart',
      'board',
      'book',
      'bookmark',
      'calendar',
      'call',
      'camera',
      'caret-down',
      'caret-left',
      'caret-right',
      'caret-up',
      'check',
      'chevron-double-down',
      'chevron-double-left',
      'chevron-double-right',
      'chevron-double-up',
      'chevron-down',
      'chevron-left',
      'chevron-right',
      'chevron-up',
      'circle',
      'circle-add',
      'circle-arrow-down',
      'circle-arrow-left',
      'circle-arrow-right',
      'circle-arrow-up',
      'circle-check',
      'circle-error',
      'circle-help',
      'circle-information',
      'circle-remove',
      'circle-warning',
      'clipboard-check',
      'clipboard-list',
      'clipboard',
      'clock',
      'close',
      'cloud-download',
      'cloud-upload',
      'cloud',
      'computer',
      'copy',
      'credit-card',
      'delete',
      'document-add',
      'document-check',
      'document-download',
      'document-empty',
      'document-remove',
      'document',
      'download',
      'drag',
      'edit-alt',
      'edit',
      'email',
      'enter',
      'expand',
      'export',
      'external-link',
      'eye-off',
      'eye',
      'favorite',
      'filter-alt',
      'filter',
      'folder-add',
      'folder-check',
      'folder-download',
      'folder-remove',
      'folder',
      'grid',
      'heart',
      'home',
      'image',
      'inbox',
      'laptop',
      'link-alt',
      'link',
      'list',
      'location',
      'lock',
      'log-out',
      'map',
      'megaphone',
      'menu',
      'message-alt',
      'message',
      'mobile',
      'moon',
      'next',
      'notification-off',
      'notification',
      'options-horizontal',
      'options-vertical',
      'pause',
      'percentage',
      'pin',
      'play',
      'previous',
      'refresh',
      'remove',
      'repeat',
      'search',
      'select',
      'send',
      'settings',
      'share',
      'shopping-cart-add',
      'shopping-cart',
      'shuffle',
      'sort',
      'speakers',
      'stop',
      'sun',
      'switch',
      'table',
      'tablet',
      'tag',
      'undo',
      'unlock',
      'user-add',
      'user-check',
      'user-remove',
      'user',
      'users',
      'volume-off',
      'volume-up',
      'warning',
      'webcam',
      'zoom-in',
      'zoom-out'
    ]
    
    let pageTitle = "Icons";
</script>

<style>
  :global(.styleguide-icon-listing) {
    columns: 30rem;
  }
  
  :global(.styleguide-icon-listing) li {
    display: flex;
    align-items: center;
    margin: 0 0 .8rem;
    break-inside: avoid;
  }

  :global(.styleguide-icon-listing .c-icon) {
    margin-right: 0.4rem;
    display: inline-block;
  }
</style>

<svelte:head>
  <title>{pageTitle} - Basics - JUI</title>
</svelte:head>

<StyleguideIntro title={pageTitle} content='<p>In this project, we use <a href="https://icons.mono.company/">Mono Icons</a>, loaded as an icon font.</p>' />
  
<StyleguideCard title="Icons">
  <ul class="styleguide-icon-listing">
    {#each list as icon}
    <li>
      <Icon icon={icon} /> {icon}
    </li>
    {/each}
  </ul>

</StyleguideCard>