angular.module('redditClone', [])
  .controller('funTimeController', function($scope) {
    $scope.newPost = {};
    $scope.newComment = {};
    $scope.view = {};
    $scope.view.newPostSee = false;
    $scope.view.sortOptions = ['date', 'votes', 'title'];
    $scope.view.defaultSort = $scope.view.sortOptions[2];
    $scope.view.valueOf = "-votes";
    $scope.view.search = "";
    $scope.view.posts = [{
      title: "We are the worst",
      author: "a rock",
      imglink: "http://photos1.blogger.com/blogger/2573/1907/1600/stayingalive01.jpg",
      description: "Taxidermy art party beard slow-carb cold-pressed, fap kitsch chartreuse synth. Beard tilde irony, hella farm-to-table shoreditch taxidermy williamsburg listicle sustainable brunch kitsch mixtape authentic seitan. Marfa before they sold out 90's blue bottle offal. Hella farm-to-table flannel fashion axe, forage 8-bit williamsburg readymade put a bird on it four dollar toast butcher freegan. Letterpress godard salvia, vice irony cliche art party semiotics 3 wolf moon church-key migas. Bushwick meh truffaut messenger bag fap, kickstarter squid mumblecore pitchfork fingerstache neutra you probably haven't heard of them. Church-key selvage cardigan leggings 3 wolf moon, cronut literally cornhole dreamcatcher typewriter distillery normcore williamsburg.",
      votes: 0,
      comments: [],
      commentSee: false,
      newCommentSee: false

    }, {
      title: "real title",
      author: "buster-ass mark",
      imglink: "http://www.polyvore.com/cgi/img-thing?.out=jpg&size=l&tid=15055139",
      description: "Brunch street art blue bottle forage man bun narwhal. Pitchfork crucifix biodiesel echo park, direct trade williamsburg shabby chic. Gochujang chia photo booth everyday carry, put a bird on it affogato portland viral cornhole try-hard art party whatever migas sartorial. Asymmetrical four loko PBR&B, wolf 3 wolf moon butcher austin DIY sustainable put a bird on it seitan master cleanse locavore. Cred quinoa freegan photo booth drinking vinegar meggings, four dollar toast put a bird on it fap artisan. Kombucha authentic hoodie listicle etsy umami wayfarers. Gastropub franzen vice, 3 wolf moon pitchfork selfies tattooed health goth.",
      votes: 0,
      comments: [],
      commentSee: false,
      newCommentSee: false

    }, {
      title: "Something else",
      author: "Edward James Almost",
      imglink: "http://www.olmosperfect.com/op-images/stand-and-deliver-thumb.jpg",
      description: "Brunch street art blue bottle forage man bun narwhal. Pitchfork crucifix biodiesel echo park, direct trade williamsburg shabby chic. Gochujang chia photo booth everyday carry, put a bird on it affogato portland viral cornhole try-hard art party whatever migas sartorial. Asymmetrical four loko PBR&B, wolf 3 wolf moon butcher austin DIY sustainable put a bird on it seitan master cleanse locavore. Cred quinoa freegan photo booth drinking vinegar meggings, four dollar toast put a bird on it fap artisan. Kombucha authentic hoodie listicle etsy umami wayfarers. Gastropub franzen vice, 3 wolf moon pitchfork selfies tattooed health goth.",
      votes: 0,
      comments: [],
      commentSee: false,
      newCommentSee: false

    }];

    $scope.setSortOrder = function(newValueOf) {
      $scope.view.defaultSort = newValueOf;
      $scope.view.valueOf = newValueOf === "title" ? newValueOf : '-' + newValueOf;
    };

    $scope.toggleNewPostSee = function(post) {
      $scope.view.newPostSee = !$scope.view.newPostSee;
    };

    $scope.toggleCommentSee = function(post) {
      post.commentsSee = !post.commentsSee;
    }

    $scope.toggleNewCommentSee = function(post) {
      $scope.view.posts.forEach(function(oldPost) {
        if (oldPost !== post) {
          oldPost.newCommentSee = false;
        } else {
          oldPost.newCommentSee = !oldPost.newCommentSee;
        }
      });
      $scope.newComment = {};
    };


    $scope.addComment = function(post, comment) {
      if (comment.author && comment.text) {
        post.comments.push(comment);
        post.newCommentSee = false;
        $scope.newComment = {};
      }
    };

    $scope.addPost = function(post) {
      post.votes = 0;
      post.comments = [];
      post.commentsSee = false;
      $scope.view.posts.push(post);
      $scope.view.newPostSee = false;
      $scope.newPost = {};
      $scope.postForm.$setUntouched();

    };

    $scope.voteChange = function(post, changeValue) {
      post.votes += changeValue;
    };

    $scope.changeColorClass = function(post) {
      if (post.votes > 0) {
        return "positive";
      } else if (post.votes < 0) {
        return "negative";
      } else {
        return "";
      }
    };
  });
