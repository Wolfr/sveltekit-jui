
## Jungle UI todo

* [ ] Icon needs a type: icon font or SVG
* [ ] Something wrong with disabled radio buttons that are checked
* [ ] correct aria roles listbox item
* [ ] implement narrow icons for listbox
* [ ] Don't make listbox depend on icon font, make it its own separate code (carets)
* [ ] Need aria expanded attribute on the accordion
* [ ] Need to do something when there are too many alerts

* [x] Add my own placeholder images

* [ ] Listbox: implement aria-activedescendant
* [ ] Dropdown menus should have more satisfactory animations

* [ ] Styleguide nav: Implement pretty category name

* [ ] http://localhost:3000/styleguide/components/menu-selection document option group (native)
* [ ] Provide non-native option group logic

* [ ] Implement direct SVG for certain icons: e.g. carets

### New components

* [ ] Document standard card
* [ ] Document media card
* [ ] Slider
* [ ] Progress bar

### Calendar app demo

* [ ] Start making it!

### General

* [ ] Implement a tooltip (using Popper, or tippy?)
* [ ] Custom select: be able to start typing, then based on what you type make a selection (implement using tick()?)
* [ ] Fix horizontal scroll bug on modals page

#### Modals

* [ ] Style headerless modal better

#### Pills

* [ ] Implement closable pills - selectable pills
* [ ] Deduplicate badge
* [ ] Support icons on pills, on left and right side

* [ ] Implement multiple select component (using closable pills)
* [ ] Document navbar

### Drawing app demo

* [ ] Icon toolbar
    * [ ] Add segments to the drawing app controls
    * [ ] Add a way to have a dropdown on this UI component

* [ ] Svelte kit: experiment with server routes equivalent
* [ ] Work on unique identifiers e.g. in radio groups, partly done but needs to be a generated UUID

* [ ] Document input group (there is a CSS file for this but no docs, this is about append/prepend)
* [ ] Document input type file (there is a CSS file for this but no docs)

* [ ] Work on this progress bar at the top? The spinning circle in the middle is too much of a flash

* [ ] Work on validation: grab form help text, form help text error etc from other projects and correctly pass it into the way forms are built
    * Email validation with regex https://html5-tutorial.net/form-validation/validating-email/

### Examples

* [ ] Test with screenreader
* [ ] Add template for new SCSS component

* [ ] Examples: create a contact form
* [ ] Examples: create a pricing page
* [ ] Examples: create a blog post
* [ ] Examples: create a blog comments list
* [ ] Examples: create a simple pagination for blog
* [ ] Examples: create an icon toolbar, with a segmented divider

* [ ] Examples: create a mobile tabbed view (Arkiplan mobile vue)
* [ ] Examples: create a mobile list view (Arkiplan mobile vue)

* [ ] Component: Input with icon left right
* [ ] Component: Datepicker

* [ ] Todo page: disable the button when the input is empty
* [ ] Todo page: strike-through the todo when checked
* [ ] Todo list: add a "created by" column where the cells have avatars
* [ ] Todo list: actually delete the item from the list when delete is called

* [ ] Menu with icon component
* [ ] Nav menu (top): support icons

* [ ] Stats page: try to integrate layercake.graphics (again)

* [ ] Add a favicon
    * [ ] Add an overal “brand” (leaf icon @rinxols?) or draw one myself

* [ ] Proper CSS for link button, differentiated from actual button
* [ ] Better docs for link button

* [ ] Add blank slate component
* [ ] Add circular badge component

* [ ] Screen: Implement forgot password success page, with success alert

* [ ] Sortable table header
* [ ] Checkbox table

* [ ] Implement alert stack base logic (showing alert stack in all its positions)

* [ ] Add modal example to style guide

* [ ] Document toolbar centered examples

* [ ] Improve pagination component API, render amount of pages based on a number prop (see Vue.js work in 2020)
* [ ] Create checkbox group - Document checkbox group (like radio group)

* [ ] Improve page listing in sidebar

* [ ] Add option for 2nd nav level in side menu

* [ ] Document utility classes
* [ ] Document containers (objects page)

* [ ] Person picker
* [ ] Color picker

* [ ] Implement footer positioned navbars
* [ ] Style tab

* [ ] Progress bar
    <progress value="59" max="100" />

### External reference needed (component level)

* [ ] Tabs component
* [ ] Segmented control (with radio)

### External reference needed

* [ ] Implement copy paste button (using clipboard js?)
* [ ] Work on having a dropdown (with popper)
* [ ] Tooltip
    * What is an elegant way to make something accessible across entire app?
    
* [ ] Implement link buttons

### Uncategorized

* [ ] Implement proper tabs (pill style) component with active state
* [ ] Implement more pleasing link styles (text decoration on hover utility)

* [x] Make sign out button work

* [ ] Test unordered list
* [ ] Implement alert stack animations
* [ ] Test alert stack
* [ ] Implement charts with layercake.graphics
* [ ] Go through overall CSS - make it use color variables
* [ ] Implement dark mode
* [ ] Integrate .svx/mdsvex for markdown content
* [ ] Test SSR
* [ ] Update Inter to latest version and only load woff2
* [ ] Implement autoprefixer to CSS build logic

## My feedback on Svelte kit

* Needs a title system, that can derive titles from pages to page
* Aria announcer is undocumented, needs documentation
* Needs a way to add meta tags properly per page (like in Routify metatags package)
* How do I access the object with all routes? (So I can maybe build a page tree automatically?)