---
title: Authentication
description: Authentication library
extends: _layouts.documentation
section: content
---

# Authentication {#authentication}

It is important to maintain the visual style from the first screen the user sees to the last.

The following specifies how the previously explained components that help create this design are implemented.

<hr>

## Layout {#layout}

The layout is made up of:
Background: CoolGray100 | # F1F5F9
Top buttons aligned to the right
Bottom buttons aligned to the center
PlacetoPay logo aligned to the center
Space for the container either for login, registration, password change etc.

@component('_partials.iframe', ["height" => "600px;"])
    <div class="max-w-3xl mx-auto space-y-4 flex flex-col items-center justify-start sm:space-y-0 sm:flex-row sm:items-end sm:justify-around">
        <div class="bg-gray-100 p-5 w-full h-full">
            <div class="flex flex-col sm:flex-row justify-end">
                <a class="m-5 text-gray-700 text-sm" href="" target="_blank">Login</a>
                <a class="m-5 text-gray-700 text-sm" href="" target="_blank">Registro</a>
            </div>
            <img src="{{ url('/assets/images/ptp-logo.svg') }}" alt="logo" class="m-auto block my-4">
            <div class="border-solid border-2 border-gray-200 w-3/4 block m-auto h-64 rounded-md my-8">
            </div>  
            <div class="flex flex-col sm:flex-row justify-around">
                <a class="text-sm text-gray-800" href="" target="_blank">© PlaceToPay</a>
                <a class="text-sm text-gray-800" href="" target="_blank">Contacto</a>
                <a class="text-sm text-gray-800" href="" target="_blank">Privacidad y condiciones</a>
            </div>  
        </div>
    </div>
@endcomponent


```html
<div class="bg-gray-100 p-5 w-full h-full">
    <div class="flex flex-col sm:flex-row justify-end">
        <a class="m-5 text-gray-700 text-sm" href="" target="_blank">Login</a>
        <a class="m-5 text-gray-700 text-sm" href="" target="_blank">Registro</a>
    </div>
    <img src="{{ url('/assets/images/ptp-logo.svg') }}" alt="logo" class="m-auto block my-4">
    <div class="border-solid border-2 border-gray-200 w-3/4 block m-auto h-64 rounded-md my-8">
    </div>  
    <div class="flex flex-col sm:flex-row justify-around">
        <a class="text-sm text-gray-800" href="" target="_blank">© PlaceToPay</a>
        <a class="text-sm text-gray-800" href="" target="_blank">Contacto</a>
        <a class="text-sm text-gray-800" href="" target="_blank">Privacidad y condiciones</a>
    </div>  
</div>
```

<hr>

## Login {#login}

Seeks to confirm the identity of the user.

@component('_partials.iframe', ["height" => "600px;"])
    <div class="max-w-3xl mx-auto space-y-4 flex flex-col items-center justify-start sm:space-y-0 sm:flex-row sm:items-end sm:justify-around">
        <div class="bg-gray-100 p-5 w-full h-full">
            <img src="{{ url('/assets/images/ptp-logo.svg') }}" alt="logo" class="m-auto block my-4">
            <div class="bg-white block m-auto rounded-md shadow w-3/4 my-8 p-8">
                <div class="w-11/12 block m-auto">
                    <p class="text-center font-semibold mb-4">Log in</p>
                    <form>
                        <label for="name" class="form-label mt-4">User</label>
                        <input id="name" name="name" class="form-input mt-1 w-full" type="text" placeholder="Jhon Doe">
                        <label for="password" class="form-label mt-4">Password</label>
                        <input id="password" name="password" class="form-input mt-1 w-full" type="password" >
                        <button class="btn btn-dark w-full mt-8 mb-0" type="submit">Button</button>
                    </form>
                </div>
            </div>
            <div class="flex flex-col justify-center">
                <p class="text-center text-sm">No tienes una cuenta <a class="text-sm text-gray-600" href="" target="_blank">Regístrate</a></p>
                <a class="text-sm text-gray-600 text-center my-2" href="#" target="_blank">¿Olvidaste tu contraseña?</a>
            </div>
        </div>
    </div>
@endcomponent


```html
<div class="bg-gray-100 p-5 w-full h-full">
    <img src="{{ url('/assets/images/ptp-logo.svg') }}" alt="logo" class="m-auto block my-4">
    <div class="bg-white block m-auto rounded-md shadow w-3/4 my-8 p-8">
        <div class="w-11/12 block m-auto">
            <p class="text-center font-semibold mb-4">Log in</p>
            <form>
                <label for="name" class="form-label mt-4">User</label>
                <input id="name" name="name" class="form-input mt-1 w-full" type="text" placeholder="Jhon Doe">
                <label for="password" class="form-label mt-4">Password</label>
                <input id="password" name="password" class="form-input mt-1 w-full" type="password" >
                <button class="btn btn-dark w-full mt-8 mb-0" type="submit">Button</button>
            </form>
        </div>
    </div>
    <div class="flex flex-col justify-center">
        <p class="text-center text-sm">No tienes una cuenta <a class="text-sm text-gray-600" href="" target="_blank">Regístrate</a></p>
        <a class="text-sm text-gray-600 text-center my-2" href="#" target="_blank">¿Olvidaste tu contraseña?</a>
    </div>
</div>
```

<hr>

## Reset password {#reset-password}

Designed for change your password for security reasons or reset it if you forget it.

@component('_partials.iframe', ["height" => "600px;"])
    <div class="max-w-3xl mx-auto space-y-4 flex flex-col items-center justify-start sm:space-y-0 sm:flex-row sm:items-end sm:justify-around">
        <div class="bg-gray-100 p-5 w-full h-full">
            <img src="{{ url('/assets/images/ptp-logo.svg') }}" alt="logo" class="m-auto block my-4">
            <div class="bg-white block m-auto rounded-md shadow w-3/4 my-8 p-8">
                <div class="w-11/12 block m-auto">
                    <p class="text-center font-semibold mb-4">Change password</p>
                    <form>
                        <label for="email" class="form-label mt-4">Email</label>
                        <input id="email" name="name" class="form-input mt-1 w-full" type="email" placeholder="">
                        <button class="btn btn-dark w-full mt-8 mb-0" type="submit">Reset</button>
                    </form>
                </div>
            </div>
            <div class="flex flex-col justify-center">
                <p class="text-center text-sm">No tienes una cuenta <a class="text-sm text-gray-600" href="" target="_blank">Regístrate</a></p>
                <a class="text-sm text-gray-600 text-center my-2" href="#" target="_blank">¿Olvidaste tu contraseña?</a>
            </div>
        </div>
    </div>
@endcomponent

```html
<div class="bg-gray-100 p-5 w-full h-full">
    <img src="{{ url('/assets/images/ptp-logo.svg') }}" alt="logo" class="m-auto block my-4">
    <div class="bg-white block m-auto rounded-md shadow w-3/4 my-8 p-8">
        <div class="w-11/12 block m-auto">
            <p class="text-center font-semibold mb-4">Change password</p>
            <form>
                <label for="email" class="form-label mt-4">Email</label>
                <input id="email" name="name" class="form-input mt-1 w-full" type="email" placeholder="">
                <button class="btn btn-dark w-full mt-8 mb-0" type="submit">Reset</button>
            </form>
        </div>
    </div>
    <div class="flex flex-col justify-center">
        <p class="text-center text-sm">No tienes una cuenta <a class="text-sm text-gray-600" href="" target="_blank">Regístrate</a></p>
        <a class="text-sm text-gray-600 text-center my-2" href="#" target="_blank">¿Olvidaste tu contraseña?</a>
    </div>
</div>
```

<hr>

## Register {#register}

Remember that not everyone using has an account from the start. Lets Make sure to explain how register and sign up.

@component('_partials.iframe', ["height" => "600px;"])
    <div class="max-w-3xl mx-auto space-y-4 flex flex-col items-center justify-start sm:space-y-0 sm:flex-row sm:items-end sm:justify-around">
        <div class="bg-gray-100 p-5 w-full h-full">
            <img src="{{ url('/assets/images/ptp-logo.svg') }}" alt="logo" class="m-auto block my-4">
            <div class="bg-white block m-auto rounded-md shadow w-3/4 my-8 p-8">
                <div class="w-11/12 block m-auto">
                    <p class="text-center font-semibold mb-4">Sign up</p>
                    <form>
                        <label for="name" class="form-label mt-4">Users</label>
                        <input id="name" name="name" class="form-input mt-1 w-full" type="text" placeholder="">
                        <label for="email" class="form-label mt-4">Email</label>
                        <input id="email" name="email" class="form-input mt-1 w-full" type="email" placeholder="">
                        <label for="password" class="form-label mt-4">Password</label>
                        <input id="password" name="password" class="form-input mt-1 w-full" type="password" >
                        <button class="btn btn-dark w-full mt-8 mb-0" type="submit">Register</button>
                    </form>
                </div>
            </div>
            <div class="flex flex-col justify-center">
                <p class="text-center text-sm">No tienes una cuenta <a class="text-sm text-gray-600" href="" target="_blank">Regístrate</a></p>
                <a class="text-sm text-gray-600 text-center my-2" href="#" target="_blank">¿Olvidaste tu contraseña?</a>
            </div>
        </div>
    </div>
@endcomponent


```html
<div class="bg-gray-100 p-5 w-full h-full">
    <img src="{{ url('/assets/images/ptp-logo.svg') }}" alt="logo" class="m-auto block my-4">
    <div class="bg-white block m-auto rounded-md shadow w-3/4 my-8 p-8">
        <div class="w-11/12 block m-auto">
            <p class="text-center font-semibold mb-4">Sign up</p>
            <form>
                <label for="name" class="form-label mt-4">Users</label>
                <input id="name" name="name" class="form-input mt-1 w-full" type="text" placeholder="">
                <label for="email" class="form-label mt-4">Email</label>
                <input id="email" name="email" class="form-input mt-1 w-full" type="email" placeholder="">
                <label for="password" class="form-label mt-4">Password</label>
                <input id="password" name="password" class="form-input mt-1 w-full" type="password" >
                <button class="btn btn-dark w-full mt-8 mb-0" type="submit">Register</button>
            </form>
        </div>
    </div>
    <div class="flex flex-col justify-center">
        <p class="text-center text-sm">No tienes una cuenta <a class="text-sm text-gray-600" href="" target="_blank">Regístrate</a></p>
        <a class="text-sm text-gray-600 text-center my-2" href="#" target="_blank">¿Olvidaste tu contraseña?</a>
    </div>
</div>
```

<hr>

## Support text {#login}

They are the best tool we have to improve our understanding of what is required.

@component('_partials.iframe', ["height" => "600px;"])
    <div class="max-w-3xl mx-auto space-y-4 flex flex-col items-center justify-start sm:space-y-0 sm:flex-row sm:items-end sm:justify-around">
        <div class="bg-gray-100 p-5 w-full h-full">
            <img src="{{ ('/assets/images/ptp-logo.svg') }}" alt="logo" class="m-auto block my-4">
            <div class="bg-white block m-auto rounded-md shadow w-3/4 my-8 p-8">
                <div class="w-11/12 block m-auto">
                    <p class="text-center font-semibold mb-4">Log in</p>
                    <form>
                        <label for="name" class="form-label mt-4">User</label>
                        <input id="name" name="name" class="form-input mt-1 w-full" type="text" placeholder="Jhon Doe">
                        <label for="password" class="form-label mt-4">Password</label>
                        <input id="password" name="password" class="form-input mt-1 w-full" type="password" >
                        <button class="btn btn-dark w-full mt-8 mb-0" type="submit">Button</button>
                    </form>
                    <div class="bg-green-50 border-l-4 border-green-400 p-4 mt-4">
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
            </div>
            <div class="flex flex-col justify-center">
                <p class="text-center text-sm">No tienes una cuenta <a class="text-sm text-gray-600" href="" target="_blank">Regístrate</a></p>
                <a class="text-sm text-gray-600 text-center my-2" href="#" target="_blank">¿Olvidaste tu contraseña?</a>
            </div>
        </div>
    </div>
@endcomponent


```html
<div class="bg-gray-100 p-5 w-full h-full">
    <img src="{{ url('/assets/images/ptp-logo.svg') }}" alt="logo" class="m-auto block my-4">
    <div class="bg-white block m-auto rounded-md shadow w-3/4 my-8 p-8">
        <div class="w-11/12 block m-auto">
            <p class="text-center font-semibold mb-4">Log in</p>
            <form>
                <label for="name" class="form-label mt-4">User</label>
                <input id="name" name="name" class="form-input mt-1 w-full" type="text" placeholder="Jhon Doe">
                <label for="password" class="form-label mt-4">Password</label>
                <input id="password" name="password" class="form-input mt-1 w-full" type="password" >
                <button class="btn btn-dark w-full mt-8 mb-0" type="submit">Button</button>
            </form>
        </div>
    </div>
    <div class="flex flex-col justify-center">
        <p class="text-center text-sm">No tienes una cuenta <a class="text-sm text-gray-600" href="" target="_blank">Regístrate</a></p>
        <a class="text-sm text-gray-600 text-center my-2" href="#" target="_blank">¿Olvidaste tu contraseña?</a>
    </div>
</div>
```

<hr>


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
