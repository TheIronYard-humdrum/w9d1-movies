import angular from 'angular';

import { MainController } from './main.controller';
import { MovieCard } from './movie-card.directive';

angular
  .module('app', [])
  .controller('MainController', MainController)
  .directive('movieCard', MovieCard)
;