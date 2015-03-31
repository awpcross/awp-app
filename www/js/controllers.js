angular.module('starter.controllers', ['ngCordova'])


.controller('WelcomeCtrl', function($scope, $state, $ionicSlideBoxDelegate) {

	console.log('WelcomeCtrl | starting ... ') ;
 
  // Called to navigate to the main app
  $scope.signIn = function() {
    //$state.go('tab.trophies');
	$state.go('signin');
  };
  $scope.next = function() {
    $ionicSlideBoxDelegate.next();
  };
  $scope.previous = function() {
    $ionicSlideBoxDelegate.previous();
  };

  // Called each time the slide changes
  $scope.slideChanged = function(index) {
    $scope.slideIndex = index;
  };

	console.log('WelcomeCtrl | done. ') ;
  
})

.controller('SignInCtrl', function($scope, $state, LoginService, $ionicPopup) {

	console.log('SignInCtrl | starting ... ') ;

	$scope.user = {};  

	$scope.authUser = function(user) {
	console.log('SignInCtrl.signIn() | start. ') ;
  
    console.log('SignInCtrl.signIn() | Signing in user : ', user);

	LoginService.loginUser($scope.user.username, $scope.user.password).success(function(user) {
		$state.go('tab.trophies');
	}).error(function(user) {
		var alertPopup = $ionicPopup.alert({
			title: 'Login failed!',
			template: 'Please check your credentials!'
		});
	});
	
    //$state.go('tab.trophies');

	console.log('SignInCtrl.signIn() | end. ') ;
	
  };

	console.log('SignInCtrl | done. ') ;
  
})

.controller('CrossEcomCtrl', function($scope, $state) {
	console.log('CrossEcomCtrl | starting ... ') ;
	console.log('CrossEcomCtrl | done. ') ;
})
.controller('CrossNewsCtrl', function($scope, $state) {
	console.log('CrossNewsCtrl | starting ... ') ;
	console.log('CrossNewsCtrl | done. ') ;
})

.controller('TrophiesCtrl', function($scope, $state, $ionicModal, $timeout) {
	console.log('TrophiesCtrl | start');

	
	
	$scope.contact = {
		firstname: 'John',
		lastname: 'Appleseed',
		email: 'john@apple.com'
	}

	$scope.toWelcome = function(){
		console.log('TrophiesCtrl:toWelcome() | start');
		$state.go('welcome');
		console.log('TrophiesCtrl:toWelcome() | end');
	}
	
	$ionicModal.fromTemplateUrl('templates/modal-prerequisites.html', {
		scope: $scope,
		animation: 'slide-in-up'
	}).then(function(modal) {
		$scope.modal = modal;
		$scope.modal.show();
	})  

  $scope.openModal = function() {
    $scope.modal.show()
  }

  $scope.closeModal = function() {
    $scope.modal.hide();
  };

  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });
	// Execute action on hide modal
	$scope.$on('$ionicView.afterEnter', function() {
		console.log('$ionicView.loaded event captured | start');
		// TODO : check if first render of the modal, event should not show the modal (done through the promise (.then()))
		$scope.modal.show();
		console.log('$ionicView.loaded event captured | end');
	});

	

  
})


.controller('LeaderboardCtrl', function($scope) {
	console.log('LeaderboardCtrl | starting ... ') ;

	$scope.players =  [
		{name: "Jamie Sommers", avatar:"img/avatar-player2.png", score:4500},
		{name: "Willy Wonka", avatar:"img/avatar-player3.png", score:2500},
		{name: "Bart Simpson", avatar:"img/avatar-player4.png", score:1500}
	];
	$scope.doRefresh = function() {
		$scope.players.unshift({name: 'Player ' + Date.now(), avatar:"img/avatar-player1.png", score:500})
		$scope.$broadcast('scroll.refreshComplete');
		$scope.$apply()
	};	
	console.log('LeaderboardCtrl | done. ') ;
})

.controller('ProfileCtrl', function($scope, $state) {
	console.log('CrossNewsCtrl | starting ... ') ;
	console.log('CrossNewsCtrl | done. ') ;
})

/*
.controller('DealersCtrl', function($scope,$ionicLoading, $compile) {

  console.log('DealersCtrl');

    $scope.init = function() {

  console.log('DealersCtrl >> initialize()');

  var myLatlng = new google.maps.LatLng(43.07493,-89.381388);
        
        var mapOptions = {
          center: myLatlng,
          zoom: 16,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        
		var map = new google.maps.Map(document.getElementById("map"),
            mapOptions);
        
        //Marker + infowindow + angularjs compiled ng-click
        var contentString = "<div><a ng-click='clickTest()'>Click me!</a></div>";
        var compiled = $compile(contentString)($scope);

        var infowindow = new google.maps.InfoWindow({
          content: compiled[0]
        });

        var marker = new google.maps.Marker({
          position: myLatlng,
          map: map,
          title: 'Uluru (Ayers Rock)'
        });

        google.maps.event.addListener(marker, 'click', function() {
          infowindow.open(map,marker);
        });

        $scope.map = map;
      }
      
      $scope.centerOnMe = function() {
        if(!$scope.map) {
          return;
        }

        $scope.loading = $ionicLoading.show({
          content: 'Getting current location...',
          showBackdrop: false
        });

        navigator.geolocation.getCurrentPosition(function(pos) {
          $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
          $scope.loading.hide();
        }, function(error) {
          alert('Unable to get location: ' + error.message);
        });
      };
      
      $scope.clickTest = function() {
        alert('Example of infowindow with ng-click')
      };

})
*/
