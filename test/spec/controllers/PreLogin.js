'use strict';

describe('Controller: PreloginCtrl', function () {

  // load the controller's module
  beforeEach(module('StarCityApp'));

  var PreloginCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PreloginCtrl = $controller('PreloginCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
