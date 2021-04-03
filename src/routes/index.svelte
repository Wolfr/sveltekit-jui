<script>
  import Button from '$lib/Button.svelte';
  import FormGroup from '$lib/FormGroup.svelte';

</script>
  
<div class="c-frame">
  <div class="o-container-vertical o-container-vertical--padding-small">
    <div class="o-container o-container--small">
      <div class="u-spacer-bottom">
        <div class="c-panel c-panel--large">
          <div class="c-panel__body">
            <h2 class="c-h3">Sign in</h2>
            <form>
              <div class="u-spacer-bottom-l">
                <div class="o-form-group-layout o-form-group-layout--standard">
                  <FormGroup label="E-mail address" id="emailId" type="email" />
                  <FormGroup label="Password" id="passwordId" type="password" />
                  <div class="o-form-group">
                    <Button href="/modules/todos" variant="primary" block>Sign in</Button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <a class="u-text-muted u-text-center u-d-block" href="/forgot-password">Forgot password?</a>
    </div>
  </div>
</div>
