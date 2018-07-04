
(function ( $ ) {
    /*
        String prototype toKa translates and returns value
        Jquery function toKa
        @parameter attr name of the field, like: value, id, data-name etc. text (inner Text)
        geoKbd translates on keydown and switcher is class name to be active or inactive
        example of usage 
        $('input').geoKbd('.switcher')
        .switcher is a checkbox class
        just a translation $('div').toKa('text'), $('input').toKa('value'), $('div').toKa('data-text')
        with vanilla js console.log("rame".toKa())
    */
    var chars = 'abgdevzTiklmnopJrstufqRySCcZwWxjhHIVPXFGY', 
        rTxt = String();
  
    String.prototype.toKa = function() {
        
        rTxt = '';
        this.split('')
            .forEach(function(character, index) {
                rTxt += -1 !== chars.indexOf(character) ?
                    String
                        .fromCharCode( chars.indexOf(character) + 4304 ):
                        character;
        }, this);

        return rTxt;

    };

    $.fn.toKa = function(attr){

        this.each(function(){
            attr === 'text' ?
                this.innerText = this.innerText.toKa():
                this.setAttribute(attr, this.getAttribute(attr).toKa());      
        });

        return this;

    }

    $.fn.geoKbd = function(selector){
       
        this.each(function(){
            this.addEventListener('keydown', function(ev){
                if( chars.indexOf(ev.key) !== -1 && $(selector).is(':checked') ){
                    if( undefined !== this.selectionStart ){
                        var fieldVal = this.value;
                        var pos = {
                            start: this.selectionStart,
                            end: this.selectionEnd
                        };
                        var part = {
                            start: fieldVal.substring(0, pos.start),
                            end: fieldVal.substring(pos.end, fieldVal.length)
                        };
                    }
                    this.value = part.start + ev.key.toKa() + part.end;
                    this.selectionStart = part.start.length + ev.key.toKa().length;
                    this.selectionEnd = part.start.length + ev.key.toKa().length;
                    ev.preventDefault();
                }
            }, false);
        });

        return this;
    }

}( jQuery ));
