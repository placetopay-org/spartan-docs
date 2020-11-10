<div>
    <iframe
        class="w-full"
        srcdoc='@include("_partials.iframe_content", ['slot' => $slot])'
        style="overflow: auto; height: {{ $height ?? '100px'}}"
    ></iframe>
</div>
