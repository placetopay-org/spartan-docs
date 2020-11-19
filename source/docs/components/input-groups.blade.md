---
title: Forms
description: Forms Inputs
extends: _layouts.documentation
section: content
---

# Input Groups {#forms}

## Input with label {#input-with-label}

@component('_partials.iframe', ["height" => "150px;"])
<div class="px-4 py-8 bg-white">
    <div class="max-w-3xl mx-auto space-y-4 flex flex-col items-center justify-start sm:space-y-0 sm:flex-row sm:items-end sm:justify-around">
        <div>
            <label for="name" class="form-label">Name</label>
            <input id="name" name="name" class="form-input mt-1" type="text" placeholder="Jhon Doe">
        </div>
    </div>
</div>
@endcomponent

```html
<div>
    <label for="name" class="form-label">Name</label>
    <input id="name" name="name" class="form-input mt-1" type="text" placeholder="Jhon Doe">
</div>
```

## Input with hidden label {#input-with-label}

@component('_partials.iframe', ["height" => "150px;"])
<div class="px-4 py-8 bg-white">
    <div class="max-w-3xl mx-auto space-y-4 flex flex-col items-center justify-start sm:space-y-0 sm:flex-row sm:items-end sm:justify-around">
        <div>
            <label for="name" class="sr-only">Name</label>
            <input id="name" name="name" class="form-input" type="text" placeholder="Jhon Doe">
        </div>
    </div>
</div>
@endcomponent

```html
<div>
    <label for="name" class="sr-only">Name</label>
    <input id="name" name="name" class="form-input" type="text" placeholder="Jhon Doe">
</div>
```

## Input with label and help text {#input-with-label}

@component('_partials.iframe', ["height" => "170px;"])
<div class="px-4 py-8 bg-white">
    <div class="max-w-3xl mx-auto space-y-4 flex flex-col items-center justify-start sm:space-y-0 sm:flex-row sm:items-end sm:justify-around">
        <div>
            <label for="name" class="form-label">Name</label>
            
            <input id="name" name="name" class="form-input mt-1" type="text" placeholder="Jhon Doe">
            
            <p class="form-input-help">Your name will be public.</p>
        </div>
    </div>
</div>
@endcomponent

```html
<div>
    <label for="name" class="form-label">Name</label>
    <input id="name" name="name" class="form-input mt-1" type="text" placeholder="Jhon Doe">
    <p class="form-input-help">Your name will be public.</p>
</div>
```

## Input with label and error {#input-with-label}

@component('_partials.iframe', ["height" => "170px;"])
<div class="px-4 py-8 bg-white">
    <div class="max-w-3xl mx-auto space-y-4 flex flex-col items-center justify-start sm:space-y-0 sm:flex-row sm:items-end sm:justify-around">
        <div>
            <label for="name" class="form-label">Name</label>
            
            <input id="name" name="name" class="form-input mt-1 has-error" type="text" placeholder="Jhon Doe">
            
            <p class="form-input-error">This field is required.</p>
        </div>
    </div>
</div>
@endcomponent

```html
<div>
    <label for="name" class="form-label">Name</label>
    <input id="name" name="name" class="form-input mt-1 has-error" type="text" placeholder="Jhon Doe">
    <p class="form-input-error">This field is required.</p>
</div>
```
