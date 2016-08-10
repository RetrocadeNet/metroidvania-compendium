$(document).ready(init);

function init(){
	$('button.show-variants').click(function(){
		var $this = $(this);
		var newText = $this.attr('data-alt-text');
		var oldText = $this.text();
		$this.text(newText);
		$this.attr('data-alt-text', oldText);
		$this.toggleClass('toggled');
		$this.parent().parent().find('.variants-container').slideToggle();
		return false;
	});
	$('button.show-examples').click(function(){
		var $this = $(this);
		var newText = $this.attr('data-alt-text');
		var oldText = $this.text();
		$this.text(newText);
		$this.attr('data-alt-text', oldText);
		$this.toggleClass('toggled');
		$this.parent().parent().find('.examples').slideToggle();
		return false;
	});
}