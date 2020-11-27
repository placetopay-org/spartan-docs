---
title: Illustrations
description: Illustrations library
extends: _layouts.documentation
section: content
---

# Panel illustrations {#illustrations}

Panel illustrations acts as visual supports to complement the action described.

## Illustrations

Linear and clean type illustration. It must be implemented with the color palette described.

<div class="flex flex-col sm:flex-row md:flex-row lg:flex-row justify-between content-start mb-5">
    <div class="rounded-md border-2 border-gray-50 p-5 h-full w-full sm:w-1/2 md:w-1/2">
        <img alt="illustration" src="/assets/images/illustration-example.svg" class="m-auto block">
    </div>
    <div class="ml-0 sm:ml-6 w-full sm:w-1/2 lg:w-1/2">
        <p class="font-bold text-lg m-0">Illustration</p>
        <p class="text-sm text-justify m-0">Linear type.</p>
    </div>
</div>


<div class="flex flex-col sm:flex-row md:flex-row lg:flex-row justify-between content-start mb-5">
    <div class="rounded-md border-2 border-gray-50 p-5 h-full w-full sm:w-1/2 md:w-1/2">
        <div class="flex flex-col sm:flex-col md:flex-col lg:flex-row">
            <img alt="illustration" src="/assets/images/illustration-example.svg" class="m-auto block">
            <div class="sm:ml-5">
                <p class="font-bold">You don't have sites saved<p>
                <p class="text-xs">Click on the "create" button, complete the basic and operation information and you're done!</p>
                <button class="btn btn-white">Create</button>
            </div>
        </div>
    </div>
    <div class="ml-0 sm:ml-6 w-full sm:w-1/2 lg:w-1/2">
        <p class="font-bold text-lg m-0">How to use</p>
        <p class="text-sm text-justify m-0">Example of an empty state</p>
    </div>
</div>

<!--
@component('_partials.iframe', ["height" => "114px;"])
<div class="px-4 py-8 bg-white">
    <div class="max-w-3xl mx-auto space-y-4 flex flex-col items-center justify-start sm:space-y-0 sm:flex-row sm:items-end sm:justify-around">
        
    </div>
</div>
@endcomponent

```html
<button class="btn btn-dark" type="button">
    Button asdsad
</button>
```
-->