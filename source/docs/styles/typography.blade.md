---
title: Typography
description: Typography library
extends: _layouts.documentation
section: content
---

# Typography {#typography}

INTER family is the system font on all our UI System to present our products with an optimal legibility across sizes a clean as possible to ensure that the UI is optimized to be highly legible.

Keeping just one font family and the right hierarchies proportionate clarity and a consistent UI.

<div>
    <p class="font-normal text-5xl my-1 text-gray-500 text-center ">SPARTAN</P>
    <p class="font-medium text-5xl my-1 text-gray-500 text-center ">SPARTAN</P>
    <p class="font-semibold text-5xl my-1 text-gray-500 text-center ">SPARTAN</P>
    <p class="font-bold text-5xl my-1 text-gray-500 text-center ">SPARTAN</P>
</div>

<hr>

<div class="flex flex-col sm:flex-row flex-wrap justify-between gap-2">
    <div class="w-full sm:w-2/5">
        <p class="font-normal">Inter Regular</p>
        <p class="font-normal">a b c d e f g h i j k l m n o p q r s t u v w x y z</p>
        <p class="font-normal">A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</p>
        <p class="font-normal">1 2 3 4 5 6 7 8 9 0 # + - @ = % / ? !</p>
    </div>
    <div class="w-full sm:w-2/5">
        <p class="font-medium">Inter Medium</p>
        <p class="font-medium">a b c d e f g h i j k l m n o p q r s t u v w x y z</p>
        <p class="font-medium">A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</p>
        <p class="font-medium">1 2 3 4 5 6 7 8 9 0 # + - @ = % / ? !</p>
    </div>
    <div class="w-full sm:w-2/5">
        <p class="font-semibold">Inter Semibold</p>
        <p class="font-semibold">a b c d e f g h i j k l m n o p q r s t u v w x y z</p>
        <p class="font-semibold">A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</p>
        <p class="font-semibold">1 2 3 4 5 6 7 8 9 0 # + - @ = % / ? !</p>
    </div>
    <div class="w-full sm:w-2/5">
        <p class="font-bold">Inter Bold</p>
        <p class="font-bold">a b c d e f g h i j k l m n o p q r s t u v w x y z</p>
        <p class="font-bold">A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</p>
        <p class="font-bold">1 2 3 4 5 6 7 8 9 0 # + - @ = % / ? !</p>
    </div>
</div>

<hr>

## Headings {#headings}

<div class="flex flex-col sm:flex-row md:flex-row lg:flex-row justify-between content-start mb-5">
    @component('_partials.iframe', ["height" => "114px; "])
    <div class="px-4 py-8 w-full h-full sm:w-1/2 md:w-1/2 bg-white">
        <div class="mx-auto space-y-4 flex flex-col items-center justify-start sm:space-y-0 sm:flex-row szm:items-end sm:justify-around">
             <h1 class="font-bold text-2xl text-gray-800 p-0 m-0">Merchants</h1>
        </div>
    </div>
    @endcomponent
    <div class="ml-0 sm:ml-6 w-full sm:w-1/2 lg:w-1/2">
        <p class="font-bold text-lg m-0">H1</p>
        <p class="text-sm text-justify m-0">Commonly used for large H1 headlines to put a strong emphasis on bold typeface.<br>Type Inter | 24 px | Bold</p>
    </div>
</div>
``` html
<h1 class="font-bold text-2xl text-gray-800 p-0 m-0">Merchants</h1>
```

<hr>

<div class="flex flex-col sm:flex-row md:flex-row lg:flex-row justify-between content-start mb-5">
    @component('_partials.iframe', ["height" => "114px; "])
    <div class="px-4 py-8 w-full h-full sm:w-1/2 md:w-1/2 bg-white">
        <div class="mx-auto space-y-4 flex flex-col items-center justify-start sm:space-y-0 sm:flex-row szm:items-end sm:justify-around">
             <h2 class="font-medium text-base text-gray-700 p-0 m-0">Dashboard</h2>
        </div>
    </div>
    @endcomponent
    <div class="ml-0 sm:ml-6 w-full sm:w-1/2 lg:w-1/2">
        <p class="font-bold text-lg m-0">H2</p>
        <p class="text-sm text-justify m-0">Used for the main buttons in the menu<br>Type Inter | 16 px | Medium</p>
    </div>
</div>
``` html
<h2 class="font-medium text-base text-gray-700 p-0 m-0">Dashboard</h2>
```

<hr>

<div class="flex flex-col sm:flex-row md:flex-row lg:flex-row justify-between content-start mb-5">
    @component('_partials.iframe', ["height" => "114px; "])
    <div class="px-4 py-8 w-full h-full sm:w-1/2 md:w-1/2 bg-white">
        <div class="mx-auto space-y-4 flex flex-col items-center justify-start sm:space-y-0 sm:flex-row szm:items-end sm:justify-around">
             <h3 class="font-normal text-base text-gray-400 p-0 m-0">Sites</h3>
        </div>
    </div>
    @endcomponent
    <div class="ml-0 sm:ml-6 w-full sm:w-1/2 lg:w-1/2">
        <p class="font-bold text-lg m-0">H3</p>
        <p class="text-sm text-justify m-0">Used for secondary buttons in the menu<br>Type Inter | 16 px | Regular</p>
    </div>
</div>
``` html
<h3 class="font-normal text-base text-gray-400 p-0 m-0">Sites</h3>
```

<hr>

<div class="flex flex-col sm:flex-row md:flex-row lg:flex-row justify-between content-start mb-5">
    @component('_partials.iframe', ["height" => "114px; "])
    <div class="px-4 py-8 w-full h-full sm:w-1/2 md:w-1/2 bg-white">
        <div class="mx-auto space-y-4 flex flex-col items-center justify-start sm:space-y-0 sm:flex-row szm:items-end sm:justify-around">
             <h4 class="font-normal text-sm text-gray-400 p-0 m-0">Configuration | Merchants</h4>
        </div>
    </div>
    @endcomponent
    <div class="ml-0 sm:ml-6 w-full sm:w-1/2 lg:w-1/2">
        <p class="font-bold text-lg m-0">H4</p>
        <p class="text-sm text-justify m-0">Commonly used for captions and table fields<br>Type Inter | 14 px | Regular</p>
    </div>
</div>
``` html
<h4 class="font-normal text-sm text-gray-400 p-0 m-0">Configuration | Merchants</h4>
```

<hr>

<div class="flex flex-col sm:flex-row md:flex-row lg:flex-row justify-between content-start mb-5">
    @component('_partials.iframe', ["height" => "114px; "])
    <div class="px-4 py-8 w-full h-full sm:w-1/2 md:w-1/2 bg-white">
        <div class="mx-auto space-y-4 flex flex-col items-center justify-start sm:space-y-0 sm:flex-row szm:items-end sm:justify-around">
             <h5 class="font-bold text-xs text-gray-800 p-0 m-0">NAME</h5>
        </div>
    </div>
    @endcomponent
    <div class="ml-0 sm:ml-6 w-full sm:w-1/2 lg:w-1/2">
        <p class="font-bold text-lg m-0">H5</p>
        <p class="text-sm text-justify m-0">Used for secondary buttons in the menu<br>Type Inter | 12 px | Bold</p>
    </div>
</div>
``` html
<h5 class="font-bold text-xs text-gray-800 p-0 m-0">NAME</h5>
```

<hr>

<div class="flex flex-col sm:flex-row md:flex-row lg:flex-row justify-between content-start mb-5">
    @component('_partials.iframe', ["height" => "114px; "])
    <div class="px-4 py-8 w-full h-full sm:w-1/2 md:w-1/2 bg-white">
        <div class="mx-auto space-y-4 flex flex-col items-center justify-start sm:space-y-0 sm:flex-row szm:items-end sm:justify-around">
             <h6 class="font-normal text-sm text-gray-500 p-0 m-0">Evertec Medellín</h6>
        </div>
    </div>
    @endcomponent
    <div class="ml-0 sm:ml-6 w-full sm:w-1/2 lg:w-1/2">
        <p class="font-bold text-lg m-0">H6</p>
        <p class="text-sm text-justify m-0">Used for fill the tables<br>Type Inter | 14 px | Regular</p>
    </div>
</div>
``` html
<h6 class="font-normal text-sm text-gray-500 p-0 m-0">Evertec Medellín</h6>
```

<hr>

## Paragraphs {#paragraphs}

<div class="flex flex-col sm:flex-row md:flex-row lg:flex-row justify-between content-start mb-5">
    @component('_partials.iframe', ["height" => "200px; "])
    <div class="px-4 py-8 w-full h-full sm:w-1/2 md:w-1/2 bg-white">
        <div class="mx-auto space-y-4 flex flex-col items-center justify-start sm:space-y-0 sm:flex-row szm:items-end sm:justify-around">
             <p class="font-normal text-sm text-gray-500 p-0 m-0 text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, amet et elementum, egestas diam ut convallis facilisis. Fringilla ac tempus tristique lorem felis. Eu gravida mattis ut pellentesque risus ac sed.</p>
        </div>
    </div>
    @endcomponent
    <div class="ml-0 sm:ml-6 w-full sm:w-1/2 lg:w-1/2">
        <p class="font-bold text-lg m-0">P1</p>
        <p class="text-sm text-justify m-0">Used for long text<br>Type Inter | 14 px | Regular</p>
    </div>
</div>
``` html
<p class="font-normal text-sm text-gray-500 p-0 m-0 text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, amet et elementum, egestas diam ut convallis facilisis. Fringilla ac tempus tristique lorem felis. Eu gravida mattis ut pellentesque risus ac sed.</p>
```

