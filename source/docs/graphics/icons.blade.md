---
title: Icons
description: Icons library
extends: _layouts.documentation
section: content
---

# Panel icons {#icons}

Spartan icons act as visual aids to help creators complete tasks. They should be used purposefully.

### Actions icons

A list of icons to indication actions.


<div class="rounded-md border-2 border-gray-50 p-8 h-auto w-full mb-8">
    <img src="/assets/images/action-icons.svg" alt="Action icons">
</div>


<div class="flex flex-col sm:flex-row md:flex-row lg:flex-row justify-between content-start mb-5">
    <div class="rounded-md border-2 border-gray-50 p-5 h-full w-full sm:w-1/2 md:w-1/2">
        <div class="flex justify-around">
            <img src="/assets/images/lock.svg" alt="lock icon">
            <img src="/assets/images/lock.svg" alt="lock icon" class="opacity-50">
        </div>
    </div>
    <div class="ml-0 sm:ml-6 w-full sm:w-1/2 lg:w-1/2">
        <p class="font-bold text-lg m-0">Icon hover state</p>
        <p class="text-sm text-justify m-0">50% opacity fade</p>
    </div>
</div>


<div class="flex flex-col sm:flex-row md:flex-row lg:flex-row justify-between content-start mb-5">
    <div class="rounded-md border-2 border-gray-50 p-5 h-full w-full sm:w-1/2 md:w-1/2">
        <div class="flex justify-around">
            <img src="/assets/images/lock.svg" alt="lock icon">
            <img src="/assets/images/lock-open.svg" alt="lock open">
        </div>
    </div>
    <div class="ml-0 sm:ml-6 w-full sm:w-1/2 lg:w-1/2">
        <p class="font-bold text-lg m-0">Icon selected state</p>
        <p class="text-sm text-justify m-0">Background gray 800</p>
    </div>
</div>


## Loading indicators

<div class="rounded-md border-2 border-gray-50 p-8 h-auto w-full mb-8">
    <img src="/assets/images/spin-load.svg" alt="Loading indicator">
</div>

## Table

<div class="rounded-md border-2 border-gray-50 p-8 h-auto w-full mb-8">
    <div class="flex justify-around">
        <img src="/assets/images/arrow-up.svg" alt="arrow up">
        <img src="/assets/images/arrow-down.svg" alt="arrow down">
    </div>
</div>

## Billing

<div class="rounded-md border-2 border-gray-50 p-8 h-auto w-full mb-8">
    <img src="/assets/images/billing-cards.svg" alt="Billing cards">
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