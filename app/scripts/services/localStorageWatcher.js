angular.module('techRadarApp').factory('localStorageWatcher', [
  '$log', '$rootScope', 'localStorage', function ($log, $rootScope, localStorage) {
    var syncWithLocalStorage;
    syncWithLocalStorage = function (storageKey, optionalObjectTemplate) {
      var objectTemplate, storageObject, storageObjectString;
      objectTemplate = optionalObjectTemplate ? optionalObjectTemplate : {};

      /* Initialize the sync by loading the object from local storage to be watched in the $rootScope */
      storageObjectString = localStorage[storageKey];
      storageObject = (storageObjectString ? JSON.parse(storageObjectString) : objectTemplate);
      $rootScope.$watch(function () {
        /* If this object changes then the listener will be called to update local storage */
        return storageObject;
      }, function () {
          /* Save changes to local storage */
          return localStorage[storageKey] = JSON.stringify(storageObject);
      /* Compare object for equality rather than for reference */
      }, true);
      return storageObject;
    };
    return {
      syncWithLocalStorage: syncWithLocalStorage
    };
  }
]);
