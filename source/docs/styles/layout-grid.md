---
title: Buttons
description: Buttons library
extends: _layouts.documentation
section: content
---

# Buttons {#buttons}

This content for components buttons

@component('_partials.iframe', ["height" => "114px;"])
<div class="px-4 py-8 bg-white">
    <div class="max-w-3xl mx-auto space-y-4 flex flex-col items-center justify-start sm:space-y-0 sm:flex-row sm:items-end sm:justify-around">
        <button class="btn btn-dark" type="button">
            Button
        </button>
    </div>
</div>
@endcomponent

```html
<button class="btn btn-dark" type="button">
    Button asdsad
</button>
```

# Text input {#text-input}

This content for components input

@component('_partials.iframe', ["height" => "114px;"])
<div class="px-4 py-8 bg-white">
    <div class="max-w-3xl mx-auto space-y-4 flex flex-col items-center justify-start sm:space-y-0 sm:flex-row sm:items-end sm:justify-around">
        <input type="email" class="form-input mt-1 block w-full" placeholder="john@example.com">
    </div>
</div>
@endcomponent

```html
<input type="email" class="form-input mt-1 block w-full" placeholder="john@example.com">
```

# Text Area {#text-area}

This content for components textarea

@component('_partials.iframe', ["height" => "114px;"])
<div class="px-4 py-8 bg-white">
    <div class="max-w-3xl mx-auto space-y-4 flex flex-col items-center justify-start sm:space-y-0 sm:flex-row sm:items-end sm:justify-around">
        <label class="block">F
            <span class="text-gray-700">Textarea</span>
            <textarea class="form-textarea mt-1 block w-full" rows="3" placeholder="Enter some long form content."></textarea>
        </label>
    </div>
</div>
@endcomponent

```html
<label class="block">
  <span class="text-gray-700">Textarea</span>
  <textarea class="form-textarea mt-1 block w-full" rows="3" placeholder="Enter some long form content."></textarea>
</label>
```