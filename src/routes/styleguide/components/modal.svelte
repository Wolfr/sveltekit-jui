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

<StyleguideIntro title={pageTitle} />

<StyleguideCard title="Modal (headerless)">

  <Modal headerless size="small">
    <div class="u-spacer-l u-spacer-bottom-auto">
      <h3 class="c-h3">Modal Window</h3>
      <p class="u-p-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    </div>
  </Modal>  

</StyleguideCard>


<StyleguideCard title="Modal">

  <Modal title="Modal window">
    <p class="u-p-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
  </Modal>  

</StyleguideCard>


<StyleguideCard title="Modal (large)">

  <Modal title="Modal window" size="large">
    <p class="u-p-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
  </Modal>  

</StyleguideCard>


<StyleguidePropsTable propsTable={propsTable} />
