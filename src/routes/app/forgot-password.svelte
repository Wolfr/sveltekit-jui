<script>
  import Button from '$lib/Button.svelte';
  import LinkButton from '$lib/LinkButton.svelte';

  import Input from '$lib/Input.svelte';
  import FormGroup from '$lib/FormGroup.svelte';
  import FormGroupLayout from '$lib/FormGroupLayout.svelte';
  
  function submitForgotPassword() {
    alert('To be implemented;')
  }
</script>
  
<div class="c-frame">
  <div class="o-container-vertical o-container-vertical--padding-small">
      <div class="o-container o-container--small">
        <div class="u-spacer-bottom">
          <div class="c-panel c-panel--large">
            <div class="c-panel__body">

              <LinkButton href="../app" icon="chevron-left">Back</LinkButton>

              <h2 class="c-h3">Forgot password</h2>
              
              <div class="o-container-vertical">
                  <form on:submit|preventDefault={submitForgotPassword}>
                    <FormGroupLayout layoutType="inline">
                      <FormGroup layoutType="inline">
                        <Input type="email" placeholder="Enter your e-mail address..." />
                      </FormGroup>
                      <FormGroup layoutType="inline">
                        <Button>Send</Button>
                      </FormGroup>
                    </FormGroupLayout>
                  </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
