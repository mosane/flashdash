app.controller('WidgetSettingsCtrl', ['$scope', '$timeout','DashboardFactory', '$rootScope', '$uibModalInstance', 'widget', 'GeneratorFactory', '$interval', 'WidgetSettingsFactory',
    function($scope, $timeout, DashboardFactory, $rootScope, $uibModalInstance, widget, GeneratorFactory, $interval, WidgetSettingsFactory) {

      $scope.form = {
        name: widget.name,
        sizeX: widget.sizeX,
        sizeY: widget.sizeY,
        col: widget.col,
        row: widget.row,
        color: widget.color
      };

      $scope.dismiss = function() {
        $uibModalInstance.dismiss();
      };

      $scope.remove = function() {
        $scope.dashboard.charts.splice($scope.dashboard.charts.indexOf(widget), 1);
        $uibModalInstance.close();
      };

      $scope.submit = function() {
        angular.extend(widget, $scope.form);
        //update with new options
        if (widget.type) {
          widget.chart.options = GeneratorFactory[widget.type].options(widget.xparam, widget.yparam);
        }
        $uibModalInstance.close(widget);

        $timeout(function(){
          widget.chart.api.refresh();
          WidgetSettingsFactory.startTicking(widget);
          },400)
      };
    }])

