/**
 * Dynamic max height plugin for jQuery created by Joan Claret 
 *
 * @copyright Copyright 2015 Joan Claret
 * @license   MIT
 * @author    Joan Claret
 * @version   1.0
 *
 * Licensed under The MIT License (MIT).
 * Copyright (c) 2015 Joan Claret
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

;(function($) {

    var dynamicMaxHeight = function(options) {

        /**
         * Check if target layer height is higher than max height
         *
         */

        var heightControl = (function(selector){
            
            $this = $(selector);
            $this.each(function(i, selector) {

                var maxItemHeight = $this.data('maxheight');
                var itemHeight = $this.find('.dynamic-wrap').outerHeight(); // get item height

                $this.attr("data-itemheight", itemHeight ); // store itemheight as attribute

                if (itemHeight > maxItemHeight){
                   $this.addClass('height-active');
                   $this.find('.dynamic-wrap').css('max-height', maxItemHeight);
                   $this.find(options.trigger).css('display','inline-block'); // display "show more" button 
                }

            });

        }); 

        /**
         * Show more / show less funcionality
         *
         */

        var showMoreShowLess = (function(selector, targetDiv){

            $(selector).each(function() {

                var $this = $(this); // clicked element
                var $targetDiv = $this.closest(targetDiv); // target div

                var originalText = $this.attr( 'title' ); // get original button text
                var replaceText;

                if($this.data('replace-text')){
                    replaceText = $this.data('replace-text');
                }
                else{
                    replaceText = "show less";
                }
                $this.click(function(e){

                    var itemHeight = $targetDiv.data('itemheight');    // get original height
                    var maxItemHeight = $targetDiv.data('maxheight');  // get max height
                    
                    if ($targetDiv.hasClass('height-active')) {
                        // height control disabled
                        $this.html(replaceText);
                        $targetDiv.find('.dynamic-wrap').css('max-height', itemHeight);
                    }
                    else{
                        // height control enabled
                        $this.html(originalText);
                        $targetDiv.find('.dynamic-wrap').css('max-height', maxItemHeight);
                    }
                    $targetDiv.toggleClass('height-active');
                    e.preventDefault();
                }); 
            });
        }); 
        return{
            heightControl: heightControl,
            showMoreShowLess: showMoreShowLess
        };
    };
    
    $.fn.dynamicMaxHeight = function(options) {

        var dynamic = dynamicMaxHeight(options);

        return this.each(function() {
            dynamic.heightControl($(this), options);
            dynamic.showMoreShowLess(options.trigger, $(this));
            
        });
    };
    
})(window.jQuery);