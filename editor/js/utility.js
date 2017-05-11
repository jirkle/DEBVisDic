function log(message){
  console.log(message);
}

function fillSelect(selectId, arrayOfValues, arrayOfTexts) {
  if(typeof arrayOfTexts === 'undefined' || arrayOfValues.length !== arrayOfTexts.length){
    arrayOfTexts = arrayOfValues;
  }
  var $select = $("#" + selectId);
  var value;
  var text;
  for(var index in arrayOfValues){
    value = arrayOfValues[index];
    text = arrayOfTexts[index];
    $select.append("<option value='" + value + "'>" + text + "</option>");
  }
}

function getMaxId(id, plus) {
  if(typeof id === 'undefined'){
    return -1;
  }
  if(typeof plus === 'undefined'){
    plus = false;
  }
  var maxId = 0;
  var array = $('*[id^=' + id + ']:last()');
  if(array.length !== 0){
    array = array.attr('id').split('_');
    maxId = array[array.length - 1];
    maxId++;
  }
  return maxId;
}

function isValid(value) {
  return ((typeof value === 'undefined') ? '' : value);
}

function xml_to_html(xmlData) {
  if(typeof xmlData === 'undefined'){
    return;
  }
  xmlData = xmlData.replace(new RegExp('<', 'g'), '&lt;');
  var count = 0;
  var result = xmlData;
  for(var i in xmlData){
    if(xmlData[i - 1] !== '/' && xmlData[i] === '>'){
      count++;
    }else if(xmlData[i + 1] === '<' && xmlData[i + 2] === '/'){
      var result = insertSpaces(count, xmlData, i)
      count--;
    }else if(xmlData[i + 1] === '<' && xmlData[i + 2] !== '/'){      
      var result = insertSpaces(count, xmlData, i)
    }
  }
  result = result.replace(new RegExp('(\r\n|\n|\r)', 'g'), '<br>');
  return result;
}

function insertSpaces(count, string, position) {
  var output = [a.slice(0, position)];
  for(var i = 0; i < count; i++){
    output.push(' ');
  }
  output.push(a.slice(position));
  return output.join('');
}

function makeSelectColumns(selectId) {
  var spacesToAdd = 3;
  var biggestLength1 = 0;
  var biggestLength2 = 0;
  $("#" + selectId + " option").each(function () {
    var len1 = $(this).text().split('&')[0].length;
    if (len1 > biggestLength1) {
      biggestLength1 = len1;
    }
    var len2 = $(this).text().split('&')[1].length;
    if (len2 > biggestLength2) {
      biggestLength2 = len2;
    }
  });
  var padLength1 = biggestLength1 + spacesToAdd;
  var padLength2 = biggestLength2 + spacesToAdd;
  $("#" + selectId + " option").each(function () {
    var parts = $(this).text().split('&');
    var strLength1 = parts[0].length;
    for (var x = 0; x < (padLength1 - strLength1); x++) {
      parts[0] = parts[0] + ' ';
    }
    var strLength2 = parts[1].length;
    for (var x = 0; x < (padLength2 - strLength2); x++) {
      parts[1] = parts[1] + ' ';
    }
    $(this).text(parts[0].replace(/ /g, '\u00a0') + parts[1].replace(/ /g, '\u00a0') + parts[2]).text;
  });
}

function getLast(array) {
  if(array.length === 0){
    return '';
  }
  return array[array.length - 1];
}

function isSearchDisabled(openedDicts, shortcut) {
  return openedDicts[shortcut].dicslookup.length === 0;
}

function isSearchByDisabled(openedDicts, shortcut) {
  return $.isEmptyObject(openedDicts[shortcut].eqtags);
}

function getShortcutFromDictCode(dicts, code) {
  for(var index in dicts){
    var dict = dicts[index];
    if(dict.code === code){
      return index;
    }
  }
  return code;
}

function getCodeFromDictShortcut(dicts, shortcut) {
  if(typeof dicts[shortcut] === 'undefined') return shortcut;
  return typeof dicts[shortcut].code !== 'undefined' ? dicts[shortcut].code : shortcut;
}

function getCoordinations() {
  var dict = {
    '@x': 0,
    '@y':0
  };
  if(navigator.appName.indexOf("Netscape") != -1 &&
     parseInt(navigator.appVersion) >= 5){
    dict['@x'] = window.screenX;
    dict['@y'] = window.screenY;
  }
  if(navigator.appName.indexOf("Microsoft") != -1 &&
     parseInt(navigator.appVersion) >= 4){
    dict['@x'] = window.screenLeft;
    dict['@y'] = window.screenTop;
  }
  log(dict);
  return dict;
}

