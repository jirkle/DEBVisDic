/**
 * Object containing data and communicating with server.
 * @constructor
 */
Model = function(){};

Model.dicts_ = {};

Model.dictsToOpen_ = {};

Model.serverAddress_ = '';

Model.coordinations = {};
//---
Model.queryList_ = {};

Model.selectedOption_ = 0;

Model.code_ = "";

Model.abort_ = false;

Model.lookUpIn_ = {};

Model.lookUpBy_ = {};

Model.lookUpSearch_ = {};

Model.autoLookUpSearch_ = true;
//---
Model.login = function(callback) {
  View.spinnerShow('load');
  Model.serverAddress_ = serverAddress;
  $.get(Model.serverAddress_ + "doc?action=connect",
      function(data){
        if(!Model.abort_){
          data = typeof data === 'string' ? $.parseJSON(data) : data;
          Model.dicts_ = data.dicts;
          $.get(Model.serverAddress_ + "doc?action=get_settings",
            function(data){
              data = typeof data === 'string' ? $.parseJSON(data) : data;
              Model.coordinations = typeof data === 'undefined' ? {'settings': {'dict': {}}} : data;
              for(var index in Model.coordinations.settings.dict){
                var dictCoord = Model.coordinations.settings.dict[index];
                Model.dictsToOpen_[index] = true;
              }
              var dicts = [];
              var count = 0;
              for(dictionary in Model.dicts_){
                dicts.push({
                  "code": Model.dicts_[dictionary].code,
                  "name": Model.dicts_[dictionary].name,
                  "access": Model.dicts_[dictionary].access
                });
              }
              View.addPreferences(dicts, Model.coordinations.settings.dict, callback);
              Model.openDicts_();
              View.spinnerHide('load')
            });
        }else{
          Model.abort_ = false
        }
      log("model.js:Model.login:end");
  });
}

Model.removeDict_ = function(selected) {
  for(var index in selected){
    var name = selected[index];
    var code = name.split(/\s+\s+/)[1];
    delete Model.dictsToOpen_[code];
  }
  log("model.js:Model.removeDict_:end");
}

Model.addDict_ = function(selected) {
  for(var index in selected){
    var name = selected[index];
    var code = name.split(/\s+\s+/)[1];
    Model.dictsToOpen_[code] = true;
  }
  log("model.js:Model.addDict_:end");
}

Model.openDicts_ = function() {
  for(var dictionary in Model.dictsToOpen_){
    var name = Model.getNameFromCodeDictionary_(dictionary);
    var coord = {
      'x': 65,
      'y': 24
    };
    for(var index in Model.coordinations.settings.dict){
      var dictCoord = Model.coordinations.settings.dict[index];
      if(index === dictionary){
        coord = {
          'x': parseInt(dictCoord['@x']),
          'y': parseInt(dictCoord['@y'])
        };
      }
    }
    View.openDictionary(dictionary, name, Model.getTabs(dictionary), coord);
  }
  log("model.js:Model.openDicts_:end");
}

Model.closeDicts_ = function() {
  Model.coordinations = {'settings': {'dict': {}}};
  for(var dictionary in Model.dictsToOpen_){
    if(View.windowObjectReference_[dictionary].closed){
      continue;
    }
    var name = Model.getNameFromCodeDictionary_(dictionary);
    View.closeDictionary(dictionary);
    var settings = Model.coordinations.settings;
    if(typeof settings.dict === 'undefined'){
      settings.dict = {};
    }
    var coords = View.getCoordinations(dictionary);
    settings.dict[dictionary] = coords;
  }
  Model.saveCoordinations();
  log("model.js:Model.closeDicts_:end");
}

Model.showHelp_ = function() {
  View.openHelp();
  log("model.js:Model.showHelp_:end");
}

Model.getTabs = function(code) {
  switch(code){
    case "cdb_lu":
      return ['Form', 'Examples', 'Edit', 'XML'];
    case "cdb_id":
      return ['Preview', 'Edit', 'XML'];
    case "cdb_syn":
    case "odwn":
      return ['Concept', 'Relations', 'Tree', 'Revtree', 'Edit', 'XML'];
    case "sumo":
      return ['Preview', 'Tree', 'Revtree', 'XML'];
    default:
      return ['Preview', 'Tree', 'Revtree', 'Edit', 'XML'];
  }
}
//-------
Model.search = function(code, value) {
  if(value === ''){
    View.writeToRightStatus('0');
    log("model.js:Model.search:end");
    return;
  }
  Model.autoLookUpSearch_ = true;
  Model.autoLookUpSearch(code, true);
  View.spinnerShow('searchAllButton');
  View.writeToLeftStatus('Querying a dictionary for a list of words...');
  $.get(Model.serverAddress_ + "/" + code + "?action=queryList&word=" + encodeURIComponent(value),
      function(data){
        Model.code_ = $("#code").text();
        if(!Model.abort_){
          Model.queryList_ = (typeof data === "string") ? $.parseJSON(data) : data;
          var labels = [];
          for(var label in Model.queryList_){
            labels.push(Model.queryList_[label].label);
          }
          View.spinnerHide('searchAllButton');
          View.writeToLeftStatus('Querying a dictionary is complete. Found ' + Model.queryList_.length + ' item(s).');
          View.showSearch(labels);
          View.writeToRightStatus(Model.queryList_.length);
          log("model.js:Model.search:end");
        }else{
          View.writeToLeftStatus('Querying a dictionary for a list of words was aborted');
          Model.abort_ = false;
        }
        $.contextMenu('destroy', 'body');
        Model.initContextMenu();
      });
}

Model.searchAll = function(value) {
  for(dictId in window.opener.Model.dictsToOpen_){
    if(window.opener.Model.dictsToOpen_[dictId] === true){
      window.opener.View.windowObjectReference_[dictId].document.getElementById('searchText').value = value;
      window.opener.View.windowObjectReference_[dictId].Controller.search();
    }
  }
  log("model.js:Model.searchAll:end");
}

Model.getTabContent = function(tabId, value){
  if($('#' + tabId).html().length !== 0){
    View.activateTab(tabId, '');
    return;
  }
  var content;
  Model.selectedOption_ = $("#scrollcontent").val();
  Model.autoLookUpSearch($('#code').html(), false);
  var id = '';
  if(typeof Model.queryList_[Model.selectedOption_] !== "undefined"){
    id = Model.queryList_[Model.selectedOption_].value;
    View.writeToLeftStatus('Querying a dictionary for a given word...');
  }
  switch(tabId){
    case "Preview":
    case "Form":
    case "Concept":
      Model.getPreviewContent_(id, tabId);
      break;
    case "XML":
      Model.getXmlContent_(id, tabId);
      break;
    case "Tree":
      Model.getTreeContent_(id, tabId, 'ILR');
      break;
    case "Revtree":
      Model.getTreeContent_(id, tabId, 'RILR');
      break;
    case "Edit":
      Model.getEditContent_(id, tabId);
      break;
    case "Relations":
      Model.getRelationsContent_(id, tabId);
      break;
    case "Examples":
      Model.getExamplesContent_(id, tabId);
      break;
    default:
      content = "Not known tab with id :" + tabId;
      View.activateTab(tabId, content);
  }
  log("model.js:Model.getTabContent:end");
}

Model.getPreviewContent_ = function(id, tabId) {
  if(id === ""){
    View.spinnerHide('left_status_text');
    return;
  }
  $.get(Model.serverAddress_ + "/" + Model.code_ + "?action=runQuery&query=" + id + "&outtype=html",
    function(data){
      if(!Model.abort_){
        View.activateTab(tabId, data);
        View.writeToLeftStatus('Querying a dictionary is complete');
      }else{
        View.writeToLeftStatus('Querying a dictionary was aborted');
        Model.abort_ = false;
      }
      log("model.js:Model.getPreviewContent_:end");      
    });
}

Model.getXmlContent_ = function(id, tabId) {
  if(id === ""){
    View.spinnerHide('left_status_text');
    return;
  }
  $.get(Model.serverAddress_ + "/" + Model.code_ + "?action=runQuery&query=" + id + "&outtype=plain",
    function(data){
      if(!Model.abort_){
        data = data.replace(new RegExp('<', 'g'), '&lt;');
        data = data.replace(new RegExp('>', 'g'), '&gt;');
        View.activateTab(tabId, '<pre class="prettyprint lang-xml">' + data + '</pre>', prettyPrint);
        View.writeToLeftStatus('Querying a dictionary is complete');
      }else{
        View.writeToLeftStatus('Querying a dictionary was aborted');
        Model.abort_ = false;
      }
      log("model.js:Model.getXmlContent_:end");
    });
}

Model.getTreeContent_ = function(id, tabId, orientation) {
  if(id === ""){
    View.spinnerHide('left_status_text');
    return;
  }
  $.get(Model.serverAddress_ + "/" + Model.code_ + "?action=runQuery&query=" + id + "&outtype=tree&arg=" + orientation,
    function(data){
      if(!Model.abort_){
        data = typeof data === 'string' ? $.parseJSON(data) : data;
        var body = "<ul id='koren_" + orientation + "'></ul>";
        View.writeToLeftStatus('Querying a dictionary is complete. Found ' + data.length + ' items(s).');
        View.activateTab(tabId, body, function(){ return Tree.addData(data, orientation);});
      }else{
        View.writeToLeftStatus('Querying a dictionary was aborted');
        Model.abort_ = false;
      }
      log("model.js:Model.getTreeContent_:end");
    });
}

Model.getEditContent_ = function(id, tabId){
  if(id === ""){
    View.spinnerHide('left_status_text');
    View.activateTab(tabId, "", function(){ return showEditHTML(tabId);});
  }else{
    $.get(Model.serverAddress_ + "/" + Model.code_ + "?action=runQuery&query=" + id + "&outtype=editor",
      function(data){
      if(!Model.abort_){
        data = typeof data === 'string' ? $.parseJSON(data) : data;
        View.activateTab(tabId, "", function(){ return showEditHTML(tabId, data);});
        View.writeToLeftStatus('Querying a dictionary is complete');
      }else{
        View.writeToLeftStatus('Querying a dictionary was aborted');
        Model.abort_ = false;
      }
    });
  }
}

Model.getRelationsContent_ = function(id, tabId){
  if(id === ""){
    View.spinnerHide('left_status_text');
    return;
  }
  $.get(Model.serverAddress_ + "/" + Model.code_ + "?action=runQuery&query=" + id + "&arg=rel&outtype=html",
    function(data){
      if(!Model.abort_){
        View.activateTab(tabId, data);
        View.writeToLeftStatus('Querying a dictionary is complete');
      }else{
        View.writeToLeftStatus('Querying a dictionary was aborted');
        Model.abort_ = false;
      }
      log("model.js:Model.getRelationContent_:end");
    });
}

Model.getExamplesContent_ = function(id, tabId){
  if(id === ""){
    View.spinnerHide('left_status_text');
    return;
  }
  $.get(Model.serverAddress_ + "/" + Model.code_ + "?action=runQuery&query=" + id + "&arg=ex&outtype=html",
    function(data){
      if(!Model.abort_){
        View.activateTab(tabId, data);
        View.writeToLeftStatus('Querying a dictionary is complete');
      }else{
        View.writeToLeftStatus('Querying a dictionary was aborted');
        Model.abort_ = false;
      }
      log("model.js:Model.getExamplesContent_:end");
    });
}

Model.abort = function(id) {
  Model.abort_ = true;
  View.spinnerHide(id);
}

Model.editNewClick = function() {
  $('#Edit').attr('class', 'new');
  clear();
  $('#buttonDelete').prop('disabled', true);
  log("cdb_lu.js:editNewClick():end");
}

Model.editDeleteClick = function(id_textbox_id, serverAddress) {
  var id = $('#' + id_textbox_id).val();
  $.get(serverAddress + Model.code_ + '?action=delete&id=' + id,
      function(data){
        var error = (typeof data === 'string') ? $.parseJSON(data) : data;
        if(error.action === 'error'){
          alert(error.message);
        }else{
          $('#Edit').attr('class', '');
          alert('Node successfully deleted');
        }
        log("cdb_lu.js:editDeleteClick():end");
      });
}

Model.editSaveClick = function(id_textbox_id, serverAddress) {
  if($('#pos_select').val() === ''){
    alert('Please select one value of Part of speach.');
    return;
  }
  var id = $('#' + id_textbox_id).val();
  //var data = $.toJSON(parseHTMLToObject());
  var data = JSON.stringify(parseHTMLToObject());
  $.post(serverAddress + Model.code_,
      {
        action: 'save',
        id: id,
        data: data
      },
      function(data){
        var error = (typeof data === 'string') ? $.parseJSON(data) : data;
        if(error.action === 'error'){
          alert(error.message)
        }else{
          $('#Edit').attr('class', '');
          $('#buttonDelete').prop('disabled', false);
          alert('Node successfully saved');
        }
        log("cdb_lu.js:editSaveClick():end");
      });
   $("#scrollcontent").change();
}

Model.editClearClick = function() {
  $('#Edit').attr('class', '');
  clear();
  log("Model.editClearClick():end");
}

Model.editSplitClick = function() {
  alert('You are now editing new entry, don\'t forget to save it.');
  setNewId();
  $('#Edit').attr('class', 'new');
}

Model.editLUtoSynClick = function() {
  var luOpen = window.opener.View.windowObjectReference_['cdb_lu'];
  var synOpen = window.opener.View.windowObjectReference_['cdb_syn'];
  if(typeof luOpen === 'undefined' || luOpen === 'false') {
    alert('Open Cornetto LU dictionary and find some word and open edit tab');
    return;
  }
  if(typeof synOpen === 'undefined' || synOpen === 'false') {
    alert('Open Cornetto Synset dictionary and find some word and open edit tab');
    return;
  }
  if(luOpen.document.getElementById('scrollcontent').value === ''){
    alert('Find some word in Cornetto LU dictionary and open edit tab');
    return;
  }
  if(synOpen.document.getElementById('scrollcontent').value === ''){
    alert('Find some word in Cornetto Synset dictionary and open edit tab');
    return;
  }
  if(luOpen.document.getElementById('Edit').getAttribute('style').split(' ')[1].split(';')[0] !== 'block'){
    alert('Open edit tab in Cornetto LU dictionary');
    return;
  }
  if(synOpen.document.getElementById('Edit').getAttribute('style').split(' ')[1].split(';')[0] !== 'block'){
    alert('Open edit tab in Cornetto Synset dictionary');
    return;
  }
  selectedSynOption_ = synOpen.document.getElementById('scrollcontent').value
  selectedLuOption_ = luOpen.document.getElementById('scrollcontent').value
  var syn_id = '';
  var lu_id = '';
  if(typeof synOpen.Model.queryList_[selectedSynOption_] !== "undefined" && typeof luOpen.Model.queryList_[selectedLuOption_] !== "undefined"){
    syn_id = synOpen.Model.queryList_[selectedSynOption_].value;
    lu_id = luOpen.Model.queryList_[selectedLuOption_].value;
    View.spinnerShow('mapButton');
    $.get(serverAddress + 'cdb_syn?action=map&syn_id=' + syn_id + '&lu_id=' + lu_id,
    function(data){
      data = typeof data === 'string' ? $.parseJSON(data) : data;
      if(data.status === 'error' && typeof data.error !== 'undefined'){
        alert(data.error);
        return;
      }
      View.spinnerHide('mapButton');
      synOpen.$('#scrollcontent').change();
    });
  }
}

Model.getSelectFromServer = function(event, textId, dictionaryCode, serverAddress) {
  var $text = $('#' + textId);
  if($text.val() === ''){
    return;
  }
  if(event.keyCode == 13){
    $select = $('#select_' + textId);
    $select.change(function(){
      $text.val($('#select_' + textId + ' option:selected').text());
      $text.attr('class', '');
    });
    View.spinnerShow('select_' + textId);
    $.get(serverAddress + dictionaryCode + '?action=queryList&word=' + $text.val(),
    function(data){
      if(!Model.abort_){
        var data = typeof data === 'string' ? $.parseJSON(data) : data;
        var ids = [];
        var texts = [];
        for(var index in data){
          var word = data[index];
          ids.push(word.value);
          texts.push(word.label);
        }
        $select.empty();
        fillSelect('select_' + textId, ids, texts);
        var size = $('#select_' + textId + ' option').size();
        if(size === 1){
          $text.val($('#select_' + textId + ' option:first').text());
        }else if(size === 0){
          $text.val("No options");
        }else{
          $text.val("Select option");
          $text.attr('class', 'red_text');
        }
        View.spinnerHide('select_' + textId);
      }else{
        Model.abort_ = false;
      }
    });
  }
}

Model.getPreviewTextFromId = function(id, dictionaryCode, serverAddress) {
  var returnValue;
  if(id == '') return '';
  $.ajax({
    type: 'GET',
    url: serverAddress + dictionaryCode + '?action=queryList&word=' + id,
    cache: false,
    async: false,
    success: function(data){
      var data = typeof data === 'string' ? $.parseJSON(data) : data;
      if(data.length === 0) return 'error';
      returnValue = data[0].label;
    }
  });
  return returnValue;
}

Model.clickIkon = function(textId, buttonId) {
  var $text = $('#' + textId);
  var $button = $('#' + buttonId);
  if($text.is(':hidden')){
    $text.attr('hidden', false);
    $button.attr('class', 'minus');
  }else{
    $text.attr('hidden', true);
    $button.attr('class', 'plus');
  }
}

Model.setSubtreeData = function(nodeId, orientation) {
  if(nodeId === "") return;
  View.writeToLeftStatus('Querying a dictionary...');
  View.spinnerShow('left_status_text');
  Model.serverAddress_ = $('#serverDictAddress').html();
  var nodeArray = nodeId.split('_');
  nodeArray.pop();
  nodeId = nodeArray.join('_');
  $.get(Model.serverAddress_ + "/" + Model.code_ + "?action=subtree&query=" + nodeId + "&arg=" + orientation,
    function(data){
      data = typeof data === 'string' ? $.parseJSON(data) : data;
      if(!Model.abort_){
        nodeId += '_' + orientation;
        Tree.addData(data, orientation, true, nodeId);
        View.spinnerHide('left_status_text');
        View.writeToLeftStatus('Querying a dictionary is complete');
      }else{
        Model.abort_ = false;
        View.writeToLeftStatus('Querying a dictionary was aborted');
      }
      log("model.js:Model.getSubtreeContent_:end");
    });
}

Model.show_entry = function(dictId, wordId) {
  if(typeof dictId === 'undefined' || typeof wordId === 'undefined'){
    return;
  }
  if(window.opener.Model.dictsToOpen_[dictId] === true){
    window.opener.View.windowObjectReference_[dictId].document.getElementById('searchText').value = wordId;
    window.opener.View.windowObjectReference_[dictId].Controller.search();
  }
}

Model.getNameFromCodeDictionary_ = function(code) {
  for(var index in Model.dicts_){
    var dict = Model.dicts_[index];
    if(dict.code === code){
      return dict.name;
    }
  }
}

Model.initContextMenu = function(dicts, openedDicts, code) {
  console.log('Model.initContextMenu ' + Model.code_);
  var dicts = window.opener.Model.dicts_;
  var openedDicts = window.opener.Model.dictsToOpen_;
  var code = Model.code_;
  var shortcut = getShortcutFromDictCode(dicts, code);
  var menu = {
    'selector': 'body',
    'events': {
      show: function(opt){$.contextMenu.setInputValues(opt, this.data());},
      hide: function(opt){
        var values = $.contextMenu.getInputValues(opt, this.data());
        Model.fillLookUpObjects_(values);
      }
    },
    'items': {
      'search': {
        'name': 'Search in',
        'disabled': isSearchDisabled(dicts, shortcut),
        'items': {}
      },
      'search_by': {
        'name': 'Search in (by)',
        'disabled': isSearchByDisabled(dicts, shortcut),
        'items': {}
      },
      'look_up': {
        'name': 'AutoLookUp in',
        'disabled': isSearchDisabled(dicts, shortcut),
        'items': {}
      },
      'look_up_by': {
        'name': 'AutoLookUp by',
        'disabled': isSearchByDisabled(dicts, shortcut),
        'items': {}
      },
      'look_up_search': {
        'name': 'AutoLookUp by search',
        'disabled': function(){
          return $.isEmptyObject(menu.items.look_up_search.items);
        },
        'items': {}
      },
      'take_id': {
        'name': 'Take ID from',
        'items': {}
      }
    }
  };
  for(var index in dicts[shortcut].dicslookup){
    var dict = dicts[shortcut].dicslookup[index];
    menu.items.search.items[dict + '&searchin'] = {
      'name': dict,
      'callback': function(key, options){
        Model.searchIn_(key.split('&')[0], options);
      }
    };
    menu.items.look_up.items[dict + '&lookupin'] = {
      'name': dict,
      'type': 'checkbox',
    };
  }
  for(var index in dicts[shortcut].eqtags){
    var dict = dicts[shortcut].eqtags[index];
    for(var jndex in dict.dics){
      var i = dict.tag + "/" + dict.dics[jndex];
      var tag = getLast(dict.tag.split('.'));
      menu.items.search_by.items[i + '&searchby'] = {
        'name': typeof dict.name === 'undefined' || dict.name.length === 0 ? dict.tag + "/" + dict.dics[jndex] : dict.name,
        'callback': function(key, options){
          Model.searchBy_(key.split('&')[0], options);
        }
      };
      menu.items.look_up_by.items[i + '&lookupby'] = {
        'name': typeof dict.name === 'undefined' || dict.name.length === 0 ? tag + "/" + dict.dics[jndex] : dict.name,
        'type': 'checkbox'
      };
    }
  }
  for(var index in openedDicts){
    if(code !== index){
      menu.items.look_up_search.items[index + '&lookuptext'] = {
        'name': index,
        'type': 'checkbox'
      };
      menu.items.take_id.items[index + '&takeid'] = {
        'name': index,
        'callback': function(key, options) {
          Model.takeFrom_(key.split('&')[0], options);
        }
      };
    }
  }
  $.contextMenu(menu);
}

Model.searchInAnotherDictionary_ = function(dicts, sourceCode, targetCode) {
  sourceCode = getCodeFromDictShortcut(dicts, sourceCode);
  targetCode = getCodeFromDictShortcut(dicts, targetCode);
  var sourceShortcut = getShortcutFromDictCode(dicts, sourceCode);
  var targetShortcut = getShortcutFromDictCode(dicts, targetCode);
  var sourceId;
  if(typeof Model.queryList_[Model.selectedOption_] !== "undefined"){
    sourceId = Model.queryList_[Model.selectedOption_].value;
  }else{
    return '';
  }
  var val = dicts[targetShortcut].key + '=' + sourceCode + ':' + sourceId + ':' + dicts[sourceShortcut].key;
  if(window.opener.Model.dictsToOpen_[targetCode]){
    window.opener.View.windowObjectReference_[targetCode].document.getElementById('searchText').value = val;
    window.opener.View.windowObjectReference_[targetCode].Controller.search();
  }
}

Model.searchByAnotherDictionary_ = function(dicts, sourceCode, targetCode, tag) {
  sourceCode = getCodeFromDictShortcut(dicts, sourceCode);
  targetCode = getCodeFromDictShortcut(dicts, targetCode);
  var sourceShortcut = getShortcutFromDictCode(dicts, sourceCode);
  var targetShortcut = getShortcutFromDictCode(dicts, targetCode);
  var sourceId;
  if(typeof Model.queryList_[Model.selectedOption_] !== "undefined"){
    sourceId = Model.queryList_[Model.selectedOption_].value;
  }else{
    return '';
  }
  var search_element = dicts[sourceShortcut].eqtags[tag].search_element;
  var element = typeof search_element === 'undefined' || search_element.length === 0 ? dicts[targetShortcut].key : search_element;
  var val = element + '=' + sourceCode + ':' + sourceId + ':' + tag;
  if(window.opener.Model.dictsToOpen_[targetCode]){
    window.opener.View.windowObjectReference_[targetCode].document.getElementById('searchText').value = val;
    window.opener.View.windowObjectReference_[targetCode].Controller.search();
  }
}

Model.searchInAnotherDictionaryText_ = function(dicts, targetCode) {
  targetCode = getCodeFromDictShortcut(dicts, targetCode);
  if(window.opener.Model.dictsToOpen_){
    window.opener.View.windowObjectReference_[targetCode].document.getElementById('searchText').value = $('#searchText').val();
    window.opener.View.windowObjectReference_[targetCode].Controller.search();
  }
}

Model.searchIn_ = function(key, options) {
  var dicts = window.opener.Model.dicts_;
  var code = getCodeFromDictShortcut(dicts, key);
  var dictionary = window.opener.View.windowObjectReference_[code];
  Model.searchInAnotherDictionary_(dicts, Model.code_, code);
}

Model.searchBy_ = function(key, options) {
  var dicts = window.opener.Model.dicts_;
  var code = getLast(key.split('/'));
  var dictionary = window.opener.View.windowObjectReference_[code];
  var tag = key.split('/')[0];
  Model.searchByAnotherDictionary_(dicts, Model.code_, code, tag);
}

Model.takeFrom_ = function(key, options) {
  var dictFrom = key;
  var dictTo = Model.code_;
  var targetWindow = window.opener.View.windowObjectReference_[key];
  var idTo = '';
  var idFrom = '';
  if(typeof targetWindow.Model.queryList_[targetWindow.Model.selectedOption_] !== "undefined"){
    idFrom = targetWindow.Model.queryList_[targetWindow.Model.selectedOption_].value;
  }
  if(typeof Model.queryList_[Model.selectedOption_] !== "undefined"){
    idTo = Model.queryList_[Model.selectedOption_].value;
  }
  $.get(Model.serverAddress_ + "/" + Model.code_ + "?action=takeIdFrom&dictionaryIdFrom=" + dictFrom +'&dictionaryIdTo=' + dictTo + '&entryIdFrom=' + idFrom + '&entryIdTo=' + idTo + "&outtype=html",
    function(data){
      if(!Model.abort_){
        View.activateTab('Preview', $.parseJSON(data));
        View.writeToLeftStatus('Querying a dictionary is complete');
      }else{
        View.writeToLeftStatus('Querying a dictionary was aborted');
        Model.abort_ = false;
      }
      log("model.js:Model.takeFrom_:end");      
    });

  console.log('Take ID dictFrom=' + dictFrom+ ' dictTo=' + dictTo + ' idFrom=' + idFrom + ' idTo=' + idTo);
}

Model.fillLookUpObjects_ = function(values) {
  for(var index in values){
    var value = index.split('&')[0];
    var lookUp = index.split('&')[1];
    var checked = values[index];
    if(lookUp === 'lookupin'){
      checked ? Model.lookUpIn_[value] = true : delete Model.lookUpIn_[value];
    }else if(lookUp === 'lookupby'){
      checked ? Model.lookUpBy_[getLast(value.split('/'))] = { 'tag': value.split('/')[0] } : delete Model.lookUpBy_[getLast(value.split('/'))];
    }else if(lookUp === 'lookuptext'){
      checked ? Model.lookUpSearch_[value] = true : delete Model.lookUpSearch_[value];
    }
  }
}

Model.autoLookUpSearch = function(code, isSearched) {
  if(Model.autoLookUpSearch_ && !isSearched){
    Model.autoLookUpSearch_ = false;
    return;
  }
  var dicts = window.opener.Model.dicts_;
  for(var dictCode in Model.lookUpIn_){
    Model.searchInAnotherDictionary_(dicts, code, dictCode);
  }
  for(var dictCode in Model.lookUpBy_){
    var dict = Model.lookUpBy_[dictCode];
    Model.searchByAnotherDictionary_(dicts, code, dictCode, dict.tag);
  }
  for(var dictCode in Model.lookUpSearch_){
    Model.searchInAnotherDictionaryText_(dicts, dictCode);
  }
}

Model.saveCoordinations = function() {
  var coord = $.param({'data': $.toJSON(Model.coordinations)});
  $.ajax({
    type: 'GET',
    url: serverAddress + 'doc?action=save_settings&' + coord,
    cache: false,
    async: false
  });
}

