(function() {
  angular.module('mymeanblog')
          .controller('DashboardController', DashboardController);

  DashboardController.$inject = ['$scope'];

  function DashboardController($scope){
    $scope.edit = edit;
    $scope.delete = deletePost;
    $scope.posts = [
      {
        _id: '123434653hg2jfjfj',
        title: 'some title',
        body: 'things and stuff and things and stuff and things and stuff',
        create: new Date(),
        updated: new Date()
      },
      {
        _id: '123434653hg2jfjfj',
        title: 'some title',
        body: 'things and stuff and things and stuff and things and stuff',
        create: new Date(),
        updated: new Date()
      }
    ]

    function edit(post){
      console.log('moving to the edit page');
    }
    function deletePost(post){
      console.log('deleted the post with _id of ' + post._id);
    }
  }
}());
