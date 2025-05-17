'use strict';

/**
 * Modal register controller.
 */
angular.module('docs').controller('ModalRegister', function ($scope, $uibModalInstance) {
    $scope.user = {
        username: '',
        password: '',
        email: ''
    };
    $scope.close = function (user) {
        $uibModalInstance.close(user);
    }
});