---
title: Modals
description: Modals library
extends: _layouts.documentation
section: content
---

# Modals {#modals}

The modals display the content in a layer that overlaps the application. We use them as dialogues for different purposes.

They grow according to the amount of content inside. The modals can have an icon, title and an explanatory paragraph, always accompanied by a button that calls the action or closes the modal to return to the application screen.

<hr>

## Corner radius

Rounded corners evoke confidence and make the user interface easier and more user-friendly. The default radius value we use for these UI elements is 4px.

The corner radius should be maintained on all inputs, cards, or any component with corners.


<div class="flex flex-col sm:flex-row md:flex-row lg:flex-row justify-between content-start mb-5">
    <div class="rounded-md border-2 border-gray-200 p-5 h-full w-full sm:w-1/2 md:w-1/2">
        <div class="w-2/5 h-12 bg-white block m-auto border-t-2 border-l-2 border-gray-700 rounded-md"><p class="font-bold m-0 p-2">4px</p></div>
    </div>
    <div class="ml-0 sm:ml-6 w-full sm:w-1/2 lg:w-1/2">
        <p class="font-bold text-lg m-0">Corner radius</p>
        <p class="text-sm text-justify m-0">4px all sides.</p>
    </div>
</div>

## Modal structure {#modal-structure}

The header of the modal must be clear with the action that it will carry out and within the actions that it entails include the discard option.


<div class="flex flex-col sm:flex-row md:flex-row lg:flex-row justify-between content-start mb-5">
    <!--@component('_partials.iframe', ["height" => "114px;", "width" => "100%"])
        <div class="rounded-md border-2 border-gray-200 p-3 h-full w-full">
            <div class="m-auto w-3/5 block p-4 bg-white rounded-md shadow relative">
                <button class="absolute right-0 top-0 m-3 hover:opacity-50"><img src="{{ url('/assets/images/close.svg') }}" alt="close button"></button>
                <img src="{{ url('/assets/images/error-ilustration.svg') }}" class="block m-auto my-4">
                <p class="font-semibold p-2 text-center text-gray-700 m-1">Delete microsite</p>
                <p class="text-center m-0 mb-5">Are you sure you want to delete "Evertec Medellín"?</p>
                <div class="flex justify-around flex-col sm:flex-row">
                    <button class="btn btn-white">Delete</button>
                    <button class="btn btn-dark">Cancel</button>
                </div>
            </div>
        </div>
    @endcomponent-->
    @component('_partials.iframe', ["height" => "500px;"], ["width" => "100%"] )
    <div class="rounded-md border-2 border-gray-200 p-3 h-full w-full">
        <div class="m-auto w-3/5 block p-4 bg-white rounded-md shadow relative">
            <button class="absolute right-0 top-0 m-3 hover:opacity-50"><img src="{{ ('/assets/images/close.svg') }}" alt="close button"></button>
            <img src="{{ ('/assets/images/error-ilustration.svg') }}" class="block m-auto my-4">
            <p class="font-semibold p-2 text-center text-gray-700 m-1">Delete microsite</p>
            <p class="text-center m-0 mb-5">Are you sure you want to delete "Evertec Medellín"?</p>
            <div class="flex justify-around flex-col sm:flex-row">
                <button class="btn btn-white">Delete</button>
                <button class="btn btn-dark">Cancel</button>
            </div>
        </div>
    </div>
    @endcomponent
    <div class="ml-0 sm:ml-6 w-full sm:w-1/2 lg:w-1/2">
        <p class="font-bold text-lg m-0">Structure</p>
        <p class="font-medium text-sm">Icon: <span class="font-normal">Located at the top, implemented to give dynamism to the design. This design should reinforce the action that the user will perform.<br>Color: CoolGray700 </span></p>
        <p class="font-medium text-sm">Title: <span class="font-normal">It must be clear about the action to be taken.<br>Color: CoolGray700</span></p>
        <p class="font-medium text-sm">Text: <span class="font-normal">Its function is to confirm the action.<br>Color: Cool Gray 400</span></p>
        <p class="font-medium text-sm">Actions: <span class="font-normal">Located at the top, implemented to give dynamism to the design. This design should reinforce the action that the user will perform.<br>Color: CoolGray700 </span></p>
        <p class="font-medium text-sm">Close button: <span class="font-normal">Located at the top, implemented to give dynamism to the design. This design should reinforce the action that the user will perform.<br>Color: CoolGray700 </span></p>
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
-->

```html
<div class="m-auto w-3/5 block p-4 bg-white rounded-md shadow relative">
    <button class="absolute right-0 top-0 m-3 hover:opacity-50"><img src="{{ url('/assets/images/close.svg') }}" alt="close button"></button>
    <img src="{{ url('/assets/images/error-ilustration.svg') }}" class="block m-auto my-4">
    <p class="font-semibold p-2 text-center text-gray-700 m-1">Delete microsite</p>
    <p class="text-center m-0 mb-5">Are you sure you want to delete "Evertec Medellín"?</p>
    <div class="flex justify-around flex-col sm:flex-row">
        <button class="btn btn-white">Delete</button>
        <button class="btn btn-dark">Cancel</button>
    </div>
</div>
```
