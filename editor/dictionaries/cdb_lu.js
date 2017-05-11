var pos_select = ['', 'noun', 'verb', 'adjective'];
var form_select_length = ['', 'full', 'origshort', 'shortening', 'acronym', 'abbreviation'];
var semantics_select_reference = ['', 'common', 'proper'];
var semantics_select_countability = ['', 'coll', 'count', 'mass', 'plurtant', 'uncount', '(un)count', 'unc/count'];
var morphology_select_type = ['', 'compderiv', 'compound', 'derivation', 'nmorph', 'phrasal', 'simpmorph', 'unspecified', 'wordgroup', 'xcompound', 'zero-derivation', 'zeroderivation', 'x-compound', 'nil'];
var syntax_select_gender = ['', 'f', 'fn', 'm', 'm/f', 'mf', 'mfn', 'mn', 'n', 'n.a.', 'n.r.'];
var syntax_select_number = ['', 'lexplur', 'lexsing'];
var syntax_select_article = ['', 'de', 'de/het', 'het', 'narticle'];
var syntax_complementation_select_id = ["", "factive", "psmodnoun", "fixprep&#39;aan&#39;", "fixprep&#39;bij&#39;", "proper", "fixprep &#39;door&#39;", "fixprep&#39;in&#39;", "fixprep &#39;als&#39;", "fixprep &#39;inzake&#39;", "fixprep &#39;jegens&#39;", "fixprep &#39;van&#39;", "fixprep &#39;over&#39;&#39;", "prep &#39;tot&#39;", "fixprep &#39;met&#39;", "fixprep &#39;naar&#39;", "fixprep &#39;om&#39;", "fixprep &#39;omtrent&#39;", "fixprep &#39;op&#39;", "fixprep &#39;over&#39;", "fixprep &#39;tegen&#39;", "fixprep &#39;per&#39;", "fixprep &#39;ter ... van&#39;", "ncompl", "fixprep &#39;met ... van&#39;", "fixprep &#39;ten ... van&#39;", "fixprep &#39;zonder&#39;", "fixprep &#39;onder ... van&#39;", "fixprep &#39;op ... van&#39;", "prep &#39;op ... bij&#39;", "prep &#39;van&#39;", "prep &#39;bij&#39;", "prep &#39;binnen&#39;", "prep &#39;op&#39;", "prep &#39;uit&#39;", "fixprep &#39; op&#39;", "fixprep &#39;op;", "fixprep &#39;in ... van&#39;", "fixprep &#39;via&#39;", "ofclause", "fixprep &#39;tot&#39;", "fixprep &#39;tussen&#39;", "prep &#39;rond&#39;", "fixprep &#39;rond&#39;", "fixprep &#39;tegenover&#39;", "fixprep &#39;wegens&#39;", "prep &#39;tegenover&#39;", "&#39;proper&#39;", "fixprep &#39;uit&#39;", "fixprep &#39;van&#39;", "fixprep &#39;onder&#39;", "fixprep &#39;van&#39;, &#39;voor&#39;", "fixprep &#39;voor&#39;", "fixprep &#39;voor&#39;, &#39;op&#39;", "omtoinf", "premodnoun", "prep &#39;aan&#39;", "prep &#39;in&#39;", "fixprep&#39;om&#39;", "prep &#39;jegens&#39;", "fixprep &#39;achter&#39;", "fixprep &#39;langs&#39;", "op", "prep &#39;met&#39;", "prep&#39;met .. tot&#39;", "prep &#39;naar&#39;", "prep &#39;omtrent&#39;", "prep &#39;over&#39;", "prep &#39;boven&#39;", "fixprep &#39;boven&#39;", "fixprep &#39;aangaande&#39;", "fixprep&#39;met&#39;", "prep &#39;tegen&#39;", "prep &#39;tussen&#39;", "fixprep &#39;binnen&#39;", "prep &#39;voor&#39;", "prep &#39;aangaande&#39;", "toinf", "whclause"];
var pragmatics_select_socgroup = ['', 'child', 'sold', 'stud', 'romcath', 'joods', 'prot'];	
var pragmatics_select_domain = ['', 'aardr', 'aardrijksk', 'aardrijkskunde', 'adm', 'alchemie', 'ambacht', 'dierk/arch', 'lucht/com', 'lucht/mete', 'med/lucht', 'fil/cul', 'med/sport', 'nat/med', 'sport/spel', 'pol/jur', 'handel/gesch', 'gesch/bouw', 'dram/sport', 'mil/spel', 'med/biol', 'pol/rel', 'school/wet', 'jur/verk', 'elek/nat', 'lit/bijb', 'paard/conf', 'handel/jur', 'ethiek', 'drukw', 'med/taalk', 'com/mil', 'techn/mil', 'techn/comp', 'lit/dram', 'cul/schei', 'handel/ges', 'psych/med', 'kunstgesch', 'schei/med', 'aard/gesch', 'fil/lit', 'gesch/mil', 'scheep/mil', 'wisk/aardr', 'pol/veet', 'anatomie', 'adm/econ', 'econ/geldw', 'antropol', 'ste/astr', 'taalk/lit', 'antropologie', 'arch', 'rel/pol', 'astr', 'audio', 'beeldk', 'bijb', 'biochemie', 'schei/nat', 'biologie', 'biol', 'bouwk', 'com', 'computer', 'conf', 'cul', 'dansk', 'jur/scheep', 'wet/gesch', 'school/med', 'com/school', 'rel/school', 'scheep/tec', 'scheep/die', 'dansk/muz', 'muz/dansk', 'com/ruim', 'cul/dierk', 'taalk/arch', 'seks', 'muz/lit', 'telecom', 'dierk', 'golf', 'meetk', 'mil/school', 'uitgeverij', 'fil/rel/po', 'mil/sport', 'kunst/wet', 'geol/aardr', 'horeca', 'myth', 'com/verk', 'film/com', 'medial', 'dierk/cul', 'dierk/viss', 'tech', 'adm/pol', 'archeol', 'dipl', 'dram', 'drukkunst', 'econ', 'school/pol', 'elek', 'farmacie', 'fil', 'film', 'folk', 'foto', 'geldw', 'geldw/jur', 'geneal', 'geol', 'gesch', 'med/scheik', 'graf', 'handel', 'rel/fil', 'med/nat', 'fil/wet/po', 'plantk/cul', 'ruim/mil', 'landb/econ', 'landb/pol', 'lit/muz', 'gesch/lit', 'dram/gesch', 'jur/verzek', 'geldw/pol', 'amb/hand', 'mil/scheep', 'pol/econ', 'anat/med', 'dram/techn', 'sociol/ges', 'landb/scho', 'landb/aard', 'schei/land', 'jur/handel', 'ind/handel', 'handel/pol', 'cul/plantk', 'culi', 'econ/sociol', 'science', 'staatkunde', 'herald', 'ind', 'journal', 'jur', 'jacht', 'antropo', 'kunst', 'landb', 'fil/rel', 'fil/wet/re', 'astrol', 'ecol', 'landb/wet', 'landb/veet', 'landmeetk', 'lit', 'logica', 'lucht', 'med', 'med/psych', 'med/rel', 'med/schei', 'adm/geldw', 'dram/film', 'bouwk/ges', 'econ/pol', 'huishouden', 'meteo', 'mijnw', 'mil', 'muz', 'nat', 'paardensp', 'plantk', 'pol', 'pol/mil', 'psych', 'religie', 'ruim', 'scheep', 'schei', 'gesch/econ', 'school', 'sociol', 'spel', '*spel', 'spoor', 'sport', 'ster', 'taalk', 'jur/pol', 'nat/meteo', 'mil/rel', 'fil/gesch', 'sport/mil', 'spel/sport', 'med/jur', 'wisk/graf', 'bouwk/druk', 'lit/gesch', 'mil/med', 'mil/pol', 'techn', 'tennis', 'textiel', 'theol', 'typografie', 'toneel', 'veet', 'verkeer', 'verzek', 'visserij', 'voetbal', 'weg/waterb.', 'weg/waterb', 'weg/wat', 'wetenschap', 'wielrennen', 'wisk', 'zwemsport', 'zwemspo', 'nosyn', 'onderwijs'];
var pragmatics_select_style = ['', 'formal', 'informal', 'slang', 'vulgar', 'archaic'];
var pragmatics_select_origin = ['', 'english', 'french', 'german', 'gallicism', 'anglicism', 'germanism', 'latin', 'greek', 'italian', 'hungarian', 'ind', 'spanish', 'jiddish', 'danish', 'russian', 'swedish', 'arab', 'jap'];
var pragmatics_select_frequency = ['', 'nfreq', 'rare', 'less freq', 'basicf'];
var pragmatics_select_connotation = ['', 'offens', 'pejor', 'euphem', 'jocular'];
var pragmatics_select_chronology = ['', 'oldfash', 'synchron', 'neolog'];
var pragmatics_select_geography = ['', 'belg', 'dialect', 'ind', 'nederl', 'ned', 'indie'];
var example_form_category_id = ['', 'ad', 'ap', 'de', 'np', 'pp', 's', 'vp', 'vs', 'pv', 'S', 'm'];
var example_form_text_category_id = ['', 'ad', 'ap', 'de', 'np', 'pp', 's', 'vp', 'vs', 'pv', 'S', 'm'];
var example_syntax_type_id = ['', 'fixed', 'free'];
var example_syntax_subtype_id = ['', 'gracol', 'idiom', 'lexcol', 'name', 'pragm', 'pragma', 'prover', 'term', 'proper', 'slogan', 'compl', 'prag', 'proverb'];
var example_syntax_combi_select_id = ['', 'adj', 'adv', 'art', 'conj', 'det', 'noun', 'num', 'prep', 'pron', 'verb', 'vnw', 'prop', 's', 'telw', 'int'];
var examples_semantics_lc_collocator_id = ['', '(ant)bonus', 'action', 'antibonus', 'anticause', 'antifunct', 'antimagnus', 'antioper1', 'antioper2', 'antiposs', 'antiposses', 'antireal', 'antiverus', 'bonus', 'bonus/anti', 'causecont', 'causedegra', 'causeexist', 'causefunct', 'causeincep', 'causeminus', 'causeplus', 'causeposs', 'causeposse', 'causeupgra', 'causeupgrad', 'cont', 'contexist', 'contoper2', 'contposses', 'degrad', 'dimin', 'enum', 'enumeratie', 'event', 'excess', 'exist', 'fin', 'finexist', 'finfinct', 'finpossess', 'func', 'funct', 'funct/meas', 'hum/inst', 'incep', 'incepexist', 'incepfunct', 'incepmanif', 'incepoper1', 'incepposse', 'IncepState', 'incpossess', 'intens', 'liqui', 'location', 'magn/antim', 'magnu/anti', 'magnus', 'malus', 'manif', 'measure', 'minim', 'minusexist', 'mult', 'nonmagnus', 'oper', 'oper1', 'oper1/2', 'oper2', 'partic', 'plusexist', 'possess', 'pragmform', 'process', 'qual', 'qualif', 'qualifier', 'quality', 'quantifier', 'real', 'sing', 'son', 'sound', 'spec', 'specifier', 'stat', 'state', 'state/proc', 'synonym', 'taut', 'toper1', 'type', 'uiten', 'up/degrad', 'upgrad', 'upgrad/deg', 'verus', 'place', 'oper1/ince', 'move', 'cont state', 'all', 'Incepstate', 'incepstate', 'init state', 'modif', 'nondyn/dyn', 'oper1/stat', 'finoper1', 'causeantif', 'keer', 'finstate', 'incepreal', 'incepactio', 'causemanif', 'cause', 'causereal', 'antimanif', 'upgrade', 'decrease', 'degrade', 'causeliqui', 'causeoper2', 'oper1/liqu', 'antiexist', 'oper1/oper', 'need', 'incepoper', 'degrad/upg', 'incept', 'support', 'contoper', 'causestate', 'opet1cont', 'init-state', 'antitense', 'causenotre'];
var examples_semantics_spec_collocator_id = ['', '(create)', '(prepare)', 'appear', 'attend', 'caretake', 'consult', 'consume', 'container', 'create', 'engage', 'evoke', 'give', 'hold', 'install', 'introduce', 'keep', 'lose', 'own', 'portion', 'practise', 'prepare', 'putoff', 'recieve', 'refuse', 'reign', 'remove', 'solve', 'suffer', 'take', 'takeplace', 'turnon', 'use', 'violate', 'wear'];
var examples_semantics_subtype_argument_id = ['', 'agreement', 'animal', 'bodypart', 'building', 'clothing', 'disease', 'fammember', 'furniture', 'game', 'machine', 'meeting', 'musinstr', 'nutrition', 'order', 'plan', 'plant', 'profession', 'research', 'soundm', 'term', 'written', 'funct', 'exist'];
var examples_semantics_gc_gramword_id = ['', 'time', 'location', 'circumstance', 'manner', 'means', 'cause', 'reason', 'concession', 'result', 'restriction', 'modality', 'comitative', 'condition', 'direction', 'expletive', 'genitief', 'goal', 'material', 'matter', 'measure', 'object', 'origin', 'other', 'place', 'purpose', 'qual', 'qualifier', 'relation', 'source', 'subject-matter', 'target', 'temp', 'topic'];
var semantics_verb_select_caseframe = ['', 'action1', 'action2', 'action3', 'animobj', 'animsubj', 'cognt1', 'cognt2', 'cognt3', 'echobt2', 'echprod2', 'echprod3', 'inanimobj', 'inanimsubj', 'location2', 'mvmt1', 'mvmt2', 'mvmt3', 'nselres', 'possess2', 'prcognt1', 'prcognt2', 'prcognt3', 'prmvmt1', 'prmvmt2', 'process1', 'process2', 'process3', 'state1', 'state2', 'state3', 'possess3', 'location1', 'stcognt1', 'stcognt2', 'stcognt3', 'prmvmt3'];
var morphology_verb_select_type = ['', 'simpmorph', 'phrasal', 'compound', 'derivation', 'wordgroup', 'word group'];
var morphology_verb_select_flex_mode = ['', 'inf', 'imp'];
var morphology_verb_select_tense = ['', 'ntense', 'pres'];
var morphology_verb_select_number = ['', 'nnumber'];
var morphology_verb_select_person = ['', 'nperson'];
var morphology_verb_flex_conjugation_select_id = ['', 'mixeda', 'mixedb', 'strong', 'regular', '-', 'other'];
var syntax_verb_select_trans = ['', '?', 'intr', 'tr', 'tran'];
var syntax_verb_select_separ = ['', 'inseparable', 'onsch', 'sch', 'separable'];
var syntax_verb_select_class = ['', 'main', 'aux', 'copula'];
var syntax_verb_select_peraux = ['', 'h', 'h/z', 'hz', 'naux', 'z'];
var syntax_verb_select_valency = ['', 'di', 'mono', 'tri'];
var syntax_verb_select_reflexiv = ['', 'nrefl', 'oblrefl', 'oblreflex', 'optrefl', 'optreflex'];
var syntax_verb_select_subject = ['', 'h', 'impers', 'pers'];
var semantics_verb_caseframe_arguments_caserole_select_left_id = ['', 'agent', 'soudirpath', 'benefactive', 'cognt3', 'cognizant', 'locative', 'effector', 'pers', 'noselres', 'nrefl', 'processed', 'referent', 'theme'];
var semantics_verb_caseframe_arguments_caserole_select_right_id = ['', 'agent', 'agentanimate', 'soudirpanselres', 'benefacnselres', 'locativenselres', 'cognizant', 'cognizananimate', 'effectornselres', 'nconnot', 'norole', 'processnselres', 'referentnselres', 'themenselres', 'theme'];
var syntax_complementation_comp_select_id = ['', 'nil', 'np', 'np np', 'pp [aan]', 'pp [..] np', 'ap np', 'anp/np np', 'pp [als] np', 'pp [result]', 'pp [..] pp[aan]', 'pp [..]', 'pp/ap', 'pp/ap np', 'pp [als]', 'np/pp', 'np np/ap', 'pp np/ap', 'np(subj)inf', 'np(subj)toinf', 'of', 'dat', 'wh', 'hoe', 'utterance', 'omtoinf', 'toinf', 'inf', 'np + np(subj)toinf', 'np + np(subj)inf', 'pp [aan] + dat', 'in', 'p1voor', 'np + omtoinf', 'np [..] + dat', 'pp [aan] + wh', 'pp [result] + np(subj)inf', 'pp [..] + omtoinf', 'pp [..] np + omtoinf', 'pp [..] np + dat', 'pp [..] + toinf', 'pp [..] np + toinf', 'pp [..] np + utterance', 'pp [..] + utterance', 'np + wh', 'np + toinf', 'np np + wh', 'np np + utterance', 'pp [van] + dat', 'pp [over]', 'pp [tot]', 'pp [bij]', 'pp [met]', 'pp [voor]', 'pp [tegen]', 'pp [om]', 'pp [op]', 'pp [naar]', 'pp [het]', 'pp [in]', 'np np + dat', 'np + dat', 'np + hoe', 'np + of', 'np + utterance', 'ncomplem', 'pp [voor] np', 'pp [van] np', 'pp [tot] np', 'pp [tegen] np', 'pp [over] np', 'pp [op] np', 'pp [met] np', 'pp [aan] np', 'pp [in] np', 'pp [door] np', 'pp [bij] np', 'pp [uit] np', 'pp [aan] + omtoinf', 'np np + omtoinf', 'np np + toinf', 'np np + hoe', 'sy-co', ' + hoe', ' + of', ' + wh', 'np + inf', 'np np + inf', 'np np + np(subj)toin', 'np np + np(subj)toinf', 'pp [aan] + np(subj)inf', 'np np + of', 'pp [..] + of', 'pp [..] + wh', 'pp [..] np + inf', 'pp [..] np + of', 'pp [..] np + utteran', 'pp [..] np + wh', 'pp [aan] + hoe', 'pp [aan] + np(subj)i', 'pp [aan] + toinf', 'pp [result] np(sub', 'pp [uit]', 's'];
var morphology_verb_flex_conjugation_select_ = ['', 'mixeda', 'mixedb', 'strong', 'regular', '-', 'other'];
var semantics_adjective_select_shift = ['', 'noshift', 'abstract>emomen', 'abstract>emomen,phyper', 'abstract>phyper', 'abstract>phyper,emomen', 'colour>abstract', 'emomen>abstract', 'emomen>abstract,phyper', 'emomen>phyper', 'emomen>phyper,abstract', 'phyper>abstract', 'phyper>abstract,emomen', 'phyper>emomen', 'phyper>emomen,abstract', 'phyper>temp', 'place>abstract', 'place>abstract,phyper', 'stuff>abstract', 'stuff>abstract,colour', 'stuff>colour', 'stuff>phyper', 'temp>abstract', 'temp>phyper', 'abstract', 'emomen>phyper>abstract', 'phyper>abstract>emomen', 'emoment>phyper,emomen>abstract', 'emomen', 'phyper>emomen>abstract', 'abstract>emomen,abstract', 'phyper>abstract,phyper>emomen', 'emomen>abstract>phyper', 'abstract>emomen, abstract>phyper', 'emomen>abstract, emomen>phyper', 'phyper', 'stuff>abstr'];
var semantics_adjective_select_type = ['', 'concrother', 'substance', 'artefact', 'dynamic', 'nondymanic', 'place', 'time', 'measure', 'institut', 'nonhuman', 'human', 'abstract', 'concrete', 'emomen', 'stuff', 'colour', 'unspecified', 'temp', 'phyper'];
var morphology_adjective_select_type = ['', 'compound', 'compderiv', 'derivation', 'phrasal', 'word group', 'simpmorph', 'xcompound', 'derivcomp', 'xderivation', 'nmorph', 'zeroderivation', 'nil'];
var morphology_adjective_select_flectional_type = ['', 'noflec', 'comp', 'papa', 'prespa', 'pseudopapa', 'wordgroup', 'xcompound', 'super', 'pseudoprespa', 'x-compound'];
var morphology_adjective_select_declinability = ['', 'declin', 'nondeclin'];
var morphology_adjective_comparis_select_id = ['', 'regular', 'irregular', 'periphras', 'mixed'];
var syntax_adjective_select_position = ['', 'ap', 'attr', 'pred'];
var syntax_adjective_select_advusage = ['', 'adv', 'noadv', 'sent'];
var syntax_adjective_complementation_select_id = ['', 'datclause', 'whclause', 'ofclause', 'toinf', 'omtoinf', 'psmodnoun', 'oblobj', 'quant', 'dancomp', 'fixprep &#39;aan&#39;', 'fixprep &#39;aangaande&#39;', 'fixprep &#39;jegens&#39;', 'fixprep &#39;binnen&#39;', 'fixprep &#39;onder&#39;', 'oblprep &#39;onder&#39;', 'fixprep &#39;tot&#39;', 'prep &#39;uit&#39;', 'oblprep &#39;tot&#39;', 'oblprep &#39;naar&#39;', 'oblprep &#39;tussen&#39;', 'oblprep &#39;te&#39;', 'oblprep&#39;door&#39;', 'prep &#39;rond&#39;', 'fixprep &#39;door&#39;', 'prep &#39;aangaande&#39;', 'fixprep &#39;bij&#39;', 'fixprep &#39;in&#39;', 'fixprep &#39;aan &#39;', 'prep &#39;aan &#39;', 'fixprep &#39;met&#39;', 'fixprep &#39;op&#39;', 'fixprep &#39;op', 'fixprep &#39;hum&#39;', 'fixprep &#39;over&#39;', 'fixprep &#39;naar&#39;', 'fixprep &#39;om&#39;', 'fixprep &#39;aan &#39;', 'fixprep &#39;boven&#39;', 'fixprep &#39;langs&#39;', 'fixprep &#39;tegen&#39;', 'fixprep &#39;tegenover&#39;', 'fixprep &#39;van&#39;', 'fixprep &#39;uit&#39;', 'fixprep &#39;voor&#39;', 'prep &#39;op&#39;', 'oblprep &#39;aan&#39;', 'oblprep &#39;met&#39;', 'oblprep &#39;in&#39;', 'oblprep &#39;uit&#39;', 'oblprep &#39;op&#39;', 'oblprep &#39;over&#39;', 'oblprep &#39;van&#39;', 'oblprep &#39;voor&#39;', 'oblprep &#39;om&#39;', 'oblprep &#39;door&#39;', 'oblprep &#39;tegen&#39;', 'oblobj&#39;'];

var posHTML = '';

function showEditHTML(nodeId, data){
  if(typeof nodeId === 'undefined'){
    return;
  }
  $("#" + nodeId).html("" +
  "<input type='button' value='New' onclick='Model.editNewClick()'>" +
  "<input type='button' value='Delete' " +
  "onclick=\"Model.editDeleteClick(&#39;luId_text_id&#39;, &#39;" + $('#serverDictAddress').html() + "&#39;)\">" +
  "<input type='button' value='Save' " +
  "onclick=\"Model.editSaveClick(&#39;luId_text_id&#39;, &#39;" + $('#serverDictAddress').html() + "&#39;)\">" +
  "<input type='button' value='Clear form' onclick='Model.editClearClick()'>" +
  "</br>" +
  "<input type='button' value='Split entry' onclick='Model.editSplitClick()'>" +
  "<input type='button' id='mapButton' value='Map current LU to current Synset' onclick='Model.editLUtoSynClick()'>" +
  "<hr>" +
  "<div id='luId'>" +
    "<b>Lu id</b></br>" +
    "<input type='text' disabled='true' id='luId_text_id'>" +
  "</div>" +
  "<input type='text' hidden='true' id='sem_genus'>" +
  "<div id='seqNr'>" +
    "<b>Seq.nr.</b></br>" +
    "<input type='text' id='seqNr_text'>" +
  "</div>" +
  "<div id=complete>" +
    "<input type='checkbox' value='Is complete?' id='complete_checkbox'> Is complete?" +
  "</div>" +
  "<div hidden='true'>" +
    "<input type='text' id='textbox_type'>" +
  "</div>" +
  "<div id='pos'>" +
    "<b>POS</b></br>" +
    "<select disabled='true' id='pos_select'></select>" +
  "</div>" +
  "<hr>" +
  "<div id='comment'>" +
    "<b>Comment</b></br>" +
    "<textarea style='width: 100%; height: 40px' id='comment_textarea'></textarea>" +
  "</div>" +
  "<hr>" +
  "<div id='form'>" +
    "<b>Form</b></br>" +
    "Spelling <input type='text' id='form_text_spelling'>" +
    "Length <select id='form_select_length'></select></br>" +
    "Spelvar <input type='text' id='form_text_spelvar'>" +
  "</div>" +
  "<hr>" +
  "<div id='pos_add'>" +
    "<b>Semantics</b><hr><b>Morphology</b><hr><b>Syntax</b><hr>" + 
  "</div>" +
  "<hr>" +
  "<div class='plus' id='button_rbn_data' " +
  "onclick='Model.clickIkon(&#39;rbn_data_id&#39;, &#39;button_rbn_data&#39;)'/>" +
  "<div id='rbn_data'>" +
    "<b>RBN data</b></br>" +
    "<div id='rbn_data_id' hidden='true'>" +
      "definition <input type='text' disabled='true' id='rbn_data_text_definition'></br>" +
      "<div class='plus' id='button_rbn_data_synonyms' " +
      "onclick='Model.clickIkon(&#39;rbn_data_synonyms&#39;, &#39;button_rbn_data_synonyms&#39;)'/>" +
      "<b>synonyms</b>" +
      "<div id='rbn_data_synonyms' hidden='true'>" +
      "</div>" +
      "<br>" +
      "<div class='plus' id='button_rbn_data_hypernyms' " +
      "onclick='Model.clickIkon(&#39;rbn_data_hypernyms&#39;, &#39;button_rbn_data_hypernyms&#39;)'/>" +
      "<b>hypernyms</b>" +
      "<div id='rbn_data_hypernyms' hidden='true'>" +
      "</div>" +
    "</div>" +
  "</div>" +
  "<hr>" +
  "<div class='plus' id='button_pragmatics' " +
  "onclick='Model.clickIkon(&#39;pragmatics_id&#39;, &#39;button_pragmatics&#39;)'/>" +
  "<div id='pragmatics'>" +
    "<b>Pragmatics</b></br>" +
    "<div id='pragmatics_id' hidden='true'>" +
      "SocGroup <select id='pragmatics_select_socgroup'></select>" +
      "Domain <select id='pragmatics_select_domain'></select>" +
      "general<input type='checkbox' value='general' id='pragmatics_checkbox_general'></br>" +
      "Style <select id='pragmatics_select_style'></select>" +
      "Origin <select id='pragmatics_select_origin'></select></br>" +
      "Frequency <select id='pragmatics_select_frequency'></select>" +
      "Connotation <select id='pragmatics_select_connotation'></select></br>" +
      "Chronology <select id='pragmatics_select_chronology'></select>" +
      "SubjGen <input type='text' id='pragmatics_text_subjgen'></br>" +
      "Geography <select id='pragmatics_select_geography'></select>" +
    "</div>" +
  "</div>" +
  "<hr>" +
  "<div class='plus' id='button_examples' " +
  "onclick='Model.clickIkon(&#39;examples_id&#39;, &#39;button_examples&#39;)'/>" +
  "<div id='examples'>" +
    "<b>Examples</b></br>" +
    "<div id='examples_id' hidden='true'>" +
      "<input type='button' value='Add example' onclick='editExamplesAddExample()'></br>" +
      "<input type='button' value='Add example' id='last_examples' onclick='editExamplesAddExample()'></br>" +
    "</div>" +
  "</div>");
  setNewId();
  fillSelects();
  $('#pos_select').change(function() {
    if($(this).val() === 'adjective'){
      setPosHTML('adj')
    }else{
      setPosHTML($(this).val());
    }
  });
  if(typeof data !== 'undefined'){
    parseObjectToHTML(data);
  }
  log("cdb_lu.js:showEditHTML():end");
}

function morphologyPlurformRemove(id) {
  if(confirm("Are you sure you want to delete this item?")){
    $("#morphology_plurform_" + id).remove();
  }
  log("cdb_lu.js:morphologyPlurformRemove():end");
}

function morphologyPlurformAdd(text) {
  if(typeof text === 'undefined'){
    text = '';
  }
  var id = getMaxId('morphology_plurform_text_', true);
  var html = "<div id='morphology_plurform_" + id + "' class='boxedInner'>" +
    "<input type='text' value='" + text + "' id='morphology_plurform_text_" + id + "'>" +
    "<input type='button' value='Remove' onclick='morphologyPlurformRemove(" + id + ")'>" +
    "</div>";
  $("#last_morphology_plurform").before(html);
  log("cdb_lu.js:morphologyPlurformAdd():end");
}

function rbnSynonymAdd(synonym){
  if(typeof synonym === 'undefined'){
    synonym = '';
  }
  var id = getMaxId('rbn_data_text_synonym_', true);
  var html = "<input type='text' value='" + synonym + "' disabled='true' id='rbn_data_text_synonym_" + id + "'>";
  $("#rbn_data_synonyms").append(html);
  log("cdb_lu.js:rbnSynonymAdd():end");
}

function rbnHypernymAdd(hypernym){
  if(typeof hypernym === 'undefined'){
    hypernym = '';
  }
  var id = getMaxId('rbn_data_text_hypernym_', true);
  var html = "<input type='text' value='" + hypernym + "' disabled='true' id='rbn_data_text_hypernym_" + id + "'>";
  $("#rbn_data_hypernyms").append(html);
  log("cdb_lu.js:rbnHypernymAdd():end");
}


function syntaxComplementationRemove(id) {
  if(confirm("Are you sure you want to delete this item?")){
    $("#syntax_complementation_" + id).remove();
  }
  log("cdb_lu.js:syntaxComplementationRemove():end");
}

function syntaxComplementationAdd(value) {
  if(typeof value === 'undefined'){
    value = '';
  }else{
    value.replace("'", "42");
  }
  if(!($.inArray(value, syntax_complementation_id))){
    syntax_complementation_id.push(value);
  }
  var id = getMaxId('syntax_complementation_select_', true);
  var html = "<div id='syntax_complementation_" + id + "' class='boxedInner'>" +
    "<select id='syntax_complementation_select_" + id + "'></select>" +
    "<input type='button' value='Remove' onclick='syntaxComplementationRemove(" + id + ")'>" +
    "</div>";
  $("#last_syntax_complementation").before(html);
  fillSelect('syntax_complementation_select_' + id, syntax_complementation_select_id);
  $("#syntax_complementation_select_" + id).val(value);
  log("cdb_lu.js:syntaxComplementationAdd():end");
}

function editExamplesAddExample(example) {
  if(typeof example === 'undefined'){
    example = {};
  }
  var form = isValid(example.form_example);
  var syntax = isValid(example.syntax_example);
  var semantics = isValid(example.semantics_example);
  var cannonicalform = typeof form.canonicalform === 'undefined' ? '' : isValid(form.canonicalform['$']);
  var textualform = typeof form.textualform === 'undefined' ? '' : isValid(form.textualform['$']);
  var meaningDescription = typeof semantics['sem-meaningdescription'] === 'undefined' ? '' : isValid(semantics['sem-meaningdescription']['$']);
  var gcCompl = typeof semantics['sem-gc-compl'] === 'undefined' ? '' : isValid(semantics['sem-gc-compl']['$']);
  var id = getMaxId('example_form_canonicalform_');
  var html = "<div id = 'examples_" + id + "' class='boxedInner'>" +
    "<input type='button' value='Remove' onclick='editExamplesRemove(" + id + ")'>" +
    "<div id='example_form' class='boxedInner'>" +
      "<b>Example form</b></br>" +
      "Canonicalform <input type='text' value='" + cannonicalform + "' id='example_form_canonicalform_" + id + "'></br>" +
      "Textualform <input type='text' value= '" + textualform + "' id='example_form_textualform_" + id + "'></br>" +
      "Category <select id='example_form_category_" + id + "'></select>" +
      "Text category <select id='example_form_text_category_" + id + "'></select></br>" +
    "</div>" +
    "<div id='example_syntax' class='boxedInner'>" +
      "<div class='plus' id='button_examples_syntax' " +
      "onclick='Model.clickIkon(&#39;examples_syntax_id&#39;, &#39;button_examples_syntax&#39;)'/>" +
      "<b>Example syntax</b></br>" +
      "<div id='examples_syntax_id' hidden='true'>" +
        "Type <select id='example_syntax_type_" + id + "'></select>" +
        "Subtype <select id='example_syntax_subtype_" + id + "'></select>" +
        "<div id='example_syntax_combi' class='boxedInner'>" +
          "<div class='plus' id='button_examples_syntax_combi' " +
          "onclick='Model.clickIkon(&#39;example_syntax_combi_" + id + "_id&#39;, &#39;button_examples_syntax_combi&#39;)'/>" +
          "<b>Combi: word, cat</b></br>" +
          "<div id='example_syntax_combi_" + id + "_id' hidden='true'>" +
            "<input type='button' value='Add' id='last_example_syntax_combi_" + id + "' onclick='examplesCombiAdd(" + id + ")'>" +
          "</div>" + 
        "</div>" +
      "</div>" +
    "</div>" +
    "<div id='examples_semantics' class='boxedInner'>" +
      "<div class='plus' id='button_examples_semantics' " +
      "onclick='Model.clickIkon(&#39;examples_semantics_id&#39;, &#39;button_examples_semantics&#39;)'/>" +
      "<b>Example semantics</b></br>" +
      "<div id='examples_semantics_id' hidden='true'>" +
        "Meaning description <input type='text' value= '" + meaningDescription + "' id='examples_semantics_mean_desc_" + id + "'></br>" +
        "Lc collocator <select id='examples_semantics_lc_collocator_" + id + "'></select>" +
        "Gc compl <input type='text' value='" + gcCompl + "' id='example_semantics_gc_compl_" + id + "'></br>" +
        "Spec collocator <select id='examples_semantics_spec_collocator_" + id + "'></select>" +
        "Subtype argument <select id='examples_semantics_subtype_argument_" + id + "'></select></br>" +
        "Gc gramword <select id='examples_semantics_gc_gramword_" + id + "'></select>" +
      "</div>" +
    "</div>" +
    "<div id='example_comment' class='boxedInner'>" +
      "<div class='plus' id='button_examples_comment' " +
      "onclick='Model.clickIkon(&#39;example_comment_" + id + "&#39;, &#39;button_examples_comment&#39;)'/>" +
      "<b>Example comment</b>" +
      "<textarea style='width: 100%; height: 40px' value='" + isValid(example.comment) + "' id='example_comment_" + id + "' hidden='true'></textarea>" +
    "</div>" +
  "</div>";
  $("#last_examples").before(html);
  fillSelect('example_form_category_' + id, example_form_category_id);
  fillSelect('example_form_text_category_' + id, example_form_text_category_id);
  fillSelect('example_syntax_type_' + id, example_syntax_type_id);
  fillSelect('example_syntax_subtype_' + id, example_syntax_subtype_id);
  if(typeof form.category !== 'undefined'){
    $("#example_form_category_" + id).val(isValid(form.category['$']));
  }
  if(typeof form['text-category'] !== 'undefined'){
    $("#example_form_text_category_" + id).val(isValid(form['text-category']['$']));
  }
  if(typeof syntax['sy-type'] !== 'undefined'){
    $("#example_syntax_type_" + id).val(isValid(syntax['sy-type']['$']));
  }
  if(typeof syntax['sy-subtype'] !== 'undefined'){
    $("#example_syntax_subtype_" + id).val(isValid(syntax['sy-subtype']['$']));
  }
  if(typeof syntax['sy-combi'] !== 'undefined' &&
     typeof syntax['sy-combi']['sy-combipair'] !== 'undefined'){
    for(var index in syntax['sy-combi']['sy-combipair']){
      var combi = syntax['sy-combi']['sy-combipair'][index];
      if(typeof combi['sy-combiword'] !== 'undefined' || typeof combi['sy-combicat'] !== 'undefined'){
        examplesCombiAdd(id, isValid(combi['sy-combiword']['$']), isValid(combi['sy-combicat']['$']));
      }
    }
  }
  fillSelect('examples_semantics_lc_collocator_' + id, examples_semantics_lc_collocator_id);
  fillSelect('examples_semantics_spec_collocator_' + id, examples_semantics_spec_collocator_id);
  fillSelect('examples_semantics_subtype_argument_' + id, examples_semantics_subtype_argument_id);
  fillSelect('examples_semantics_gc_gramword_' + id, examples_semantics_gc_gramword_id);
  if(typeof semantics['sem-lc-collocator'] !== 'undefined'){
    $("#examples_semantics_lc_collocator_" + id).val(isValid(semantics['sem-lc-collocator']['$']));
  }
  if(typeof semantics['sem-spec-collocator'] !== 'undefined'){
    $("#examples_semantics_spec_collocator_" + id).val(isValid(semantics['sem-spec-collocator']['$']));
  }
  if(typeof semantics['sem-subtype-argument'] !== 'undefined'){
    $("#examples_semantics_subtype_argument_" + id).val(isValid(semantics['sem-subtype-argument']['$']));
  }
  if(typeof semantics['sem-gc-gramword'] !== 'undefined'){
    $("#examples_semantics_gc_gramword_" + id).val(isValid(semantics['sem-gc-gramword']['$']));
  }
  log("cdb_lu.js:editExamplesAddExample():end");
}

function editExamplesRemove(id) {
  if(confirm("Are you sure you want to delete this item?")){
    $("#examples_" + id).remove();
  }
  log("cdb_lu.js:editExamplesRemove():end");
}

function examplesCombiRemove(parentId, id) {
  if(confirm("Are you sure you want to delete this item?")){
    $("#example_syntax_combi_" + parentId + "_" + id).remove();
  }
  log("cdb_lu.js:examplesCombiRemove():end");
}

function examplesCombiAdd(parentId, word, cat) {
  if(typeof word === 'undefined'){
    word = '';
  }
  if(typeof cat === 'undefined'){
    cat = '';
  }
  var id = getMaxId('example_syntax_combi_text_' + parentId + '_', true);
  var html = "<div id='example_syntax_combi_" + parentId + "_" + id + "' class='boxedInner'>" +
    "<input type='text' value='" + word + "' id='example_syntax_combi_text_" + parentId + "_" + id + "'>" +
    "<select id='example_syntax_combi_select_" + parentId + "_" + id + "'></select>" +
    "<input type='button' value='Remove' onclick='examplesCombiRemove(" + parentId + ", " + id + ")'" +
    "</div>";
  $("#last_example_syntax_combi_" + parentId).before(html);
  fillSelect('example_syntax_combi_select_' + parentId + '_' + id, example_syntax_combi_select_id);
  $("#example_syntax_combi_select_" + parentId + "_" + id).val(cat);
  log("cdb_lu.js:examplesCombiAdd():end");
}

function fillSelects(){
  fillSelect("pos_select", pos_select);
  fillSelect("form_select_length", form_select_length);
  fillSelect("pragmatics_select_socgroup", pragmatics_select_socgroup);
  fillSelect("pragmatics_select_domain", pragmatics_select_domain);
  fillSelect("pragmatics_select_style", pragmatics_select_style);
  fillSelect("pragmatics_select_origin", pragmatics_select_origin);
  fillSelect("pragmatics_select_frequency", pragmatics_select_frequency);
  fillSelect("pragmatics_select_connotation", pragmatics_select_connotation);
  fillSelect("pragmatics_select_chronology", pragmatics_select_chronology);
  fillSelect("pragmatics_select_geography", pragmatics_select_geography);
  log("cdb_lu.js:fillSelects():end");
}

function parseObjectToHTML(obj){
  var cdb_lu = obj.cdb_lu;
  $("#luId_text_id").val(isValid(cdb_lu['@c_lu_id']));
  $("#seqNr_text").val(isValid(cdb_lu['@c_seq_nr']));
  if(isValid(cdb_lu['@is_complete']) === 'true'){
    $("#complete_checkbox").attr('checked', true);
  }
  if(isValid(cdb_lu.form['@form-cat']) === 'adj'){
    $('#pos_select').val('adjective');
  }else{
    $("#pos_select").val(isValid(cdb_lu.form['@form-cat']));
  }
  $('#textbox_type').val(isValid(cdb_lu['@type']));
  $('#pos_select').change();
  var pos = $('#pos_select').val();
  $("#comment_textarea").val(isValid(cdb_lu['@comment']));
  if(typeof cdb_lu.form !== 'undefined'){
    $("#form_text_spelling").val(isValid(cdb_lu.form['@form-spelling']));
    $("#form_select_length").val(isValid(cdb_lu.form['@form-length']));
    $("#form_text_spelvar").val(isValid(cdb_lu.form['@form-spelvar']));
  }
  if(pos === 'noun' && typeof cdb_lu.semantics_noun !== 'undefined'){
    if(typeof cdb_lu.semantics_noun['sem-reference'] !== 'undefined'){
      $("#semantics_select_reference").val(isValid(cdb_lu.semantics_noun['sem-reference']['$']));
    }
    if(typeof cdb_lu.semantics_noun['sem-countability'] !== 'undefined'){
      $("#semantics_select_countability").val(isValid(cdb_lu.semantics_noun['sem-countability']['$']));
    }
    if(typeof cdb_lu.semantics_noun['sem-type'] !== 'undefined'){
      $("#semantics_text_type").val(isValid(cdb_lu.semantics_noun['sem-type']['$']));
    }
    if(typeof cdb_lu.semantics_noun['sem-subclass'] !== 'undefined'){
      $("#semantics_text_subclass").val(isValid(cdb_lu.semantics_noun['sem-subclass']['$']));
    }
    if(typeof cdb_lu.semantics_noun['sem-shift'] !== 'undefined'){
      $("#semantics_text_shift").val(isValid(cdb_lu.semantics_noun['sem-shift']['$']));
    }
    if(typeof cdb_lu.semantics_noun['sem-selrestriction'] !== 'undefined'){
      $("#semantics_text_synList").val(isValid(cdb_lu.semantics_noun['sem-selrestriction']['$']));
    }
    if(typeof cdb_lu.semantics_noun['sem-definition'] !== 'undefined' && 
       typeof cdb_lu.semantics_noun['sem-definition']['sem-resume'] !== 'undefined'){
      $("#semantics_text_resume").val(isValid(cdb_lu.semantics_noun['sem-definition']['sem-resume']['$']));
    }
    if(typeof cdb_lu.morphology_noun['morpho-type'] !== 'undefined'){
      $("#morphology_select_type").val(isValid(cdb_lu.morphology_noun['morpho-type']['$']));
    }
    if(typeof cdb_lu.morphology_noun['morpho-structure'] !== 'undefined'){
      $("#morphology_text_structure").val(isValid(cdb_lu.morphology_noun['morpho-structure']['$']));
    }
    if(typeof cdb_lu.morphology_noun['morpho-plurforms'] !== 'undefined'){
      for(var index in cdb_lu.morphology_noun['morpho-plurforms']){
        var plurform = cdb_lu.morphology_noun['morpho-plurforms'][index];
        if(typeof plurform['morpho-plurform'] !== 'undefined'){
          morphologyPlurformAdd(plurform['morpho-plurform']['$']);
        }
      }
    }
    if(typeof cdb_lu.syntax_noun['sy-gender'] !== 'undefined'){
      $("#syntax_select_gender").val(cdb_lu.syntax_noun['sy-gender']['$']);
    }
    if(typeof cdb_lu.syntax_noun['sy-number'] !== 'undefined'){
      $("#syntax_select_number").val(cdb_lu.syntax_noun['sy-number']['$']);
    }
    if(typeof cdb_lu.syntax_noun['sy-article'] !== 'undefined'){
      $("#syntax_select_article").val(cdb_lu.syntax_noun['sy-article']['$']);
    }
    if(typeof cdb_lu.syntax_noun['sy-complementation'] !== 'undefined' &&
       typeof cdb_lu.syntax_noun['sy-complementation']['sy-comp'] !== 'undefined'){
      for(var index in cdb_lu.syntax_noun['sy-complementation']['sy-comp']){
        var complementation = cdb_lu.syntax_noun['sy-complementation']['sy-comp'][index];
        syntaxComplementationAdd(complementation['$']);
      }
    }
  }else if(pos === 'verb'){
    if(typeof cdb_lu.semantics_verb['sem-type'] !== 'undefined'){
      $('#semantics_verb_text_type').val(cdb_lu.semantics_verb['sem-type']['$']);
    }
    if(typeof cdb_lu.semantics_verb['sem-resume'] !== 'undefined'){
      $('#semantics_verb_text_resume').val(cdb_lu.semantics_verb['sem-resume']['$']);
    }
    if(typeof cdb_lu.semantics_verb['sem-selrestriction'] !== 'undefined'){
      for(var index in cdb_lu.semantics_verb['sem-selrestriction']){
        var restriction = cdb_lu.semantics_verb['sem-selrestriction'][index];
        selrestrictionAdd(restriction['$']);
      }
    }
    if(typeof cdb_lu.semantics_verb['sem-caseframe'] !== 'undefined' &&
       typeof cdb_lu.semantics_verb['sem-caseframe']['caseframe'] !== 'undefined'){
      $('#semantics_verb_select_caseframe').val(cdb_lu.semantics_verb['sem-caseframe']['caseframe']['$']);
    }
    if(typeof cdb_lu.semantics_verb['sem-caseframe'] !== 'undefined' &&
       typeof cdb_lu.semantics_verb['sem-caseframe']['args'] !== 'undefined' &&
       typeof cdb_lu.semantics_verb['sem-caseframe']['args']['arg'] !== 'undefined'){
      for(var index in cdb_lu.semantics_verb['sem-caseframe']['args']['arg']){
        var argument = cdb_lu.semantics_verb['sem-caseframe']['args']['arg'][index];
        argumentsAdd(argument.caserole['$'], argument.selrestrole['$'], argument.synset_list);
      }
    }
    if(typeof cdb_lu.morphology_verb['morpho-type'] !== 'undefined'){
    $('#morphology_verb_select_type').val(cdb_lu.morphology_verb['morpho-type']['$']);
    }
    if(typeof cdb_lu.morphology_verb['morpho-structure'] !== 'undefined'){
      $('#morphology_verb_text_structure').val(cdb_lu.morphology_verb['morpho-structure']['$']);
    }
    if(typeof cdb_lu.morphology_verb['flex-mode'] !== 'undefined'){
      $('#morphology_verb_select_flex_mode').val(cdb_lu.morphology_verb['flex-mode']['$']);
    }
    if(typeof cdb_lu.morphology_verb['flex-tense'] !== 'undefined'){
      $('#morphology_verb_select_tense').val(cdb_lu.morphology_verb['flex-tense']['$']);
    }
    if(typeof cdb_lu.morphology_verb['flex-number'] !== 'undefined'){
      $('#morphology_verb_select_number').val(cdb_lu.morphology_verb['flex-number']['$']);
    }
    if(typeof cdb_lu.morphology_verb['flex-person'] !== 'undefined'){
      $('#morphology_verb_select_person').val(cdb_lu.morphology_verb['flex-person']['$']);
    }
    if(typeof cdb_lu.morphology_verb['flex-conjugation'] !== 'undefined'){
      for(var index in cdb_lu.morphology_verb['flex-conjugation']){
        var conjugation = cdb_lu.morphology_verb['flex-conjugation'][index];
        flexConjugationAdd(conjugation['flex-conjugationtype']['$'], conjugation['flex-pasttense']['$'], conjugation['flex-pastpart']['$']);
      }
    }
    if(typeof cdb_lu.syntax_verb['sy-trans'] !== 'undefined'){
      $('#syntax_verb_select_trans').val(cdb_lu.syntax_verb['sy-trans']['$']);
    }
    if(typeof cdb_lu.syntax_verb['sy-separ'] !== 'undefined'){
      $('#syntax_verb_select_separ').val(cdb_lu.syntax_verb['sy-separ']['$']);
    }
    if(typeof cdb_lu.syntax_verb['sy-class'] !== 'undefined'){
      $('#syntax_verb_select_class').val(cdb_lu.syntax_verb['sy-class']['$']);
    }
    if(typeof cdb_lu.syntax_verb['sy-peraux'] !== 'undefined'){
      $('#syntax_verb_select_peraux').val(cdb_lu.syntax_verb['sy-peraux']['$']);
    }
    if(typeof cdb_lu.syntax_verb['sy-valency'] !== 'undefined'){
      $('#syntax_verb_select_valency').val(cdb_lu.syntax_verb['sy-valency']['$']);
    }
    if(typeof cdb_lu.syntax_verb['sy-reflexiv'] !== 'undefined'){
      $('#syntax_verb_select_reflexiv').val(cdb_lu.syntax_verb['sy-reflexiv']['$']);
    }
    if(typeof cdb_lu.syntax_verb['sy-subject'] !== 'undefined'){
      $('#syntax_verb_select_subject').val(cdb_lu.syntax_verb['sy-subject']['$']);
    }
    if(typeof cdb_lu.syntax_verb['sy-complementation'] !== 'undefined' &&
       typeof cdb_lu.syntax_verb['sy-complementation']['sy-comp'] !== 'undefined'){
      for(var index in cdb_lu.syntax_verb['sy-complementation']['sy-comp']){
        var comp = cdb_lu.syntax_verb['sy-complementation']['sy-comp'][index];
        complementationCompAdd(comp['$']);
      }
    }
    if(typeof cdb_lu.syntax_verb['sy-complementation'] !== 'undefined' &&
       typeof cdb_lu.syntax_verb['sy-complementation']['sy-compl-text'] !== 'undefined'){
      for(var index in cdb_lu.syntax_verb['sy-complementation']['sy-compl-text']){
        var text = cdb_lu.syntax_verb['sy-complementation']['sy-compl-text'][index];
        complementationTextAdd(text['$']);
      }
    }
  }else if(pos === 'adjective'){
    if(typeof cdb_lu.semantics_adj['sem-shift'] !== 'undefined'){
      $('#semantics_adjective_select_shift').val(cdb_lu.semantics_adj['sem-shift']['$']);
    }
    if(typeof cdb_lu.semantics_adj['sem-subclass'] !== 'undefined'){
      $('#semantics_adjective_text_subclass').val(cdb_lu.semantics_adj['sem-subclass']['$']);
    }
    if(typeof cdb_lu.semantics_adj['sem-resume'] !== 'undefined'){
      $('#semantics_adjective_text_resume').val(cdb_lu.semantics_adj['sem-resume']['$']);
    }
    if(typeof cdb_lu.semantics_adj['sem-type'] !== 'undefined'){
      $('#semantics_adjective_select_type').val(cdb_lu.semantics_adj['sem-type']['$']);
    }
    if(typeof cdb_lu.semantics_adj['sem-selrestrictions'] !== 'undefined' &&
       typeof cdb_lu.semantics_adj['sem-selrestrictions']['sem-selrestriction'] !== 'undefined'){
      for(var index in cdb_lu.semantics_adj['sem-selrestrictions']['sem-selrestriction']){
        var restriction = cdb_lu.semantics_adj['sem-selrestrictions']['sem-selrestriction'][index];
        selrestrictionAdjectiveAdd(restriction.selrestriction['$'], restriction.synset_list);
      }
    }
    if(typeof cdb_lu.morphology_adj['morpho-type'] !== 'undefined'){
      $('#morphology_adjective_select_type').val(cdb_lu.morphology_adj['morpho-type']['$']);
    }
    if(typeof cdb_lu.morphology_adj['mor-flectional-type'] !== 'undefined'){
      $('#morphology_adjective_select_flectional_type').val(cdb_lu.morphology_adj['mor-flectional-type']['$']);
    }
    if(typeof cdb_lu.morphology_adj['mor-declinability'] !== 'undefined'){
      $('#morphology_adjective_select_declinability').val(cdb_lu.morphology_adj['mor-declinability']['$']);
    }
    if(typeof cdb_lu.morphology_adj['mor-base'] !== 'undefined'){
      $('#morphology_adjective_text_base').val(cdb_lu.morphology_adj['mor-base']['$']);
    }
    if(typeof cdb_lu.morphology_adj['morpho-structure'] !== 'undefined'){
      $('#morphology_adjective_text_morpho_structure').val(cdb_lu.morphology_adj['morpho-structure']['$']);
    }
    if(typeof cdb_lu.morphology_adj['mor-comparis'] !== 'undefined'){
      for(var index in cdb_lu.morphology_adj['mor-comparis']){
        var comparis = cdb_lu.morphology_adj['mor-comparis'][index];
        comparisAdd(comparis['mor-comparison']['$'], comparis['mor-comparative']['$'], comparis['mor-superlative']['$']);
      }
    }
    if(typeof cdb_lu.syntax_adj['sy-position'] !== 'undefined'){
      $('#syntax_adjective_select_position').val(cdb_lu.syntax_adj['sy-position']['$']);
    }
    if(typeof cdb_lu.syntax_adj['sy-advusage'] !== 'undefined'){
      $('#syntax_adjective_select_advusage').val(cdb_lu.syntax_adj['sy-advusage']['$']);
    }
    if(typeof cdb_lu.syntax_adj['sy-complementation'] !== 'undefined' &&
       typeof cdb_lu.syntax_adj['sy-complementation']['sy-comp'] !== 'undefined'){
      for(var index in cdb_lu.syntax_adj['sy-complementation']['sy-comp']){
        var comp = cdb_lu.syntax_adj['sy-complementation']['sy-comp'][index];
        adjectiveComplementationAdd(comp['$']);
      }
    }
  }
  if(typeof cdb_lu['sem-definition'] !== 'undefined' &&
     typeof cdb_lu['sem-definition']['sem-def-noun'] !== 'undefined' &&
     typeof cdb_lu['sem-definition']['sem-def-noun']['sem-genus'] !== 'undefined'){
    $('#sem_genus').val(cdb_lu['sem-definition']['sem-def-noun']['sem-genus']['$']);
  }
  if(typeof cdb_lu['sem-definition'] !== 'undefined' &&
     typeof cdb_lu['sem-definition']['sem-defSource'] !== 'undefined'){
    $("#rbn_data_text_definition").val(cdb_lu['sem-definition']['sem-defSource']['$']);
  }
  if(typeof cdb_lu['sem-synonyms'] !== 'undefined' &&
     typeof cdb_lu['sem-synonyms']['sem-synonym'] !== 'undefined'){
    for(var index in cdb_lu['sem-synonyms']['sem-synonym']){
      var synonym = cdb_lu['sem-synonyms']['sem-synonym'][index];
      rbnSynonymAdd(synonym['$']);
    }
  }
  if(typeof cdb_lu['sem-hypernyms'] !== 'undefined' &&
     typeof cdb_lu['sem-hypernyms']['sem-hypernym'] !== 'undefined'){
    for(var index in cdb_lu['sem-hypernyms']['sem-hypernym']){
      var hypernym = cdb_lu['sem-hypernyms']['sem-hypernym'][index];
      rbnHypernymAdd(hypernym['$']);
    }
  }
  if(typeof cdb_lu['pragmatics'] !== 'undefined') {
    if(typeof cdb_lu.pragmatics['prag-socGroup'] !== 'undefined'){
      $("#pragmatics_select_socgroup").val(cdb_lu.pragmatics['prag-socGroup']['$']);
    }
    if(typeof cdb_lu.pragmatics['prag-domain'] !== 'undefined' &&
       typeof cdb_lu.pragmatics['prag-domain']['@subjectfield'] !== 'undefined'){
      $("#pragmatics_select_domain").val(cdb_lu.pragmatics['prag-domain']['@subjectfield']);
    }
    if(typeof cdb_lu.pragmatics['prag-domain'] !== 'undefined' &&
       typeof cdb_lu.pragmatics['prag-domain']['@general'] !== 'undefined'){
      if(cdb_lu.pragmatics['prag-domain']['@general'] === 'true'){
        $("#pragmatics_checkbox_general").attr('checked', true);
      }
    }
    if(typeof cdb_lu.pragmatics['prag-style'] !== 'undefined'){
      $("#pragmatics_select_style").val(cdb_lu.pragmatics['prag-style']['$']);
    }
    if(typeof cdb_lu.pragmatics['prag-origin'] !== 'undefined'){
      $("#pragmatics_select_origin").val(cdb_lu.pragmatics['prag-origin']['$']);
    }
    if(typeof cdb_lu.pragmatics['prag-frequency'] !== 'undefined'){
      $("#pragmatics_select_frequency").val(cdb_lu.pragmatics['prag-frequency']['$']);
    }
    if(typeof cdb_lu.pragmatics['prag-connotation'] !== 'undefined'){
      $("#pragmatics_select_connotation").val(cdb_lu.pragmatics['prag-connotation']['$']);
    }
    if(typeof cdb_lu.pragmatics['prag-chronology'] !== 'undefined'){
      $("#pragmatics_select_chronology").val(cdb_lu.pragmatics['prag-chronology']['$']);
    }
    if(typeof cdb_lu.pragmatics['prag-subj-gen'] !== 'undefined'){
      $("#pragmatics_text_subjgen").val(cdb_lu.pragmatics['prag-subj-gen']['$']);
    }
    if(typeof cdb_lu.pragmatics['prag-geography'] !== 'undefined'){
      $("#pragmatics_select_geography").val(cdb_lu.pragmatics['prag-geography']['$']);
    }
  }
  if(typeof cdb_lu.examples !== 'undefined' && typeof cdb_lu.examples.example !== 'undefined'){
    for(var index in cdb_lu.examples.example){
      var example = cdb_lu.examples.example[index];
      editExamplesAddExample(example);
    }
  }
  log("cdb_lu.js:parseObjectToHTML():end");
}

function parseHTMLToObject(){
  var obj = {
           'cdb_lu':{}
         };
  var data = obj.cdb_lu;
  data['@c_lu_id'] = $("#luId_text_id").val();
  data['@c_seq_nr'] = $("#seqNr_text").val();
  data['@is_complete'] = $('#complete_checkbox').is(':checked') + '';
  data['@type'] = $('#textbox_type').val();
  data['@comment'] = $("#comment_textarea").val();
  data.form = {};
  var form = data.form;
  form['@form-spelling'] = $('#form_text_spelling').val();
  form['@form-length'] = $('#form_select_length').val();
  form['@form-spelvar'] = $('#form_text_spelvar').val();
  form['@form-cat'] = $('#pos_select').val();
  var pos = $("#pos_select").val();
  if(pos === 'noun'){
    data.semantics_noun = {};
    var semantics = data.semantics_noun;
    semantics['sem-reference'] = {};
    semantics['sem-reference']['$'] = $('#semantics_select_reference').val();
    semantics['sem-countability'] = {};
    semantics['sem-countability']['$'] = $('#semantics_select_countability').val();
    semantics['sem-type'] = {};
    semantics['sem-type']['$'] = $('#semantics_text_type').val();
    semantics['sem-subclass'] = {};
    semantics['sem-subclass']['$'] = $('#semantics_text_subclass').val();
    semantics['sem-shift'] = {};
    semantics['sem-shift']['$'] = $('#semantics_text_shift').val();
    semantics['sem-selrestriction'] = {};
    semantics['sem-selrestriction']['$'] = $('#semantics_text_synList').val();
    semantics['sem-definition'] = {};
    semantics['sem-definition']['sem-resume'] = {};
    semantics['sem-definition']['sem-resume']['$'] = $('#semantics_text_resume').val();
    data.morphology_noun = {};
    var morphology = data.morphology_noun;
    morphology['morpho-type'] = {};
    morphology['morpho-type']['$'] = $('#morphology_select_type').val();
    morphology['morpho-structure'] = {};
    morphology['morpho-structure']['$'] = $('#morphology_text_structure').val();
    morphology['morpho-plurforms'] = [];
    var maxId = getMaxId('morphology_plurform_text_');
    for(var id = 0; id < maxId; id++){
      var val = $('#morphology_plurform_text_' + id).val();
      if(typeof val !== 'undefined'){
        morphology['morpho-plurforms'].push({
                                    'morpho-plurform':{
                                      '$': val
                                    }
                                 });
      }
    }
    data.syntax_noun = {};
    var syntax = data.syntax_noun;
    syntax['sy-gender'] = {};
    syntax['sy-gender']['$'] = $('#syntax_select_gender').val();
    syntax['sy-number'] = {};
    syntax['sy-number']['$'] = $('#syntax_select_number').val();
    syntax['sy-article'] = {};
    syntax['sy-article']['$'] = $('#syntax_select_article').val();
    syntax['sy-complementation'] = {};
    syntax['sy-complementation']['sy-comp'] = []
    maxId = getMaxId('syntax_complementation_select_');
    for(var id = 0; id < maxId; id++){
      var val = $('#syntax_complementation_select_' + id).val();
      if(typeof val !== 'undefined'){
        syntax['sy-complementation']['sy-comp'].push({
                                          '$': val
                                       });
      }
    }
  }else if(pos === 'verb'){
    data.semantics_verb = {};
    var semantics = data.semantics_verb;
    semantics['sem-type'] = {};
    semantics['sem-type']['$'] = $('#semantics_verb_text_type').val();
    semantics['sem-resume'] = {};
    semantics['sem-resume']['$'] = $('#semantics_verb_text_resume').val();
    semantics['sem-selrestriction'] = [];
    var maxId = getMaxId('semantics_verb_selrestriction_text_');
    for(var id = 0; id < maxId; id++){
      var val = $('#semantics_verb_selrestriction_text_' + id).val();
      if(typeof val !== 'undefined'){
        semantics['sem-selrestriction'].push({
                                     '$': val
        });
      }
    }
    semantics['sem-caseframe'] = {};
    semantics['sem-caseframe']['caseframe'] = {};
    semantics['sem-caseframe']['caseframe']['$'] = $('#semantics_verb_select_caseframe').val();
    semantics['sem-caseframe'] = {};
    semantics['sem-caseframe']['args'] = {};
    semantics['sem-caseframe']['args']['arg'] = [];
    maxId = getMaxId('semantics_verb_caseframe_arguments_caserole_select_right_');
    for(var id = 0; id < maxId; id++){
      var val = $('#semantics_verb_caseframe_arguments_caserole_select_left_' + id).val();
      if(typeof val !== 'undefined'){
        var argument = {
            'caserole': {},
            'selrestrole': {},
            'synset_list': []
          };
        argument.caserole['$'] = val;
        argument.selrestrole['$'] = $('#semantics_verb_caseframe_arguments_caserole_select_right_' + id).val();
        var maxChildId = getMaxId('semantics_verb_caseframe_arguments_synset_list_' + id + '_');
        for(var childId = 0; childId < maxChildId; childId++){
          var childVal = $('#select_semantics_verb_caseframe_arguments_synset_list_inner_' + id + '_' + childId).val();
          if(typeof childVal !== 'undefined' || childVal != ""){
            argument.synset_list.push({
                              '$': childVal
            });
          }
        }
        semantics['sem-caseframe']['args']['arg'].push(argument);
      }
    }
    data.morphology_verb = {};
    var morphology = data.morphology_verb;
    morphology['morpho-type'] = {};
    morphology['morpho-type']['$'] = $('#morphology_verb_select_type').val();
    morphology['morpho-structure'] = {};
    morphology['morpho-structure']['$'] = $('#morphology_verb_text_structure').val();
    morphology['flex-mode'] = {};
    morphology['flex-mode']['$'] = $('#morphology_verb_select_flex_mode').val();
    morphology['flex-tense'] = {};
    morphology['flex-tense']['$'] = $('#morphology_verb_select_tense').val();
    morphology['flex-number'] = {};
    morphology['flex-number']['$'] = $('#morphology_verb_select_number').val();
    morphology['flex-person'] = {};
    morphology['flex-person']['$'] = $('#morphology_verb_select_person').val();
    morphology['flex-conjugation'] = [];
    maxId = getMaxId('morphology_verb_flex_conjugation_text_pastpart_');
    for(var id = 0; id < maxId; id++){
      var val = $('#morphology_verb_flex_conjugation_select_' + id).val();
      if(typeof val !== 'undefined'){
        morphology['flex-conjugation'].push({
                                    'flex-conjugationtype': {
                                                 '$': val
                                    },
                                    'flex-pasttense': {
                                                 '$': $('#morphology_verb_flex_conjugation_text_pasttense_' + id).val()
                                    },
                                    'flex-pastpart': {
                                                 '$': $('#morphology_verb_flex_conjugation_text_pastpart_' + id).val()
                                    }
        });
      }
    }
    data.syntax_verb = {};
    var syntax = data.syntax_verb;
    syntax['sy-trans'] = {};
    syntax['sy-trans']['$'] = $('#syntax_verb_select_trans').val();
    syntax['sy-separ'] = {};
    syntax['sy-separ']['$'] = $('#syntax_verb_select_separ').val();
    syntax['sy-class'] = {};
    syntax['sy-class']['$']= $('#syntax_verb_select_class').val();
    syntax['sy-peraux'] = {};
    syntax['sy-peraux']['$'] = $('#syntax_verb_select_peraux').val();
    syntax['sy-valency'] = {};
    syntax['sy-valency']['$'] = $('#syntax_verb_select_valency').val();
    syntax['sy-reflexiv'] = {};
    syntax['sy-reflexiv']['$'] = $('#syntax_verb_select_reflexiv').val();
    syntax['sy-subject'] = {};
    syntax['sy-subject']['$'] = $('#syntax_verb_select_subject').val();
    syntax['sy-complementation'] = {};
    syntax['sy-complementation']['sy-comp'] = [];
    syntax['sy-complementation']['sy-text'] = [];
    maxId = getMaxId('syntax_complementation_comp_select_');
    for(var id = 0; id < maxId; id++){
      var val = $('#syntax_complementation_comp_select_' + id).val();
      if(typeof val !== 'undefined'){
        syntax['sy-complementation']['sy-comp'].push({
                                             '$': val
        });
      }
    }
    maxId = getMaxId('syntax_complementation_text_');
    for(var id = 0; id < maxId; id++){
      var val = $('#syntax_complementation_textbox_' + id).val();
      if(typeof val !== 'undefined'){
        syntax['sy-complementation']['sy-text'].push({
                                             '$': val
        });
      }
    }
  }else if(pos === 'adjective'){
    data.semantics_adj = {};
    var semantics = data.semantics_adj;
    semantics['sem-shift'] = {};
    semantics['sem-shift']['$'] = $('#semantics_adjective_select_shift').val();
    semantics['sem-subclass'] = {};
    semantics['sem-subclass']['$'] = $('#semantics_adjective_text_subclass').val();
    semantics['sem-resume'] = {};
    semantics['sem-resume']['$'] = $('#semantics_adjective_text_resume').val();
    semantics['sem-type'] = {};
    semantics['sem-type']['$'] = $('#semantics_adjective_select_type').val();
    semantics['sem-selrestrictions'] = {
      'sem-selrestriction': []
    };
    var maxId = getMaxId('semantics_adjective_selrestriction_text_outer_');
    for(var id = 0; id < maxId; id++){
      var val = $('#semantics_adjective_selrestriction_text_outer_' + id).val();
      if(typeof val !== 'undefined'){
        var restriction = {
          'selrestriction': {
            '$': val
          },
          'synset_list': []
        };
        var maxChildId = getMaxId('semantics_adjective_selrestriction_text_inner_' + id + '_');
        for(var childId = 0; childId < maxChildId; childId++){
          var childVal = $('#select_semantics_adjective_selrestriction_text_inner_' + id + '_' + childId).val();
          if(typeof childVal !== 'undefined' || childVal !== ""){
            restriction.synset_list.push({
              '$': childVal
            });
          }
        }
        semantics['sem-selrestrictions']['sem-selrestriction'].push(restriction);
      }
    }
    data.morphology_adj = {};
    var morphology = data.morphology_adj;
    morphology['morpho-type'] = {
      '$': $('#morphology_adjective_select_type').val()
    };
    morphology['mor-flectional-type'] = {
      '$': $('#morphology_adjective_select_flectional_type').val()
    };
    morphology['mor-declinability'] = {
      '$': $('#morphology_adjective_select_declinability').val()
    };
    morphology['mor-base'] = {
      '$': $('#morphology_adjective_text_base').val()
    };
    morphology['morpho-structure'] = {
      '$': $('#morphology_adjective_text_morpho_structure').val()
    };
    morphology['mor-comparis'] = [];
    maxId = getMaxId('morphology_adjective_comparis_text_superlative_');
    for(var id = 0; id < maxId; id++){
      var val = $('#morphology_adjective_comparis_select_' + id).val();
      if(typeof val !== 'undefined'){
        morphology['mor-comparis'].push({
          'mor-comparison': {
            '$': val
          },
          'mor-comparative': {
            '$': $('#morphology_adjective_comparis_text_comparative_' + id).val()
          },
          'mor-superlative': {
            '$': $('#morphology_adjective_comparis_text_superlative_' + id).val()
          }
        });
      }
    }
    data.syntax_adj = {};
    var syntax = data.syntax_adj;
    syntax['sy-position'] = {
      '$': $('#syntax_adjective_select_position').val()
    };
    syntax['sy-advusage'] = {
      '$': $('#syntax_adjective_select_advusage').val()
    };
    syntax['sy-complementation'] = {
      'sy-comp': []
    };
    maxId = getMaxId('syntax_adjective_complementation_select_');
    for(var id = 0; id < maxId; id++){
      var val = $('#syntax_adjective_complementation_select_' + id).val();
      if(typeof val !== 'undefined'){
        syntax['sy-complementation']['sy-comp'].push({
          '$': val
        });
      }
    }
  }
  data['sem-definition'] = {};
  data['sem-definition']['sem-defSource'] = {};
  data['sem-definition']['sem-defSource']['$'] = $('#rbn_data_text_definition').val();
  data['sem-definition']['sem-def-noun'] = {};
  data['sem-definition']['sem-def-noun']['sem-genus'] = {};
  data['sem-definition']['sem-def-noun']['sem-genus']['$'] = $('#sem_genus').val();
  data['sem-synonyms'] = {};
  data['sem-synonyms']['sem-synonym'] = [];
  data['sem-hypernyms'] = {};
  data['sem-hypernyms']['sem-hypernym'] = [];
  maxId = getMaxId('rbn_data_text_synonym_');
  for(var id = 0; id < maxId; id++){
    var val = $('#rbn_data_text_synonym_' + id).val();
    if(typeof val !== 'undefined'){
      data['sem-synonyms']['sem-synonym'].push({
                                    '$': val
                                 });
    }
  }
  maxId = getMaxId('rbn_data_text_hypernym_');
  for(var id = 0; id < maxId; id++){
    var val = $('#rbn_data_text_hypernym_' + id).val();
    if(typeof val !== 'undefined'){
      data['sem-hypernyms']['sem-hypernym'].push({
                                    '$': $('#rbn_data_text_hypernym_' + id).val()
                                 });
    }
  }
  data.pragmatics = {};
  var pragmatics = data.pragmatics;
  pragmatics['prag-socGroup'] = {};
  pragmatics['prag-socGroup']['$'] = $('#pragmatics_select_socgroup').val();
  pragmatics['prag-domain'] = {};
  pragmatics['prag-domain']['@subjectfield'] = $('#pragmatics_select_domain').val();
  pragmatics['prag-domain']['@general'] = $('#pragmatics_checkbox_general').is(':checked') + '';
  pragmatics['prag-style'] = {};
  pragmatics['prag-style']['$'] = $('#pragmatics_select_style').val();
  pragmatics['prag-origin'] = {};
  pragmatics['prag-origin']['$'] = $('#pragmatics_select_origin').val();
  pragmatics['prag-frequency'] = {};
  pragmatics['prag-frequency']['$'] = $('#pragmatics_select_frequency').val();
  pragmatics['prag-connotation'] = {};
  pragmatics['prag-connotation']['$'] = $('#pragmatics_select_connotation').val();
  pragmatics['prag-chronology'] = {};
  pragmatics['prag-chronology']['$'] = $('#pragmatics_select_chronology').val();
  pragmatics['prag-subj-gen'] = {};
  pragmatics['prag-subj-gen']['$'] = $('#pragmatics_text_subjgen').val();
  pragmatics['prag-geography'] = {};
  pragmatics['prag-geography']['$'] = $('#pragmatics_select_geography').val();
  data.examples = {
      'example': []
    };
  var example = data.examples.example;
  maxId = getMaxId('example_form_textualform_');
  for(var id = 0; id < maxId; id++){
    var val = $('#example_form_canonicalform_' + id).val();
    if(typeof val === 'undefined') continue;
    var example_obj = {
        '@r_ex_id': '',
        'form_example': {
          'canonicalform': {},
          'textualform': {},
          'category': {},
          'text-category': {}
          },
        'syntax_example': {
          'sy-type': {},
          'sy-subtype': {},
          'sy-combi': {
              'sy-combipair': []
            }
          },
        'semantics_example': {
          'sem-meaningdescription': {},
          'sem-lc-collocator': {},
          'sem-gc-compl': {},
          'sem-spec-collocator': {},
          'sem-subtype-argument': {},
          'sem-gc-gramword' : {}
          }
      };
    var form_example = example_obj.form_example;
    form_example.canonicalform['$'] = val;
    form_example.textualform['$'] = $('#example_form_textualform_' + id).val();
    form_example.category['$'] = $('#example_form_category_' + id).val();
    form_example['text-category']['$'] = isValid($('#example_form_text_category_' + id).val());
    var syntax_example = example_obj.syntax_example;
    syntax_example['sy-type']['$'] = $('#example_syntax_type_' + id).val();
    syntax_example['sy-subtype']['$'] = $('#example_syntax_subtype_' + id).val();
    var maxChildId = getMaxId('example_syntax_combi_' + id + '_');
    for(var childId = 0; childId < maxChildId; childId++){
      var childVal = $('#example_syntax_combi_text_' + id + '_' + childId).val();
      if(typeof childVal === 'undefined') continue;
      syntax_example['sy-combi']['sy-combipair'].push({
                                             'sy-combiword': {
                                               '$': childVal
                                             },
                                             'sy-combicat': {
                                               '$': $('#example_syntax_combi_select_' + id + '_' + childId).val()
                                             }
                                           });
    }
    var example_semantics = example_obj.semantics_example;
    example_semantics['sem-meaningdescription']['$'] = $('#examples_semantics_mean_desc_' + id).val();
    example_semantics['sem-lc-collocator']['$'] = $('#examples_semantics_lc_collocator_' + id).val();
    example_semantics['sem-gc-compl']['$'] = $('#example_semantics_gc_compl_' + id).val();
    example_semantics['sem-spec-collocator']['$'] = $('#examples_semantics_spec_collocator_' + id).val();
    example_semantics['sem-subtype-argument']['$'] = $('#examples_semantics_subtype_argument_' + id).val();
    example_semantics['sem-gc-gramword']['$'] = $('#examples_semantics_gc_gramword_' + id).val();
    example_obj['@comment'] = $('#example_comment_' + id).val();
    example.push(example_obj);
  }
  return obj;
}


function setPosHTML(pos){
  var $pos =  $('#pos_add');
  switch(pos){
    case '':
      $pos.html('Semantics<hr>Morphology<hr>Syntax<hr>');
      break;
    case 'noun':
      $pos.html(getNounHTML());
      fillNounSelects();
      break;
    case 'verb':
      $pos.html(getVerbHTML());
      fillVerbSelects();
      break;
    case 'adj':
      $pos.html(getAdjectiveHTML());
      fillAdjectiveSelects();
      break;
    default:
      $pos.html('Unknown \'pos\' parameter selected');
  }
}

function getNounHTML(){
  return "<div id='semantics'>" +
    "<b>Semantics</b></br>" +
    "Reference <select id='semantics_select_reference'></select>" +
    "Countability <select id='semantics_select_countability'></select></br>" +
    "Type <input type='text' id='semantics_text_type'>" +
    "Subclass <input type='text' id='semantics_text_subclass'></br>" +
    "Shift <input type='text' id='semantics_text_shift'>" +
    "Selrestriction, synset list <input type='text' id='semantics_text_synList'></br>" +
    "Resume <input type='text' id='semantics_text_resume'>" +
  "</div>" +
  "<hr>" +
  "<div id='morphology'>" +
    "<div class='plus' id='button_morphology' " +
    "onclick='Model.clickIkon(&#39;morphology_id&#39;, &#39;button_morphology&#39;)'/>" +
    "<b>Morphology</b></br>" +
    "<div id='morphology_id' hidden='true'>" +
      "Type <select id='morphology_select_type'></select>" +
      "Structure <input type='text' id='morphology_text_structure'></br>" +
      "<div id='morphology_plurform' class='boxed'>" +
        "<div class='plus' id='button_morphology_plurform' " +
        "onclick='Model.clickIkon(&#39;morphology_plurform_id&#39;, &#39;button_morphology_plurform&#39;)'/>" +
        "<b>Plurform</b></br>" +
        "<div id='morphology_plurform_id' hidden='true'>" + 
          "<input type='button' value='Add' id='last_morphology_plurform' onclick='morphologyPlurformAdd()'>" +
        "</div>" +
      "</div>" +
    "</div>" +
  "</div>" +
  "<hr>" +
  "<div id='syntax'>" +
    "<div class='plus' id='button_syntax' " +
    "onclick='Model.clickIkon(&#39;syntax_id&#39;, &#39;button_syntax&#39;)'/>" +
    "<b>Syntax</b></br>" +
    "<div id='syntax_id' hidden='true'>" +
      "Gender <select id='syntax_select_gender'></select>" +
      "Number <select id='syntax_select_number'></select></br>" +
      "Article <select id='syntax_select_article'></select>" +
      "<div id='syntax_complementation' class='boxed'>" +
        "<div class='plus' id='button_syntax_complementation' " +
        "onclick='Model.clickIkon(&#39;syntax_complementation_id&#39;, &#39;button_syntax_complementation&#39;)'/>" +
        "<b>Complementation</b></br>" +
        "<div id='syntax_complementation_id' hidden='true'>" +
          "<input type='button' value='Add' id='last_syntax_complementation' onclick='syntaxComplementationAdd()'>" +
        "</div>" +
      "</div>" +
    "</div>" +
  "</div>";
}

function fillNounSelects() {
  fillSelect('semantics_select_reference', semantics_select_reference);
  fillSelect('semantics_select_countability', semantics_select_countability);
  fillSelect('morphology_select_type', morphology_select_type);
  fillSelect('syntax_select_gender', syntax_select_gender);
  fillSelect('syntax_select_number', syntax_select_number);
  fillSelect('syntax_select_article', syntax_select_article);
}

function getVerbHTML() {
  return "" +
  "<div id='semantics'>" +
    "<b>Semantics</b></br>" +
    "Type<input type='text' id='semantics_verb_text_type'>" +
    "Resume<input type='text' id='semantics_verb_text_resume'<br>" +
    "<div id='semantics_verb_selrestriction' class='boxed'>" +
      "<div class='plus' id='button_semantics_verb_selrestriction' " +
      "onclick='Model.clickIkon(&#39;semantics_verb_selrestriction_id&#39;, &#39;button_semantics_verb_selrestriction&#39;)'/>" +
      "<b>Selrestriction</b><br>" +
      "<div id='semantics_verb_selrestriction_id' hidden='true'>" +
        "<input type='button' value='Add' id='last_semantics_verb_selrestriction' onclick='selrestrictionAdd()'>" +
      "</div>" +
    "</div>" +
    "<div id='semantics_verb_caseframe' class='boxed'>" +
      "<div class='plus' id='button_semantics_verb_caseframe' " +
      "onclick='Model.clickIkon(&#39;semantics_verb_caseframe_id&#39;, &#39;button_semantics_verb_caseframe&#39;)'/>" +
      "<b>Caseframe</b><br>" +
      "<div id='semantics_verb_caseframe_id' hidden='true'>" +
        "<select id='semantics_verb_select_caseframe'></select>" +
        "<div id='semantics_verb_caseframe_arguments' class='boxed'>" +
          "<div class='plus' id='button_semantics_verb_caseframe_arguments' " +
          "onclick='Model.clickIkon(&#39;semantics_verb_caseframe_arguments_id&#39;, &#39;button_semantics_verb_caseframe_arguments&#39;)'/>" +
          "<b>Arguments</b><br>" +
          "<div id=semantics_verb_caseframe_arguments_id hidden='true'>" +
            "<input type='button' value='Add' id='last_semantics_verb_caseframe_arguments' onclick='argumentsAdd()'>" +
          "</div>" +
        "</div>" +
      "</div>" +
    "</div>" +
  "</div>" +
  "<hr>" +
  "<div id='morphology'>" +
    "<div class='plus' id='button_morphology' " +
    "onclick='Model.clickIkon(&#39;morphology_id&#39;, &#39;button_morphology&#39;)'/>" +
    "<b>Morphology</b></br>" +
    "<div id='morphology_id' hidden='true'>" +
      "Type <select id='morphology_verb_select_type'></select>" +
      "Structure <input type='text' id='morphology_verb_text_structure'></br>" +
      "Flex mode <select id='morphology_verb_select_flex_mode'></select>" +
      "Tense <select id='morphology_verb_select_tense'></select><br>" +
      "Number <select id='morphology_verb_select_number'></select>" +
      "Person <select id='morphology_verb_select_person'></select><br>" +
      "<div id='morphology_verb_flex_conjugation' class='boxed'>" +
        "<div class='plus' id='button_morphology_verb_flex_conjugation' " +
        "onclick='Model.clickIkon(&#39;morphology_verb_flex_conjugation_id&#39;, &#39;button_morphology_verb_flex_conjugation&#39;)'/>" +
        "<b>Flex conjugation</b><br>" +
        "<div id='morphology_verb_flex_conjugation_id' hidden='true'>" +
          "<input type='button' value='Add' id='last_morphology_verb_flex_conjugation' onclick='flexConjugationAdd()'>" +
        "</div>" +
      "</div>" +
    "</div>" +
  "</div>" +
  "<hr>" +
  "<div id='syntax'>" +
    "<div class='plus' id='button_syntax' " +
    "onclick='Model.clickIkon(&#39;syntax_id&#39;, &#39;button_syntax&#39;)'/>" +
    "<b>Syntax</b></br>" +
    "<div id='syntax_id' hidden='true'>" +
      "Trans <select id='syntax_verb_select_trans'></select>" +
      "Separ <select id='syntax_verb_select_separ'></select><br>" +
      "Class <select id='syntax_verb_select_class'></select>" +
      "Peraux <select id='syntax_verb_select_peraux'></select><br>" +
      "Valency <select id='syntax_verb_select_valency'></select>" +
      "Reflexiv <select id='syntax_verb_select_reflexiv'></select><br>" +
      "Subject <select id='syntax_verb_select_subject'></select>" +
      "<div id='syntax_complementation' class='boxed'>" +
        "<div class='plus' id='button_syntax_complementation' " +
        "onclick='Model.clickIkon(&#39;syntax_complementation_id&#39;, &#39;button_syntax_complementation&#39;)'/>" +
        "<b>Complementation</b><br>" +
        "<div id='syntax_complementation_id' hidden='true'>" +
          "<div id='syntax_complementation_comp' class='boxed'>" +
            "<div class='plus' id='button_syntax_complementation_comp' " +
            "onclick='Model.clickIkon(&#39;syntax_complementation_comp_id&#39;, &#39;button_syntax_complementation_comp&#39;)'/>" +
            "<b>Comp</b><br>" +
            "<div id='syntax_complementation_comp_id' hidden='true'>" +
              "<input type='button' value='Add' id='last_syntax_complementation_comp' onclick='complementationCompAdd()'>" +
            "</div>" +
          "</div>" +
          "<div id='syntax_complementation_text' class='boxed'>" +
            "<div class='plus' id='button_syntax_complementation_text' " +
            "onclick='Model.clickIkon(&#39;syntax_complementation_text_id&#39;, &#39;button_syntax_complementation_text&#39;)'/>" +
            "<b>Text</b><br>" +
            "<div id='syntax_complementation_text_id' hidden='true'>" +
              "<input type='button' value='Add' id='last_syntax_complementation_text' onclick='complementationTextAdd()'>" +
            "</div>" +
          "</div>" +
        "</div>" +
      "</div>" +
    "</div>" +
  "</div>";
}

function fillVerbSelects() {
  fillSelect('semantics_verb_select_caseframe', semantics_verb_select_caseframe);
  fillSelect('morphology_verb_select_type', morphology_verb_select_type);
  fillSelect('morphology_verb_select_flex_mode', morphology_verb_select_flex_mode);
  fillSelect('morphology_verb_select_tense', morphology_verb_select_tense);
  fillSelect('morphology_verb_select_number', morphology_verb_select_number);
  fillSelect('morphology_verb_select_person', morphology_verb_select_person);
  fillSelect('syntax_verb_select_trans', syntax_verb_select_trans);
  fillSelect('syntax_verb_select_separ', syntax_verb_select_separ);
  fillSelect('syntax_verb_select_class', syntax_verb_select_class);
  fillSelect('syntax_verb_select_peraux', syntax_verb_select_peraux);
  fillSelect('syntax_verb_select_valency', syntax_verb_select_valency);
  fillSelect('syntax_verb_select_reflexiv', syntax_verb_select_reflexiv);
  fillSelect('syntax_verb_select_subject', syntax_verb_select_subject);
}

function selrestrictionAdd(text) {
  if(typeof text === 'undefined'){
    text = '';
  }
  var id = getMaxId('semantics_verb_selrestriction_text_', true);
  var html = "<div id='semantics_verb_selrestriction_" + id + "' class='boxedInner'>" +
               "<input type='text' value='" + text + "' id='semantics_verb_selrestriction_text_" + id + "'>" +
               "<input type='button' value='Remove' onclick='selrestrictionRemove(" + id + ")'>" +
             "</div>";
  $('#last_semantics_verb_selrestriction').before(html)
  log('cdb_lu.js:selrestrictionAdd():end');
}

function selrestrictionRemove(id) {
  if(confirm("Are you sure you want to delete this item?")){
    $("#semantics_verb_selrestriction_" + id).remove();
  }
  log("cdb_lu.js:editExamplesRemove():end");
}

function argumentsAdd(caserole, selrestrole, list){
  if(typeof caserole === 'undefined'){
    caserole = '';
  }
  if(typeof selrestrole === 'undefined'){
    selrestrole = '';
  }
  if(typeof list === 'undefined'){
    list = [];
  }
  var id = getMaxId('semantics_verb_caseframe_arguments_caserole_select_left_', true);
  var html = "" +
  "<div id='semantics_verb_caseframe_arguments_" + id + "' class='boxedInner'>" +
    "<div id='semantics_verb_caseframe_arguments_caserole_" + id + "'>" +
      "<div class='plus' id='button_semantics_verb_caseframe_arguments_caserole' " +
      "onclick='Model.clickIkon(&#39;semantics_verb_caseframe_arguments_caserole_" + id + "_id&#39;, &#39;button_semantics_verb_caseframe_arguments_caserole&#39;)'/>" +
      "<b>Caserole, selrestrole</b>" +
      "<input type='button' value='Remove' onclick='argumentsRemove(" + id + ")'<br>" +
      "<div id='semantics_verb_caseframe_arguments_caserole_" + id + "_id' hidden='true'>" +
        "<select id='semantics_verb_caseframe_arguments_caserole_select_left_" + id + "'></select>" +
        "<select id='semantics_verb_caseframe_arguments_caserole_select_right_" + id + "'></select><br>" +
      "</div>" +
    "</div>" +
    "<div id='semantics_verb_caseframe_arguments_synset_list_" + id + "' class='boxedInner'>" +
      "<div class='plus' id='button_semantics_verb_caseframe_arguments_synset_list' " +
      "onclick='Model.clickIkon(&#39;semantics_verb_caseframe_arguments_synset_list_" + id + "_id&#39;, &#39;button_semantics_verb_caseframe_arguments_synset_list&#39;)'/>" +
      "<b>Synset list</b><br>" +
      "<div id='semantics_verb_caseframe_arguments_synset_list_" + id + "_id' hidden='true'>" +
        "<input type='button' value='Add' id='last_semantics_verb_caseframe_arguments_synset_list_" + id + "' onclick='synsetListAdd(" + id + ")'>" +
      "</div>" +
    "</div>" +
  "</div>";
  $('#last_semantics_verb_caseframe_arguments').before(html);
  fillSelect('semantics_verb_caseframe_arguments_caserole_select_left_' + id, semantics_verb_caseframe_arguments_caserole_select_left_id);
  fillSelect('semantics_verb_caseframe_arguments_caserole_select_right_' + id, semantics_verb_caseframe_arguments_caserole_select_right_id);
  $('#semantics_verb_caseframe_arguments_caserole_select_left_' + id).val(caserole);
  $('#semantics_verb_caseframe_arguments_caserole_select_right_' + id).val(selrestrole);
  for(var i in list){
    synsetListAdd(id, isValid(list[i]['$']));
  }
  log('cdb_lu.js:argumentsAdd():end');
}

function argumentsRemove(id) {
  if(confirm("Are you sure you want to delete this item?")){
    $('#semantics_verb_caseframe_arguments_' + id).remove();
  }
  log('cdb_lu.js:argumentsRemove():end');
}

function synsetListAdd(parentId, value) {
  if(typeof value === 'undefined'){
    value = '';
  }
  var id = getMaxId('semantics_verb_caseframe_arguments_synset_list_inner_' + parentId + '_');
  var html = "<div id='semantics_verb_caseframe_arguments_synset_list_" + parentId + "_" + id +"' class='boxedInnerInner'>" +
               "<input type='text' value='" + value + "' " +
               "id='semantics_verb_caseframe_arguments_synset_list_inner_" + parentId + "_" + id + "' " +
               "class='select_text' " +
               "onkeypress=\"Model.getSelectFromServer(event, " +
               "'semantics_verb_caseframe_arguments_synset_list_inner_" + parentId + "_" + id + "', " +
               "\'cdb_syn\', \'" + $('#serverDictAddress').html() + "\')\">" +
               "<select id='select_semantics_verb_caseframe_arguments_synset_list_inner_" + parentId + "_" + id + "' " +
               "style='width:15px'></select>" +
               "<input type='button' value='Remove' onclick='synsetListRemove(" + parentId + ", " + id + ")'" +
             "</div>";
  $('#last_semantics_verb_caseframe_arguments_synset_list_' + parentId).before(html);
  $('#select_semantics_verb_caseframe_arguments_synset_list_inner_' + parentId + '_' + id).
    append('<option value="' + value + '">' + value + '</option>');
  log('cdb_lu.js:synsetListAdd():end');
}

function synsetListRemove(parentId, id) {
  if(confirm("Are you sure you want to delete this item?")){
    $('#semantics_verb_caseframe_arguments_synset_list_' + parentId + '_' + id).remove();
  }
  log('cdb_lu.js:synsetListRemove():end');
}

function flexConjugationAdd(type, tense, part) {
  if(typeof type === 'undefined'){
    type = '';
  }
  if(typeof tense === 'undefined'){
    tense = '';
  }
  if(typeof part === 'undefined'){
    part = '';
  }
  var id = getMaxId('morphology_verb_flex_conjugation_text_pasttense_', true);
  var html = "<div id='morphology_verb_flex_conjugation_" + id + "' class='boxedInner'>" +
               "<select id='morphology_verb_flex_conjugation_select_" + id + "'></select>" +
               "<input type='button' value='Remove' onclick='flexConjugationRemove(" + id + ")'><br>" +
               "Pasttense <input type='text' value='" + tense + "' id='morphology_verb_flex_conjugation_text_pasttense_" + id + "'><br>" +
               "Pastpart <input type='text' value='" + part + "' id='morphology_verb_flex_conjugation_text_pastpart_" + id + "'>"
             "</div>";
  $('#last_morphology_verb_flex_conjugation').before(html);
  fillSelect('morphology_verb_flex_conjugation_select_' + id, morphology_verb_flex_conjugation_select_id);
  $('#morphology_verb_flex_conjugation_select_' + id).val(type);
  log('cdb_lu.js:flexConjugationAdd():end');
}

function flexConjugationRemove(id) {
  if(confirm("Are you sure you want to delete this item?")){
    $('#morphology_verb_flex_conjugation_' + id).remove();
  }
  log('cdb_lu.js:flexConjugationRemove():end');
}

function complementationCompAdd(value) {
  if(typeof value === 'undefined'){
    value = '';
  }
  var id = getMaxId('syntax_complementation_comp_select_', true);
  var html = "<div id='syntax_complementation_comp_" + id + "' class='boxedInner'>" +
               "<select id='syntax_complementation_comp_select_" + id + "'></select>" +
               "<input type='button' value='Remove' onclick='complementationCompRemove(" + id + ")'>" +
             "</div>";
  $('#last_syntax_complementation_comp').before(html);
  fillSelect('syntax_complementation_comp_select_' + id, syntax_complementation_comp_select_id);
  $('#syntax_complementation_comp_select_' + id).val(value);
  log('cdb_lu.js:complementationAdd():end');
}

function complementationCompRemove(id) {
  if(confirm("Are you sure you want to delete this item?")){
    $('#syntax_complementation_comp_' + id).remove();
  }
  log('cdb_lu.js:complementationCompRemove():end');
}

function complementationTextAdd(text) {
  if(typeof text === 'undefined'){
    text = '';
  }
  var id = getMaxId('syntax_complementation_textbox_');
  var html = "<div id='syntax_complementation_text_" + id + "' class='boxedInner'>" +
               "<input type='text' value='" + text + "' id='syntax_complementation_textbox_" + id + "'>" +
               "<input type='button' value='Remove' onclick='complementationTextRemove(" + id + ")'>" +
             "</div>";
  $('#last_syntax_complementation_text').before(html);
  log('cdb_lu:complementationTextAdd():end');
}

function complementationTextRemove(id) {
  if(confirm("Are you sure you want to delete this item?")){
    $('#syntax_complementation_text_' + id).remove();
  }
  log('cdb_lu.js:complementationTextRemove():end');
}

function getAdjectiveHTML() {
  return "<div id='semantics'>" +
    "<b>Semantics</b></br>" +
    "Shift <select id='semantics_adjective_select_shift'></select>" +
    "Subclass <input type='text' id='semantics_adjective_text_subclass'><br>" +
    "Resume <input type='text' id='semantics_adjective_text_resume'><br>" +
    "<div id='semantics_adjective_type' class='boxed'>" +
      "<div class='plus' id='button_semantics_adjective_type' " +
      "onclick='Model.clickIkon(&#39;semantics_adjective_type_id&#39;, &#39;button_semantics_adjective_type&#39;)'/>" +
      "<b>Type</b><br>" +
      "<div id='semantics_adjective_type_id' hidden='true'>" +
        "<select id='semantics_adjective_select_type'></select>" +
      "</div>" +
    "</div>" +
    "<div id='semantics_adjective_selrestriction' class='boxed'>" +
      "<div class='plus' id='button_semantics_adjective_selrestriction' " +
      "onclick='Model.clickIkon(&#39;semantics_adjective_selrestriction_id&#39;, &#39;button_semantics_adjective_selrestriction&#39;)'/>" +
      "<b>Selrestriction, synset list</b><br>" +
      "<div id='semantics_adjective_selrestriction_id' hidden='true'>" +
        "<input type='button' value='Add' id='last_semantics_adjective_selrestriction' onclick='selrestrictionAdjectiveAdd()'>" +
      "</div>" +
    "</div>" +
  "</div>" +
  "<hr>" +
  "<div id='morphology'>" +
    "<div class='plus' id='button_morphology' " +
    "onclick='Model.clickIkon(&#39;morphology_id&#39;, &#39;button_morphology&#39;)'/>" +
    "<b>Morphology</b></br>" +
    "<div id='morphology_id' hidden='true'>" +
      "Type <select id='morphology_adjective_select_type'></select>" +
      "Flectional type <select id='morphology_adjective_select_flectional_type'></select><br>" +
      "Declinability <select id='morphology_adjective_select_declinability'></select>" +
      "Base <input type='text' id='morphology_adjective_text_base'><br>" +
      "Morpho structure <input type='text' id='morphology_adjective_text_morpho_structure'><br>" +
      "<div id='morphology_adjective_comparis' class='boxed'>" +
        "<div class='plus' id='button_morphology_adjective_comparis' " +
        "onclick='Model.clickIkon(&#39;morphology_adjective_comparis_id&#39;, &#39;button_morphology_adjective_comparis&#39;)'/>" +
        "<b>Comparis</b></br>" +
        "<div id='morphology_adjective_comparis_id' hidden='true'>" + 
          "<input type='button' value='Add' id='last_morphology_adjective_comparis' onclick='comparisAdd()'>" +
        "</div>" +
      "</div>" +
    "</div>" +
  "</div>" +
  "<hr>" +
  "<div id='syntax'>" +
    "<div class='plus' id='button_syntax' " +
    "onclick='Model.clickIkon(&#39;syntax_id&#39;, &#39;button_syntax&#39;)'/>" +
    "<b>Syntax</b></br>" +
    "<div id='syntax_id' hidden='true'>" +
      "Position <select id='syntax_adjective_select_position'></select>" +
      "Advusage <select id='syntax_adjective_select_advusage'></select>" +
      "<div id='syntax_adjective_complementation' class='boxed'>" +
        "<div class='plus' id='button_syntax_adjective_complementation' " +
        "onclick='Model.clickIkon(&#39;syntax_adjective_complementation_id&#39;, &#39;button_syntax_adjective_complementation&#39;)'/>" +
        "<b>Complementation</b><br>" +
        "<div id='syntax_adjective_complementation_id' hidden='true'>" +
          "<input type='button' value='Add' id='last_syntax_adjective_complementation' onclick='adjectiveComplementationAdd()'>" +
        "</div>" +
      "</div>" +
    "</div>" +
  "</div>";
}

function fillAdjectiveSelects() {
  fillSelect('semantics_adjective_select_shift', semantics_adjective_select_shift);
  fillSelect('semantics_adjective_select_type', semantics_adjective_select_type);
  fillSelect('morphology_adjective_select_type', morphology_adjective_select_type);
  fillSelect('morphology_adjective_select_flectional_type', morphology_adjective_select_flectional_type);
  fillSelect('morphology_adjective_select_declinability', morphology_adjective_select_declinability);
  fillSelect('syntax_adjective_select_position', syntax_adjective_select_position);
  fillSelect('syntax_adjective_select_advusage', syntax_adjective_select_advusage);
}

function selrestrictionAdjectiveAdd(text, list) {
  if(typeof text === 'undefined'){
    text = '';
  }
  if(typeof list === 'undefined'){
    list = '';
  }
  var id = getMaxId('semantics_adjective_selrestriction_text_outer_');
  var html = "<div id='semantics_adjective_selrestriction_" + id + "' class='boxedInner'>" +
               "<input type='text' value='" + text + "' id='semantics_adjective_selrestriction_text_outer_" + id + "'>" +
               "<input type='button' value='Remove' onclick='selrestrictionAdjectiveRemove(" + id + ")'><br>" +
               "<div id='semantics_adjective_selrestriction_" + id + "_id' class='boxedInner'>" +
               "</div>" + 
               "<input type='button' value='Add' onclick='selrestrictionAdjectiveInnerAdd(" + id + ")'>" +
             "</div>";
  $('#last_semantics_adjective_selrestriction').before(html);
  for(var i in list){
    selrestrictionAdjectiveInnerAdd(id, isValid(list[i]['$']));
  }
  log('cdb_lu.js:selrestrictionAdjectiveAdd():end');
}

function selrestrictionAdjectiveRemove(id) {
  if(confirm("Are you sure you want to delete this item?")){
    $('#semantics_adjective_selrestriction_' + id).remove();
  }
  log('cdb_lu.js:selrestrictionAdjectiveAdd():end');
}

function selrestrictionAdjectiveInnerAdd(parentId, text) {
  if(typeof text === 'undefined'){
    text = '';
  }
  var id = getMaxId('semantics_adjective_selrestriction_text_inner_' + parentId + '_');
  var html = "<div id='semantics_adjective_selrestriction_" + parentId + "_" + id + "' class='boxedInner'>" +
               "<input type='text' value='" + text + "' " +
               "id='semantics_adjective_selrestriction_text_inner_" + parentId + "_" + id + "' " +
               "class='select_text' " +
               "onkeypress=\"Model.getSelectFromServer(event, " +
               "'semantics_adjective_selrestriction_text_inner_" + parentId + "_" + id + "', " +
               "\'cdb_syn\', \'" + $('#serverDictAddress').html() + "\')\")\">" +
               "<select id='select_semantics_adjective_selrestriction_text_inner_" + parentId + "_" + id + "' " +
               "style='width:15px'></select>" +
               "<input type='button' value='Remove' onclick='selrestrictionAdjectiveInnerRemove(" + parentId + ", " + id + ")'>" +
             "</div>";
  $('#semantics_adjective_selrestriction_' + parentId + '_id').append(html);
  $('#select_semantics_adjective_selrestriction_text_inner_' + parentId + '_' + id).
    append('<option value="' + text + '">' + text + '</option>');
  log('cdb_lu.js:selrestrictionAdjectiveInnerAdd():end');
}

function selrestrictionAdjectiveInnerRemove(parentId, id) {
  if(confirm("Are you sure you want to delete this item?")){
    $('#semantics_adjective_selrestriction_' + parentId + '_' + id).remove();
  }
  log('cdb_lu.js:selrestrictionAdjectiveInnerRemove():end');
}

function comparisAdd(value, comparative, superlative) {
  if(typeof value === 'undefined'){
    value = '';
  }
  if(typeof comparative === 'undefined'){
    comparative = '';
  }
  if(typeof superlative === 'undefined'){
    superlative = '';
  }
  var id = getMaxId('morphology_adjective_comparis_text_superlative_', true);
  var html = "<div id='morphology_adjective_comparis_" + id + "' class='boxedInner'>" +
               "<select id='morphology_adjective_comparis_select_" + id + "'></select>" +
               "<input type='button' value='Remove' onclick='comparisRemove(" + id + ")'><br>" +
               "Comparative <input type='text' value='" + comparative + "' id='morphology_adjective_comparis_text_comparative_" + id + "'><br>" +
               "Superlative <input type='text' value='" + superlative + "' id='morphology_adjective_comparis_text_superlative_" + id + "'>" +
             "</div>";
  $('#last_morphology_adjective_comparis').before(html);
  fillSelect('morphology_adjective_comparis_select_' + id, morphology_adjective_comparis_select_id);
  $('#morphology_adjective_comparis_select_' + id).val(value);
  log('cdb_lu.js:comparisAdd():end');
}

function comparisRemove(id) {
  if(confirm("Are you sure you want to delete this item?")){
    $('#morphology_adjective_comparis_' + id).remove();
  }
  log('cdb_lu.js:comparisRemove():end');
}

function adjectiveComplementationAdd(value) {
  if(typeof value === 'undefined'){
    value = '';
  }
  var id = getMaxId('syntax_adjective_complementation_select_', true);
  var html = "<div id='syntax_adjective_complementation_" + id + "' class='boxedInner'>" +
               "<select id='syntax_adjective_complementation_select_" + id + "'></select>" +
               "<input type='button' value='Remove' onclick='adjectiveComplementationRemove(" + id + ")'>" +
             "</div>";
  $('#last_syntax_adjective_complementation').before(html);
  fillSelect('syntax_adjective_complementation_select_' + id, syntax_adjective_complementation_select_id);
  $('#syntax_adjective_complementation_select_' + id).val(value);
  log('cdb_lu.js:adjectiveComplementationAdd():end');
}

function adjectiveComplementationRemove(id) {
  if(confirm("Are you sure you want to delete this item?")){
    $('#syntax_adjective_complementation_' + id).remove();
  }
  log('cdb_lu.js:adjectiveComplementationRemove():end');
}

function clear(){
  setNewId()
  $('#seqNr_text').val('');
  $('#complete_checkbox').attr('checked', false);
  $('#textbox_type').val('');
  $('#pos_select').val('');
  $('#pos_select').attr('disabled', false);
  $('#pos_select').change();
  $('#comment_textarea').val('');
  $('#form_text_spelling').val('');
  $('#form_select_length').val('');
  $('#form_text_spelvar').val('');
  $('#rbn_data_text_definition').val('');
  $('#rbn_data_synonyms').empty();
  $('#rbn_data_hypernyms').empty();
  $('#pragmatics_select_socgroup').val('');
  $('#pragmatics_select_domain').val('');
  $('#pragmatics_checkbox_general').attr('checked', false);
  $('#pragmatics_select_style').val('');
  $('#pragmatics_select_origin').val('');
  $('#pragmatics_select_frequency').val('');
  $('#pragmatics_select_connotation').val('');
  $('#pragmatics_select_chronology').val('');
  $('#pragmatics_text_subjgen').val('');
  $('#pragmatics_select_geography').val('');
  $('#examples_id').empty();
  $('#examples_id').append("<input type='button' value='Add example' onclick='editExamplesAddExample()'></br>" +
      "<input type='button' value='Add example' id='last_examples' onclick='editExamplesAddExample()'></br>");
  log('cdb_lu.js:clear():end');
}

function setNewId() {
  $('#luId_text_id').val('_new_id_');
}

