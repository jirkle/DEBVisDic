/**
 * Tree utility
 * @constructor
 */
Tree = function() {};

Tree.addData = function(data, orientation, clicked, nodeId) {
  if(typeof data === 'undefined'){
    data = [];
  }
  if(typeof orientation === 'undefined'){
    orientation = 'ILR';
  }
  if(typeof clicked === 'undefined' || typeof nodeId === 'undefined'){
    clicked = false;
    nodeId = '';
  }
  if(data.length !== 0){
    $('#' + data[0].parent + "_" + orientation).empty();
  }
  for(var index in data){
    var node = data[index];
    $('#' + node.parent + "_" + orientation).append("" +
                "<li>" +
                  "<div class='hitarea hitarea-plus' id='hitarea_" + node.id + "_" + orientation + "' first-click='true' " +
                  "onclick='Model.setSubtreeData(&#39;" + node.id + "_" + orientation + "&#39;, &#39;" + orientation + "&#39;)'>" +
                  "</div>" +
                  "<div ondblclick='Model.show_entry(&#39;" + $('#code').html() + "&#39;, &#39;" + node.id + "&#39;)'>&nbsp;" + node.val + "</div>" +
                  "<ul id='" + node.id + "_" + orientation + "'>" +
                  "</ul>" +
                "</li>"
                );
  }
  if(clicked){
    var $hitarea = $('#hitarea_' + nodeId);
    var $nodeId = $('#' + nodeId);
    var first_click = $hitarea.attr('first-click') === 'true';
    if(first_click && !$nodeId.is(':hidden')){
      $hitarea.attr('class', 'hitarea hitarea-minus');
      $hitarea.attr('first-click', 'false');
      log('tree.js:Tree.addData():end');
      return;
    }
    if($nodeId.is(':hidden')){
      $nodeId.attr('hidden', false);
      $hitarea.attr('class', 'hitarea hitarea-minus');
    }else{
      $nodeId.attr('hidden', true);
      $hitarea.attr('class', 'hitarea hitarea-plus');
    }
  }
  log('tree.js:Tree.addData():end');
}

