<script>
    export let align;
</script>


{#if align === 'center'}
    <div class="c-toolbar__center">
        <div class="c-toolbar__center-inner">
            <slot></slot>
        </div>
    </div>
{:else}
    <div
        class:c-toolbar__left={align==='left'}
        class:c-toolbar__right={align==='right'}
        class:c-toolbar__justified={align==='justify'}
    >
        <slot></slot>
    </div>
{/if}