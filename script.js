/*****************************************************************/
var foodObj ={
  sandwich: {
    name: "Sandwich",
    category: "Food",
    caliories: 250,
    fat: 13,
    isVeg: true
  },
  hamburger: {
    name: "Hamburger",
    category: "Food",
    caliories: 450,
    fat: 30,
    isVeg: false 
  },
  chicken: {
    name: "Chicken",
    category: "Food",
    caliories: 620,
    fat: 35,
    isVeg: false    
  },
  cofee: {  
    name: "Coffee",
    category: "Beverage",
    caliories: 200,
    fat: 7,
    isVeg: true  
  },
  muffin:{
    name: "Muffin",
    category: "Desert",
    caliories: 380,
    fat: 16,
    isVeg: true
  }
};
/*****************************************************************/


/*****************************************************************/
var taskObj ={
  task1: "Total calories from all items",
  task2: "Count all items",
  task3: "Identify current selections",
  task4: "Identify all items",
  task5: "Identify previous selections",
  task6: "Total calories from Beverage and Coffee"
};
/*****************************************************************/


/*****************************************************************/
var fnTaskSum_01 = function(){
  
  var inputAnswer = document.querySelector("#idSetAnalysisInput").value;
  var expectedAggr = /\bsum\b/gi;
  var expectedField = /\bCalories\b/;
  var expectedAnswer = "sum(Calories)";
  
  var tempArrayAggr = inputAnswer.match(expectedAggr);
  
  if(tempArrayAggr === null){
    alert('Make sure you enter sum as aggregation');
    return;
  }
  
  var tempArrayField  = inputAnswer.match(expectedField);
  
  if(tempArrayField === null){
    alert('Make sure you enter the correct field name');
    return;
  }

  if(inputAnswer !== expectedAnswer){
    alert('Check the syntax');
    return;
  }
  
  alert('Good job!!');

};
/*****************************************************************/


/*****************************************************************/
var fnHamburgerMenu = function(){
  $('.level-menu').show();
  $('.level-help').hide();
       
  $( "#idHamburger" ).click(function(){
    $('.level-menu').toggle();
    $('.level-help').toggle();
  }); 
};
/*****************************************************************/


/*****************************************************************/
var fnListItemOnClick = function(){
  $('ul a').click(function() {
      var id = $(this).data('id');
      var myTask = taskObj["task" + id];
      
      $(this).parent().siblings().children().removeClass('list-selected');
      $(this).addClass('list-selected');
      
      $("#idLevelHeader").text('Level ' + id + ' of 20');
      $("#idTask").text(myTask);
  }); 
};
/*****************************************************************/


/*****************************************************************/
var blinking = setInterval(function(){
    $( "#idSetAnalysisInput" ).toggleClass("editor-blinking-color");
 },1000)
 
 
$( "#idSetAnalysisInput" ).keypress(function() {
  $( "#idSetAnalysisInput" ).removeClass("editor-blinking-color");
    clearInterval(blinking);
});
/*****************************************************************/


/*****************************************************************/
$( "#idSubmit" ).click(function() {
    fnTaskSum_01();
});
/*****************************************************************/


/*****************************************************************/
document.addEventListener('keydown', function(event) {
    // if (event.keyCode == 1) {
    //     alert('Left was pressed');

    // }
    // else if (event.keyCode == 2) {
    //     alert('Right was pressed');
    // }
}, true);
/*****************************************************************/


fnHamburgerMenu();
fnListItemOnClick();