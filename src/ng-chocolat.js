angular.module('chocolat', [])
.directive('chocolat', function() {
    return {
        // Restrict it to be an attribute in this case
        restrict: 'A',

        scope: {
            /// Instance of the object returned by chocolat to use the api()
            instance: '=',
            config: '&',
            images: '&',
            container: '@',
            imageSelector: '@',
            linkImages: '@',
            setTitle: '@',
            className: '@',
            imageSize: '@',
            fullScreen: '@',
            loop: '@',
            duration: '@',
            firstImage: '@',
            lastImage: '@',
            separator2: '@',
            setIndex: '@'
        },
        // responsible for registering DOM listeners as well as updating the DOM
        link: function(scope, element, attrs) {
            var config;
            if (attrs.config) {
                config = scope.$eval(scope.config);
            } else {
                config =
                {
                    images: scope.$eval(scope.images),
                    container: attrs.container,
                    imageSelector: attrs.imageSelector,
                    linkImages: attrs.linkImages,
                    setTitle: attrs.setTitle,
                    className: attrs.className,
                    imageSize: attrs.imageSize,
                    fullScreen: attrs.fullScreen,
                    loop: attrs.loop,
                    duration: attrs.duration,
                    firstImage: attrs.firstImage,
                    lastImage: attrs.lastImage,
                    separator2: attrs.separator2,
                    setIndex: attrs.setIndex
                };
            }

            scope.instance = $(element).Chocolat(config).data('chocolat');
        }
    };
});
