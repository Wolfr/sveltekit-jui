<script>
    import Icon from '$lib/Icon.svelte';
    import Avatar from '$lib/Avatar.svelte';

    import Button from '$lib/Button.svelte';

    import Toggle from '$lib/Toggle.svelte';

    export let href = null;
    export let icon = "";
    export let initials = "";
    export let name = "";
    export let time = "1m.";
    export let avatarSrc = null;

    export let action = "chevron-right";

    // Default - avatar - comment
    export let type = "default";

    export let checked = false;

    const toggleChecked = () => {
        checked = !checked;
    };
</script>

<li class="c-list__item c-list__item--{type}">
    {#if type === "icon"}
        <a {href}>
          <div class="c-list__content">
              <Icon icon={icon} size="20"></Icon>
              <span class="c-list__text">
                  <p class="c-list__first-line"><slot name="first-line">No text</slot></p>
              </span>
          </div>
      </a>
    {:else if type === "checkbox"}
        <div class="c-list-item__inner">
            <div class="c-list__content" on:click={toggleChecked}>
                <span class="c-list__text">
                    <p class="c-list__first-line" name="first-line"><slot>No text</slot></p>
                </span>
            </div>
            <Toggle bind:checked={checked} />
        </div>
    {:else}
        <a {href}>
            <div class="c-list__content">
                {#if type === "avatar"}
                    <Avatar initials={initials} imgSrc={avatarSrc}></Avatar>
                {/if}
                <span class="c-list__text">
                    <p class="c-list__first-line"><slot name="first-line">No text</slot></p>
                    <p class="c-list__second-line"><slot name="second-line"></slot></p>
                </span>
            </div>
            <Icon icon={action} size="20"></Icon>
        </a>
    {/if}

</li>
