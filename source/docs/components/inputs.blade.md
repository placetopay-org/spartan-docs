---
title: Inputs
description: Inputs
extends: _layouts.documentation
section: content
---

# Input {#inputs}

## Text {#text}

@component('_partials.iframe', ["height" => "150px;"])
<div class="px-4 py-8 bg-white">
    <div class="max-w-3xl mx-auto space-y-4 flex flex-col items-center justify-start sm:space-y-0 sm:flex-row sm:items-end sm:justify-around">
        <div>
            <label for="name" class="form-label">Text Input</label>
            <input id="name" name="name" class="form-input mt-1" type="text" placeholder="Jhon Doe">
        </div>
    </div>
</div>
@endcomponent

```html
<input id="name" name="name" class="form-input mt-1" type="text" placeholder="Jhon Doe">
```

## Textarea {#textarea}

@component('_partials.iframe', ["height" => "180px;"])
<div class="px-4 py-8 bg-white">
    <div class="max-w-3xl mx-auto space-y-4 flex flex-col items-center justify-start sm:space-y-0 sm:flex-row sm:items-end sm:justify-around">
        <div>
            <label for="description" class="form-label">Textarea Input</label>
            <textarea id="description" name="description" class="form-textarea mt-1" rows="3" placeholder="Enter some long form content."></textarea>
        </div>
    </div>
</div>
@endcomponent

```html
    <textarea id="description" name="description" class="form-textarea mt-1" rows="3" placeholder="Enter some long form content."></textarea>
```

## Password {#password}

@component('_partials.iframe', ["height" => "180px;"])
<div class="px-4 py-8 bg-white">
    <div class="max-w-3xl mx-auto space-y-4 flex flex-col items-center justify-start sm:space-y-0 sm:flex-row sm:items-end sm:justify-around">
        <div>
            <label for="password" class="form-label">Password</label>
            <input id="password" name="password" class="form-input mt-1" type="password" >
        </div>
    </div>
</div>
@endcomponent

```html
<label for="password" class="form-label">Password</label>
<input id="password" name="password" class="form-input mt-1" type="password" >
```

<!-- 
## Password with error {#password-error}

@component('_partials.iframe', ["height" => "180px;"])
<div class="px-4 py-8 bg-white">
    <div class="max-w-3xl mx-auto space-y-4 flex flex-col items-center justify-start sm:space-y-0 sm:flex-row sm:items-end sm:justify-around">
        <div>
            <label for="password" class="form-label">Password</label>
            <input id="password" name="password" class="form-input mt-1 has-error" type="password" >
            <p class="form-input-error">This field is required.</p>
        </div>
    </div>
</div>
@endcomponent

```html
    <label for="password" class="form-label">Password</label>
    <input id="password" name="password" class="form-input mt-1" type="password" >
```
-->

## Radio button {#radio-button}

@component('_partials.iframe', ["height" => "150px;"])
<div class="px-4 py-8 bg-white">
    <div class="max-w-3xl mx-auto space-y-4 flex flex-col items-center justify-start sm:space-y-0 sm:flex-row sm:items-end sm:justify-around">
        <div>
            <span>Notification Channel</span>
            <div class="mt-2">
                <label for="notifications" class="inline-flex items-center">
                    <input type="radio" class="form-radio" name="notifications" value="mail" checked>
                    <span class="ml-2">Mail</span>
                </label>
            </div>
            <div>
                <label for="notifications" class="inline-flex items-center">
                    <input type="radio" class="form-radio" name="notifications" value="sms">
                    <span class="ml-2">SMS</span>
                </label>
            </div>
        </div>
    </div>
</div>

@endcomponent

```html
<label for="notifications" class="inline-flex items-center">
    <input type="radio" class="form-radio" name="notifications" value="sms">
    <span class="ml-2">SMS</span>
</label>
```

## Select {#select}

@component('_partials.iframe', ["height" => "170px;"])
<div class="px-4 py-8 bg-white">
    <div class="max-w-3xl mx-auto space-y-4 flex flex-col items-center justify-start sm:space-y-0 sm:flex-row sm:items-end sm:justify-around">
        <div>
            <select name="country" id="country" class="form-select">
                <option value="">Select an option</option>
                <option value="CO">CO - Colombia</option>
                <option value="EC">EC - Ecuador</option>
                <option value="US">US - United States</option>
            </select>
        </div>
    </div>
</div>
@endcomponent

```html
<select name="country" id="country" class="form-select">
    <option value="">Select an option</option>
    <option value="CO">CO - Colombia</option>
    <option value="EC">EC - Ecuador</option>
    <option value="US">US - United States</option>
</select>
```

## Select Multiple {#select-multiple}

@component('_partials.iframe', ["height" => "170px;"])
<div class="px-4 py-8 bg-white">
    <div class="max-w-3xl mx-auto space-y-4 flex flex-col items-center justify-start sm:space-y-0 sm:flex-row sm:items-end sm:justify-around">
        <div>
            <select name="country" id="country" class="form-multiselect" multiple>
                <option value="CO">CO - Colombia</option>
                <option value="EC">EC - Ecuador</option>
                <option value="US">US - United States</option>
                <option value="CR">CR - Costa Rica</option>
                <option value="PE">PE - Peru</option>
            </select>
        </div>
    </div>
</div>
@endcomponent

```html
<select name="country" id="country" class="form-multiselect">
    <option value="">Select an option</option>
    <option value="CO">CO - Colombia</option>
    <option value="EC">EC - Ecuador</option>
    <option value="US">US - United States</option>
</select>
```

## Checkbox {#checkbox}

@component('_partials.iframe', ["height" => "170px;"])
<div class="px-4 py-8 bg-white">
    <div class="max-w-3xl mx-auto space-y-4 flex flex-col items-center justify-start sm:space-y-0 sm:flex-row sm:items-end sm:justify-around">
        <div>
            <span>Notification Channel</span>
            <div class="mt-2">
                <label class="inline-flex items-center">
                    <input id="enable" name="enable" type="checkbox" class="form-checkbox">
                    <span class="ml-2">Mail</span>
                 </label>
            </div>
            <div>
                <label class="inline-flex items-center">
                    <input id="enable" name="enable" type="checkbox" class="form-checkbox">
                    <span class="ml-2">SMS</span>
                </label>
            </div>
        </div>
    </div>
</div>
@endcomponent

```html
<label class="inline-flex items-center">
    <input id="enable" name="enable" type="checkbox" class="form-checkbox">
    <span class="ml-2">SMS</span>
</label>
```
