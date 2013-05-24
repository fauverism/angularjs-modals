directives.directive('ngPopup', function(Popup){
    return {
		restrict: 'A',
		link: function postLink(scope, element, attrs) {
			var ngPopupUrl = attrs['ngPopup'];
			// Could have custom or boostrap modal options here
			var popupOptions = {};

			element.bind( "click", function(){
				Popup.load(ngPopupUrl, scope, popupOptions);
			});
		}
	};
});

directives.directive('ngConfirm', function(Popup) {
	return {
		restrict: 'E',
		link: function postLink(scope, element, attrs) {
			// Could have custom or boostrap modal options here
			var popupOptions = {};
			element.bind("click", function() {
				Popup.confirm(attrs["title"], attrs["actionText"],
						attrs["actionButtonText"], attrs["actionFunction"],
						attrs["cancelButtonText"], attrs["cancelFunction"],
						scope, popupOptions);
			});
		}
	};
});

directives.directive('ngAlert', function(Popup) {
	return {
		restrict: 'E',
		link: function postLink(scope, element, attrs) {
			// Could have custom or boostrap modal options here
			var popupOptions = {};
			element.bind("click", function() {
				Popup.alert(attrs["title"], attrs["text"],
						attrs["buttonText"], attrs["alertFunction"],
						scope, popupOptions);
			});
		}
	};
});
