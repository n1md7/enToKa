String.prototype.toKa = function(){
	var text = '', target = this.split(''), chars = 'abgdevzTiklmnopJrstufqRySCcZwWxjh'
	target.map(function(element, index){
		text += index >= 0 ? chars.indexOf(element) != -1 ? String.fromCharCode(chars.indexOf(element) + 4304) : element : ''
	})
	return text
}
window.addEventListener('load', function(){
	document.querySelectorAll('.toKa').forEach(function(element){
		element.addEventListener('keypress', function(e){
			if(document.querySelector('.switcher') == null || document.querySelector('.switcher').checked){
				if (this.selectionStart != undefined) {
		            var startPos = this.selectionStart
    				var endPos = this.selectionEnd
		            var myVal = this.value
		            var prefix = '', endfix = '', translated = ''
		            prefix = myVal.substring(0, startPos)
		            endfix = myVal.substring(endPos, this.value.length)
		            translated = String.fromCharCode(e.keyCode).toKa()
		            this.value = prefix + translated + endfix
		            this.selectionStart = startPos + translated.length
		            this.selectionEnd = startPos + translated.length
			    } else {
					this.value += String.fromCharCode(e.keyCode).toKa()
			    } 
				e.preventDefault()
			}
		})
	})

	document.addEventListener('keypress', function(e){
		var trgt = document.querySelector('.switcher')
		if(trgt == null) return
		if(e.keyCode == 96){
			trgt.checked = trgt.checked == true ? false : true
			e.preventDefault()
		}
	})
})

 