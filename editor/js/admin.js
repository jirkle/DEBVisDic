$(function() {
  $('.add_user').button().click(function(event) {
    add_user_row();
  });
  $('.save_setting').button().click(function(event) {
    save_setting();
  });
    $('[name=dict_name]').change(function() {
      if ($('[name=dict_code]').val() == '') {
        $('[name=dict_code]').val($('[name=dict_name]').val().toLowerCase().match(/[a-z0-9_]*/g).join(''));
      }
    });
  if ($('[name=users]').length > 0 && $('[name=users]').val() != '') {
    load_users(JSON.parse($('[name=users]').val()));
  }
});

function create_remove_button() {
  $('.remove_element').button().click(function(event) {
    if (confirm('Remove?')) {
      $(this).parent().remove();
    }
  });
}

function load_setting(data) {
  load_childs(data.childs);
  if (data.key != undefined) {
    var $main_el = $('input.el_name').filter(function() { return this.value == data.key });
    if ($main_el.size() > 0) {
      $main_el.parent().parent().find('.el_main').attr('checked', true);
    }
  }
  $('.elements').sortable();
}

function load_users(users) {
  for (var i=0; i < users.length; i++) {
    add_user_row(users[i]);
  }
}



function save_setting() {
  if ($('[name=dict_name]').val() == '') {
    alert('dictionary name cannot be empty');
    return false;
  }
  if (/^[A-Za-z0-9_]+$/.test($('[name=dict_code]').val()) == false) {
    alert('dictionary code may only contain letters and numbers');
    return false;
  }
  var url = window.location.protocol+'//'+window.location.host;
  url += '/admin?action=dict_save&dict_code='+encodeURIComponent($('[name=dict_code]').val())+'&dict_name='+encodeURIComponent($('[name=dict_name]').val());
  if ($('[name=edit]').val() == '1') {
    url += '&edit=1';
  }
  $.ajax(url,{
    async: true,
    success: function(data) {
      console.log(data);
      if (data.substring(0,3) == 'OK=') {
        var newurl = window.location.protocol+'//'+window.location.host+'/admin?action=dict_edit&dict='+data.substring(3);
        window.location.href = newurl;
      } else {
        alert('Error while saving: '+data);
      }
    },
    error: function(data) {
      console.log(data);
      alert('error');
    }
  });
  return;
}


function add_user_row(data) {
  if (data != undefined) {
    var $newrow = $('<div class="user_row"><label>login</label> <input type="hidden" class="us_login"/><span class="us_login_html"/><label>name</label> <span class="us_name"/><label>email</label> <span class="us_email"/></label><label>permission <select class="us_perm"><option value="m">manager</option><option value="w">editor</option><option value="r">read only</option></select></label><button class="save_user">save user</button><button class="remove_user">remove user</button></div>');
    $newrow.find('.us_name').html(data.name);
    $newrow.find('.us_login_html').html(data.login);
    $newrow.find('.us_login').val(data.login);
    $newrow.find('.us_perm').val(data.perm);
    $newrow.find('.us_email').html(data.email);
    if ($('[name=owner]').val() == data.login) {
      $newrow.find('.remove_user').remove();
      $newrow.find('.save_user').remove();
    }
  } else {
    var $newrow = $('<div class="user_row"><label>login <input type="text" class="us_login"/></label><label>permission <select class="us_perm"><option value="r">read only</option><option value="w">editor</option><option value="m">manager</option></select></label><button class="save_user">save user</button></div>');
  }
  if ($('.user_row').size() > 0) {
    $('.user_row').last().after($newrow);
  } else {
    $('.last_user').before($newrow);
  }

  $newrow.find('.remove_user').button().click(function(event) {
    if (confirm('Remove user?')) {
      $(this).parent().remove();
      var url = window.location.protocol+'//'+window.location.host;
      url += '/admin?action=user_remove&login='+encodeURIComponent($(this).parent().find('.us_login').val())+'&code='+encodeURIComponent($('[name=dict_code]').val());
      $.ajax(url,{
        async: true,
        success: function(data) {
          //console.log(data);
          if (data.substring(0,2) == 'OK') {
            var newurl = window.location.protocol+'//'+window.location.host+'/admin?action=dict_edit&dict='+encodeURIComponent($('[name=dict_code]').val());
            window.location.href = newurl;
          } else {
            alert('Error while saving: '+data);
          }
        },
        error: function(data) {
          console.log(data);
          alert('error');
        }
      });
    }
  });

  $newrow.find('.save_user').button().click(function(event) {
    var url = window.location.protocol+'//'+window.location.host;
    url += '/admin?action=user_add&login='+encodeURIComponent($(this).parent().find('.us_login').val())+'&perm='+$(this).parent().find('.us_perm').val()+'&code='+encodeURIComponent($('[name=dict_code]').val());
    //console.log(url);
    $.ajax(url,{
      async: true,
      success: function(data) {
        //console.log(data);
        if (data.substring(0,2) == 'OK') {
          var newurl = window.location.protocol+'//'+window.location.host+'/admin?action=dict_edit&dict='+encodeURIComponent($('[name=dict_code]').val());
          window.location.href = newurl;
        } else {
          alert('Error while saving: '+data);
        }
      },
      error: function(data) {
        console.log(data);
        alert('error');
      }
    });
  });
}

