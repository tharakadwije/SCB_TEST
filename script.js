// create the module and name it scotchApp
	var scotchApp = angular.module('scotchApp', ['ngRoute']);

	// configure our routes
	scotchApp.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'pages/home.html',
				controller  : 'mainController'
			})

			// route for the about page
			.when('/about', {
				templateUrl : 'pages/about.html',
				controller  : 'aboutController'
			})

			// route for the contact page
			.when('/contact', {
				templateUrl : 'pages/contact.html',
				controller  : 'contactController'
			});
	});

	// create the controller and inject Angular's $scope
	scotchApp.controller('mainController', function($scope) {
		// create a message to display in our view
		$scope.message = 'Everyone come and see how good I look!';
	});

	scotchApp.controller('aboutController', function($scope) {
		$scope.message = 'Look! I am an about page.';
	});

	scotchApp.controller('contactController', function($scope) {
		$scope.message = 'Contact us! JK. This is just a demo.';
	});

//

angular.module('scotchApp', ['datatables'])
.controller("MyCtrl", function($scope, $http, DTOptionsBuilder)
{

	console.log("sads");
    $scope.prizes = {};
 	
	var dataSet;

 $scope.go = function(id) {
// $('#laureatesexample').DataTable().row.add(["2.0","Item 2", "Generic Desc", "2"]).draw();
     for(var property in dataSet) {
      if(dataSet[property].$$hashKey == id.$$hashKey) {
          $scope.prizeforlec = dataSet[property]
         break;
      }
   }
   
  }

 	/*$scope.laureatesexample = DTOptionsBuilder.newOptions()
        .withDisplayLength(10)
        .withOption('bLengthChange', true);
*/
    // DataTables configurable options
    $scope.dtOptions = DTOptionsBuilder.newOptions()
        .withDisplayLength(10)
        .withOption('bLengthChange', true);

		console.log("222");

    $http.get('http://api.nobelprize.org/v1/prize.json')
        .success(function(data, status, headers, config) {
        	//console.log("data "+data);
        	dataSet = data.prizes;
            $scope.prizes = data.prizes;
            console.log(data.prizes[0].laureates[0]);
        })
         .error(function(data, status){
       		 console.log(data);
       		 console.log(status);
      });
});



