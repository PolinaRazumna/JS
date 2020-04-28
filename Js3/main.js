(function () {
	area.addEventListener('click', function (event) {
    	var el = document.createElement('div');
        var target = event.target;
        var color = newColor.value;
        el.classList.add('figure');
        el.style.top = event.offsetY + 'px';
        el.style.left = event.offsetX + 'px';
        el.style.backgroundColor = color;
        var figureInput = document.querySelectorAll('[name="figure"]');
        for (var i = 0; i < figureInput.length; i++) {
            if (figureInput[i].checked) {
            	el.classList.add(figureInput[i].value);
            }
        }
        target.appendChild(el);
    })
}());