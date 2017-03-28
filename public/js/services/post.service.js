(function() {
  angular.module('mymeanblog')
  .factory('PostService', PostService);

  PostService.$inject = ['$http'];

  function PostService($http){
    var postURL = '/posts';

    function getAll(){
      return $http.get(postURL);
    }

    function getOne(id){
      return $http.get(`${postURL}/${id}`);
    }

    function create(post){
      return $http.post(postURL, post);
    }

    function deletePost(post){
      return $http.delete(`${postURL}/${post._id}`);
    }

    function update(post){
      return $http.put(`${postURL}/${post._id}`, post);
    }

    return {
      getAll: getAll,
      getOne: getOne,
      create: create,
      delete: deletePost,
      update: udpate
    }
  }

}());
