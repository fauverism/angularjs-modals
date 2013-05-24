services.factory('Popup', function ($http, $compile) {
    // Got the idea for this from a post I found. Tried to not have to make this
	// object but couldn't think of a way to get around this
	var popupService = {};

	// Get the popup
	popupService.getPopup = function(create)
	{
		if (!popupService.popupElement && create)
		{
			popupService.popupElement = $('<div class="modal fade hide"></div>' );
			popupService.popupElement.appendTo('body');
		}

		return popupService.popupElement;
	}

	popupService.compileAndRunPopup = function (popup, scope, options) {
		$compile(popup)(scope);
		popup.modal(options);
	}

	// Is it ok to have the html here? should all this go in the directives? Is there another way
	// get the html out of here?
	popupService.alert = function(title, text, buttonText, alertFunction, scope, options) {
		text = (text) ? text : "Alert";
		buttonText = (buttonText) ? buttonText : "Ok";
		var alertHTML = "";
		if (title) {
			alertHTML += "<div class=\"modal-header\"><h3>"+title+"</h3></div>";
		}

		alertHTML += "<div class=\"modal-body\">"+text+"</div>"
					+ "<div class=\"modal-footer\">";

		if (alertFunction) {
			alertHTML += "<button class=\"btn\" ng-click=\""+alertFunction+"\">"+buttonText+"</button>";
		}	else {
			alertHTML += "<button class=\"btn\">"+buttonText+"</button>";
		}

		alertHTML += "</div>";
		var popup = popupService.getPopup(true);
		popup.html(alertHTML);
		if (!alertFunction)
		{
			popup.find(".btn").click(function () {
				popupService.close();
			});
		}

		popupService.compileAndRunPopup(popup, scope, options);
	}

	// Is it ok to have the html here? should all this go in the directives? Is there another way
	// get the html out of here?
	popupService.confirm = function(title, actionText, actionButtonText, actionFunction, cancelButtonText, cancelFunction, scope, options) {
		actionButtonText = (actionButtonText) ? actionButtonText : "Ok";
		cancelButtonText = (cancelButtonText) ? cancelButtonText : "Cancel";

		var popup = popupService.getPopup(true);
		var confirmHTML = "";
		if (title)
			confirmHTML += "<div class=\"modal-header\"><h3>"+title+"</h3></div>";

		if (actionText)
			confirmHTML += "<div class=\"modal-body\">"+actionText+"</div>"

		confirmHTML += "<div class=\"modal-footer\">";

		if (actionFunction) {
			confirmHTML += "<button class=\"btn btn-primary\" ng-click=\""+actionFunction+"\">"+actionButtonText+"</button>";
		} else {
			confirmHTML += "<button class=\"btn btn-primary\">"+actionButtonText+"</button>";
		}

		if (cancelFunction) {
			confirmHTML += "<button class=\"btn btn-cancel\" ng-click=\""+cancelFunction+"\">"+cancelButtonText+"</button>";
		} else {
			confirmHTML += "<button class=\"btn btn-cancel\">"+cancelButtonText+"</button>";
		}

		confirmHTML += "</div>";
		popup.html(confirmHTML);
		if (!actionFunction) {
			popup.find(".btn-primary").click(function () {
				popupService.close();
			});
		}

		if (!cancelFunction) {
			popup.find(".btn-cancel").click(function () {
				popupService.close();
			});
		}
		popupService.compileAndRunPopup(popup, scope, options);
	}

	// Loads the popup
	popupService.load = function(url, scope, options) {
		$http.get(url).success(function (data) {
			var popup = popupService.getPopup(true);

			popup.html(data);
			popupService.compileAndRunPopup(popup, scope, options);

			popup.find(".btn-cancel").click(function () {
				popupService.close();
			});
		});
	}

	popupService.close = function() {
		var popup = popupService.getPopup()
		if (popup)
			popup.modal('hide');
	}

	return popupService;
});
