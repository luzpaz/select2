(function(){if(window.define)var e=window.define;if(window.require)var t=window.require;if(window.jQuery&&jQuery.fn&&jQuery.fn.select2&&jQuery.fn.select2.amd)var e=jQuery.fn.select2.amd.define,t=jQuery.fn.select2.amd.require;e("select2/i18n/sv",[],function(){return{errorLoading:function(){return"Resultat kunde inte laddas."},inputTooLong:function(e){var t=e.input.length-e.maximum,n="Vänligen sudda ut "+t+" tecken";return n},inputTooShort:function(e){var t=e.minimum-e.input.length,n="Vänligen skriv in "+t+" eller fler tecken";return n},loadingMore:function(){return"Laddar fler resultat…"},maximumSelected:function(e){var t="Du kan max välja "+e.maximum+" element";return t},noResults:function(){return"Inga träffar"},searching:function(){return"Söker…"}}}),t("jquery.select2"),jQuery.fn.select2.amd={define:e,require:t}})();