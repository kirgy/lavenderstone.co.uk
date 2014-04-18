 $(function() {
$("#book-appointment").datepicker();
$("#book-appointment").datepicker({ dateFormat: 'dd-mm-yy' });
//$( "#book-appointment" ).datepicker( "option", "dateFormat", "dd/mm/yy" );
});

$(document).ready(function() {

	$('#book-appointment-submit').click(function(){
		var bookingDate = $( "#book-appointment" ).datepicker().val();
		var bookingNav = 'bookings.php?book=' + bookingDate;
  		window.location = bookingNav;
	});
}); 

