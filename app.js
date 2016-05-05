angular.module('redditClone', [])
.controller('funTimeController', function($scope) {
  $scope.it = "good old fashioned jerky";
  $scope.view = {};
  $scope.view.posts = [
    {
      title: "fake title",
      author: "Jojo Mctoots",
      imglink: "http://toponehitwonders.com/wp-content/uploads/2010/10/StayingAlivetravolta2.jpg",
      description: "say something here",
      votes: "0",
      comments: []
    }
  ]
});
