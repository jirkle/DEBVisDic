/**
 * Object reacting to user input.
 * @constructor
 */
Controller = function() {};

/**
 * Method called after page is loaded.
 * @public
 */
Controller.init = function() {
  Model.login(Controller.bindButtons_);
  $(window).on('unload', Model.closeDicts_);
  log("controller.js:Controller.init:end");
};

Controller.initDict = function() {
  Model.code_ = $("#code").text();
  $.contextMenu('destroy', 'body');
  Model.initContextMenu();
  log("controller.js:Controller.initDict:end");
}

Controller.bindButtons_ = function() {
  Controller.bindAddButton_();
  Controller.bindRemoveButton_();
  Controller.bindOpenButton_();
  Controller.bindHelpButton_();
}

Controller.bindRemoveButton_ = function() {
  $("#buttonRemove").
  off("click").
  on("click", function(){
      var selected = $('#listTo').val();
      for(index in selected){
        $("#listFrom").append("<option id='from_" + selected[index] + "'>" + selected[index] + "</option>");
        $("#listTo option:selected").remove();
      }
      Model.removeDict_(selected);
      log("controller.js:Controller.bindAddButton_:end");
    });

}

Controller.bindAddButton_ = function() {
  $("#buttonAdd").
  off("click").
  on("click", function(){
      var selected = $('#listFrom').val();
      for(index in selected){
        $("#listTo").append("<option id='to_" + selected[index] + "'>" + selected[index] + "</option>");
        $('#listFrom option:selected').remove()
      }
      Model.addDict_(selected);
      log("controller.js:Controller.bindAddButton_:end");
    });
}

Controller.bindOpenButton_ = function() {
  $("#buttonOpen").
  off("click").
  on("click", function(){
      Model.openDicts_();
      log("controller.js:Controller.bindOpenButton_:end");
    });
}

Controller.bindHelpButton_ = function() {
  $("#buttonHelp").
  off("click").
  on("click", function(){
      Model.showHelp_();
      log("controller.js:Controller.bindHelpButton_:end");
    });
}
//---------------
Controller.search = function() {
  var value = $("#searchText").val();
  Model.search($("#code").text(), value);
  log("controller.js:Controller.search:end");
}

Controller.searchAll = function() {
  var value = $("#searchText").val();
  Model.searchAll(value);
  log("controller.js:Controller.searchAll:end");
}

Controller.tabClick = function(tabId) {
  var id = '';
  $('#Edit').attr('class', '');
  $('#scrollcontent')[0].setAttribute("onchange", 'Controller.scrollableOnClick("' + tabId + '")');
  View.spinnerShow('left_status_text');
  var value = $("#searchText").val();
  Model.getTabContent(tabId, value);
  log("controller.js:Controller.tabClick:end");
}

Controller.scrollableOnClick = function(tabId) {
  var tabs = Model.getTabs($('#code').html());
  for(var index in tabs){
    var tab = tabs[index];
    $('#' + tab).empty();
  }
  Controller.tabClick(tabId);
}

Controller.keypressed = function(event){
  if(event.keyCode == 13){
    $('#searchButton').click();
  }
}
//---------------
if (window.opener == null) {
  window.onload = Controller.init;
} else {
  setTimeout(Controller.initDict, 3000);
}

