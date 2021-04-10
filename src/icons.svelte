<script>
  export let name;
  export let size = "24";
  let html;
  switch (name) {
    case "add":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"><path d="M12 4C12.5523 4 13 4.44772 13 5V11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H13V19C13 19.5523 12.5523 20 12 20C11.4477 20 11 19.5523 11 19V13H5C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11H11V5C11 4.44772 11.4477 4 12 4Z" /></svg>`
      break;
    case "archive":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"><path d="M2 5C2 3.89543 2.89543 3 4 3H20C21.1046 3 22 3.89543 22 5V7C22 7.74708 21.5904 8.39848 20.9835 8.74188C20.9944 8.82638 21 8.91253 21 9V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V9C3 8.91253 3.00561 8.82638 3.0165 8.74188C2.40961 8.39848 2 7.74707 2 7V5ZM20 7V5H4V7H20ZM5 9V19H19V9H5ZM8 12C8 11.4477 8.44772 11 9 11H15C15.5523 11 16 11.4477 16 12C16 12.5523 15.5523 13 15 13H9C8.44772 13 8 12.5523 8 12Z" /></svg>`
      break;
    case "arrow-down":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"><path d="M12 4C12.5523 4 13 4.44772 13 5V16.5858L17.2929 12.2929C17.6834 11.9024 18.3166 11.9024 18.7071 12.2929C19.0976 12.6834 19.0976 13.3166 18.7071 13.7071L12.7071 19.7071C12.3166 20.0976 11.6834 20.0976 11.2929 19.7071L5.29289 13.7071C4.90237 13.3166 4.90237 12.6834 5.29289 12.2929C5.68342 11.9024 6.31658 11.9024 6.70711 12.2929L11 16.5858V5C11 4.44772 11.4477 4 12 4Z" /></svg>`
      break;
    case "arrow-left-down":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "arrow-left-up":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "arrow-left":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "arrow-right-down":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "arrow-right-up":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "arrow-right":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "arrow-up":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "attachment":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "backspace":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "ban":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "bar-chart-alt":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "bar-chart":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "board":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "bold":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "book":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "bookmark":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "calendar":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "call":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "camera":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "caret-down":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "caret-left-right":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "caret-left":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "caret-right":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "caret-up-down":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "caret-up":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "check":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "chevron-double-down":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "chevron-double-left":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "chevron-double-right":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "chevron-double-up":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "chevron-down":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "chevron-left":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "chevron-right":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "chevron-up":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "circle-add-filled":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "circle-add":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "circle-arrow-down-filled":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "circle-arrow-down":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "circle-arrow-left-filled":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "circle-arrow-left":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "circle-arrow-right-filled":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "circle-arrow-right":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "circle-arrow-up-filled":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "circle-arrow-up":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "circle-check-filled":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "circle-check":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "circle-error-filled":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "circle-error":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "circle-help-filled":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "circle-help":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "circle-information-filled":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "circle-information":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "circle-remove-filled":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "circle-remove":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "circle-warning-filled":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "circle-warning":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "circle":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "clipboard-check":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "clipboard-empty":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "clipboard-error":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "clipboard":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "clock":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "close":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "cloud-download":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "cloud-upload":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "cloud":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "computer":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "copy":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "credit-card":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "delete-alt":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "delete":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "document-add":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "document-check":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "document-download":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "document-empty":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "document-remove":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "document":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "download":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "drag":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "edit-alt":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "edit":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "email":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "enter":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "expand":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "export":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "external-link":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "eye-off":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "eye":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "favorite":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "filter-1":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "filter":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "folder-add":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "folder-check":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "folder-download":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "folder-remove":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "folder":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "grid":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "heart":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "home":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "image":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "inbox":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "italic":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "laptop":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "link-alt":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "link":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "list-ordered":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "list":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "location":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "lock":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "log-out":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "map":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "megaphone":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "menu":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "message-alt":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "message":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "mobile":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "moon":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "next":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "notification-off":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "notification":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "options-horizontal":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "options-vertical":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "pause":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "percentage":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "pin":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "play":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "previous":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "refresh":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "remove":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "reorder-alt":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "repeat":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "search":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "select":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "send":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "settings":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "share":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "shopping-cart-add":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "shopping-cart":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "shuffle":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "sort":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "speakers":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "stop":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "sun":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "sunrise":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "switch":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "table":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "tablet":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "tag":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "undo":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "unlock":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "user-add":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "user-check":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "user-remove":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "user":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "users":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "volume-off":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "volume-up":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "warning-filled":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "warning":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "webcam":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "zoom-in":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    case "zoom-out":
      html = `<svg width=${size} height=${size} fill="none" viewBox="0 0 24 24"></svg>`
      break;
    default:
  console.log("undefined icon");
}
</script>

{@html html}
