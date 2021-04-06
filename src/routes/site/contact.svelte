<script>
  import FormGroupLayout from '$lib/FormGroupLayout.svelte';
  import FormGroup from '$lib/FormGroup.svelte';

  import Input from '$lib/Input.svelte';
  import Button from '$lib/Button.svelte';

</script>

<div class="o-container o-container--medium">

  <div class="o-container-vertical">
    
    <h1 class="c-h3">Contact me</h1>
    
    <div class="c-content">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
    
    <FormGroupLayout>
      <FormGroup label="Name" id="nameId" type="text" />
      <FormGroup label="E-mail address" id="emailId" type="email" />
      
      <div class="o-form-group">
        <label class="o-form-group__label" for="messageId">Message</label>
        <div class="o-form-group__controls">
          <textarea class="c-input c-input--h-large" id="messageId" />
        </div>
      </div>

      <Button>Submit message</Button>

    </FormGroupLayout>
    
  </div>

</div>