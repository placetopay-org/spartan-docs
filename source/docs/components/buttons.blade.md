---
title: Buttons
description: Buttons library
extends: _layouts.documentation
section: content
---

# Buttons {#buttons}

Are clickable items used to allows the user take actions or make choices. Each variation has a purpose and an intention (hover, focus, active, selected, disabled) and suggest the ability to interact with an asset with a single tap. Are used in modals, forms and many other components.

## Dark {#dark}

@component('_partials.iframe', ["height" => "114px;"])
<div class="px-4 py-8 bg-white">
    <div class="max-w-3xl mx-auto space-y-4 flex flex-col items-center justify-start sm:space-y-0 sm:flex-row sm:items-end sm:justify-around">
        <button class="btn btn-dark">
            Button
        </button>
    </div>
</div>
@endcomponent

```html
<button class="btn btn-dark">
    Button
</button>
```

## White {#white}

@component('_partials.iframe', ["height" => "114px;"])
<div class="px-4 py-8 bg-white">
    <div class="max-w-3xl mx-auto space-y-4 flex flex-col items-center justify-start sm:space-y-0 sm:flex-row sm:items-end sm:justify-around">
        <button class="btn btn-white">
            Button
        </button>
    </div>
</div>
@endcomponent

```html
<button class="btn btn-white">
    Button
</button>
```

## Disabled Buttons {#disabled-buttons}

@component('_partials.iframe', ["height" => "114px;"])
<div class="px-4 py-8 bg-white">
    <div class="max-w-3xl mx-auto space-y-4 flex flex-col items-center justify-start sm:space-y-0 sm:flex-row sm:items-end sm:justify-around">
        <button class="btn btn-dark btn-disabled">
            Button
        </button>
        
        <button class="btn btn-white btn-disabled">
            Button
        </button>
    </div>
</div>
@endcomponent

```html
<button class="btn btn-dark btn-disabled">
    Button
</button>

<button class="btn btn-white btn-disabled">
    Button
</button>
```

## With Icons {#with-icons}

@component('_partials.iframe', ["height" => "114px;"])
<div class="px-4 py-8 bg-white">
    <div class="max-w-3xl mx-auto space-y-4 flex flex-col items-center justify-start sm:space-y-0 sm:flex-row sm:items-end sm:justify-around">
        <button class="btn btn-white">
            <svg class="w-4 h-4 mr-2 inline fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
            Default
        </button>
    </div>
</div>
@endcomponent

```html
<button class="btn btn-white">
    <svg class="w-4 h-4 mr-2 inline fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
    Default
</button>


<button class="btn btn-disable">
    <i class="far fa-spinner fa-spin"></i>
    Button
</button>
```

## Block button {#block-button}

>These buttons are used for the identification process such as login, registration, password change etc. They cover the entire width of the container

@component('_partials.iframe', ["height" => "114px;"])
<div class="px-4 py-8 bg-white">
    <div class="max-w-xl mx-auto space-y-4 flex flex-col items-center justify-start sm:space-y-0 sm:flex-row sm:items-end sm:justify-around">
        <button class="btn btn-dark w-full">
            Button
        </button>
    </div>
</div>
@endcomponent

```html
<button class="btn btn-dark w-full">
    Button
</button>
```
