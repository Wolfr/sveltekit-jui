<script>
  import StyleguideIntro from '$lib/StyleguideIntro.svelte';
  import StyleguideCard from '$lib/StyleguideCard.svelte';
  import Modal from '$lib/Modal.svelte';

  let pageTitle = 'Modal';

  import StyleguidePropsTable from '$lib/StyleguidePropsTable.svelte';

  let propsTable = [
    {
      name: 'headerless',
      description: 'Render a modal header or not; use headerless modals for a more minimal "alert" style look.',
      required: false,
    },
    {
      name: 'size',
      description: 'Determines size of the modal.',
      required: false,
      options: [
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
    }
  ]
</script>

<svelte:head>
  <title>{pageTitle} - Components - JUI</title>
</svelte:head>

<StyleguideIntro title={pageTitle} />

<StyleguideCard title="Modal (headerless)" style="height: 40rem; padding: 0;">

    <div class="c-modal-context c-modal-context--visible" style="position: static;">
      <div class="c-modal-backdrop c-modal-backdrop--visible"></div>
      <Modal headerless size="small">
        <h3 class="c-h3">Modal Window</h3>
        <p class="u-p-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </Modal>
    </div>

</StyleguideCard>


<StyleguideCard title="Modal" style="height: 40rem; padding: 0;">
  
  <div class="c-modal-context c-modal-context--visible" style="position: static;">
    <div class="c-modal-backdrop c-modal-backdrop--visible"></div>
    <Modal title="Modal window">
      <p class="u-p-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    </Modal>  
  </div>

</StyleguideCard>


<StyleguideCard title="Modal (large)" style="height: 40rem; padding: 0;">

  <div class="c-modal-context c-modal-context--visible" style="position: static;">
    <div class="c-modal-backdrop c-modal-backdrop--visible"></div>
    <Modal title="Modal window" size="large">
      <p class="u-p-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    </Modal>
  </div>

</StyleguideCard>

<StyleguidePropsTable propsTable={propsTable} />
