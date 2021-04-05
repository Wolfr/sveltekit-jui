<script>

    import ButtonInnerLayout from './ButtonInnerLayout.svelte';

    // Extra class
    export let cssClass = null;

    export let href = false;

    // Disabled
    export let disabled = false;

    // Styling
    export let style = null;
    export let icon = null;
    export let layout = null;
    export let variant = null;

    let variantValue = '';

    if (variant) {
      variantValue = 'c-link-button--'+variant;
    } else {
       variantValue = 'c-link-button--secondary';
    }

</script>

<a
  href="{href}"
  {style}
  class="c-link-button { cssClass } { variantValue }"
  class:c-link-button--icon={layout=="icon"}
  class:c-link-button--disabled={disabled}
>
  <ButtonInnerLayout {icon} {layout}><slot></slot></ButtonInnerLayout>
</a>
