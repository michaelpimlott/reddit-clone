angular.module('redditClone', [])
.controller('funTimeController', function($scope) {
  $scope.newPost = {};
  $scope.view = {};
  $scope.view.posts = [
    {
      title: "We are the worst",
      author: "a rock",
      imglink: "http://photos1.blogger.com/blogger/2573/1907/1600/stayingalive01.jpg",
      description: "say something here",
      votes: "0",
      comments: []
    },
    {
      title: "real title",
      author: "buster-ass mark",
      imglink: "http://www.polyvore.com/cgi/img-thing?.out=jpg&size=l&tid=15055139",
      description: "I too say stuff",
      votes: "0",
      comments: []
    }
  ]
});
