// Main configuration

var webAppRoot = angular.module('myApp', ['ngRoute', 'ngResource', 'firebase']);

webAppRoot
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/home', { templateUrl: 'main/home', controller: 'HomeController', title: 'Home', subtitle: 'welcome', breadcrumbs: ['Home'], icon: 'fa fa-home' })

            .when('/properties/prinsephostel', { templateUrl: function (params) { return 'property/Index?PropertyName=' + params.PropertyName; }, controller: 'PropertyController', title: 'Prinsep Hostel', subtitle: 'Graphical View', breadcrumbs: ['Properties', 'Prinsep Hostel'], icon: 'fa fa-building' })
            .when('/properties/prinsephostel/section', { templateUrl: function (params) { return 'property/ViewBySection?ID=' + params.PropertyName; }, controller: 'PropertyController', title: 'Prinsep Hostel', subtitle: 'Graphical View', breadcrumbs: ['Properties', 'Prinsep Hostel'], icon: 'fa fa-building' })
            .when('/properties/prinsephostel/history', { templateUrl: 'property/History', controller: 'PropertyHistoryController', title: 'History', subtitle: 'Prinsep Hostel', breadcrumbs: ['Properties', 'Prinsep Hostel', 'History'], icon:'fa fa-history' })
            .when('/properties/prinsephostel/notes/maintainence', { templateUrl: 'property/Notes_Maintainence', controller: 'PropertyNotesMaintController', title: 'Notes: Maintainence', subtitle: 'Prinsep Hostel', breadcrumbs: ['Properties', 'Prinsep Hostel', 'Notes', 'Maintainence Tickets'], icon: 'fa fa-ticket' })
            .when('/properties/prinsephostel/notes/checks', { templateUrl: 'property/Notes_Checks', controller: 'PropertyNotesChecksController', title: 'Notes: Checks To Be Done', subtitle: 'Prinsep Hostel', breadcrumbs: ['Properties', 'Prinsep Hostel', 'Notes', 'Checks to be Done'], icon: 'fa fa-wrench' })
            .when('/properties/prinsephostel/notes/breakages', { templateUrl: 'property/Notes_Breakages', controller: 'PropertyNotesBreakageController', title: 'Notes: Breakage', subtitle: 'Prinsep Hostel', breadcrumbs: ['Properties', 'Prinsep Hostel', 'Notes', 'Breakages'], icon: 'fa fa-bolt' })
            .when('/properties/prinsephostel/housekeeping/schedule', { templateUrl: 'property/Housekeeping_Schedule', controller: 'PropertyHkScheduleController', title: 'Housekeeping Schedule', subtitle: 'Prinsep Hostel', breadcrumbs: ['Properties', 'Prinsep Hostel', 'Housekeeping', 'Schedule'], icon: 'fa fa-calendar' })
            .when('/properties/prinsephostel/housekeeping/reports', { templateUrl: 'property/Housekeeping_Reports', controller: 'PropertyHKReportsController', title: 'Housekeeping Reports', subtitle: 'Prinsep Hostel', breadcrumbs: ['Properties', 'Prinsep Hostel', 'Housekeeping', 'Reports'], icon: 'fa fa-newspaper-o' })

            .when('/Reporting/Management', { templateUrl: 'Reporting/Reporting_Mgmt', controller: 'ReportingMgmtController', title: 'Management Reports', subtitle: 'Prinsep Hostel', breadcrumbs: ['Reporting', 'Management Reports'], icon: 'fa fa-cubes' })
            .when('/Reporting/Accounts', { templateUrl: 'Reporting/Reporting_Accounts', controller: 'ReportingAcctController', title: 'Accounting Reports', subtitle: 'Prinsep Hostel', breadcrumbs: ['Reporting', 'Accounting Reports'], icon: 'fa fa-bar-chart' })
            .when('/Reporting/Invoice', { templateUrl: 'Reporting/Reporting_Invoices', controller: 'ReportingInvoiceController', title: 'Invoices', subtitle: 'Prinsep Hostel', breadcrumbs: ['Reporting', 'Invoice Reports'], icon: 'fa fa-credit-card' })

            .when('/api', { templateUrl: 'main/APIs', controller: 'APIController', title: 'API Integration', subtitle: 'integrate with your other systems', breadcrumbs: ['API Integration'], icon: 'fa fa-cogs' })
            .when('/feedback', { templateUrl: 'main/FeedBack', controller: 'FeedbackController', title: 'Feedback', subtitle: 'help us improve this product', breadcrumbs: ['Feedback'], icon: 'fa fa-quote-left' })
            .when('/support', { templateUrl: 'main/Support', controller: 'SupportController', title: 'Support', subtitle: 'feel free to contact us', breadcrumbs: ['Support'], icon: 'fa fa-support' })

            .otherwise({ redirectTo: '/home' });
    }]);