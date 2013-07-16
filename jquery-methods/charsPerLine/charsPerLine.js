(function($) {
    $.fn.charsPerLine = function() {
        var $this = $(this),
            tagName = $this.prop('tagName').toLowerCase();

        if (tagName === 'input' && $this.prop('type').toLowerCase() === 'text') {
            var val = $this.val(),
                length = val.length || 0;

            return [{string:val, num:length, numTotal:length}];
        }
        else if (tagName === 'textarea') {
            var $text = $this.clone(),
                lineHeight = parseInt($text.css('lineHeight'), 10),
                lines = $this.val().split(/\r?\n/),
                words = [],
                linesArray = [],
                chars = '',
                charsTotal = 0;

            $text.css({
                position: 'absolute',
                visibility: 'hidden',
                left: 0,
                top: -10000,
                width: $this.width(),
                height: $this.css('lineHeight'),
                overflowY: $this.prop('scrollHeight') > $this.innerHeight() ? 'scroll' : 'hidden'
            });

            $('body').append($text);

            for(var i=0, ii=lines.length; i<ii; i++) {
                // reset
                words = lines[i].split(' ');
                chars = '';
                $text.val('');

                for(var j=0, jj=words.length; j<jj; j++) {
                    $text.val($text.val() + words[j] + ' ');

                    // height trigger tells us it's next line
                    if ($text.prop('scrollHeight') > lineHeight) {
                        linesArray.push({
                            string: chars,
                            numChars: chars.length,
                            charsBefore: charsTotal
                        });

                        // reset
                        charsTotal += chars.length;
                        $text.val(words[j] + ' ');
                        chars = words[j] + ' ';
                    }
                    else {
                        chars += words[j] + ' ';
                    }
                }

                // get the last (or first) line (if last line the height trigger will never trigger)
                if(chars !== '') {
                    // cut off the last ' ' that we manually added (only do this on last line).
                    chars = chars.substring(0, chars.length-1); 

                    linesArray.push({
                        string: chars,
                        numChars: chars.length,
                        charsBefore: charsTotal
                    });

                    charsTotal += chars.length;
                }
            }

            $text.remove();

            return linesArray;
        }
        else {
            return [];
        }
    };
})(jQuery);
