/**
 * Object for graphical representation of data.
 * @constructor
 */
View = function() {};

View.windowObjectReference_ = {};

View.strWindowFeatures_ = "width=567,height=560,resizable,scrollbars,status";
//---
View.openedTab_ = '';
//---
View.addPreferences = function(data, dictToOpen, callback) {
  for(var dict in data){
    var text = data[dict].name + "&" + data[dict].code + "&" + data[dict].access;
    var list = 'listFrom';
    var id = 'from';
    for(var index in dictToOpen){
      if(index === data[dict].code){
        list = 'listTo';
        id = 'to';
      }
    }
    $("#" + list).append("<option id='" + id + "_" + text + "'>" + text + "</option>");
  }
  makeSelectColumns('listFrom');
  makeSelectColumns('listTo');
  callback.call();
  log("view.js:View.addPreferences:end");
}

View.logout = function() {
  $("#buttonLogout").remove();
  $(".preferences").remove();
  log("view.js:View.logout:end");
}

View.openDictionary = function(code, name, arrayOfTabs, coords) {
  if(typeof code !== "string" || typeof arrayOfTabs !== "object"){
    log("utility:newWindow:incorrect parameters")
    return;
  }
  for(var tabName in arrayOfTabs){
    if(typeof tabName !== "string"){
      log("utility:newWindow:incorrect parameter in array");
      return;
    }
  }
  if(View.windowObjectReference_[code] == null || View.windowObjectReference_[code].closed){
    View.windowObjectReference_[code] = window.open("about:blank", code, View.strWindowFeatures_);
    View.windowObjectReference_[code].moveTo(coords.x, coords.y);
    View.windowObjectReference_[code].document.write("<div style='position:fixed; width:98.5%; height:150px' id='header'>" +
      "<div style='display: none' id='code'>" + code + "</div>" +
      "<div style='display: none' id='serverDictAddress'>" + serverAddress + "</div>" +
      "<input id='searchText' type='text' onkeypress='Controller.keypressed(event)'>" +
      "<input id='searchButton' onclick='Controller.search()' type='button' value='Search'>" +
      "<input id='searchAllButton' onclick='Controller.searchAll()' type='button' value='Search in all'>" +
      "<br>" +
      "<select id='scrollcontent' size='2' onchange=\"Controller.scrollableOnClick(\'" + arrayOfTabs[0] + "\')\">" +
      "</select>");
    var count = 0;
    for(index in arrayOfTabs){
      var tabName = arrayOfTabs[index];
      count++;
      View.windowObjectReference_[code].document.write("" +
        "<input type='button' class='tabButton' id='" + tabName + "_button' value='" + tabName +
        "' onclick=\"Controller.tabClick(\'" + tabName + "\')\">");
    }
    View.windowObjectReference_[code].document.write("</div><div id='tabCtrl'>");
    count = 0;
    for(index in arrayOfTabs){
      var tabName = arrayOfTabs[index];
      count++;
      View.windowObjectReference_[code].document.write("" +
        "<div class='tab' id='" + tabName + "' style='display: " +
        (count === 1 ? "block" : "none") + "; width:98.5%; position:absolute; bottom:30px; top:165px; overflow:auto'>" +
        "</div>");
    }
    View.windowObjectReference_[code].document.write("</div>");
    View.windowObjectReference_[code].document.write("<div id='statusbar'>" +
                                                     "<div id='left_status_text' style='float:left;margin-left:2px;'></div>" +
                                                     "<div id='right_status_text' style='float:right;margin-right:2px;'>Item(s): </div>" +
                                                     "</div>");
    View.windowObjectReference_[code].document.getElementsByTagName("head")[0].innerHTML = "" +
    "<link rel='stylesheet' type='text/css' href='css/default.css'>" +
    "<link rel='stylesheet' type='text/css' href='css/colors.css'>" +
    "<link rel='stylesheet' type='text/css' href='css/jquery.contextmenu.css'>" +
    "<link rel='stylesheet' type='text/css' href='css/prettify.css'>" +
    "<script>function initWindow() {Model.code_ = $('#code').text();$.contextMenu('destroy', 'body');Model.initContextMenu();}</script>"+
    "<title>" + name + "</title>";
    var preferences_script = View.windowObjectReference_[code].document.createElement('script');
    preferences_script.src = 'js/preferences.js?'+Date.now();
    preferences_script.type = 'text/javascript';
    View.windowObjectReference_[code].document.body.appendChild(preferences_script);
    var jQuery_script = View.windowObjectReference_[code].document.createElement('script');
    jQuery_script.src = 'js/jquery-2.0.3.min.js';
    jQuery_script.type = 'text/javascript';
    View.windowObjectReference_[code].document.body.appendChild(jQuery_script);
    var pretty_script = View.windowObjectReference_[code].document.createElement('script');
    pretty_script.src = 'js/prettify.js';
    pretty_script.type = 'text/javascript';
    View.windowObjectReference_[code].document.body.appendChild(pretty_script);
    var contex_menu_script = View.windowObjectReference_[code].document.createElement('script');
    contex_menu_script.src = 'js/jquery.contextmenu.js';
    contex_menu_script.type = 'text/javascript';
    View.windowObjectReference_[code].document.body.appendChild(contex_menu_script);
    var jqTree_script = View.windowObjectReference_[code].document.createElement('script');
    jqTree_script.src = 'js/tree.js';
    jqTree_script.type = 'text/javascript';
    View.windowObjectReference_[code].document.body.appendChild(jqTree_script);
    var json_script = View.windowObjectReference_[code].document.createElement('script');
    json_script.src = 'js/jquery.json-2.4.min.js';
    json_script.type = 'text/javascript';
    View.windowObjectReference_[code].document.body.appendChild(json_script);
    var utility_script = View.windowObjectReference_[code].document.createElement('script');
    utility_script.src = 'js/utility.js';
    utility_script.type = 'text/javascript';
    View.windowObjectReference_[code].document.body.appendChild(utility_script);
    var dict_script = View.windowObjectReference_[code].document.createElement('script');
    dict_script.src = 'dictionaries/' + code + '.js?'+Date.now();
    dict_script.type = 'text/javascript';
    View.windowObjectReference_[code].document.body.appendChild(dict_script);
    var view_script = View.windowObjectReference_[code].document.createElement('script');
    view_script.src = 'js/view.js?'+Date.now();
    view_script.type = 'text/javascript';
    View.windowObjectReference_[code].document.body.appendChild(view_script);
    var model_script = View.windowObjectReference_[code].document.createElement('script');
    model_script.src = 'js/model.js?'+Date.now();
    model_script.type = 'text/javascript';
    View.windowObjectReference_[code].document.body.appendChild(model_script);
    var controller_script = View.windowObjectReference_[code].document.createElement('script');
    controller_script.src = 'js/controller.js?'+Date.now();
    controller_script.type = 'text/javascript';
    View.windowObjectReference_[code].document.body.appendChild(controller_script);
  }else{
    View.windowObjectReference_[code].focus();
  }
}

View.closeDictionary = function(dictionary){
  View.windowObjectReference_[dictionary].close();
}

View.openHelp = function(){
  window.open("http://nlp.fi.muni.cz/trac/deb2/wiki/DebVisDicManual", 'Help', View.strWindowFeatures_);
}

View.activateTab = function(pageId, content, callback) {
  if(typeof pageId !== "string" || typeof content !== "string"){
    log("view.js:activateTab:incorrect parameters");
    return;
  }
  var setContent = true;
  if(content.length === 0){
    setContent = false;
  }
  View.openedTab_ = pageId;
  var tabCtrl = document.getElementById('tabCtrl');
  var pageToActivate = document.getElementById(pageId);
  for (var i = 0; i < tabCtrl.childNodes.length; i++) {
    var node = tabCtrl.childNodes[i];
    if (node.nodeType == 1) {
      node.style.display = (node == pageToActivate) ? 'block' : 'none';
    }
  }
  if(setContent) pageToActivate.innerHTML = content;
  View.spinnerHide('left_status_text');
  if(typeof callback === "function") callback.call();
  log("view.js:View.activateTab:end");
}

View.showSearch = function(labels) {
  $("#scrollcontent").empty();
  if(labels.length === 0){
    return;
  }
  var count = 0;
  for(var label in labels){
    $("#scrollcontent").append("<option value='" + count + "'>" + labels[label] + "</option>");
    selected = false;
    count++;
  }
  $("#scrollcontent").val("0");
  $("#scrollcontent").change();
  log("view.js:View.showSearch:end");
}

/**
 * Display spinner signaling that server is being asked.
 * @public
 */
View.spinnerShow = function(id) {
  $('#' + id + '_spinner').remove();
  $('#' + id).after('<b id="' + id + '_spinner"><div class="spinner"></div>' +
                    'Please wait <input type="button" onclick="Model.abort(\'' + id + '\')" value="Stop query"></b>');
  $('#' + id + '_spinner').hide().fadeIn(50);
};

/**
 * Hide spinner signaling that server is being asked.
 * @public
 */
View.spinnerHide = function(id) {
  $('#' + id + '_spinner').fadeOut(50, function() {
    $(this).remove();
  });
};

View.writeToLeftStatus = function(text) {
  $('#left_status_text').html(' ' + text);
}

View.writeToRightStatus = function(number) {
  $('#right_status_text').html('Item(s): ' + number + ' ');
}

View.getCoordinations = function(code) {
  var dict = {
    '@x': 65,
    '@y': 24
  };
  var w = View.windowObjectReference_[code];
  if(navigator.appName.indexOf("Netscape") != -1 &&
     parseInt(navigator.appVersion) >= 5){
    dict['@x'] = w.screenX;
    dict['@y'] = w.screenY;
  }
  if(navigator.appName.indexOf("Microsoft") != -1 &&
     parseInt(navigator.appVersion) >= 4){
    dict['@x'] = w.screenLeft;
    dict['@y'] = w.screenTop;
  }
  return dict;
}

