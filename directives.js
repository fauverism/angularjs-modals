directives.directive('ngPopup', function(PopupService){
    return {
        restrict: 'A',
        link: function postLink(scope, element, attrs) {
            var ngPopupUrl= attrs['ngPopupUrl'];
            // Could have custom or boostrap modal options here
            var popupOptions = {};
            element.bind( "click", function()
            {
                PopupService.load(ngPopupUrl, scope, popupOptions);
            });
        }
    };
});

directives.directive('ngConfirm', function(PopupService) {
    return {
        restrict: 'E',
        link: function postLink(scope, element, attrs) {
            // Could have custom or boostrap modal options here
            var popupOptions = {};
            element.bind("click", function()
            {
                PopupService.confirm(attrs["title"], attrs["actionText"], 
                        attrs["actionButtonText"], attrs["actionFunction"], 
                        attrs["cancelButtonText"], attrs["cancelFunction"], 
                        scope, popupOptions);
            });
        }
    };
});

directives.directive('ngAlert', function(PopupService) {
    return {
        restrict: 'E',
        link: function postLink(scope, element, attrs) {
            // Could have custom or boostrap modal options here
            var popupOptions = {};
            element.bind("click", function()
            {
                PopupService.alert(attrs["title"], attrs["text"], 
                        attrs["buttonText"], attrs["alertFunction"], 
                        scope, popupOptions);
            });
        }
    };
});
