---
title: Buttons
description: Buttons library
extends: _layouts.documentation
section: content
---

# Buttons {#buttons .text-3xl .font-semibold}
This content for components buttons

## Simple {.text-2xl .font-semibold .my-5}

@component('_partials.iframe', ["height" => "114px;"])
<div class="px-4 py-8 bg-white">
    <div class="max-w-3xl mx-auto space-y-4 flex flex-col items-center justify-start sm:space-y-0 sm:flex-row sm:items-end sm:justify-around">
        <button class="btn btn-white">
            Button
        </button>
        <button class="btn bg-transparent hover:bg-gray-300 text-gray-700 font-semibold hover:text-gray-700 py-2 px-4 border border-gray-200 hover:border-gray-300 rounded focus:outline-none focus:shadow-none focus:border-gray-700">
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

## Disable {.text-2xl .font-semibold .my-5}

@component('_partials.iframe', ["height" => "114px;"])
<div class="px-4 py-8 bg-white">
    <div class="max-w-3xl mx-auto space-y-4 flex flex-col items-center justify-start sm:space-y-0 sm:flex-row sm:items-end sm:justify-around">
        <button class="btn btn-disable cursor-not-allowed">
            Button
        </button>
    </div>
</div>
@endcomponent

```html
<button class="btn btn-disable cursor-not-allowed">
    Button
</button>
```

## With Icons {.text-2xl .font-semibold .my-5}

@component('_partials.iframe', ["height" => "114px;"])
<div class="px-4 py-8 bg-white">
    <div class="max-w-3xl mx-auto space-y-4 flex flex-col items-center justify-start sm:space-y-0 sm:flex-row sm:items-end sm:justify-around">
        <button class="btn btn-white">
             <svg class="w-4 h-4 mr-2 inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
            Default
        </button>
    </div>
</div>
@endcomponent

```html
<button class="btn btn-white">
    <svg class="w-4 h-4 mr-2 inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
    Default
</button>


<button class="btn btn-disable">
    <i class="far fa-spinner fa-spin"></i>
    Button
</button>
```

## Autenthication button {.text-2xl .font-semibold .my-5 }

>These buttons are used for the identification process such as login, registration, password change etc. They cover the entire width of the container

@component('_partials.iframe', ["height" => "114px;"])
<div class="px-4 py-8 bg-white">
    <div class="max-w-3xl mx-auto space-y-4 flex flex-col items-center justify-start sm:space-y-0 sm:flex-row sm:items-end sm:justify-around">
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

## Button group {.text-2xl .font-semibold .my-5 }

>These buttons are used for the identification process such as login, registration, password change etc. They cover the entire width of the container

@component('_partials.iframe', ["height" => "114px;"])
<div class="px-4 py-8 bg-white">
    <div class="max-w-3xl mx-auto space-y-4 flex flex-col items-center justify-start sm:space-y-0 sm:flex-row sm:items-end sm:justify-around ">
		<div class="inline-flex gap-16">
			<button class="bg-white hover:bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded border border-gray-200 hover:border-gray-300 focus:outline-none focus:shadow-none focus:border-gray-700">
				Prev
			</button>
			<button class="bg-white hover:bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded  hover:border-gray-300 focus:outline-none focus:shadow-none focus:border-gray-700">
				Next
			</button>
		</div>
    </div>
</div>
@endcomponent

```html
<div class="inline-flex gap-16">
	<button class="bg-white hover:bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded border border-gray-200 hover:border-gray-300 focus:outline-none focus:shadow-none focus:border-gray-700">
		Prev
	</button>
	<button class="bg-white hover:bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded  hover:border-gray-300 focus:outline-none focus:shadow-none focus:border-gray-700">
		Next
	</button>
</div>z
```