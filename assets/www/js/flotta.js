$(document).ready(function(){
   	var flotta = $('#flotta').empty();		
	$.ajax({
		url: 'http://www.rent-solution.it/data/restapi.php?action=get_app_list',
		dataType: 'jsonp',
		jsonp: 'jsoncallback',
		timeout: 5000,
		success: function(data, status){
			$.each(data, function(i,item){ 
				var landmark = 
'<a href="#flotta"  data-transition="pop" onclick="showPost(' + item.id + ')"><table data-role="table" id="table-column-toggle" data-mode="none" class="ui-responsive table-stroke">'
+'<tbody>'				
+'     <tr>'
+'       <td><img  src="http://www.rent-solution.it/data/photos/'+item.foto+'" alt="napoli, ita" style="width:100%"></td>'
+'       <td><b>'+item.Modello+'</b></td>'
+'       <td><b>'+item.data_disponibile+'</b></td>'
+'     </tr>'
+'</tbody>'
+'</table></a>';
				flotta.append(landmark).trigger('updatelayout');				
			});
		},
		error: function(){
			flotta.html ('<div class="ui-body ui-body-b ui-corner "><b>Connessione assente, controlla internet, trascina in giù e riprova .</b></div>');
		}
	});
});


function showPost(id) {
   	var flottadett = $('#flottadett').empty();
	$.ajax({
		url: 'http://www.rent-solution.it/data/restapi.php?action=get_app&id=' +id+ '',
		dataType: 'jsonp',
		jsonp: 'jsoncallback',
		timeout: 5000,
		success: function(data, status){
			$.each(data, function(i,item){
				var landmark =
'<b>'+item.Marca+'</b></br>'
+'<b>'+item.Modello+'</b></br>'
+'<img  src="http://www.rent-solution.it/data/photos/'+item.foto+'" alt="napoli, ita" style="width:80%"></a></br>'
+'<b>Disponibilità: '+item.data_disponibile+'</b></br>'
+'<b>Targa: '+item.targa+'</b></br>'
+'<b>Km: '+item.km_attuali+'</b></br>'
+'<b>Colore: '+item.colore+'</b></br>'
+'<b>Canone: '+item.listino+'</b></br></br>'	;
// var landmark02 = $( ".selector" );
				flottadett.append(landmark).trigger('updatelayout');
				// flottadett.append(landmark02).slider();
			});
		},
		error: function(){
			flottadett.html ('<div><a class="ui-body ui-body-b ui-corner-all dovesiamo"><b>Connessione assente, torna e riprova .</b></a></div>');
		}
	});
}