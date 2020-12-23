---
title: Alerts
description: Alerts library
extends: _layouts.documentation
section: content
---

# Alerts {#alerts}

This banner communicates to the user a status, displays critical messages about data loss, functionality. It helps to communicate to the user an error, a success, an update, a warning.
Be clear and concise with your message and use error alerts sparingly.
The banners must appear by pressing all the content below.

<hr>

## Alert states {#alerts-states}

The colors will reinforce the central idea of ​​alert home.

### Success {#alerts-states-success}

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

### Error {#alerts-states-error}

@component('_partials.iframe', ["height" => "114px;"])
<div class="px-4 py-8 bg-white">
    <div class="max-w-3xl mx-auto space-y-4 flex flex-col items-center justify-start sm:space-y-0 sm:flex-row sm:items-end sm:justify-around">
        <div class="flex items-center px-4 py-3 rounded-md bg-red-50 border border-red-400 w-full">
            <div class="text-sm max-w-full flex-initial font-medium text-red-800">
                This alert box indicates a dangerous or potentially negative action
            </div>
            <div class="ml-auto pl-3">
                <div class="-mx-1.5 -my-1.5">
                    <button type="button" class="inline-flex bg-red-50 rounded-md p-1.5 text-red-500 hover:bg-red-100 focus:outline-none">
                        <svg class="h-5 w-5 current-color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x cursor-pointer hover:text-red-400 rounded-full w-5 h-5 ml-2">
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
<div class="flex items-center px-4 py-3 rounded-md bg-red-50 border border-red-400 w-full">
    <div class="text-sm max-w-full flex-initial font-medium text-red-800">
        This alert box indicates a dangerous or potentially negative action
    </div>
    <div class="ml-auto pl-3">
        <div class="-mx-1.5 -my-1.5">
            <button type="button" class="inline-flex bg-red-50 rounded-md p-1.5 text-red-500 hover:bg-red-100 focus:outline-none">
                <svg class="h-5 w-5 current-color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x cursor-pointer hover:text-red-400 rounded-full w-5 h-5 ml-2">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </button>
        </div>
    </div>
</div>
```

### Warning {#alerts-states-warning}

@component('_partials.iframe', ["height" => "114px;"])
<div class="px-4 py-8 bg-white">
    <div class="max-w-3xl mx-auto space-y-4 flex flex-col items-center justify-start sm:space-y-0 sm:flex-row sm:items-end sm:justify-around">
        <div class="flex items-center px-4 py-3 rounded-md bg-yellow-50 border border-yellow-400 w-full">
            <div class="text-sm max-w-full flex-initial font-medium text-yellow-800">
                This alert box indicates a warning that might need attention.
            </div>
            <div class="ml-auto pl-3">
                <div class="-mx-1.5 -my-1.5">
                    <button type="button" class="inline-flex bg-yellow-50 rounded-md p-1.5 text-yellow-500 hover:bg-yellow-100 focus:outline-none">
                        <svg class="h-5 w-5 current-color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x cursor-pointer hover:text-yellow-400 rounded-full w-5 h-5 ml-2">
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
<div class="flex items-center px-4 py-3 rounded-md bg-yellow-50 border border-yellow-400 w-full">
    <div class="text-sm max-w-full flex-initial font-medium text-yellow-800">
        This alert box indicates a warning that might need attention.
    </div>
    <div class="ml-auto pl-3">
        <div class="-mx-1.5 -my-1.5">
            <button type="button" class="inline-flex bg-yellow-50 rounded-md p-1.5 text-yellow-500 hover:bg-yellow-100 focus:outline-none">
                <svg class="h-5 w-5 current-color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x cursor-pointer hover:text-yellow-400 rounded-full w-5 h-5 ml-2">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </button>
        </div>
    </div>
</div>
```

<hr>

### Information {#alerts-states-information}

@component('_partials.iframe', ["height" => "114px;"])
<div class="px-4 py-8 bg-white">
    <div class="max-w-3xl mx-auto space-y-4 flex flex-col items-center justify-start sm:space-y-0 sm:flex-row sm:items-end sm:justify-around">
        <div class="flex items-center px-4 py-3 rounded-md bg-blue-50 border border-blue-400 w-full">
            <div class="text-sm max-w-full flex-initial font-medium text-blue-800">
                This alert box indicates a neutral informative change or action
            </div>
            <div class="ml-auto pl-3">
                <div class="-mx-1.5 -my-1.5">
                    <button type="button" class="inline-flex bg-blue-50 rounded-md p-1.5 text-blue-500 hover:bg-blue-100 focus:outline-none">
                        <svg class="h-5 w-5 current-color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x cursor-pointer hover:text-blue-400 rounded-full w-5 h-5 ml-2">
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
<div class="flex items-center px-4 py-3 rounded-md bg-blue-50 border border-blue-400 w-full">
    <div class="text-sm max-w-full flex-initial font-medium text-blue-800">
        This alert box indicates a neutral informative change or action
    </div>
    <div class="ml-auto pl-3">
        <div class="-mx-1.5 -my-1.5">
            <button type="button" class="inline-flex bg-blue-50 rounded-md p-1.5 text-blue-500 hover:bg-blue-100 focus:outline-none">
                <svg class="h-5 w-5 current-color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x cursor-pointer hover:text-blue-400 rounded-full w-5 h-5 ml-2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
        </div>
    </div>
</div>
```
<hr>

## Alerts for notifications {#alerts-notifications}

### Success {#alerts-notifications-success}

@component('_partials.iframe', ["height" => "114px; "])
<div class="px-4 py-8 bg-white">
  <div class="bg-green-50 border-l-4 border-green-400 p-4">
    <div class="flex items-center">
      <div class="flex-shrink-0">
          <svg class="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" /></svg>
      </div>
      <div class="ml-3">
        <p class="text-sm text-green-700">
          You have no credits left.
          <a href="#" class="font-medium underline text-green-700 hover:text-green-600">
            Upgrade your account to add more credits.
          </a>
        </p>
      </div>
    </div>
  </div>
</div>
@endcomponent

```html
<div class="bg-green-50 border-l-4 border-green-400 p-4">
  <div class="flex items-center">
    <div class="flex-shrink-0">
        <svg class="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" /></svg>
    </div>
    <div class="ml-3">
      <p class="text-sm text-green-700">
        You have no credits left.
        <a href="#" class="font-medium underline text-green-700 hover:text-green-600">
          Upgrade your account to add more credits.
        </a>
      </p>
    </div>
  </div>
</div>
```

### Error {#alerts-notifications-error}

@component('_partials.iframe', ["height" => "114px; "])
<div class="px-4 py-8 bg-white">
  <div class="bg-red-50 border-l-4 border-red-400 p-4">
    <div class="flex items-center">
      <div class="flex-shrink-0">
          <svg class="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" /></svg>
      </div>
      <div class="ml-3">
        <p class="text-sm text-red-700">
          You have no credits left.
          <a href="#" class="font-medium underline text-red-700 hover:text-red-600">
            Upgrade your account to add more credits.
          </a>
        </p>
      </div>
    </div>
  </div>
</div>
@endcomponent

```html
<div class="bg-red-50 border-l-4 border-red-400 p-4">
  <div class="flex items-center">
    <div class="flex-shrink-0">
        <svg class="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" /></svg>
    </div>
    <div class="ml-3">
      <p class="text-sm text-red-700">
        You have no credits left.
        <a href="#" class="font-medium underline text-yellow-700 hover:text-yellow-600">
          Upgrade your account to add more credits.
        </a>
      </p>
    </div>
  </div>
</div>
```

### Warning {#alerts-notifications-warning}

@component('_partials.iframe', ["height" => "114px; "])
<div class="px-4 py-8 bg-white">
  <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4">
    <div class="flex items-center">
      <div class="flex-shrink-0">
          <svg class="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" /></svg>
      </div>
      <div class="ml-3">
        <p class="text-sm text-yellow-700">
          Warning message box
          <a href="#" class="font-medium underline text-yellow-700 hover:text-yellow-600">
            example link
          </a>
        </p>
      </div>
    </div>
  </div>
</div>
@endcomponent

```html
<div class="bg-yellow-50 border-l-4 border-yellow-400 p-4">
  <div class="flex items-center">
    <div class="flex-shrink-0">
        <svg class="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" /></svg>
    </div>
    <div class="ml-3">
      <p class="text-sm text-yellow-700">
        Warning message box
        <a href="#" class="font-medium underline text-yellow-700 hover:text-yellow-600">
          example link
        </a>
      </p>
    </div>
  </div>
</div>
```

### Information {#alerts-notifications-information}

@component('_partials.iframe', ["height" => "114px; "])
<div class="px-4 py-8 bg-white">
  <div class="bg-blue-50 border-l-4 border-blue-400 p-4">
    <div class="flex items-center">
      <div class="flex-shrink-0">
          <svg class="h-5 w-5 text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" /></svg>
      </div>
      <div class="ml-3">
        <p class="text-sm text-blue-700">
          Information message box.
          <a href="#" class="font-medium underline text-blue-700 hover:text-blue-600">
            example link.
          </a>
        </p>
      </div>
    </div>
  </div>
</div>
@endcomponent

```html
<div class="bg-blue-50 border-l-4 border-blue-400 p-4">
  <div class="flex items-center">
    <div class="flex-shrink-0">
        <svg class="h-5 w-5 text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" /></svg>
    </div>
    <div class="ml-3">
      <p class="text-sm text-blue-700">
        Information message box.
        <a href="#" class="font-medium underline text-yellow-700 hover:text-yellow-600">
          example link.
        </a>
      </p>
    </div>
  </div>
</div>
```