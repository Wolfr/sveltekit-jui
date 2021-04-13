<script>
  import RichContent from '$lib/RichContent.svelte';
  import Icon from '$lib/Icon.svelte';
</script>


<style lang="scss">


  :global(.c-svg-icon-list) {
    columns: 16;
  }
  
  :global(.c-svg-icon-list .o-svg-icon) {
      margin-bottom: 1.2rem;
  }

  @media (prefers-color-scheme: dark) {
    :global(.o-svg-icon *) {
      fill: #FFF;
    }
  }

</style>

<slot />

<div class="u-spacer">
  <h1 class="c-h1">SVG icons test page</h1>
  <div class="c-svg-icon-list">

    <Icon icon="add" type="svg" />
    <Icon icon="archive" type="svg" />
    <Icon icon="arrow-down" type="svg" />
    <Icon icon="arrow-left-down" type="svg" />
    <Icon icon="arrow-left-up" type="svg" />
    <Icon icon="arrow-left" type="svg" />
    <Icon icon="arrow-right-down" type="svg" />
    <Icon icon="arrow-right-up" type="svg" />
    <Icon icon="arrow-right" type="svg" />
    <Icon icon="arrow-up" type="svg" />
    <Icon icon="attachment" type="svg" />
    <Icon icon="backspace" type="svg" />
    <Icon icon="ban" type="svg" />
    <Icon icon="bar-chart-alt" type="svg" />
    <Icon icon="bar-chart" type="svg" />
    <Icon icon="board" type="svg" />
    <Icon icon="bold" type="svg" />
    <Icon icon="book" type="svg" />
    <Icon icon="bookmark" type="svg" />
    <Icon icon="calendar" type="svg" />
    <Icon icon="call" type="svg" />
    <Icon icon="camera" type="svg" />
    <Icon icon="caret-down" type="svg" />
    <Icon icon="caret-left-right" type="svg" />
    <Icon icon="caret-left" type="svg" />
    <Icon icon="caret-right" type="svg" />
    <Icon icon="caret-up-down" type="svg" />
    <Icon icon="caret-up" type="svg" />
    <Icon icon="check" type="svg" />
    <Icon icon="chevron-double-down" type="svg" />
    <Icon icon="chevron-double-left" type="svg" />
    <Icon icon="chevron-double-right" type="svg" />
    <Icon icon="chevron-double-up" type="svg" />
    <Icon icon="chevron-down" type="svg" />
    <Icon icon="chevron-left" type="svg" />
    <Icon icon="chevron-right" type="svg" />
    <Icon icon="chevron-up" type="svg" />
    <Icon icon="circle-add-filled" type="svg" />
    <Icon icon="circle-add" type="svg" />
    <Icon icon="circle-arrow-down-filled" type="svg" />
    <Icon icon="circle-arrow-down" type="svg" />
    <Icon icon="circle-arrow-left-filled" type="svg" />
    <Icon icon="circle-arrow-left" type="svg" />
    <Icon icon="circle-arrow-right-filled" type="svg" />
    <Icon icon="circle-arrow-right" type="svg" />
    <Icon icon="circle-arrow-up-filled" type="svg" />
    <Icon icon="circle-arrow-up" type="svg" />
    <Icon icon="circle-check-filled" type="svg" />
    <Icon icon="circle-check" type="svg" />
    <Icon icon="circle-error-filled" type="svg" />
    <Icon icon="circle-error" type="svg" />
    <Icon icon="circle-help-filled" type="svg" />
    <Icon icon="circle-help" type="svg" />
    <Icon icon="circle-information-filled" type="svg" />
    <Icon icon="circle-information" type="svg" />
    <Icon icon="circle-remove-filled" type="svg" />
    <Icon icon="circle-remove" type="svg" />
    <Icon icon="circle-warning-filled" type="svg" />
    <Icon icon="circle-warning" type="svg" />
    <Icon icon="circle" type="svg" />
    <Icon icon="clipboard-check" type="svg" />
    <Icon icon="clipboard-empty" type="svg" />
    <Icon icon="clipboard-error" type="svg" />
    <Icon icon="clipboard" type="svg" />
    <Icon icon="clock" type="svg" />
    <Icon icon="close" type="svg" />
    <Icon icon="cloud-download" type="svg" />
    <Icon icon="cloud-upload" type="svg" />
    <Icon icon="cloud" type="svg" />
    <Icon icon="computer" type="svg" />
    <Icon icon="copy" type="svg" />
    <Icon icon="credit-card" type="svg" />
    <Icon icon="delete-alt" type="svg" />
    <Icon icon="delete" type="svg" />
    <Icon icon="document-add" type="svg" />
    <Icon icon="document-check" type="svg" />
    <Icon icon="document-download" type="svg" />
    <Icon icon="document-empty" type="svg" />
    <Icon icon="document-remove" type="svg" />
    <Icon icon="document" type="svg" />
    <Icon icon="download" type="svg" />
    <Icon icon="drag" type="svg" />
    <Icon icon="edit-alt" type="svg" />
    <Icon icon="edit" type="svg" />
    <Icon icon="email" type="svg" />
    <Icon icon="enter" type="svg" />
    <Icon icon="expand" type="svg" />
    <Icon icon="export" type="svg" />
    <Icon icon="external-link" type="svg" />
    <Icon icon="eye-off" type="svg" />
    <Icon icon="eye" type="svg" />
    <Icon icon="favorite" type="svg" />
    <Icon icon="filter-1" type="svg" />
    <Icon icon="filter" type="svg" />
    <Icon icon="folder-add" type="svg" />
    <Icon icon="folder-check" type="svg" />
    <Icon icon="folder-download" type="svg" />
    <Icon icon="folder-remove" type="svg" />
    <Icon icon="folder" type="svg" />
    <Icon icon="grid" type="svg" />
    <Icon icon="heart" type="svg" />
    <Icon icon="home" type="svg" />
    <Icon icon="image" type="svg" />
    <Icon icon="inbox" type="svg" />
    <Icon icon="italic" type="svg" />
    <Icon icon="laptop" type="svg" />
    <Icon icon="link-alt" type="svg" />
    <Icon icon="link" type="svg" />
    <Icon icon="list-ordered" type="svg" />
    <Icon icon="list" type="svg" />
    <Icon icon="location" type="svg" />
    <Icon icon="lock" type="svg" />
    <Icon icon="log-out" type="svg" />
    <Icon icon="map" type="svg" />
    <Icon icon="megaphone" type="svg" />
    <Icon icon="menu" type="svg" />
    <Icon icon="message-alt" type="svg" />
    <Icon icon="message" type="svg" />
    <Icon icon="mobile" type="svg" />
    <Icon icon="moon" type="svg" />
    <Icon icon="next" type="svg" />
    <Icon icon="notification-off" type="svg" />
    <Icon icon="notification" type="svg" />
    <Icon icon="options-horizontal" type="svg" />
    <Icon icon="options-vertical" type="svg" />
    <Icon icon="pause" type="svg" />
    <Icon icon="percentage" type="svg" />
    <Icon icon="pin" type="svg" />
    <Icon icon="play" type="svg" />
    <Icon icon="previous" type="svg" />
    <Icon icon="refresh" type="svg" />
    <Icon icon="remove" type="svg" />
    <Icon icon="reorder-alt" type="svg" />
    <Icon icon="repeat" type="svg" />
    <Icon icon="search" type="svg" />
    <Icon icon="select" type="svg" />
    <Icon icon="send" type="svg" />
    <Icon icon="settings" type="svg" />
    <Icon icon="share" type="svg" />
    <Icon icon="shopping-cart-add" type="svg" />
    <Icon icon="shopping-cart" type="svg" />
    <Icon icon="shuffle" type="svg" />
    <Icon icon="sort" type="svg" />
    <Icon icon="speakers" type="svg" />
    <Icon icon="stop" type="svg" />
    <Icon icon="sun" type="svg" />
    <Icon icon="sunrise" type="svg" />
    <Icon icon="switch" type="svg" />
    <Icon icon="table" type="svg" />
    <Icon icon="tablet" type="svg" />
    <Icon icon="tag" type="svg" />
    <Icon icon="undo" type="svg" />
    <Icon icon="unlock" type="svg" />
    <Icon icon="user-add" type="svg" />
    <Icon icon="user-check" type="svg" />
    <Icon icon="user-remove" type="svg" />
    <Icon icon="user" type="svg" />
    <Icon icon="users" type="svg" />
    <Icon icon="volume-off" type="svg" />
    <Icon icon="volume-up" type="svg" />
    <Icon icon="warning-filled" type="svg" />
    <Icon icon="warning" type="svg" />
    <Icon icon="webcam" type="svg" />
    <Icon icon="zoom-in" type="svg" />
    <Icon icon="zoom-out" type="svg" />

  </div>
</div>