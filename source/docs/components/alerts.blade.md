---
title: Alerts
description: Alerts library
extends: _layouts.documentation
section: content
---

# Alerts {#alerts}

## Alert statuses

The colors will reinforce the central idea of ​​alert home.

<!--
<div class="w-auto max-w-sm m-auto">
<img src="/assets/images/spartan.png" alt="under construction" class="content-center w-auto h-auto">
<p class="text-center text-5xl font-medium">Under construction</p>
</div>
-->

### Success

@component('_partials.iframe', ["height" => "114px;"])
<div class="px-4 py-8 bg-white">
    <div class="max-w-3xl mx-auto space-y-4 flex flex-col items-center justify-start sm:space-y-0 sm:flex-row sm:items-end sm:justify-around">
        <div class="flex items-center px-4 py-3 rounded-md bg-green-50 border border-green-400 w-full">
            <div class="text-sm max-w-full flex-initial font-medium text-green-800">
                Resource created successfully!
            </div>
            <div class="ml-auto pl-3">
                <div class="-mx-1.5 -my-1.5">
                    <button type="button" class="inline-flex bg-green-50 rounded-md p-1.5 text-green-500 hover:bg-green-100 focus:outline-none">
                        <svg class="h-5 w-5 current-color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x cursor-pointer hover:text-green-400 rounded-full w-5 h-5 ml-2">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>
@endcomponent

```html
<div class="flex items-center px-4 py-3 rounded-md bg-green-50 border border-green-400 w-full">
    <div class="text-sm max-w-full flex-initial font-medium text-green-800">
        Resource created successfully!
    </div>
    <div class="ml-auto pl-3">
        <div class="-mx-1.5 -my-1.5">
            <button type="button" class="inline-flex bg-green-50 rounded-md p-1.5 text-green-500 hover:bg-green-100 focus:outline-none">
                <svg class="h-5 w-5 current-color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x cursor-pointer hover:text-green-400 rounded-full w-5 h-5 ml-2">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </button>
        </div>
    </div>
</div>
```

### Error

@component('_partials.iframe', ["height" => "114px;"])
<div class="px-4 py-8 bg-white">
    <div class="max-w-3xl mx-auto space-y-4 flex flex-col items-center justify-start sm:space-y-0 sm:flex-row sm:items-end sm:justify-around">
        <div class="flex justify-center items-center font-medium p-4 bg-white rounded-md text-red-700 bg-red-100 border border-red-700 w-full">
            <div class="text-sm font-normal  max-w-full flex-initial">
                Error
            </div>
            <div class="flex flex-auto flex-row-reverse">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x cursor-pointer hover:text-red-400 rounded-full w-5 h-5 ml-2">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </div>
            </div>
        </div>
    </div>
</div>
@endcomponent

```html
<div class="flex justify-center items-center font-medium p-2 bg-white rounded-md text-red-700 bg-red-100 border border-red-700 w-full">
            <div class="text-sm font-normal  max-w-full flex-initial">
                Error</div>
            <div class="flex flex-auto flex-row-reverse">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x cursor-pointer hover:text-red-400 rounded-full w-5 h-5 ml-2">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </div>
            </div>
        </div>
```

### Warning

@component('_partials.iframe', ["height" => "114px;"])
<div class="px-4 py-8 bg-white">
    <div class="max-w-3xl mx-auto space-y-4 flex flex-col items-center justify-start sm:space-y-0 sm:flex-row sm:items-end sm:justify-around">
        <div class="flex justify-center items-center font-medium p-2 bg-white rounded-md text-yellow-700 bg-yellow-100 border border-yellow-700 w-full">
            <div class="text-sm font-normal  max-w-full flex-initial">
                Warning</div>
            <div class="flex flex-auto flex-row-reverse">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x cursor-pointer hover:text-yellow-400 rounded-full w-5 h-5 ml-2">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </div>
            </div>
        </div>
    </div>
</div>
@endcomponent

```html
<div class="flex justify-center items-center font-medium p-2 bg-white rounded-md text-yellow-700 bg-yellow-100 border border-yellow-700 w-full">
            <div class="text-sm font-normal  max-w-full flex-initial">
                Warning</div>
            <div class="flex flex-auto flex-row-reverse">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x cursor-pointer hover:text-yellow-400 rounded-full w-5 h-5 ml-2">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </div>
            </div>
        </div>
```

### Information

@component('_partials.iframe', ["height" => "114px;"])
<div class="px-4 py-8 bg-white">
    <div class="max-w-3xl mx-auto space-y-4 flex flex-col items-center justify-start sm:space-y-0 sm:flex-row sm:items-end sm:justify-around">
        <div class="flex justify-center items-center font-medium p-2 bg-white rounded-md text-blue-700 bg-blue-100 border border-blue-700 w-full">
            <div class="text-sm font-normal  max-w-full flex-initial">
                Information</div>
            <div class="flex flex-auto flex-row-reverse">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x cursor-pointer hover:text-blue-400 rounded-full w-5 h-5 ml-2">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </div>
            </div>
        </div>
    </div>
</div>
@endcomponent

```html
<div class="flex justify-center items-center font-medium p-2 bg-white rounded-md text-blue-700 bg-blue-100 border border-blue-700 w-full">
            <div class="text-sm font-normal  max-w-full flex-initial">
                Information</div>
            <div class="flex flex-auto flex-row-reverse">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x cursor-pointer hover:text-blue-400 rounded-full w-5 h-5 ml-2">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </div>
            </div>
        </div>
```

### Alert with link

In the event that the alert requires the user to expand the information on another screen, it is recommended, based on the colors described above, to implement it in the following way.

@component('_partials.iframe', ["height" => "114px;"])
<div class="px-4 py-8 bg-white">
    <div class="max-w-3xl mx-auto space-y-4 flex flex-col items-center justify-start sm:space-y-0 sm:flex-row sm:items-end sm:justify-around">
<div class="flex justify-center items-center font-medium p-2 bg-white rounded-md text-blue-700 bg-blue-100 border border-blue-700 w-full">
<div class="text-sm font-normal  max-w-full flex-initial">
Information</div>
<div class="flex flex-auto flex-row-reverse">

<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x cursor-pointer hover:text-blue-400 rounded-full w-5 h-5 ml-2">
<line x1="18" y1="6" x2="6" y2="18"></line>
<line x1="6" y1="6" x2="18" y2="18"></line>
</svg>

<div><a>Read more</a></div>
</div>
</div>
    </div>
</div>
@endcomponent

```html
<div class="flex justify-center items-center font-medium p-2 bg-white rounded-md text-blue-700 bg-blue-100 border border-blue-700 w-full">
            <div class="text-sm font-normal  max-w-full flex-initial">
                Information</div>
            <div class="flex flex-auto flex-row-reverse">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x cursor-pointer hover:text-blue-400 rounded-full w-5 h-5 ml-2">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </div>
            </div>
        </div>
```
