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
            
            <p class="form-input-help text-sm">Your name will be public.</p>
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
            
            <p class="form-input-error text-sm">This field is required.</p>
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

## Input groups {#input-groups}

@component('_partials.iframe', ["height" => "130px;"])
<div class="px-4 py-8 bg-white">
    <div class="max-w-3xl mx-auto space-y-4 flex flex-col items-center justify-start sm:space-y-0 sm:flex-row sm:items-end sm:justify-around">
        <div>
  <label for="price" class="block">Price</label>
  <div class="mt-1 relative rounded-md shadow-sm">
    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
      <span>
        $
      </span>
    </div>
    <input type="text" id="price" class="form-label block w-full pl-7 pr-12 form-input" placeholder="0.00">
    <div class="absolute inset-y-0 right-0 flex items-center">
      <label for="currency" class="sr-only">Currency</label>
      <select id="Currency" class="h-full py-0 pl-2 pr-7 border-transparent bg-transparent sm:text-sm form-select">
        <option>USD</option>
        <option>CAD</option>
        <option>EUR</option>
      </select>
    </div>
  </div>
</div>
    </div>
</div>
@endcomponent

