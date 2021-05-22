import { writable } from 'svelte/store';

export const alerts = writable([
  {
    type: "error",
    content: "There was an error with the form.",
    visible: true
  },
  {
    type: "success",
    content: "Item saved!",
    visible: true
  },
  {
    closable: true,
    content: "This is a closable alert.",
    visible: true
  }
]);