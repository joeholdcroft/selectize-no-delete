Selectize.define('no-clear', function(options) {
	this.showInput = function() { 
		this.hideInput();
	};
	this.deleteSelection = function() {};
});
