String.prototype.toKa = function(){
	var text = '', target = this.split(''), chars = 'abgdevzTiklmnopJrstufqRySCcZwWxjhY'
	target.map(function(element, index){
		/*text += index >= 0 ? 
			chars.indexOf(element) != -1 ? 
				String.fromCharCode(chars.indexOf(element) + 4304):
				element:
			''*/
		if(index >= 0){
			if(chars.indexOf(element) != -1){
				if(element != 'Y'){
					text += String.fromCharCode(chars.indexOf(element) + 4304)
				}else{
					text += 'ჸ'
				}
			}else{
				text += element
			}
		}
	})
	return text
}
window.addEventListener('load', function(){
	document.querySelectorAll('.toKa').forEach(function(element){
		element.addEventListener('keypress', function(evt){
			if(document.querySelector('.switcher') == null || document.querySelector('.switcher').checked){
				var charCode = (evt.charCode) ? evt.which : evt.keyCode
				if (this.selectionStart != undefined) {
		            var startPos = this.selectionStart
    				var endPos = this.selectionEnd
		            var myVal = this.value
		            var prefix = '', endfix = '', translated = ''
		            prefix = myVal.substring(0, startPos)
		            endfix = myVal.substring(endPos, this.value.length)
		            translated = String.fromCharCode(charCode).toKa()
		            this.value = prefix + translated + endfix
		            this.selectionStart = startPos + translated.length
		            this.selectionEnd = startPos + translated.length
			    } else {
					this.value += String.fromCharCode(charCode).toKa()
			    } 
				evt.preventDefault()
			}
		})
	})

	document.addEventListener('keypress', function(evt){
		var trgt = document.querySelector('.switcher')
		var charCode = (evt.charCode) ? evt.which : evt.keyCode
		if(trgt == null) return
		if(charCode == 96){
			trgt.checked = trgt.checked == true ? false : true
			evt.preventDefault()
		}
	})
})

 
