"use strict";

function ToDoCtrl(){
    const vm = this;

    vm.list = [ {Task: "Buy an island", Completed: false}, {Task: "Steal the Declaration of Independance", Completed: true}, {Task: "Inexplicably win an Oscar Award", Completed: true}, {Task: "Overact", Completed: false}];

    vm.addTask = (newTask) => {
        vm.list.push({Task: angular.copy(newTask), Completed: false });
        console.log(vm.list);
    };

    vm.removeTask = (index) => {
        vm.list.splice(index, 1);
    }


}

angular
    .module("ToDoApp")
    .controller("ToDoCtrl", ToDoCtrl)