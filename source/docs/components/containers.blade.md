---
title: Containers
description: Containers library
extends: _layouts.documentation
section: content
---

# Containers {#containers}

These containers separate the information from the background. The following options are detailed below:

## Corner radius

The corner radius must be maintained on all inputs, cards or any component with corners.

<div class="flex flex-col sm:flex-row md:flex-row lg:flex-row justify-between content-start mb-5">
    <div class="rounded-md border-2 border-gray-200 p-5 h-full w-full sm:w-1/2 md:w-1/2">
        <div class="w-2/5 h-12 bg-white block m-auto border-t-2 border-l-2 border-gray-700 rounded-md"><p class="font-bold m-0 p-2">4px</p></div>
    </div>
    <div class="ml-0 sm:ml-6 w-full sm:w-1/2 lg:w-1/2">
        <p class="font-bold text-lg m-0">Corner radius</p>
        <p class="text-sm text-justify m-0">4px all sides.</p>
    </div>
</div>

## With shadow

It is used only for elements that overlap such as modals, new windows or in the login.

<div class="flex flex-col sm:flex-row md:flex-row lg:flex-row justify-between content-start mb-5">
    <div class="rounded-md border-2 border-gray-200 p-5 h-full w-full sm:w-1/2 md:w-1/2">
        <div class="bg-white block m-auto rounded-md shadow w-3/4 h-56"></div>
    </div>
    <div class="ml-0 sm:ml-6 w-full sm:w-1/2 lg:w-1/2">
        <div class="my-2 px-2">
            <p class="font-bold p-0 m-0">Specs</p>
            <p class="font-medium p-0 m-0">Color: <span class="font-normal">White </span></p>
            <p class="font-medium p-0 m-0">Corner radius: <span class="font-normal">4px </span></p>
            <p class="font-medium p-0 m-0">Drop shadow: <span class="font-normal">X: 0 | Y: 4 | Blur: 6 | Spread:0 | 10%</span></p>
        </div>
    </div>
</div>


<div class="flex flex-col sm:flex-row md:flex-row lg:flex-row justify-between content-start mb-5">
    <div class="rounded-md border-2 border-gray-200 p-5 h-full w-full sm:w-1/2 md:w-1/2 bg-white">
        <div class="bg-gray-100 block m-auto rounded-md shadow w-3/4 h-56"></div>
    </div>
    <div class="ml-0 sm:ml-6 w-full sm:w-1/2 lg:w-1/2">
        <div class="my-2 px-2">
            <p class="font-bold p-0 m-0">Specs</p>
            <p class="font-medium p-0 m-0">Color: <span class="font-normal">gray 100 </span></p>
            <p class="font-medium p-0 m-0">Corner radius: <span class="font-normal">4px </span></p>
            <p class="font-medium p-0 m-0">Drop shadow: <span class="font-normal">X: 0 | Y: 4 | Blur: 6 | Spread:0 | 10%</span></p>
        </div>
    </div>
</div>

## Without shadow


This container is used for tables and other elements that do not overlap like the previous case.

<div class="flex flex-col sm:flex-row md:flex-row lg:flex-row justify-between content-start mb-5">
    <div class="rounded-md border-2 border-gray-200 p-5 h-full w-full sm:w-1/2 md:w-1/2">
        <div class="bg-white block m-auto rounded-md shadow-none w-3/4 h-56"></div>
    </div>
    <div class="ml-0 sm:ml-6 w-full sm:w-1/2 lg:w-1/2">
        <div class="my-2 px-2">
            <p class="font-bold p-0 m-0">Specs</p>
            <p class="font-medium p-0 m-0">Color: <span class="font-normal">White </span></p>
            <p class="font-medium p-0 m-0">Corner radius: <span class="font-normal">4px </span></p>
        </div>
    </div>
</div>



<!--
@component('_partials.iframe', ["height" => "114px;"])
<div class="px-4 py-8 bg-white">
    <div class="max-w-3xl mx-auto space-y-4 flex flex-col items-center justify-start sm:space-y-0 sm:flex-row sm:items-end sm:justify-around">
        //Alerts
    </div>
</div>
@endcomponent

```html

```
-->