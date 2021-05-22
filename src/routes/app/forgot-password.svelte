<script>
  import Alert from '$lib/jui-components/Alert.svelte';
  import Button from '$lib/jui-components/Button.svelte';
  import LinkButton from '$lib/jui-components/LinkButton.svelte';

  import Input from '$lib/jui-components/Input.svelte';
  import FormGroup from '$lib/jui-components/FormGroup.svelte';
  import FormGroupLayout from '$lib/jui-components/FormGroupLayout.svelte';
  
  let success = false;
  let emailFieldBlankError = false;
  let emailNotAnEmailError = false;
  let email = '';
  
  function submitForgotPassword() {
    // first, validate the email
    if (email = '') {
      emailFieldBlankError = true;
    }
    // @todo add correct validation here...!
    if (email = 'jr') {
      emailNotAnEmailError = true;
    }
    if (!emailFieldBlankError && !emailNotAnEmailError) {
      success = true;
    }
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

              <p>Forgot your password? No problem, simply enter your e-mail address to receive a reset link.</p>
              
              <div class="o-container-vertical">
                {#if success}
                  <Alert type="success"><p><strong>Check your e-mail.</strong> If you don't see anything, make sure to whitelist e-mails from domain xyz.com.</p></Alert>
                {:else}
                  <form on:submit|preventDefault={submitForgotPassword}>
                    <FormGroupLayout layoutType="inline">
                      <FormGroup layoutType="inline">
                          <Input type="email" bind:value={email} placeholder="Enter your e-mail address..." />
                      </FormGroup>
                      <FormGroup layoutType="inline">
                        <Button on:click="{submitForgotPassword}">Send</Button>
                      </FormGroup>
                    </FormGroupLayout>
                    {#if emailFieldBlankError}<p class="c-form-help-text c-form-help-text--error">Field must be filled.</p>{/if}
                    {#if emailNotAnEmailError}<p class="c-form-help-text c-form-help-text--error">This value is not a correct e-mail address.</p>{/if}
                    
                  </form>
                {/if}
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
