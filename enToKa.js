String.prototype.toKa = function(e){
	var text = '', target = this.split(''), chars = 'abgdevzTiklmnopJrstufqRySCcZwWxjhY'
	target.map(function(element, index){
		if(index >= 0){
			if(chars.indexOf(element) !== -1){
				if(element != 'Y'){
					text += String.fromCharCode(chars.indexOf(element) + 4304)
				}else{
					text += 'ჸ'
				}
			}else{
				if(navigator.userAgent.toLowerCase().indexOf('firefox') > -1){
					if(!e.altKey || !e.ctrlKey || !e.metaKey)
						text += element
				}else{
					text += element
				}
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
				// alert(charCode)
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
			    evt.stopPropagation()
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
			evt.stopPropagation()
			evt.preventDefault()
		}
	})
})

 
