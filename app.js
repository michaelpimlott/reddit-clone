angular.module('redditClone', [])
.controller('funTimeController', function($scope) {
  $scope.newPost = {};
  $scope.view = {};
  $scope.view.posts = [
    {
      title: "We are the worst",
      author: "a rock",
      imglink: "http://www.geekologie.com/2008/11/24/naked-mcdonalds.jpg",
      description: "say something here",
      votes: "0",
      comments: []
    }
    // {
    //   title: "real title",
    //   author: "buster-ass mark",
    //   imglink: "http://www.geekologie.com/2008/11/24/naked-mcdonalds.jpg",
    //   description: "I too say stuff",
    //   votes: "0",
    //   comments: []
    // }
  ]
});
