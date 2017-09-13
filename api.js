String.prototype.toKa = function(){
	var text = '', target = this.split(''), chars = 'abgdevzTiklmnopJrstufqRySCcZwWxjh'
	target.map(function(element, index){
		text += index >= 0 ? chars.indexOf(element) != -1 ? String.fromCharCode(chars.indexOf(element) + 4304) : element : ''
	})
	return text
}

(function(window, document){
	function Element(parent) {
	    parent = (typeof parent === 'object') ? parent : document.querySelector(parent)
	    this.element = parent
	    var style = this.element.getAttribute('style') || ''
	    this.toogled = false

	    this.create = function(element) {
	        this.element = document.createElement(element)
	        parent.appendChild(this.element)
	        return this
	    }
	    this.css = function(styles) {
	        for (var st in styles) {
	            style += st + ":" + styles[st] + ";"
	        }
	        this.element.setAttribute("style", style)
	        return this
	    }
	    this.attr = function(attr, val = null) {
	        if (val === null)
	            return this.element.getAttribute(attr) || ''
	        this.element.setAttribute(attr, val)
	        return this
	    }
	    this.rmAttr = function(attr) {
	        this.element.removeAttribute(attr)
	        return this
	    }
	    this.on = function(evnt, func) {
	        this.element.addEventListener(evnt, func)
	        return this
	    }
	    this.delete = function() {
	        parent.parentNode.removeChild(parent)
	        return this
	    }
	    this.html = function(html = null) {
	        if (html === null)
	            return this.element.innerHTML || ''
	        this.element.innerHTML = (html instanceof Array) ? html.join('') : html
	        return this
	    }
	    this.val = function(val = null) {
	        if (val === null)
	            return this.element.value || ''
	        this.element.value = val
	        return this
	    }
	}

	function find(val) {
	    return new Element(val)
	}





	function init(argument) {
		var iframe = document.querySelector('.converterEn2Ka')
		if(iframe == null) return

		find(iframe).css({
			'border':'solid 3px rgba(30,30,30,0.9)',
			'height':'auto',
			'box-sizing':'border-box',
			'margin':'auto',
			'text-align':'center'
		})

		var header = find(iframe).create('h3').css({
			'height':'auto',
			'margin-top':'auto',
			'background-color':'rgba(30,30,30,0.9);',
			'text-align':'center',
			'color':'white',
			'border':'solid 0px'
		}).html("<a style=\'text-decoration:none;color:white;\' target=\'_blank\' href=\'https://bichiko.github.io/enToKa/\'>Converter {<small>En2Ka</small>}</a>")

		var txtIn = find(iframe).create('textarea').css({
			'resize': 'vertical',
			'width': '100%',
			'text-align': 'left',
			'box-sizing':'border-box',
			'height': '100px',
			'max-height':'300px',
			'background-color': 'rgba(255,23,3,0.01)',
			'box-sizing': 'border-box',
			'border':'solid 0px',
			'padding': '10px',
			'outline': 'none',
			'margin':'0',
			'background-color': 'rgba(250,250,250,0.7)'
		}).attr('placeholder','Type text here...').element

		var convert = find(iframe).create('button').html('Convert').css({
			'width': '200px',
			'height': '30px',
			'background-color': 'rgba(30,30,30,0.9)',
			'border': 'solid 1px rgba(100,100,33,0.9)',
			'cursor': 'pointer',
			'width': '100%',
			'font-weight': 'bold',
			'margin-top':'-4px',
			'font-size': '21px',
			'color': 'white',
			'transition': 'all 0.5s'
		}).on('mouseover', function(){
			this.style.backgroundColor = 'rgba(10,10,10,0.9)'
			this.style.border = 'solid 1px rgba(100,100,33,0.9)'
			this.style.color = 'rgba(200,200,200,1)'
		}).on('mouseout', function(){
			this.style.backgroundColor = 'rgba(30,30,30,0.9)'
			this.style.border = 'solid 1px rgba(120,120,33,0.7)'
			this.style.color = 'white'
		}).on('click', function(){
			var that = this
			find(this).attr('disabled', '').html('Loading...')
			setTimeout(function(){
				convertIt()
				find(that).rmAttr('disabled').html('Convert')
			},1000)
		})

		function convertIt(){
			var txtOut = document.querySelector('.entokaOuttxt')
			if(txtOut == null){
				txtOut = find(iframe).create('textarea').css({
					'resize': 'vertical',
					'width': '100%',
					'text-align': 'left',
					'box-sizing':'border-box',
					'height': '100px',
					'max-height':'300px',
					'background-color': 'rgba(255,23,3,0.01)',
					'box-sizing': 'border-box',
					'border':'solid 0px',
					'padding': '10px',
					'outline': 'none',
					'margin':'0'
				}).attr('placeholder','Output').attr('class', 'entokaOuttxt')
				.on('click', function(){
					this.select()
				}).element
			}
			txtOut.value = txtIn.value.toKa()
		}
	}

	window.addEventListener('load', init);
})(window, document)

