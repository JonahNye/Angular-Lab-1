"use strict";

function ToDoCtrl(){
    const vm = this;

    vm.list = [ {Task: "Buy an island", Completed: false}, {Task: "Steal the Declaration of Independance", Completed: true}, {Task: "Inexplicably win an Oscar Award", Completed: true}, {Task: "Buy grocceries", Completed: false}];

    vm.addTask = (newTask) => {
        vm.list.push({Task: angular.copy(newTask), Completed: false });
        console.log(vm.list);
    };
    

   // vm.textToDisplay = [];

    // vm.addListItem = () =>{
    //     // console.log("added word");
    //     vm.randomWord = vm.words[Math.floor(Math.random()*vm.words.length)];
    //     console.log(vm.randomWord);
    //     vm.textToDisplay.push({text: vm.randomWord, styling: "none"});
    //     console.log(vm.textToDisplay);
    // }

    // vm.addPhrase = () => {
    //     vm.randomPhrase = vm.phrases[Math.floor(Math.random()*vm.phrases.length)];
    //     console.log(vm.randomPhrase);
    //     vm.textToDisplay.push({text: vm.randomPhrase, styling: "none"});
    //     console.log(vm.textToDisplay);
    // }

    // vm.addCrazyWord = () => {
    //     vm.randomWord = vm.words[Math.floor(Math.random()*vm.words.length)];
    //     vm.randomClasses = vm.classes[Math.floor(Math.random()*vm.classes.length)];
    //     vm.textToDisplay.push({text: vm.randomWord, styling: vm.randomClasses});
    //     console.log(vm.textToDisplay);
    // }

    // vm.addCrazyPhrase = () => {
    //     vm.randomPhrase = vm.phrases[Math.floor(Math.random()*vm.phrases.length)];
    //     vm.randomClasses = vm.classes[Math.floor(Math.random()*vm.classes.length)];
    //     vm.textToDisplay.push({text: vm.randomPhrase, styling: vm.randomClasses});
    // }
}

angular
    .module("ToDoApp")
    .controller("ToDoCtrl", ToDoCtrl)