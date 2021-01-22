@extends('_layouts.master')

@section('body')
<section class="container max-w-6xl mx-auto px-6 py-10 md:py-12">
    <div class="flex flex-col-reverse mb-10 lg:flex-row lg:mb-24">
        <div class="mt-8">
            <h1 id="intro-docs-template" class="text-gray-700">{{ $page->siteName }}</h1>

            <h2 id="intro-powered-by-jigsaw" class="font-light mt-4 text-gray-700">{{ $page->siteDescription }}</h2>

            <p class="text-lg w-full md:w-3/5 lg:w-3/5">Spartan is a design  created by Place to Pay to help teams build digital experiences.</p>

            <div class="flex my-10">
                <a href="{{ url('/docs/getting-started') }}" title="{{ $page->siteName }} getting started" class="bg-gray-800 hover:bg-gray-600 font-normal text-white hover:text-white rounded mr-4 py-2 px-6">Get Started</a>

                <!--<a href="https://jigsaw.tighten.co" title="Jigsaw by Tighten" class="bg-gray-400 hover:bg-gray-600 text-blue-900 font-normal hover:text-white rounded py-2 px-6">About Jigsaw</a>-->
            </div>
        </div>

        <img src="/assets/img/PicHomeSpartan.svg" alt="{{ $page->siteName }} large logo" class="sm:w-1/2  md:w-2/5 lg:w-2/5  mx-auto mb-6 lg:mb-0 ">
    </div>

    <hr class="block my-8 border lg:hidden">

    <div class="md:flex -mx-2 -mx-4">
        <div class="mb-8 mx-3 px-2 md:w-1/3">
            <img src="/assets/img/brackets-curly-regular.svg" class="h-12 w-12 fill-current" alt="window icon">

            <h3 id="intro-laravel" class="text-2xl text-gray-700 mb-0">Let´s create a experience journey together</h3>

            <p>Our system reflects who we are and how we want our users experience our products.</p>
        </div>

        <div class="mb-8 mx-3 px-2 md:w-1/3">
            <img src="/assets/img/cog-regular.svg" class="h-12 w-12" alt="terminal icon">

            <h3 id="intro-markdown" class="text-2xl text-gray-700 mb-0">Spartan a powerfull tool</h3>

            <p>Simple to use, easy to understand, to efficiently design consistent experiences for costumers.</p>
        </div>

        <div class="mx-3 px-2 md:w-1/3">
            <img src="/assets/img/layer-group-regular.svg" class="h-12 w-12" alt="stack icon">

            <h3 id="intro-mix" class="text-2xl text-gray-700 mb-0">Strong foundation</h3>

            <p>All the necessary resources to create attractive designs and unforgettable experiences</p>
        </div>
    </div>
</section>
@endsection
