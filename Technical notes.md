## Technical notes

For those who are curious, here is the technical reasoning behind the way this framework is set up.

### Compilers

* We use Svelte and Sass, both of which are compilers. This means we can pre-calculate as much as possible and we avoid calculating things on the client

### SvelteKit

* Using the power of Sveltekit, we can have an SPA, SSR or static site
* Next to this we have the power of adapaters to easily deploy to Netlify, Vercel etc.

### Component composition strategy

* Svelte is a compiler which can compile ahead of time, so there is no reason to minimize the amount of wrapper components
* Having a set of wrapper components that can work in conjunction, allows us to specify a component API on top of them
* We deliberately sometimes have more markup than needed for composition flexibility reasons, the ButtonInnerLayout and Toolbar components are good examples
* We deliberately do not specify utility classes for flexbox, as I find building an API that mimics flexbox's API just leads to a plethora of classes that have a 1:1 relationship; not helping with anything.

### CSS strategy

* We use ITCSS to sort our CSS components

* We avoid using Svelte's style tag, so we can make use of consistent SCSS variables and have a way for variables to influence each other with a passthrough logic, something which CSS custom properties is not entirely ready for

* When customizing this framework, I recommend throwing out all SCSS partials for components you do not use to minimize the final stylesheet

* We use as much semantic HTML as possible

* We use as much progressive enhancement that doesn't cause browser bugs
    * This means that some level of PE is avoided where it is unclear what the global support is for said logic
    * The biggest reason for PE is screen reader usage

* We use BEM for components to make it clear which components belong together e.g.

    <ul class="c-pill-list">
        <li class="c-pill-list__item">
            <span class="c-pill c-pill--default">
        </li>
        <li class="c-pill-list__item">
            <span class="c-pill c-pill--default">
        </li>
    </ul>


