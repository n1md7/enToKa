String.prototype.toKa = function(){
	var text = '', target = this.split(''), chars = 'abgdevzTiklmnopJrstufqRySCcZwWxjh'
	target.map(function(element, index){
		text += index >= 0 ? chars.indexOf(element) != -1 ? String.fromCharCode(chars.indexOf(element) + 4304) : element : ''
	})
	return text
}

document.querySelectorAll('.toKa').forEach(function(element){
	element.onkeypress=function(e){
		if(document.querySelector('.checker').checked){
			this.value +=String.fromCharCode(e.keyCode).toKa()
			return false
		}
	}
})

document.onkeypress = function(e){
	var trgt = document.querySelector('.checker')
	if(e.keyCode == 96){
		trgt.checked = trgt.checked == true ? false : true
		return false
	}
}