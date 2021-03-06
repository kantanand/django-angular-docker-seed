angular.module('myapp')
    .controller('HomeController', function($scope, Task) {
        $scope.tasks = Task.list();
        $scope.new_task = new Task();

        this.remove = function(index) {
            var task = $scope.tasks.splice(index, 1)[0];
            task.$remove();
        };

        this.save = function() {
            $scope.new_task.$save();
            $scope.tasks.push($scope.new_task);
            $scope.new_task = new Task();
        };

    });
