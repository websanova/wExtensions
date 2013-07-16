(function($) {
    $.fn.caretPosition = function(posStart, posEnd) {
        var el = $(this).get(0);
        
        if(posStart !== undefined) {
            posEnd = posEnd !== undefined ? posEnd : posStart;

            if (el.setSelectionRange) {
                el.focus();
                el.setSelectionRange(posStart, posEnd);
            }
            else if (el.createTextRange) {
                var range = el.createTextRange();
                range.collapse(true);
                range.moveEnd('character', posStart);
                range.moveStart('character', posEnd);
                range.select();
            }
        }
        else {
            var pos = 0;

            if(el.selectionStart) {
                pos = el.selectionStart;
            } else if(document.selection) {
                el.focus();
                var sel = document.selection.createRange(),
                    selLength = document.selection.createRange().text.length;
                
                sel.moveStart('character', -el.value.length);
                pos = sel.text.length - selLength;
            }

            return pos;
        }
    };
})(jQuery);
