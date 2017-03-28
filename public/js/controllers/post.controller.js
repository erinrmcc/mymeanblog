(function() {
  angular.module('mymeanblog')
          .controller('PostController', PostController);

  PostController.$inject = ['$scope', 'PostService', '$routeParams'];

  function PostController($scope, PostService, $routeParams){
    $scope.create = create;
    $scope.edit = edit;
    $scope.mockPost = {
      _id: '9uewtpoiudf09u340u5',
      title: 'The greatest thing ever',
      body: 'stuff and things and stuff and things and stuff',
      created: new Date(),
      updated: new Date()
    };

    var id = $routeParams.postId;
    PostService.getOne(id)
                .then(function(){
                  console.log('Success');
                })
                .catch(function(){
                  console.log('error');
                })

    function edit(post){
      console.log('editing the post!');
    }

    function create(post){
      PostService.create(post);
    }
  }

}());
