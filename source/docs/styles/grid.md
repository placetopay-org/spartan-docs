---
title: Grid
description: Layouts and grid library
extends: _layouts.documentation
section: content
---

# Grid {#grid}

Grids encourage consistency across diverse platforms and screen sizes for positioning elements. Maintain the consistency across different screens allows maintain order and create a visual structure with the content. Is based on a 12-column grid layout.

<hr>

## Layouts {#layouts}

Meggings cred before they sold out messenger bag, ugh fashion axe Pitchfork.

<div class="flex flex-col sm:flex-row md:flex-row lg:flex-row justify-between content-start mb-5">
    <div class="rounded-md border-2 border-gray-200 bg-white p-5 h-full w-full sm:w-3/5">
        <img src="/assets/images/grid1.png" alt="10 columns" class="w-full m-auto block">
    </div>
    <div class="ml-0 sm:ml-6 w-full sm:w-2/5">
        <p class="font-bold text-lg m-0">Desktop HD</p>
        <p class="text-sm text-justify m-0">Desktop primary layout.</p>
    </div>
</div>

<hr>

## Grid system {grid-system}

<p class="mb-5">To facilitate many different screen sizes, we use an 8px grid system that expands the margin between columns in multiples of 8px. This helps in creating responsive pages from fixed-sized items that work on many devices.</p>

<div class="flex flex-col sm:flex-row md:flex-row lg:flex-row justify-between content-start mb-5">
    <div class="rounded-md border-2 border-gray-200 bg-white p-5 h-full w-full sm:w-3/5">
        <img src="/assets/images/grid2.png" alt="Elements" class="w-full m-auto block">
    </div>
    <div class="ml-0 sm:ml-6 w-full sm:w-2/5">
        <p class="font-bold text-lg m-0">Elements</p>
        <p class="text-sm text-justify m-0">Items follow the 8px grid.</p>
    </div>
</div>

<div class="flex flex-col sm:flex-row md:flex-row lg:flex-row justify-between content-start mb-5">
    <div class="rounded-md border-2 border-gray-200 bg-white p-5 h-full w-full sm:w-3/5">
        <div class="p-3 m-4 bg-gray-400"><p class="font-medium text-gray-700 text-2xl">The quick brown fox jumps over the lazy dog</p></div>
    </div>
    <div class="ml-0 sm:ml-6 w-full sm:w-2/5">
        <p class="font-bold text-lg m-0">Typography</p>
        <p class="text-sm text-justify m-0">Typography does not use a traditional baseline grid. In contrast, line heights are set in 8px increments, and spacing is measured from the edges of text boxes.</p>
    </div>
</div>

<hr>

## Spacing {#spacing}

To facilitate many different screen sizes, we use an 8px grid system that expands the margin between columns in multiples of 8px. This helps in creating responsive pages from fixed-sized items that work on many devices.

<div class="overflow-y-auto scrollbar-w-2 scrollbar-track-gray-lighter scrollbar-thumb-rounded scrollbar-thumb-gray scrolling-touch">
    <table class="w-full text-left border-collapse">
        <thead>
            <tr>
                <th class="z-20 sticky top-0 text-sm font-bold p-0">
                    <div class="pb-2 pr-2 border-b border-gray-200">Size</div>
                </th>
                <th class="z-20 sticky top-0 text-sm font-bold p-0">
                    <div class="pb-2 pl-2 border-b border-gray-200">SASS(Rem function)</div>
                </th>
                <th class="z-20 sticky top-0 text-sm font-bold p-0">
                    <div class="pb-2 pl-2 border-b border-gray-200">SASS (SPACING FUNCTION)</div>
                </th>
            </tr>
        </thead>
        <tbody class="align-baseline">
            <tr>
                <td class="py-2 pr-2 whitespace-nowrap font-bold">0px</td>
                <td class="py-2 pl-2 whitespace-pre">0</td>
                <td class="py-2 pl-2 whitespace-pre">spacing (none)</td>
            </tr>
            <tr>
                <td class="py-2 pr-2 whitespace-nowrap font-bold">8px</td>
                <td class="py-2 pl-2 whitespace-pre">rem(8px)</td>
                <td class="py-2 pl-2 whitespace-pre">spacing(extra-small)</td>
            </tr>
            <tr>
                <td class="py-2 pr-2 whitespace-nowrap font-bold">16px</td>
                <td class="py-2 pl-2 whitespace-pre">rem(16px)</td>
                <td class="py-2 pl-2 whitespace-pre">spacing(small)</td>
            </tr>
            <tr>
                <td class="py-2 pr-2 whitespace-nowrap font-bold">24px</td>
                <td class="py-2 pl-2 whitespace-pre">rem(24px)</td>
                <td class="py-2 pl-2 whitespace-pre">spacing(small-extra)</td>
            </tr>
            <tr>
                <td class="py-2 pr-2 whitespace-nowrap font-bold">32px</td>
                <td class="py-2 pl-2 whitespace-pre">rem(32px)</td>
                <td class="py-2 pl-2 whitespace-pre">spacing(medium)</td>
            </tr>
            <tr>
                <td class="py-2 pr-2 whitespace-nowrap font-bold">40px</td>
                <td class="py-2 pl-2 whitespace-pre">rem(40px)</td>
                <td class="py-2 pl-2 whitespace-pre">spacing(medium-large)</td>
            </tr>
            <tr>
                <td class="py-2 pr-2 whitespace-nowrap font-bold">72px</td>
                <td class="py-2 pl-2 whitespace-pre">rem(75px)</td>
                <td class="py-2 pl-2 whitespace-pre">spacing(large)</td>
            </tr>
        </tbody>
    </table>
    <hr>
</div>