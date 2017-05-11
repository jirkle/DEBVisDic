var domain_select_id = ['', 'acoustics', 'administration', 'aeronautic', 'agriculture', 'alimantation', 'anatomy', 'anthropology', 'applied_science', 'archaeology', 'archery', 'architecture', 'art', 'artisanship', 'astrology', 'astronautics', 'astronomy', 'athletics', 'atomic_physic', 'auto', 'badminton', 'banking', 'baseball', 'basketball', 'betting', 'biology', 'body_care', 'book_keeping', 'botany', 'bowling', 'boxing', 'building_industry', 'card', 'chemistry', 'chess', 'cinema', 'color', 'commerce', 'computer_science', 'cricket', 'cycling', 'dance', 'dentistry', 'diplomacy', 'diving', 'doctrines', 'drawing', 'earth', 'ecology', 'economy', 'electricity', 'electronics', 'electrotechnics', 'engineering', 'enterprise', 'entomology', 'ethnology', 'exchange', 'factotum', 'fashion', 'fencing', 'fishing', 'folklore', 'football', 'free_time', 'furniture', 'gas', 'gastronomy', 'genetics', 'geography', 'geology', 'geometry', 'golf', 'grammar', 'heraldry', 'history', 'hockey', 'hunting', 'hydraulics', 'industry', 'insurance', 'jewellery', 'law', 'linguistics', 'literature', 'mathematics', 'mechanics', 'medicine', 'merchant_navy', 'meteorology', 'metrology', 'military', 'money', 'mountaineering', 'music', 'mythology', 'number', 'numismatics', 'occultism', 'oceanography', 'optics', 'painting', 'paleontology', 'pedagogy', 'person', 'pharmacy', 'philately', 'philology', 'philosophy', 'photography', 'physics', 'physiology', 'plastic_arts', 'play', 'politics', 'post', 'psychoanalysis', 'psychology', 'publishing', 'pure_sience', 'quality', 'racing', 'radio', 'radiology', 'railway', 'religion', 'rowing', 'rugby', 'school', 'sculpture', 'sexuality', 'showjumping', 'skating', 'skiing', 'soccer', 'social_science', 'sociology', 'sport', 'state', 'statistics', 'sub', 'surgery', 'swimming', 'table_tenis', 'tax', 'telecommunication', 'telegraphy', 'telephony', 'tennis', 'theatre', 'theology', 'time_period', 'topography', 'tourism', 'town_planning', 'transport', 'tv', 'university', 'volleyball', 'wrestling', 'zoology', 'zootechnics'];
var kont_select_rel_name_id = ['', 'SubClass', 'Instance', 'Equal', 'Role1', 'Role2', 'Role3', 'Role4', 'Role5'];
var kont_select_arg_id = ['', 'AllDisjointClasses', 'American_state', 'Canis_lupus_species', 'Continental_region_Geographical_object', 'Continental_region_location', 'Cricetus_cricetus_species', 'Felis_silvestris_species', 'abnormality__abnormalcy', 'abstract-quality', 'abstract-region', 'acid', 'action', 'activity', 'agaric', 'agency_federal_agency_government_agency_bureau_office_authority', 'agent-driven-role', 'agentive-figure', 'alloy', 'amount-of-matter', 'amphibian', 'angiosperm', 'animal__animate_being_beast__brute__creatur__fauna', 'animal_disease', 'animal_order', 'animal_tissue', 'archipelago', 'area__country', 'arrangement__organization__organisation_system', 'artery__arteria__arterial__blood_vessel', 'arthropod', 'arthropod_family', 'arthropod_genius', 'artifact-role', 'artifact__artefact', 'asterales', 'asterid_dicot_genus', 'attribute', 'basic_cognitive_process', 'basin', 'biological-object', 'biologist__life_scientist', 'biology_biological_science', 'bird', 'bird_family', 'bird_genus', 'bivalvia', 'blood_disease_blood_dosorder', 'body_of_water_water', 'body_part', 'bode_os', 'book', 'boundary_bound_bounds', 'canidae', 'canis', 'carnivore', 'castor_fiber', 'caudate', 'cell', 'change', 'charge', 'chemical_element__element', 'chemist', 'chiroptera', 'chordate', 'city__metropolis__urban_center', 'class', 'classification-system', 'cognition__knowledge__noesis', 'cognitive-event', 'collection', 'collection-role', 'color__colour__coloring__colouring', 'colubrid_snake__colubrid', 'commerce-role', 'commerce__commercialism__mercantilism', 'communication', 'compound__chemical_compound', 'condition__status', 'conifer__coniferous_tree', 'constellation', 'content', 'contest__competition', 'cord', 'country', 'country__state__land', 'covering__natural_covering', 'crime', 'cyprinidae', 'cypriniformes', 'dancing__dance__terpsichore__saltation', 'day', 'decapoda', 'decrease__diminution__reduction__step-down', 'definite_quantity', 'deity_divinity_god_immortal', 'delta', 'desert', 'dicot_family_magnoliopsid_family', 'dicot_genus_magnoliopsid_genus', 'discipline__subject__subject_area__subject_field__field__field_of_study__bailiwic', 'disease', 'district', 'dog__domestic_dog__Canis_familiaris', 'drug', 'endangered-species', 'entity', 'enzyme', 'eubacteria__eubacterium__true_bacteria', 'event', 'expands', 'expressive_style__style', 'family', 'felidae', 'felis_silvestris', 'fern', 'fern_genus', 'fictional_character__fictitious_character__character', 'figure', 'first', 'fish', 'fish_family', 'fish_genus', 'flower', 'food__nutrient', 'frog__toad__toad_frog__anuran__batrachian__salientian', 'fruit', 'fungus', 'fungus_family', 'fungus_genus', 'gathering__assamblage', 'gatropoda', 'generic-constituent', 'generic-constituent-of', 'generic-dependent', 'gentiales', 'gentiana_lutea', 'genus', 'geographical-object', 'geographical-place', 'geographical_area__geographic_area__geographical_region__geographic_region', 'grass', 'gymnosperm_genus', 'happening__occorrence__occurrent__natural_event', 'herb__herbaceous_plant', 'horse__Equus_caballus-eng_3.0_02374451-n', 'indefinite_quantity', 'indicator', 'inflammation__redness__rubor', 'information-encoding-system', 'information-realization', 'inherent-in', 'injury__hurt__harm__trauma', 'insect', 'interpretation-situation', 'invasive-species', 'island', 'kingdom', 'lake', 'large_integer', 'law__law_of_nature', 'leaf_leafage_foliaget', 'legal_document__legal_instrument__official_document__instrument', 'lepidopteran', 'letter__letter_of_the_alphabet__alphabetic_character', 'liliaceous_plant', 'linear_unit_linear__measure', 'linguestic-object', 'liqued_body_substance_bodily_fluid_body_fluid_humor_humour', 'list_listing', 'locative-role', 'longitude=latitude-region', 'mammal_family', 'mammal_genus', 'material-artifact', 'material__stuff', 'measure__quantitiy__amount', 'medicine__medical_specialty', 'members', 'membrane_tissue_layer', 'mental-object', 'message__content__subject_matter__substance', 'military_unit_military_force_military_group_force', 'mollusc', 'molossidae', 'monocot', 'monocot_genus_liliopsid_genus', 'moth', 'motion__movement__move__motility', 'mountain_peak', 'music', 'musical_notation', 'mythical_being', 'natural_object', 'natural_process__natural_action', 'non-agentive-social-object', 'non-physical-collection', 'number', 'nutriment__nourishement__nutrition__sustenance__aliment__alimentation__victuals', 'object__physical_object', 'odonata', 'order', 'organic_process_biological_process', 'organism__being', 'organization_organisation', 'oscine__ocsine_bird_eng-3.0-01525720-n', 'overlaps', 'particle', 'particular', 'pathology', 'payment-eng-3.0-13278375-n', 'people', 'perciformes', 'percoid_fish__percoid__percoidean', 'person__individual__someone__somebody__mortal__soul', 'physical-endurant', 'physical-object', 'physical-phenomenon', 'physical-plurality', 'physical-quality', 'physical-region', 'physical_phenomenon', 'physicist', 'pitched_battle', 'placental__placental_mammal__eutherian__eutherian_mammal', 'plant-role', 'plant__flora__plant_life', 'plant_order', 'plant_part_plant_sctructure', 'platform', 'played-by', 'political_orientation__ideology__political_theory', 'position__post__berth__office__spot__billet__place__situation', 'position__spatial_relation', 'program__programme__computer_program__computer_programme', 'proper-part', 'property', 'protein', 'q-location', 'quality', 'range_mountain_range_range_of_mountains_chain_mountain_chain_chain_of_mountains', 'rank', 'ranunculales', 'rate', 'region', 'region__space__space_region', 'regulation', 'relation', 'relevant-part', 'representation', 'reproductive_structuret', 'reptile', 'reptile_genus', 'rest', 'right', 'river', 'rodent__gnawer', 'role', 'rosid_dicot_genus', 'ruminant_eng-3.0-02399000-n', 'sacred_text__sacred_writing__religious_writing__religious_text', 'salamandridae', 'salmonidea', 'salmoniformes', 'salviniales', 'santalales', 'saxafragales', 'school', 'shrub_brush', 'signal__signaling__sign', 'simple-planned-collective', 'situation', 'skeletal_muscle__striated_muscle', 'social-description', 'social-relationship', 'socially-constructed-person', 'soft-finned_fish__acanthoptherygian', 'sound', 'space-region', 'spatial-feature', 'spatial-location_q', 'species', 'species-role', 'spiny-finned_fish__acanthopterygian', 'sport__athletics', 'state', 'state__province', 'statement', 'structure__anatomical_structure__complex_body_part__bodily_structure__body_structure', 'subject', 'substance', 'substance-role', 'symptom', 'system_system_of_rules', 'taxanomic-group', 'taxanomic-group-role', 'technique', 'temporal-region', 'termination__ending__conclusion', 'terrorist_organization', 'text__textual_matter', 'theory', 'therapy', 'time_period_period_of_time__period', 'town', 'trait', 'tree', 'tropical-invasive-species', 'tube__tubing', 'tumor__tumour__noeplasm', 'type-based-collective', 'unit_of_measurement__unit', 'utterance__vocalization', 'vein__vena__venous_blood__vessel', 'vine', 'wading_bird__wader', 'weapon__arm__weapon_system', 'weed', 'wildflower__wild_flower', 'word', 'workplace__work', 'writing__written_material__piece_of_writing', ''];
var ontology_select_rel_name_id = ['', '=', '+', ':', '[', ']', '@', 'age', 'agent', 'ancestor', 'attends', 'attribute', 'before', 'beforeOrEqual', 'believes', 'bottom', 'brother', 'causes', 'causesSubclass', 'citizen', 'completelyFills', 'component', 'conclusion', 'connected', 'considers', 'consistent', 'contains', 'containsInformation', 'cooccur', 'crosses', 'date', 'daughter', 'desires', 'destination', 'diameter', 'direction', 'disjoint', 'distributes', 'duration', 'during', 'earlier', 'element', 'employs', 'entails', 'equal', 'exactlyLocated', 'experiancer', 'exploits', 'faces', 'familyRelation', 'father', 'fills', 'finishes', 'geographicSubregion', 'geometricPart', 'geopoliticalSubdivision', 'grasps', 'hasPurpose', 'hasSkill', 'height', 'holdsDuring', 'hole', 'home', 'husband', 'inhabits', 'inhibits', 'instance', 'instrument', 'interionPart', 'inverse', 'knows', 'larger', 'leader', 'legalRelation', 'length', 'lineMeasure', 'located', 'manner', 'material', 'measure', 'meetsSpatially', 'meetsTemporally', 'member', 'modalAttribute', 'monetaryValue', 'mother', 'name', 'subname', 'needs', 'origin', 'oberlapsPartially', 'overlapsSpatially', 'overlapsTemporally', 'parallel', 'parent', 'part', 'partiallyFills', 'partlyLocated', 'path', 'patient', 'penetrates', 'piece', 'possesses', 'prevents', 'properPart', 'properlyFills', 'property', 'realization', 'refers', 'represents', 'resource', 'result', 'sibling', 'side', 'sister', 'smaller', 'son', 'spouse', 'starts', 'stays', 'subclass', 'subset', 'surface', 'temporalPart', 'time', 'top', 'transactionAmount', 'traverses', 'true', 'uses', 'wants', 'wears', 'width', 'wife'];
var semantic_select_id = ['', 'HAS_HYPERONYM', 'HAS_HYPONYM', 'HAS_XPOS_HYPERONYM', 'HAS_XPOS_HYPONYM', 'NEAR_SYNONYM', 'XPOS_NEAR_SYNONYM', 'NEAR_ANTONYM', 'XPOS_NEAR_ANTONYM', 'HAS_HOLONYM', 'HAS_HOLO_LOCATION', 'HAS_HOLO_MADEOF', 'HAS_HOLO_MEMBER', 'HAS_HOLO_PART', 'HAS_HOLO_PORTION', 'HAS_MERONYM', 'HAS_MERO_LOCATION', 'HAS_MERO_MADEOF', 'HAS_MERO_MEMBER', 'HAS_MERO_PART', 'HAS_MERO_PORTION', 'INVOLVED', 'INVOLVED_AGENT', 'INVOLVED_PATIENT', 'INVOLVED_INSTRUMENT', 'INVOLVED_LOCATION', 'INVOLVED_RESULT', 'INVOLVED_DIRECTION', 'INVOLVED_SOURCE_DIRECTION', 'INVOLVED_TARGET_DIRECTION', 'ROLE', 'ROLE_AGENT', 'ROLE_PATIENT', 'ROLE_INSTRUMENT', 'ROLE_LOCATION', 'ROLE_RESULT', 'ROLE_DIRECTION', 'ROLE_SOURCE_DIRECTION', 'ROLE_TARGET_DIRECTION', 'CO_ROLE', 'CO_AGENT_PATIENT', 'CO_AGENT_INSTRUMENT', 'CO_AGENT_RESULT', 'CO_PATIENT_AGENT', 'CO_PATIENT_INSTRIMENT', 'CO_PATIENT_RESULT', 'CO_INSTRUMENT_AGENT', 'CO_INSTRUMENT_PATIENT', 'CO_INSTRUMENT_RESULT', 'CO_RESULT_AGENT', 'CO_RESULT_PATIENT', 'CO_RESULT_INSTRUMENT', 'CAUSES', 'IS_CAUSED_BY', 'HAS_SUBEVENT', 'IS_SUBEVENT_OF', 'MANNER_OF', 'IN_MANNER', 'BE_ON_STATE', 'STATE_OF', 'FUZZYNYM', 'XPOS_FUZZYNYM', ''];
var equivalence_text_name = ['', 'EQ_SYNONYM', 'EQ_NEAR_SYNONYM', 'EQ_HAS_HYPERNYM', 'EQ_HAS_HYPONYM', 'EQ_INVOLVED', 'EQ_ROLE', 'EQ_IS_CAUSED_BY', 'EQ_CAUSES', 'EQ_HAS_HOLONYM', 'EQ_HAS_MERONYM', 'EQ_HAS_SUBEVENT', 'EQ_IS_SUBEVENT_OF', 'EQ_BE_IN_STATE', 'EQ_IS_STATE_OF', 'EQ_CO_ROLE', 'EQ_GENERALIZATION', 'EQ_METONYM', 'EQ_DIATHESIS'];

function showEditHTML(nodeId, data){
  if(typeof nodeId === 'undefined'){
    return;
  }
  $("#" + nodeId).html("" +
  "<input type='button' value='New' onclick='Model.editNewClick()'>" +
  "<input type='button' value='Delete' " +
  "onclick=\"Model.editDeleteClick(&#39;synsetId_text&#39;, &#39;" + $('#serverDictAddress').html() + "&#39;)\">" +
  "<input type='button' value='Save' " +
  "onclick=\"Model.editSaveClick(&#39;synsetId_text&#39;, &#39;" + $('#serverDictAddress').html() + "&#39;)\">" +
  "<input type='button' value='Clear form' onclick='Model.editClearClick()'>" +
  "</br>" +
  "<input type='button' value='Split entry' onclick='Model.editSplitClick()'>" +
  "<input type='button' id='mapButton' value='Map current LU to current Synset' onclick='Model.editLUtoSynClick()'>" +
  "<hr>" +
  "<div id='synsetId'>" +
    "<b>Synset Id</b></br>" +
    "<input type='text' disabled='true' id='synsetId_text'>" +
  "</div>" +
  "<div id='div_baseConcept'>" +
  "<input type='checkbox' value='baseConcept' id='baseConcept'>Base concept" +
  "</div>" +
  "<hr>" +
  "<div class='plus' id='button_comment' " +
  "onclick='Model.clickIkon(&#39;commentText&#39;, &#39;button_comment&#39;)'/>" +
  "<div id='comment'>" +
  "<b>Comment</b></br>" +
    "<textarea style='width: 100%; height: 40px' id='commentText' hidden='true'></textarea>" +
  "</div>" +
  "<hr>" +
  "<div class='plus' id='button_synonyms' " +
  "onclick='Model.clickIkon(&#39;synonyms_id&#39;, &#39;button_synonyms&#39;)'/>" +
  "<div id='synonyms'>" +
    "<b>Synonyms: Lu Id, Status</b></br>" +
    "<div id='synonyms_id' hidden='true'>" +
      "<input type='button' value='Add' id='last_synonyms' onclick='editSynonymsAdd()'>" +
    "</div>" +
  "</div>" +
  "<hr>" +
  "<div class='plus' id='button_domain' " +
  "onclick='Model.clickIkon(&#39;domain_id&#39;, &#39;button_domain&#39;)'/>" +
  "<div id='domain'>" +
    "<b>Domain Relations</b></br>" +
    "<div id='domain_id' hidden='true'>" +
      "<input type='button' value='Add' id='last_domain' onclick='editDomainAdd()'>" +
    "</div>" + 
  "</div>" +
  "<hr>" +
  "<div class='plus' id='button_kont' " +
  "onclick='Model.clickIkon(&#39;kont_id&#39;, &#39;button_kont&#39;)'/>" +
  "<div id='kont'>" +
    "<b>Kont:</b></br>" +
    "<div id='kont_id' hidden='true'>" +
      "<input type='button' value='Add' id='last_kont' onclick='editKontAdd()'>" +
    "</div>" +
  "</div>" +
  "<hr>" +
  "<div class='plus' id='button_ontology' " +
  "onclick='Model.clickIkon(&#39;ontology_id&#39;, &#39;button_ontology&#39;)'/>" +
  "<div id='ontology'>" +
    "<b>Ontology:</b></br>" +
    "<div id='ontology_id' hidden='true'>" +
      "<input type='button' value='Add' id='last_ontology' onclick='editOntologyAdd()'>" +
    "</div>" +
  "</div>" +
  "<hr>" +
  "<div class='plus' id='button_semantic' " +
  "onclick='Model.clickIkon(&#39;semantic_id&#39;, &#39;button_semantic&#39;)'/>" +
  "<div id='semantic'>" +
    "<b>Semantic Relations: Target, Relation</b></br>" +
    "<div id='semantic_id' hidden='true'>" +
      "<input type='button' value='Add' id='last_semantic' onclick='editSemanticAdd()'>" +
    "</div>" +
  "</div>" +
  "<hr>" +
  "<div class='plus' id='button_equivalence' " +
  "onclick='Model.clickIkon(&#39;equivalence_id&#39;, &#39;button_equivalence&#39;)'/>" +
  "<div id='equivalence'>" +
    "<b>Equivalence Relations</b></br>" +
    "<div id='equivalence_id' hidden='true'>" +
      "<input type='button' value='Add' id='last_equivalence' onclick='editEquivalenceAdd()'>" +
    "</div>" +
  "</div>");
  setNewId();
  if(typeof data !== 'undefined'){
    parseObjectToHTML(data);
  }
  log("cdb_syn.js:showEditHTML():end");
}

function editSynonymsRemove(id) {
  if(confirm("Are you sure you want to delete this item?")){
    $("#synonyms_" + id).remove();
  }
  log("cdb_syn.js:editSynonymsRemove():end");
}

function editSynonymsAdd(id_syn, syn) {
  if(typeof syn === "undefined"){
    syn = "";
  }
  var id = getMaxId('synonyms_text_', true);
  var html = "<div id='synonyms_" + id + "' class='boxed'>" +
    "<input type='text' value='" + syn + "' " +
    "id='synonyms_text_" + id + "'" +
    "class='select_text'" +
    "onkeypress=\"Model.getSelectFromServer(event, " +
    "'synonyms_text_" + id + "', " +
    "\'cdb_lu\', \'" + $('#serverDictAddress').html() + "\')\">" +
    "<select id='select_synonyms_text_" + id + "' " +
               "style='width:15px'></select>" +
    "<input type='button' value='Remove' onclick='editSynonymsRemove(" + id + ")'>" +
    "</div>";
  $("#last_synonyms").before(html);
  $('#select_synonyms_text_' + id).
    append('<option value="' + id_syn + '">' + syn + '</option>');
  log("cdb_syn.js:editSynonymsAdd():end");
}

function editDomainRemove(id) {
  if(confirm("Are you sure you want to delete this item?")){
    $("#domain_" + id).remove();
  }
  log("cdb_syn.js:editDomainRemove():end");
}

function editDomainAdd(name, status, term) {
  if(typeof name === 'undefined'){
    name = '';
  }
  if(typeof status === 'undefined'){
    status = 'false';
  }
  if(typeof term === 'undefined'){
    term = '';
  }
  if(!($.inArray(term, domain_select_id))){
    domain_select_id.push(term);
  }
  var id = getMaxId('domain_text_name_', true);
  var html = "<div id='domain_" + id + "' class='boxed'>" +
    "Name: <input type='text' value='" + name + "' id='domain_text_name_" + id + "'>" +
    "<input type='checkbox' value='status' id='domain_checkbox_" + id + "'>status" +
    "<input type='button' value='Remove' onclick='editDomainRemove(" + id + ")'>" +
    "</br>" +
    "Domain: <select id='domain_select_" + id + "'></select>" +
    "</div>";
  $("#last_domain").before(html);
  if(status === 'true'){
    $("#domain_checkbox_" + id).attr('checked', true);
  }
  fillSelect("domain_select_" + id, domain_select_id);
  $("#domain_select_" + id).val(term);
  log("cdb_syn.js:editDomainAdd():end");
}

function editKontRemove(id) {
  if(confirm("Are you sure you want to delete this item?")){
    $("#kont_" + id).remove();
  }
  log("cdb_syn.js:editKontRemove():end");
}

function editKontAdd(name, rel_name, arg1, arg2, negative, status) {
  if(typeof name === 'undefined'){
    name = '';
  }
  if(typeof rel_name === 'undefined'){
    rel_name = '';
  }
  if(typeof arg1 === 'undefined'){
    arg1 = '';
  }
  if(typeof arg1 === 'undefined'){
    arg2 = '';
  }
  if(typeof negative === 'undefined'){
    negative = 'false';
  }
  if(typeof status === 'undefined'){
    status = 'false';
  }
  if(!($.inArray(rel_name, kont_select_rel_name_id))){
    kont_select_rel_name_id.push(rel_name);
  }
  if(!($.inArray(arg1, kont_select_arg_id))){
    kont_select_arg_id.push(arg1);
  }
  if(!($.inArray(arg2, domain_select_id))){
    kont_select_arg_id.push(arg2);
  }
  var id = getMaxId('kont_text_', true);
  var html = "<div id='kont_" + id + "' class='boxed'>" + 
    "Name: <input type='text' value='" + name + "' id='kont_text_" + id + "'>" +
    "<input type='button' value='Remove' onclick='editKontRemove(" + id + ")'></br>" +
    "Rel. name: <select id='kont_select_rel_name_" + id + "'></select><br/>" +
    "Arg1: <select id='kont_select_arg1_" + id + "' style='width: 477px'></select><br/>" +
    "Arg2: <select id='kont_select_arg2_" + id + "' style='width: 477px'></select><br/>" +
    "<input type='checkbox' value='negative' id='kont_checkbox_negative_" + id + "'>negative" +
    "<input type='checkbox' value='status' id='kont_checkbox_status_" + id + "'>status" +
    "</div>";
  $("#last_kont").before(html);
  fillSelect("kont_select_rel_name_" + id, kont_select_rel_name_id);
  fillSelect("kont_select_arg1_" + id, kont_select_arg_id);
  fillSelect("kont_select_arg2_" + id, kont_select_arg_id);
  if(negative === 'true'){
    $("#kont_checkbox_negative_" + id).attr('checked', true);
  }
  if(status === 'true'){
    $("#kont_checkbox_status_" + id).attr('checked', true);
  }
  $("#kont_select_rel_name_" + id).val(rel_name);
  $("#kont_select_arg1_" + id).val(arg1);
  $("#kont_select_arg2_" + id).val(arg2);
  log("cdb_syn.js:editKontAdd():end");
}

function editOntologyRemove(id) {
  if(confirm("Are you sure you want to delete this item?")){
    $("#ontology_" + id).remove();
  }
  log("cdb_syn.js:editOntologyRemove():end");
}

function editOntologyAdd(name, rel_name, arg1, arg2, negative, status) {
  if(typeof name === 'undefined'){
    name = '';
  }
  if(typeof rel_name === 'undefined'){
    rel_name = '';
  }
  if(typeof arg1 === 'undefined'){
    arg1 = '';
  }
  if(typeof arg2 === 'undefined'){
    arg2 = '';
  }
  if(typeof negative === 'undefined'){
    negative = 'false';
  }
  if(typeof status === 'undefined'){
    status = 'false';
  }
  if(!($.inArray(rel_name, ontology_select_rel_name_id))){
    ontology_select_rel_name_id.push(rel_name);
  }
  var id = getMaxId('ontology_text_name_', true);
  var html = "<div id='ontology_" + id + "' class='boxed'>" + 
    "Name: <input type='text' value='" + name + "' id='ontology_text_name_" + id + "'>" +
    "<input type='button' value='Remove' onclick='editOntologyRemove(" + id + ")'></br>" +
    "Rel. name: <select id='ontology_select_rel_name_" + id + "'></select>" +
    "Arg1: <input type='text' value='" + arg1 + "' id='ontology_text_arg1_" + id + "'>" +
    "Arg2: <input type='text' value='" + arg2 + "' id='ontology_text_arg2_" + id + "'>" +
    "<input type='checkbox' value='negative' id='ontology_checkbox_negative_" + id + "'>negative" +
    "<input type='checkbox' value='status' id='ontology_checkbox_status_" + id + "'>status" +
    "</div>";
  $("#last_ontology").before(html);
  if(negative === 'true'){
    $("#ontology_checkbox_negative" + id).attr('checked', true);
  }
  if(status === 'true'){
    $("#ontology_checkbox_status" + id).attr('checked', true);
  }
  fillSelect("ontology_select_rel_name_" + id, ontology_select_rel_name_id);
  $("#ontology_select_rel_name_" + id).val(rel_name);  
  log("cdb_syn.js:editOntologyAdd():end");
}

function editSemanticRemove(id) {
  if(confirm("Are you sure you want to delete this item?")){
    $("#semantic_" + id).remove();
  }
  log("cdb_syn.js:editSemanticRemove():end");
}  

function editSemanticAdd(id_text, preview_text, relation_name, coordinative, disjunktive, reversed, factive, negative) {
  if(typeof preview_text === 'undefined'){
    preview_text = '';
  }
  if(typeof relation_name === 'undefined'){
    relation_name = '';
  }
  if(typeof coordinative === 'undefined'){
    coordinative = 'false';
  }
  if(typeof disjunktive === 'undefined'){
    disjunktive = 'false';
  }
  if(typeof reversed === 'undefined'){
    factive = 'false';
  }
  if(typeof negative === 'undefined'){
    negative = 'false';
  }
  if(!($.inArray(relation_name, semantic_select_id))){
    semantic_select_id.push(relation_name);
  }
  var id = getMaxId('semantic_text_', true);
  var html = "<div id='semantic_" + id + "' class='boxed'>" + 
    "<input type='text' value='" + preview_text + "' " +
    "id='semantic_text_" + id + "'" +
    "class='select_text'" +
    "onkeypress=\"Model.getSelectFromServer(event, " +
    "'semantic_text_" + id + "', " +
    "\'cdb_syn\', \'" + $('#serverDictAddress').html() + "\')\">" +
    "<select id='select_semantic_text_" + id + "' " +
               "style='width:15px'></select>" +
    "<select id='semantic_select_" + id + "'></select>" +
    "<input type='button' value='Remove' onclick='editSemanticRemove(" + id + ")'><br>" +
    "<input type='checkbox' value='Coordinative' id='semantic_checkbox_coordinative_" + id + "'>Coordinative" +
    "<input type='checkbox' value='Disjunctive' id='semantic_checkbox_disjunctive_" + id + "'>Disjunctive" +
    "<input type='checkbox' value='reversed' id='semantic_checkbox_reversed_" + id + "'>reversed" +
    "<input type='checkbox' value='Factive' id='semantic_checkbox_factive_" + id + "'>Factive" +
    "<input type='checkbox' value='Negative' id='semantic_checkbox_negative_" + id + "'>Negative" +
    "</div>";
  $("#last_semantic").before(html);
  $('#select_semantic_text_' + id).
    append('<option value="' + id_text + '">' + preview_text + '</option>');
  if(coordinative === 'true'){
    $("#semantic_checkbox_coordinative_" + id).attr('checked', true);
  }
  if(disjunktive === 'true'){
    $("#semantic_checkbox_disjunktive_" + id).attr('checked', true);
  }
  if(reversed === 'true'){
    $("#semantic_checkbox_reversed_" + id).attr('checked', true);
  }
  if(factive === 'true'){
    $("#semantic_checkbox_factive_" + id).attr('checked', true);
  }
  if(negative === 'true'){
    $("#semantic_checkbox_negative_" + id).attr('checked', true);
  }
  fillSelect("semantic_select_" + id, semantic_select_id);
  $("#semantic_select_" + id).val(relation_name);
  log("cdb_syn.js:editSemanticAdd():end");
}  

function editEquivalenceRemove(id) {
  if(confirm("Are you sure you want to delete this item?")){
    $("#equivalence_" + id).remove();
  }
  log("cdb_syn.js:editEquivalenceRemove():end");
}  

function editEquivalenceAdd(id20, target20, id30, target30, name, version, pos, author_score, author_source_id) {
  log(arguments);
  if(typeof target20 === 'undefined'){
    target20 = '';
  }
  if(typeof target30 === 'undefined'){
    target30 = '';
  }
  if(typeof name === 'undefined'){
    name = '';
  }
  if(typeof version === 'undefined'){
    version = '';
  }
  if(typeof pos === 'undefined'){
    pos = '';
  }
  if(typeof author_score === 'undefined'){
    author_score = '';
  }
  if(typeof author_source_id === 'undefined'){
    author_source_id = '';
  }
  var id = getMaxId('equivalence_text_target20_', true);
  var html = "<div id='equivalence_" + id + "' class='boxed'>" + 
    "Target20: <input type='text' value='" + target20 + "' " +
    "id='equivalence_text_target20_" + id + "'" +
    "class='select_text'" +
    "onkeypress=\"Model.getSelectFromServer(event, " +
    "'equivalence_text_target20_" + id + "', " +
    "\'wnen\', \'" + $('#serverDictAddress').html() + "\')\">" +
    "<select id='select_equivalence_text_target20_" + id + "' " +
               "style='width:15px'></select>" +
    "<input type='button' value='Remove' onclick='editEquivalenceRemove(" + id + ")'></br>" +
    "Target30: <input type='text' value='" + target30 + "' " +
    "id='equivalence_text_target30_" + id + "'" +
    "class='select_text'" +
    "onkeypress=\"Model.getSelectFromServer(event, " +
    "'equivalence_text_target30_" + id + "', " +
    "\'wnen30\', \'" + $('#serverDictAddress').html() + "\')\">" +
    "<select id='select_equivalence_text_target30_" + id + "' " +
               "style='width:15px'></select></br>" +
    "Name: <select id='equivalence_text_name_" + id + "'></select></br>" +
    "Version: <input type='text' value='" + version + "' id='equivalence_text_version_" + id + "'></br>" +
    "Pos: <input type='text' value='" + pos + "' id='equivalence_text_pos_" + id + "'></br>" +
    "Author score: <input type='text' disabled='true' value='" + author_score + "' id='equivalence_text_author_score_" + id + "'></br>" +
    "Author source id: <input type='text' disabled='true' value='" + author_source_id + "' id='equivalence_text_author_source_id_" + id + "'>" +
    "</div>";
  $("#last_equivalence").before(html);
  fillSelect('equivalence_text_name_' + id, equivalence_text_name);
  $('#equivalence_text_name_' + id).val(name);
  $('#select_equivalence_text_target20_' + id).
    append('<option value="' + id20 + '">' + target20 + '</option>');
  $('#select_equivalence_text_target20_' + id).val(id20);
  $('#select_equivalence_text_target30_' + id).
    append('<option value="' + id30 + '">' + target30 + '</option>');
  $('#select_equivalence_text_target30_' + id).val(id30);
  log("cdb_syn.js:editEquivalenceAdd():end");
}  

function parseObjectToHTML(obj) {
  if(typeof obj.cdb_synset === 'undefined'){
    return;
  }
  var cdb_syn = obj.cdb_synset;
  $("#synsetId_text").val(isValid(cdb_syn['@c_sy_id']));
  if(typeof cdb_syn.base_concept !== 'undefined' &&
     cdb_syn.base_concept['$'] === 'true'){
    $("#baseConcept").attr('checked', true);
  }
  $("#commentText").val(isValid(cdb_syn['@comment']));
  if(typeof cdb_syn.synonyms !== 'undefined' &&
     typeof cdb_syn.synonyms.synonym !== 'undefined'){
    for(var index in cdb_syn.synonyms.synonym){
      var synonym = cdb_syn.synonyms.synonym[index];
      var previewText = synonym['@c_lu_id-previewtext'];
      if(typeof synonym['@c_lu_id-previewtext'] === 'undefined' || synonym['@c_lu_id-previewtext'] === ''){
        previewText = Model.getPreviewTextFromId(synonym['@c_lu_id'], 'cdb_lu', $('#serverDictAddress').html());
      }
      editSynonymsAdd(synonym['@c_lu_id'], previewText);
    }
  }
  if(typeof cdb_syn.wn_domains !== 'undefined' &&
     typeof cdb_syn.wn_domains.dom_relation !== 'undefined'){
    for(var index in cdb_syn.wn_domains.dom_relation){
      var relation = cdb_syn.wn_domains.dom_relation[index];
      editDomainAdd(relation['@name'], relation['@status'], relation['@term']);
    }
  }
  if(typeof cdb_syn.kont_relations !== 'undefined' &&
     typeof cdb_syn.kont_relations.ont_relation !== 'undefined'){
    for(var index in cdb_syn.kont_relations.ont_relation){
      var relation = cdb_syn.kont_relations.ont_relation[index];
      editKontAdd(relation['@name'], relation['@relation_name'], relation['@arg1'], relation['@arg2'], relation['@negative'], relation['@status']);
    }
  }
  if(typeof cdb_syn.sumo_relations !== 'undefined' &&
     typeof cdb_syn.sumo_relations.ont_relation !== 'undefined'){
    for(var index in cdb_syn.sumo_relations.ont_relation){
      var relation = cdb_syn.sumo_relations.ont_relation[index];
      editOntologyAdd(relation['@name'], relation['@relation_name'], relation['@arg1'], relation['@arg2'], relation['@negative'], relation['@status']);
    }
  }
  if(typeof cdb_syn.wn_internal_relations !== 'undefined' &&
     typeof cdb_syn.wn_internal_relations.relation !== 'undefined'){
    for(var index in cdb_syn.wn_internal_relations.relation){
      var relation = cdb_syn.wn_internal_relations.relation[index];
      var previewText = relation['@target-previewtext'];
      if(typeof relation['@target-previewtext'] === 'undefined' || relation['@target-previewtext'] === ''){
        previewText = Model.getPreviewTextFromId(relation['@target'], 'cdb_syn', $('#serverDictAddress').html());
      }
      editSemanticAdd(relation['@target'], previewText, relation['@relation_name'], relation['@coordinative'], relation['@disjunctive'], relation['@reversed'], relation['@factive'], relation['@negative']);
    }
  }
  if(typeof cdb_syn.wn_equivalence_relations !== 'undefined' &&
     typeof cdb_syn.wn_equivalence_relations.relation !== 'undefined'){
    for(var index in cdb_syn.wn_equivalence_relations.relation){
      var relation = cdb_syn.wn_equivalence_relations.relation[index];
      var previewText20 = relation['@target20-previewtext'];
      if(typeof previewText20 === 'undefined' || previewText20 === ''){
        previewText20 = Model.getPreviewTextFromId(relation['@target20'], 'wnen', $('#serverDictAddress').html());
        log(previewText20 + 'a');
      }
      var previewText30 = relation['@target30-previewtext'];
      if(typeof previewText30 === 'undefined' || previewText30 === ''){
        previewText30 = Model.getPreviewTextFromId(relation['@target30'], 'wnen30', $('#serverDictAddress').html());
        log(previewText30 + 'a');
      }
      if(typeof relation.author === 'undefined'){
        relation.author = {
            '@score': '',
            '@source_id': ''
          };
      }
      editEquivalenceAdd(relation['@target20'], previewText20, relation['@target30'], previewText30, 
                           relation['@relation_name'], relation['@version'], relation['@pos'], relation.author['@score'], 
                             relation.author['@source_id']);
    }
  }
  log('cdb_syn.js:parseObjectToHTML():end');
}

function parseHTMLToObject() {
  var obj = {
      'cdb_synset':{}
    };
  var data = obj.cdb_synset;
  data['@c_sy_id'] = $('#synsetId_text').val();
  data.base_concept = {};
  data.base_concept['$'] = $('#baseConcept').is(':checked') + '';
  data['@comment'] = $('#commentText').val();
  var maxId = getMaxId('synonyms_text_');
  data.synonyms = {
    'synonym': []
  };
  for(var id = 0; id < maxId; id++){
    var val = $('#synonyms_text_' + id).val();
    var selectVal = $('#select_synonyms_text_' + id).val();
    if(typeof val === 'undefined' || selectVal === "") continue;
    data.synonyms.synonym.push({
                            '@c_lu_id-previewtext': val,
                            '@c_lu_id': selectVal
                         });
  }
  maxId = getMaxId('domain_text_name_');
  data.wn_domains = {
    'dom_relation': []
  };
  for(var id = 0; id < maxId; id++){
    var val = $('#domain_text_name_' + id).val();
    if(typeof val === 'undefined') continue;
    data.wn_domains.dom_relation.push({
                                   '@name': val,
                                   '@term': $('#domain_select_' + id).val(),
                                   '@status': $('#domain_checkbox_' + id).is(':checked') + ''
                                });
  }
  data.kont_relations = {
    'ont_relation': []
  };
  maxId = getMaxId('kont_select_arg1_');
  for(var id = 0; id < maxId; id++){
    var val = $('#kont_text_' + id).val();
    if(typeof val === 'undefined') continue;
    data.kont_relations.ont_relation.push({
                                       '@name': val,
                                       '@relation_name': $('#kont_select_rel_name_' + id).val(),
                                       '@arg1': $('#kont_select_arg1_' + id).val(),
                                       '@arg2': $('#kont_select_arg2_' + id).val(),
                                       '@negative': $('#kont_checkbox_negative_' + id).is(':checked') + '',
                                       '@status': $('#kont_checkbox_status_' + id).is(':checked') + ''
                                    });
  }
  data.sumo_relations = {
    'ont_relation': []
  };
  maxId = getMaxId('ontology_text_arg1_');
  for(var id = 0; id < maxId; id++){
    var val = $('#ontology_text_name_' + id).val();
    if(typeof val === 'undefined') continue;
    data.sumo_relations.ont_relation.push({
                                       '@name': val,
                                       '@relation_name': $('#ontology_select_rel_name_' + id).val(),
                                       '@arg1': $('#ontology_text_arg1_' + id).val(),
                                       '@arg2': $('#ontology_text_arg2_' + id).val(),
                                       '@negative': $('#ontology_checkbox_negative_' + id).is(':checked') + '',
                                       '@status': $('#ontology_checkbox_status_' + id).is(':checked') + ''
                                    });
  }
  data.wn_internal_relations = {
    'relation': []
  };
  maxId = getMaxId('semantic_text_');
  for(var id = 0; id < maxId; id++){
    var val = $('#semantic_text_' + id).val();
    var selectVal = $('#select_semantic_text_' + id).val();
    var semanticSelect = $('#semantic_select_' + id).val();
    if(typeof val === 'undefined' || (selectVal === "" && semanticSelect === "")) continue;
    data.wn_internal_relations.relation.push({
                                          '@target-previewtext': val,
                                          '@target': selectVal,
                                          '@relation_name': semanticSelect,
                                          '@coordinative': $('#semantic_checkbox_coordinative_' + id).is(':checked') + '',
                                          '@disjunktive': $('#semantic_checkbox_disjunktive_' + id).is(':checked') + '',
                                          '@reversed': $('#semantic_checkbox_reversed_' + id).is(':checked') + '',
                                          '@factive': $('#semantic_checkbox_factive_' + id).is(':checked') + '',
                                          '@negative': $('#semantic_checkbox_negative_' + id).is(':checked') + ''
                                       });
  }
  data.wn_equivalence_relations = {
    'relation': []
  };
  maxId = getMaxId('equivalence_text_pos_');
  for(var id = 0; id < maxId; id++){
    var val20 = $('#equivalence_text_target20_' + id).val();
    var selectVal20 = $('#select_equivalence_text_target20_' + id).val();
    var val30 = $('#equivalence_text_target30_' + id).val();
    var selectVal30 = $('#select_equivalence_text_target30_' + id).val();
    if(typeof val20 === 'undefined' || selectVal20 === 'undefined'){
      val20 = '';
      selectVal20 = '';
    }
    if(typeof val30 === 'undefined' || selectVal30 === 'undefined'){
      val30 = '';
      selectVal30 = '';
    }
    data.wn_equivalence_relations.relation.push({
                                             '@target20': selectVal20,
                                             '@target20-previewtext': val20,
                                             '@target30': selectVal30,
                                             '@target30-previewtext': val30,
                                             '@relation_name': $('#equivalence_text_name_' + id).val(),
                                             '@version': $('#equivalence_text_version_' + id).val(),
                                             '@pos': $('#equivalence_text_pos_' +  id).val(),
                                          });
  }
  log('cdb_syn.js:parseHTMLToObject():end');
  return obj;
}

function clear() {
  setNewId();
  $('#baseConcept').attr('checked', false);
  $('#commentText').val('');
  $('#synonyms_id').empty();
  $('#synonyms_id').append("<input type='button' value='Add' id='last_synonyms' onclick='editSynonymsAdd()'>");
  $('#domain_id').empty();
  $('#domain_id').append("<input type='button' value='Add' id='last_domain' onclick='editDomainAdd()'>");
  $('#kont_id').empty();
  $('#kont_id').append("<input type='button' value='Add' id='last_kont' onclick='editKontAdd()'>");
  $('#ontology_id').empty();
  $('#ontology_id').append("<input type='button' value='Add' id='last_ontology' onclick='editOntologyAdd()'>");
  $('#semantic_id').empty();
  $('#semantic_id').append("<input type='button' value='Add' id='last_semantic' onclick='editSemanticAdd()'>");
  $('#equivalence_id').empty();
  $('#equivalence_id').append("<input type='button' value='Add' id='last_equivalence' onclick='editEquivalenceAdd()'>");
  log('cdb_syn.js:clear():end');
}

function setNewId() {
  $('#synsetId_text').val('_new_id_');
}

