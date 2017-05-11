var partOfSpeech_select = ['a', 'b', 'n', 'v'];
var balkanet_select = ['', '1', '2', '3'];

function showEditHTML(nodeId, data){
  if(typeof nodeId === 'undefined'){
    return;
  }
  $("#" + nodeId).html("" +
  "<input type='text' style='display: none' id='id'>" +
  "<input type='button' value='New' onclick='Model.editNewClick()'>" +
  "<input type='button' value='Delete' " +
  "onclick=\"Model.editDeleteClick(&#39;id&#39;, &#39;" + $('#serverDictAddress').html() + "&#39;)\">" +
  "<input type='button' value='Save' " +
  "onclick=\"Model.editSaveClick(&#39;id&#39;, &#39;" + $('#serverDictAddress').html() + "&#39;)\">" +
  "<input type='button' value='Clear form' onclick='Model.editClearClick()'>" +
  "<hr>" +
  "<div id='partOfSpeech'>" +
    "<b>Part of Speech</b></br>" +
    "<select id='partOfSpeech_select'></select>" +
  "</div>" +
  "<div id='lexicated'>" +
    "<input type='checkbox' value='Not Lexicated' id='lexicated_check_box'>Not Lexicated" +
  "</div>" +
  "<hr>" +
  "<div id='domain'>" +
    "<b>Domain</b></br>" +
    "<input type='text' id='domain_text'>" +
  "</div>" +
  "<hr>" +
  "<div id='sumo'>" +
    "<b>Sumo</b></br>" +
    "<input type='text' id='sumo_text'>" +
    "Type <input type='text' id='sumo_text_type'>" +
  "</div>" +
  "<hr>" +
  "<div class='plus' id='button_synonym' " +
  "onclick='Model.clickIkon(&#39;synonyms_id&#39;, &#39;button_synonym&#39;)'/>" +
  "<div id='synonyms'>" +
    "<b>Synonyms: Literal, Sense, LNote</b></br>" +
    "<div id='synonyms_id' hidden='true'>" +
      "<input type='button' value='Add' id='last_synonyms' onclick='editSynonymsAdd()'>" +
    "</div>" +
  "</div>" +
  "<hr>" +
  "<div id='definition'>" +
    "<b>Definition</b></br>" +
    "<input type='text' id='edit_definition'>" +
  "</div>" +
  "<hr>" +
  "<div class='plus' id='button_usage' " +
  "onclick='Model.clickIkon(&#39;usage_id&#39;, &#39;button_usage&#39;)'/>" +
  "<div id='usage'>" +
    "<b>Usage</b></br>" +
    "<div id='usage_id' hidden='true'>" +
      "<input type='button' value='Add' id='last_usage' onclick='editUsageAdd()'>" +
    "</div>" +
  "</div>" +
  "<hr>" +
  "<div class='plus' id='button_relations' " +
  "onclick='Model.clickIkon(&#39;relations_id&#39;, &#39;button_relations&#39;)'/>" +
  "<div id='relations'>" +
    "<b>Relations</b></br>" +
    "<div id='relations_id' hidden='true'>" +
      "<input type='button' value='Add' id='last_relations' onclick='editRelationsAdd()'>" +
    "</div>" +
  "</div>" +
  "<hr>" +
  "<div class='plus' id='button_note' " +
  "onclick='Model.clickIkon(&#39;note_id&#39;, &#39;button_note&#39;)'/>" +
  "<div id='note'>" +
    "<b>Note</b></br>" +
    "<div id='note_id' hidden='true'>" +
      "<input type='button' value='Add' id='last_note' onclick='editNoteAdd()'>" +
    "</div>" +
  "</div>" +
  "<hr>" +
  "<div class='plus' id='button_valency' " +
  "onclick='Model.clickIkon(&#39;valency_id&#39;, &#39;button_valency&#39;)'/>" +
  "<div id='valency'>" +
    "<b>Valency</b></br>" +
    "<div id='valency_id' hidden='true'>" +
      "<input type='button' value='Add' id='last_valency' onclick='editValencyAdd()'>" +
    "</div>" +
  "</div>" +
  "<hr>" +
  "<div id='lastEditStamp'>" +
    "Last edit stamp</br>" +
    "<input type='text' disabled='true' id='lastEditStampTextBox'>" +
  "</div>" +
  "<hr>" +
  "<div id='balkanet'>" +
    "In Balkanet Common Set</br>" +
    "<select id='balkanet_select'></select>" +
  "</div>");
  setNewId();
  fillSelects()
  if(typeof data !== 'undefined'){
    parseObjectToHTML(data);
  }
  log(Model.code_ + ".js:showEditHTML():end");
}

function editSynonymsAdd(literal, sense, lnote) {
  if(typeof literal === 'undefined'){
    literal = '';
  }
  if(typeof sense === 'undefined'){
    sense = '';
  }
  if(typeof lnote === 'undefined'){
    lnote = '';
  }
  var id = getMaxId('synonyms_text_literal_', true);
  var html = "<div id='synonyms_" + id + "' class='boxed'>" +
    "<input type='text' value='" + literal + "' id='synonyms_text_literal_" + id + "'>" +
    "<input type='text' value='" + sense + "' id='synonyms_text_sense_" + id + "'>" +
    "<input type='text' value='" + lnote + "'id='synonyms_text_lnote_" + id + "'>" +
    "<input type='button' value='Remove' onclick='editSynonymsRemove(" + id + ")'>" +
    "</div>";
  $("#last_synonyms").before(html);
  log(Model.code_ + ".js:editSynonymsAdd():end");
}

function editSynonymsRemove(id) {
  if(confirm("Are you sure you want to delete this item?")){
    $("#synonyms_" + id).remove();
  }
  log(Model.code_ + ".js:editSynonymsRemove():end");
}

function editUsageAdd(text) {
  if(typeof text === 'undefined'){
    text = '';
  }
  var id = getMaxId('usage_text_usage_', true);
  var html = "<div id='usage_" + id + "' class='boxed'>" +
    "<input type='text' value='" + text + "' id='usage_text_usage_" + id + "'>" +
    "<input type='button' value='Remove' onclick='editUsageRemove(" + id + ")'>" +
    "</div>";
  $("#last_usage").before(html);
  log(Model.code_ + ".js:editUsageAdd():end");
}

function editUsageRemove(id) {
  if(confirm("Are you sure you want to delete this item?")){
    $("#usage_" + id).remove();
  }
  log(Model.code_ + ".js:editUsageRemove():end");
}

function editRelationsRemove(id){
  if(confirm("Are you sure you want to delete this item?")){
    $("#relations_" + id).remove();
  }
  log(Model.code_ + ".js:editRelationsRemove():end");
}

function editRelationsAdd(left, right){
  if(typeof left === 'undefined'){
    left = '';
  }
  if(typeof right === 'undefined'){
    right = '';
  }
  leftText = Model.getPreviewTextFromId(left, Model.code_, $('#serverDictAddress').html());
  var id = getMaxId('relations_select_left_', true);
  var html = "<div id='relations_" + id + "' class='boxed'>" +
    "<input type='text' value='" + leftText + "' " +
    "id='relations_select_left_" + id + "'" +
    "class='select_text'" +
    "onkeypress=\"Model.getSelectFromServer(event, " +
    "'relations_select_left_" + id + "', " +
    "\'" + Model.code_ + "\', \'" + $('#serverDictAddress').html() + "\')\">" +
    "<select id='select_relations_select_left_" + id + "' " +
               "style='width:15px'></select>" +
    "<input type='text' value='" + right + "' id='relations_select_right_" + id + "'>" +
    "<input type='button' value='Remove' onclick='editRelationsRemove(" + id + ")'>" +
    "</div>";
  $("#last_relations").before(html);
  $('#select_relations_select_left_' + id).
    append('<option value="' + left + '">' + leftText + '</option>');
  $('#select_relations_select_left_' + id).val(left);
}

function editNoteRemove(id){
  if(confirm("Are you sure you want to delete this item?")){
    $("#note_" + id).remove();
  }
  log(Model.code_ + ".js:editNoteRemove():end");
}

function editNoteAdd(value){
  if(typeof value === 'undefined'){
    value = '';
  }
  var id = getMaxId('note_select_', true);
  var html = "<div id='note_" + id + "' class='boxed'>" +
    "<input type='text' value='" + value + "' id='note_select_" + id + "'>" +
    "<input type='button' value='Remove' onclick='editNoteRemove(" + id + ")'>" +
    "</div>";
  $("#last_note").before(html);
  log(Model.code_ + ".js:editNoteAdd():end");
}

function editValencyInnerRemove(parentId, id){
  if(confirm("Are you sure you want to delete this item?")){
    $("#valency_" + parentId + "_" + id).remove();
  }
  log(Model.code_ + ".js:editValencyInnerRemove():end");
}

function editValencyInnerAdd(parentId, value){
  if(typeof value === 'undefined'){
    value = '';
  }
  var id = getMaxId('valency_text_valency_', true);
  var html = "<div id='valency_" + parentId + "_" + id + "' class='boxed'>" +
      "<input type='text' value='" + value + "' id='valency_text_valency_" + parentId + "_" + id + "'>" +
      "<input type='button' value='Remove' onclick='editValencyInnerRemove(" + parentId + ", " + id + ")'>" +
      "</div>";
  $("#valency_" + parentId + "_id").append(html);
  log(Model.code_ + ".js:editValencyInnerAdd():end");
}

function editValencyRemove(id){
  if(confirm("Are you sure you want to delete this item?")){
    $("#valency_div_" + id).remove();
  }
  log(Model.code_ + ".js:editValencyRemove():end");
}

function editValencyAdd(){
  var id = getMaxId('valency_button_', true);
  var html = "<div id='valency_div_" + id + "' class='boxed'>" +
    "<div id='valency_" + id + "_id'" +
    "</div>" +
    "<input type='button' value='Add' onclick='editValencyInnerAdd(" + id + ")'>" +
    "<input type='button' value='Remove' onclick='editValencyRemove(" + id + ")' id='valency_button_" + id + "'>" +
    "</div>";
  $("#last_valency").before(html);
  log(Model.code_ + ".js:editValencyAdd():end");
}


function fillSelects(){
  fillSelect("partOfSpeech_select", partOfSpeech_select);
  fillSelect("balkanet_select", balkanet_select);
  log(Model.code_ + ".js:fillSelects():end");
}

function parseObjectToHTML(obj){
  var data = obj.SYNSET;
  if(typeof data.ID !== 'undefined'){
    $('#id').val(isValid(data.ID['$']));
  }
  if(typeof data.DOMAIN !== 'undefined'){
    $('#domain_text').val(data.DOMAIN['$']);
  }
  if(typeof data.SUMO !== 'undefined'){
    $('#sumo_text').val(data.SUMO['$']);
    $('#sumo_text_type').val(data.SUMO['@type']);
  }
  $('#partOfSpeech_select').val(isValid(data.POS['$']));
  if(typeof data.NL !== 'undefined' && data.NL['$'] === 'true'){
    $('#lexicated_check_box').attr('checked', true);
  }
  if(typeof data.SYNONYM !== 'undefined' &&
     typeof data.SYNONYM.LITERAL !== 'undefined'){
    for(var index in data.SYNONYM.LITERAL){
      var synonym = data.SYNONYM.LITERAL[index];
      editSynonymsAdd(isValid(synonym['$']), isValid(synonym['@sense']), isValid(synonym['@lnote']));
    }
  }
  if(typeof data.DEF !== 'undefined'){
    $('#edit_definition').val(isValid(data.DEF['$']));
  }
  if(typeof data.USAGE !== 'undefined'){
    for(var index in data.USAGE){
      var usage = data.USAGE[index];
      editUsageAdd(isValid(usage['$']));
    }
  }
  if(typeof data.ILR !== 'undefined'){
    for(var index in data.ILR){
      var relation = data.ILR[index];
      editRelationsAdd(isValid(relation['$']), isValid(relation['@type']));
    }
  }
  if(typeof data.SNOTE !== 'undefined'){
    for(var index in data.SNOTE){
      var note = data.SNOTE[index];
      editNoteAdd(isValid(note['$']));
    }
  }
  if(typeof data.VALENCY !== 'undefined'){
    for(var index in data.VALENCY){
      var valency = data.VALENCY[index];
      editValencyAdd();
      if(typeof valency.FRAME !== 'undefined'){
        for(var jndex in valency.FRAME){
          var innerValency = valency.FRAME[jndex];
          editValencyInnerAdd(index, isValid(innerValency['$']));
        }
      }
    }
  }
  if(typeof data.STAMP !== 'undefined'){
    $('#lastEditStampTextBox').val(isValid(data.STAMP['$']));
  }
  if(typeof data.BCS !== 'undefined'){
    $('#balkanet_select').val(isValid(data.BCS['$']));
  }
  log(Model.code_ + ".js:parseObjectToHTML():end");
}

function parseHTMLToObject(){
  var obj = {
            'SYNSET': {
              'ID': {},
              'DOMAIN': {},
              'SUMO': {},
              'POS': {},
              'NL': {},
              'SYNONYM': {
                'LITERAL': [],
                'WORD': []
              },
              'DEF': {},
              'USAGE': [],
              'ILR': [],
              'SNOTE': [],
              'VALENCY': [],
              'STAMP': {},
              'BCS': {}
            }
         };
  var data = obj.SYNSET;
  data.DOMAIN['$'] = $('#domain_text').val();
  data.ID['$'] = $('#id').val();
  data.SUMO['$'] = $('#sumo_text').val()
  data.SUMO['@type'] = $('#sumo_text_type').val()
  data.POS['$'] = $('#partOfSpeech_select').val();
  data.NL['$'] = $('#lexicated_check_box').is(':checked') + '';
  var maxId = getMaxId('synonyms_text_lnote_');
  for(var id = 0; id < maxId; id++){
    var val = $('#synonyms_text_literal_' + id).val();
    if(typeof val === 'undefined') continue;
    data.SYNONYM.LITERAL.push({
                           '$': val,
                           '@sense': $('#synonyms_text_sense_' + id).val(),
                           '@lnote': $('#synonyms_text_lnote_' + id).val()
                        });
  }
  for(var index in data.SYNONYM.LITERAL){
    var word_splited = data.SYNONYM.LITERAL[index]['$'].split(' ');
    for(var jndex in word_splited){
      data.SYNONYM.WORD.push({'$': word_splited[jndex]}); //mozno
    }
  }
  data.DEF['$'] = $('#edit_definition').val();
  maxId = getMaxId('usage_text_usage_');
  for(var id = 0; id < maxId; id++){
    var val = $('#usage_text_usage_' + id).val();
    if(typeof val === 'undefined') continue;
    data.USAGE.push({
                 '$': val
              });
  }
  maxId = getMaxId('relations_select_left_');
  for(var id = 0; id < maxId; id++){
    var val = $('#relations_select_right_' + id).val();
    var selectVal = $('#select_relations_select_left_' + id).val();
    if(typeof selectVal === 'undefined' || (selectVal === "" && val === "")) continue;
    data.ILR.push({
               '$': selectVal,
               '@type': val
            });
  }
  maxId = getMaxId('note_select_');
  for(var id = 0; id < maxId; id++){
    var val = $('#note_select_' + id).val();
    if(typeof val === 'undefined') continue;
    data.SNOTE.push({
                 '$': val
              });
  }
  maxId = getMaxId('valency_div_');
  for(var id = 0; id < maxId; id++){
    if($('valency_0_id').length === 0) continue;
    var valency = {
      'FRAME': []
    };
    var maxChildId = getMaxId('valency_text_valency_' + id + '_');
    for(var jd = 0; jd < maxChildId; jd++){
      var val = $('#valency_text_valency_' + id + '_' + jd).val();
      if(typeof val === 'undefined') continue;
      valency.FRAME.push({
                      '$': val
                   });
    }
    data.VALENCY.push(valency);
  }
  data.STAMP['$'] = $('#lastEditStampTextBox').val();
  data.BCS['$'] = $('#balkanet_select').val();
  return obj;
  log(Model.code_ + ".js:parseHTMLToObject():end");
}

function clear() {
  setNewId();
  $('#partOfSpeech_select').val('');
  $('#lexicated_check_box').attr('checked', false);
  $('#synonyms_id').empty();
  $('#synonyms_id').append("<input type='button' value='Add' id='last_synonyms' onclick='editSynonymsAdd()'>");
  $('#edit_definition').val('');
  $('#usage_id').empty();
  $('#usage_id').append("<input type='button' value='Add' id='last_usage' onclick='editUsageAdd()'>");
  $('#relations_id').empty();
  $('#relations_id').append("<input type='button' value='Add' id='last_relations' onclick='editRelationsAdd()'>");
  $('#note_id').empty();
  $('#note_id').append("<input type='button' value='Add' id='last_note' onclick='editNoteAdd()'>");
  $('#valency_id').empty();
  $('#valency_id').append("<input type='button' value='Add' id='last_valency' onclick='editValencyAdd()'>");
  log(Model.code_ + ".js:clear():end");
}

function setNewId() {
  $('#id').val('_new_id_')
}

