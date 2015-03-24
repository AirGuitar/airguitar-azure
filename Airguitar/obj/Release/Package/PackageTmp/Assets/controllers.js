// Root Scope Controller
webAppRoot
    .controller('root',
    ['$scope', '$rootScope', '$route', '$routeParams', '$location', function ($scope, $rootScope, $route, $routeParams, $location) {
        $scope.$on('$routeChangeSuccess', function (e, current, previous) {
            $scope.activeViewPath = $location.path();
            $rootScope.pageTitle = $route.current.title;
            $rootScope.pageSubTitle = $route.current.subtitle;
            $rootScope.breadcrumbs = $route.current.breadcrumbs;
            $rootScope.icon = $route.current.icon;
        });
    }]);



// --- Home Controllers --- //
webAppRoot
    .controller('HomeController', ['$scope', function ($scope) { }]);
// !--- Home Controllers --- //



// --- Properties Controllers --- //
webAppRoot
    .controller('PropertyController', ['$scope', function ($scope) { }]);
webAppRoot
    .controller('PropertyHistoryController', ['$scope', function ($scope) { }]);
webAppRoot
    .controller('PropertyNotesMaintController', ['$scope', '$http', '$firebase', function ($scope, $http, $firebase) {
        var ref = new Firebase("https://is429-leroylimll.firebaseio.com/");
        $scope.maints = $firebase(ref.child("maints")).$asArray();
    }]);
webAppRoot
    .controller('PropertyNotesChecksController', ['$scope', '$http', '$firebase', function ($scope, $http, $firebase) {
        var ref = new Firebase("https://is429-leroylimll.firebaseio.com/");
        $scope.checks = $firebase(ref.child("checks")).$asArray();
    }]);
webAppRoot
    .controller('PropertyNotesBreakageController', ['$scope', '$http', '$firebase', function ($scope, $http, $firebase) {
        var ref = new Firebase("https://is429-leroylimll.firebaseio.com/");
        $scope.breakages = $firebase(ref.child("breakages")).$asArray();
    }]);
webAppRoot
    .controller('PropertyHkScheduleController', ['$scope', function ($scope) { }]);
webAppRoot
    .controller('PropertyHKReportsController', ['$scope', function ($scope) { }]);
// !--- Properties Controllers --- //



// --- Reporting Controllers --- //
webAppRoot
    .controller('ReportingMgmtController', ['$scope', '$http', '$firebase', function ($scope, $http, $firebase) {
        var ref = new Firebase("https://is429-leroylimll.firebaseio.com/");
        $scope.reports = $firebase(ref.child("reports")).$asArray();
    }]);
webAppRoot
    .controller('ReportingAcctController', ['$scope', '$http', '$firebase', function ($scope, $http, $firebase) {
        var ref = new Firebase("https://is429-leroylimll.firebaseio.com/");
        $scope.reports = $firebase(ref.child("reports")).$asArray();
    }]);
// !--- Reporting Controllers --- //



// --- Miscellaneous Controllers --- //
webAppRoot
    .controller('APIController', ['$scope', function ($scope) { }]);

webAppRoot
    .controller('FeedbackController', ['$scope', '$http', '$firebase', function ($scope, $http, $firebase) {
        // ------------Scope Methods ------------//
        $scope.reset = function () {
            //Reset form
            $scope.error = false;
            $scope.incomplete = true;

            //Initialize form fields
            $scope.feedback.fullname = '';
            $scope.feedback.email = '';
            $scope.feedback.faculty = 'LKCSB';
            $scope.feedback.start = '';
            $scope.feedback.stop = '';
            $scope.feedback.continue = '';
        };

        $scope.save = function () {
            //Declare Firebase
            //We can replace this with a Firebase url later on.
            var ref = new Firebase("https://is429-leroylimll.firebaseio.com/");
            $scope.feedbacks = $firebase(ref.child("feedback")).$asArray();

            //Save feedback to Firebase
            $scope.feedbacks.$add($scope.feedback);

            //Save using asp.net mvc controller
            //$http({
            //    method: 'PUT',
            //    url: '/customer',
            //    data: customers
            //}).success(function (data, status, headers, config) {
            //    alert('success');
            //}).error(function (data, status, headers, config) {
            //    alert('error');
            //});

            //Reset form
            $scope.reset();
        };
        // !------------Scope Methods ------------//


        //Declare new empty feedback object
        $scope.feedback = {};

        //Initialize form state
        $scope.error = false;
        $scope.incomplete = true;

        //Reset form
        $scope.reset();
    }]);

webAppRoot
    .controller('SupportController', ['$scope', function ($scope) { }]);
// !--- Miscellaneous Controllers --- //