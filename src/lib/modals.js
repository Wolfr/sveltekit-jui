import { writable } from 'svelte/store';

export const modals = writable([
  {
    "modalShow": false,
  }
]);