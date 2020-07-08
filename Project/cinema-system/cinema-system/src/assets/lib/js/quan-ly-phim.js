// $(document).ready(function(){
// 	$('[data-toggle="tooltip"]').tooltip();
// 	var actions = $("table td:last-child").html();
// 	// Append table with add row form on add new button click
//     $(".add-new").click(function(){
// 		$(this).attr("disabled", "disabled");
// 		var index = $("table tbody tr:last-child").index();
//         var row = '<tr>' +
//             '<td><input type="text" class="form-control" name="#" id="#"></td>' +
//             '<td><input type="text" class="form-control" name="name" id="name"></td>' +
//             '<td><input type="text" class="form-control" name="dateStart" id="dateStart"></td>' +
//             '<td><input type="text" class="form-control" name="dateEnd" id="dateEnd"></td>' +
//             '<td><input type="text" class="form-control" name="filmStudio" id="filmStudio"></td>' +
//             '<td><input type="text" class="form-control" name="duration" id="duration"></td>' +
//             '<td><input type="text" class="form-control" name="actor" id="actor"></td>' +
//             '<td><input type="text" class="form-control" name="type" id="type"></td>' +
//             '<td><input type="text" class="form-control" name="director" id="director"></td>' +
//             '<td><input type="text" class="form-control" name="content" id="content"></td>' +
//             '<td><input type="text" class="form-control" name="srcImg" id="srcImg"></td>' +
//             '<td><input type="text" class="form-control" name="srcVid" id="srcVid"></td>' +	
// 			'<td>' + '<a class="add" data-toggle="tooltip"><i class="material-icons">&#xE03B;</i></a>' + 
//                             '<a class="edit" data-toggle="tooltip"><i class="material-icons">&#xE254;</i></a>' + 
//                              '</td>' +
//         '</tr>';
//     	$("table").append(row);		
// 		$("table tbody tr").eq(index + 1).find(".add, .edit").toggle();
//         $('[data-toggle="tooltip"]').tooltip();
//         $(document).ready(function(){
//     // Get value on button click and show alert
//     $(".add").click(function(){
//         var str = $("#name").val();
//         console.log(str);
//     });
// });
//     });
// 	// Add row on add button click
// 	$(document).on("click", ".add", function(){
// 		var empty = false;
// 		var input = $(this).parents("tr").find('input[type="text"]');
//         input.each(function(){
// 			if(!$(this).val()){
// 				$(this).addClass("error");
// 				empty = true;

// 			} else{
//                 $(this).removeClass("error");
//                 console.log($(this).val())
//             }
// 		});
// 		$(this).parents("tr").find(".error").first().focus();
// 		if(!empty){
// 			input.each(function(){
// 				$(this).parent("td").html($(this).val());
// 			});			
// 			$(this).parents("tr").find(".add, .edit").toggle();
// 			$(".add-new").removeAttr("disabled");
// 		}		
//     });
// 	// Edit row on edit button click
// 	$(document).on("click", ".edit", function(){		
//         $(this).parents("tr").find("td:not(:last-child)").each(function(){
// 			$(this).html('<input type="text" class="form-control" value="' + $(this).text() + '">');
// 		});		
// 		$(this).parents("tr").find(".add, .edit").toggle();
// 		$(".add-new").attr("disabled", "disabled");

//     });
// 	// Delete row on delete button click
// 	$(document).on("click", ".delete", function(){
//         $(this).parents("tr").remove();
// 		$(".add-new").removeAttr("disabled");
//     });
// });
