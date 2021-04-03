<script>
  import Button from '$lib/Button.svelte';
</script>
  
<div class="c-frame">
  <div class="o-container-vertical o-container-vertical--padding-small">
      <div class="o-container o-container--small">
        <div class="u-spacer-bottom">
          <div class="c-panel c-panel--large">
            <div class="c-panel__body">
              <h2 class="c-h3">Sign in</h2>
              <form action="/projects/overview.html">
                <div class="u-spacer-bottom-l">
                  <div class="o-form-group-layout o-form-group-layout--standard">
                    <div class="o-form-group">
                      <label class="o-form-group__label" for="emailId">E-mail address</label>
                      <div class="o-form-group__controls">
                        <input class="c-input" id="emailId" type="text" name="email">
                      </div>
                    </div>
                    <div class="o-form-group">
                      <label class="o-form-group__label" for="passwordId">Password</label>
                      <div class="o-form-group__controls">
                        <input class="c-input" id="passwordId" type="password">
                      </div>
                    </div>
                    <div class="o-form-group">
                      <Button href="/modules/" variant="primary" block>Aanmelden</Button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <a class="u-text-muted u-text-center u-d-block" href="">Forgot password?</a>
      </div>
    </div>
  </div>