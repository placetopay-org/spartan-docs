@extends('_layouts.master')

@section('nav-toggle')
    @include('_nav.menu-toggle')
@endsection

@section('body')
    <div class="flex">
        <nav id="js-nav-menu" class="nav-menu hidden md:flex md:flex-shrink-0 px-6">
            @include('_nav.menu', ['items' => $page->navigation])
        </nav>

        <div class="flex flex-col w-0 flex-1">
            <section class="container max-w-8xl mx-auto px-6 md:px-8 py-4">
                <div class="flex flex-col lg:flex-row">
                    <div class="DocSearch-content w-full break-words pb-16 lg:pl-4" v-pre>
                        @yield('content')
                    </div>
                </div>
            </section>
        </div>
    </div>
@endsection
