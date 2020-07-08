$(document).ready(function(){
  // Activate tooltips
  $('[data-toggle="tooltip"]').tooltip();
  // var actions = $("table tbody td:last-child").html();
  // alert(actions);
  // Filter table rows based on searched term
  $("#search").on("keyup", function() {
    var term = $(this).val().toLowerCase();
    $("table tbody tr").each(function(){
      $row = $(this);
      var name = $row.find("td").text().toLowerCase();
      console.log(name);
      if(name.search(term) < 0){
        $row.hide();
      } else{
        $row.show();
      }
    });
  });
  // // Append table with add row form on add new button click
  // $(".add-new").click(function(){
  //   $(this).attr("disabled", "disabled");
  //   var index = $("table tbody tr:last-child").index();
  //   var row = '<tr>' +
  //     '<td><input type="text" class="form-control" name="promotionTitle" id="promotionTitle"></td>' +
  //     '<td><input type="text" class="form-control" name="promotionEndDate" id="promotionEndDate"></td>' +
  //     '<td><input type="text" class="form-control" name="promotionBeginDate" id="promotionBeginDate"></td>' +
  //     '<td><input type="text" class="form-control" name="promotionDiscount" id="promotionDiscount"></td>' +
  //     '<td><input type="text" class="form-control" name="promotionDescription" id="promotionDescription"></td>' +
  //     '<td>' +
  //     actions
  //     // '<a class="add"  data-toggle="tooltip"><i class="material-icons">&#xE03B;</i></a>\n' +
  //     // '<a class="edit"  data-toggle="tooltip"><i class="material-icons">&#xE254;</i></a>\n' +
  //     // '<a class="delete" data-toggle="tooltip"><i class="material-icons">&#xE872;</i></a>'
  //     +'</td>' +
  //     '</tr>';
  //   $("table").append(row);
  //   $("table tbody tr").eq(index + 1).find(".add, .edit").toggle();
  //   $('[data-toggle="tooltip"]').tooltip();
  // });
  // Add row on add button click
  $(document).on("click", ".add", function(){
    var empty = false;
    var input = $(this).parents("tr").find('input[type="text"]');
    input.each(function(){
      if(!$(this).val()){
        $(this).addClass("error");
        empty = true;
      } else{
        $(this).removeClass("error");
      }
    });
    $(this).parents("tr").find(".error").first().focus();
    if(!empty){
      input.each(function(){
        $(this).parent("td").html($(this).val());
      });
      $(this).parents("tr").find(".add, .edit").toggle();
      $(".add-new").removeAttr("disabled");
    }
  });
  // Edit row on edit button click
  $(document).on("click", ".edit", function(){
    $(this).parents("tr").find("td:not(:last-child)").each(function(){
      $(this).html('<input type="text" class="form-control" value="' + $(this).text() + '">');
    });
    $(this).parents("tr").find(".add, .edit").toggle();
    $(".add-new").attr("disabled", "disabled");
  });
  // Delete row on delete button click
  $(document).on("click", ".delete", function(){
    $(this).parents("tr").remove();
    $(".add-new").removeAttr("disabled");
  });
});
