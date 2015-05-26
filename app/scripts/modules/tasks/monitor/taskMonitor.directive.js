'use strict';


angular.module('spinnaker.tasks.monitor.directive', [])
  .directive('taskMonitor', function () {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'scripts/modules/tasks/monitor/taskMonitor.html',
      scope: {
        taskMonitor: '=monitor'
      }
    };
  }
);
