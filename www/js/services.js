angular.module('starter.services', ['appconfig'])

.service('LoginService', ['$q', 'ENV', function($q, env) {
	
	console.log('LoginService | starting... ');

    return {
        loginUser: function(name, pw) {
            var deferred = $q.defer();
            var promise = deferred.promise;

			console.log('LoginService | using appconfig.ENV : "' + env +'"');
			if ( env == 'dev-nobackend') {
				deferred.resolve('Welcome ' + name + '!');
			} else {	

					console.log('LoginService | calling deployd service ... ');
		
			dpd.users.login({username: name, password: pw}, function(session, error) {
				if (error) {
				  console.log('error : ' + error.message);
				  deferred.reject('Wrong credentials.');
				  


				} else {
				  console.log('success !');

				  deferred.resolve('Welcome ' + name + '!');
				//location.href = "/welcome.html";



				}
			});
			console.log('LoginService | done deployd ... ');

			
			/*	if (name == 'p' && pw == 'e') {
					deferred.resolve('Welcome ' + name + '!');
				} else {
					deferred.reject('Wrong credentials.');
				}
			*/
			}
            promise.success = function(fn) {
                promise.then(fn);
                return promise;
            }
            promise.error = function(fn) {
                promise.then(null, fn);
                return promise;
            }
            return promise;
        }
    }
	console.log('LoginService | done. ') ;
	
}]);

/*
.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  }, {
    id: 2,
    name: 'Andrew Jostlin',
    lastText: 'Did you get the ice cream?',
    face: 'https://pbs.twimg.com/profile_images/491274378181488640/Tti0fFVJ.jpeg'
  }, {
    id: 3,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 4,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
*/