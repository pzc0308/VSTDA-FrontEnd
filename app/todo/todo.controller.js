(function() {
    'use strict';

    angular
        .module('app')
        .controller('ToDoController', ToDoController);

    ToDoController.$inject = ['todoFactory'];

    function ToDoController(todoFactory) {
        var vm = this;
        vm.items = [];

        activate();

        function activate(){
          todoFactory
          .getAll()
          .then(function(response){
            vm.items = response;
        });
        vm.sortField = "name"
        vm.priorities = [{
            name: 'High',
            number: 3
        }, {
            name: "Med",
            number: 2
        }, {
            name: 'Low',
            number: 1
        }];
        vm.addItem = function() {
            todoFactory.create({
                    text: vm.add.item,
                    priority: vm.add.priority.number
                })
                .then(function(response) {
                    vm.items.push(response);
                    console.log(response);
                });

            vm.add = '';
        }
    }
}})();
