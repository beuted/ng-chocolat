app = angular.module('chocolatDemo', ['chocolat']);

app.controller('demoCtrl', ['$scope', function($scope) {
    $scope.configInScope = { loop: true, imageSize: 'cover' }

    $scope.imagesInScope = [
        {src: 'demo-images/1.jpg', title: 'caption 1'},
        {src: 'demo-images/6.jpg', title: 'caption 2'},
        {src: 'demo-images/8.jpg', title: 'caption 3'}
    ]

    $scope.instance = {};

    $scope.open = function() {
        console.log('open start');
        var def = $scope.instance.api().open();
        def.done(function() {
            console.log('open done');
        });
    };

    $scope.close = function() {
        console.log('close start');
        var def = $scope.instance.api().close();

        def.done(function(){
            console.log('close done');
        });
    };


    $scope.prev = function() {
        console.log('prev start');
        var def = $scope.instance.api().prev();

        def.done(function() {
            console.log('prev done');
        });
    };

    $scope.next = function() {
        console.log('next start');
        var def = $scope.instance.api().next();

        def.done(function() {
            console.log('next done');
        });
    };

    $scope.cover = function() {
        console.log('cover mode start');
        $scope.instance.api().set('imageSize', 'cover');
        var def = $scope.instance.api().place();

        def.done(function() {
            console.log('cover mode done');
        })
    };

    $scope.contain = function() {
        console.log('contain mode start');
        $scope.instance.api().set('imageSize', 'contain');
        var def = $scope.instance.api().place();

        def.done(function() {
            console.log('contain mode done');
        })
    };
}]);
