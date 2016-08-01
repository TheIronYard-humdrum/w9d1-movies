function MovieCard () {

  return {
    restrict: 'E',
    scope: {
      name: '@'
    },
    templateUrl: 'templates/movie-card.tmpl.html',
    controller: function ($http, $scope) {
      let vm = this;
      $http.get('http://www.omdbapi.com/?i=' + $scope.name + '&plot=short&r=json').then ( (res) => {
        vm.movie = res.data;
      });
    },
    link: function (scope, element, attrs) {
      element.on('mouseover', function () {
        if (scope.vm.movie.Awards !== undefined) {
          let p = element.find('p')
          p = p[3];
          p.classList = 'award ng-binding'
        }
      })
      element.on('mouseleave', function () {
        let p = element.find('p')
        p = p[3];
        p.classList = 'hidden award ng-binding'
      })
    },
    controllerAs: 'vm'
  };
}

MovieCard.$inject = [];
export { MovieCard };