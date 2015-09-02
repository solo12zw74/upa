(function() {
    "use strict";
    angular
        .module("app.users")
        .directive("formatDate", formatDate);

    function formatDate() {
        return {
            require: "ngModel",
            restrict: 'A',
            link: function (scope, element, attrs, ngModelController) {
                ngModelController.$parsers.push(function (data) {
                    //convert data from view format to model format
                    if (!data)
                        return data;

                    return moment(data).format("YYYY-MM-DD") + "T00:00:00Z";
                });

                ngModelController.$formatters.push(function (data) {
                    //convert data from model format to view format
                    if (!data)
                        return data;

                    return data.substring(0, 10); //converted
                });
            }
        }
    }
})();
