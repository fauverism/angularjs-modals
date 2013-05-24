Angular and Boostrap Modal Popups
================

Simple AngularJS modals in the $scope.

**Demo** http://jsfiddle.net/u6QSz/6/

* * *
  
    <ng-alert 
        class='btn' 
        title="My Alert" 
        text="Something happened" 
        button-text="Okay" 
        alert-function="okay()">
        ng-alert
    </ng-alert>
  
    <ng-confirm 
        class='btn' 
        title="My Confirm Box" 
        action-text="Do you want to do this?" 
        action-button-text="Yes Sir" 
        action-function="doIt()" 
        cancel-button-text="No Way" 
        cancel-function="cancel()">
        ng-confirm
    </ng-confirm>
  
    <ng-confirm 
        class='btn' 
        title="My Confirm Box" 
        action-button-text="Yes Sir" 
        action-function="doIt()" 
        cancel-button-text="No Way" 
        cancel-function="cancel()">
        ng-confirm - No Body
    </ng-confirm>
  
    <a class='btn' ng-popup="/echo/html/">
        ng-popup - HTML Templates
    </a>

* * *

Thank you Garry Newman for you example: https://groups.google.com/forum/#!topic/angular/rUttYjuRo2g%5B1-25%5D 

* * *

**Finally:** If you improve this be sure to add you improvements to the wiki: https://github.com/angular/angular.js/wiki/JsFiddle-Examples
