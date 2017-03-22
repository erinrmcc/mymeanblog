(function() {
  angular.module('mymeanblog')
    .factory('UserService', UserService);

    UserService.$inject = ['$http'];

    function UserService($http){
      var userURL = '/users';

      function signup(user){
        return $http.post(userURL, user);
      }

      function login(user){
        return $http.post(userURL, user);
      }

      function getAll(){
        return $http.get(userURL);
      }

      function getOne(){
        return $http.get(`${userURL}/${user._id}`);
      }

      function deleteUser(user){
        return $http.delete(`${userURL}/${user._id}`);
      }

      function update(user){
        return $http.put(`${userURL}/${user._id}`, post);
      }

      return {
        signup: signup,
        login: login,
        getAll: getAll,
        getOne: getOne,
        delete: deleteUser,
        update: update
      }

    }

}());
