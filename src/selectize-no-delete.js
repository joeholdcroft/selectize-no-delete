Selectize.define('no-delete', function(options) {
	this.showInput = function() { 
		this.hideInput();
	};
	this.deleteSelection = function() {};
});
