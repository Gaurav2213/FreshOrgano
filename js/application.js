/**
 * OTY :: application.js
 */

// globals...
var globals = {};

// ready!
$(function() {
	
	/**
	 * tooltips
	 */
	$('.tooltip').tooltip({
		tooltipClass: 'tooltipContent'
	});
	
	/**
	 * don't allow clicking of tooltips
	 */
	$('.tooltip').click(function (e) {
		e.preventDefault();
	});
	
	/**
	 * facebox
	 */
	$('a[rel*=facebox]').facebox();
	
	/**
	 * facebox for clickable table rows (ajaxian)
	 */
	$('tr[rel*=facebox]').click(function (e) {
		$.facebox({ ajax: $(this).attr('href') }, $(this).attr('data-facebox-class'));
		e.stopPropagation();
	});
	
	/**
	 * datepicker
	 */
	$('input.datepicker').datepicker();
	
	/**
	 * datepicker, within faceboxes :: THE TRICK IS TO LOAD THEM VIA AJAX WITHIN THE FACEBOX (minor ouch)
	 * /
	$('a[rel*=faceboxDatepicker]').click(function(e) {
		$('#facebox input.faceboxDatepicker').datepicker();
	});
	*/
	
	/**
	 * clickable table rows
	 */
	$('table tr.clickable').click( function (e) {
		e.stopPropagation();
		var url = $(this).attr('data-href');
		location.href = url;
		return false;
		
	});
	
	$('.inner-link').click( function (e) {
		e.stopPropagation();
		var url = $(this).attr('data-href');
		location.href = url;
		return false;
		
	});

	/**
	 * scrollable table bodies
	 * /
	$('body.customers.edit #customerNotes table').dataTable({
		"scrollY": "17.0em",
		"scrollCollapse": true,
		"paging": false,
		"order": [] // turn off default sort order
	});
	*/
	
	/**
	 * home page :: delivery routes form {yea, again: retired c.10/2014}
	 */
	$( "#delivery_routes_form" ).submit(function( event ) {
	
		event.preventDefault();
		var zips = {
			"Monday": ["97203", "97211", "97212", "97213", "97217", "97218", "97220", "97227", "97232"], 
			"Tuesday": ["97015", "97027", "97031", "97045", "97086", "97089", "97202", "97206", "97214", "97215", "97216", "97222", "97266", "97267", "97268", "97056", "97051", "97054", "97053"], 
			"Wednesday": ["97005", "97006", "97123", "97124", "97201", "97204", "97205", "97209", "97210", "97221", "97225", "97229", "97231", "97239", "97258", "98642"],
			"Thursday": ["97007", "97008", "97034", "97035", "97036", "97068", "97219", "97223", "98607", "98671", "98660", "98661", "98662", "98663", "98664", "98665", "98682", "98683", "98684", "98685", "98686"],
			"Friday": ["97009", "97024", "97030", "97055", "97060", "97062", "97070", "97080", "97230", "97233", "97236"],
			"Thursday or Friday": [ "97224", "97140" ]
		};
		var zip = $("#delivery_routes_form #zipcode").val();
		var alert_message = "test";
		if(zip == ""){
			alert_message = "Please enter a zip code.";
		}else{
			alert_message = "Sorry, we don't deliver to that area.";
			for (day in zips){
				if (zips[day].indexOf(zip) != -1) {
					alert_message = "Your delivery day is "+day+".";
					break;
				}
			}
		}
		alert(alert_message);
		event.preventDefault();
		
	});
	
	/**
	 * farmers & friends page :: interactive map
	 */
	$('#interactive-map .selector').hover(
	
		function() {
			$( this ).children(".content").fadeIn();
		}, function() {
			$( this ).children(".content").fadeOut();
		}
		
	);
	
	/**
	 * shop products :: modal hover
	 */
	$('body.shop.products .product.row.modalHover').hover(function ( e ) {
	
		/* yea, think this should be a tooltip instead...
		var modalOptions = {
			show: true,
			keyboard: true
		};
		var target = $(this).attr('data-target');
		//alert('target! ' + target);
		
		$(target).modal(modalOptions);
		*/
		
	});
	
	/**
	 * shop cart :: update on change
	 */
	/*$('body.shop.cart .cartTable input').change(function ( e ) {
		var curForm = $(this).closest('form');
		curForm.submit();
	});
	*/
	
	/**
	 * shop cart :: delete item
	 */
	$('body.shop.cart .cartTable .controlsCol .delete').click(function ( e ) {
		var curForm = $(this).closest('form');
		var curRow = $(this).closest('tr');
		
		// set qty as zero...
		curRow.find('select.qty').val(0);
		curForm.submit();
	});
	
	/**
	 * account signup page :: billing same as shipping toggle, when clicking button
	 */
	$('body.signup #CopyShippingInfo').click(function(e) {
		$('#ValidateAccountSignupBillToNameFirst').val($('#ValidateAccountSignupShipToNameFirst').val());
		$('#ValidateAccountSignupBillToNameLast').val($('#ValidateAccountSignupShipToNameLast').val());
		$('#ValidateAccountSignupBillToAddress1').val($('#ValidateAccountSignupShipToAddress1').val());
		$('#ValidateAccountSignupBillToAddress2').val($('#ValidateAccountSignupShipToAddress2').val());
		$('#ValidateAccountSignupBillToCity').val($('#ValidateAccountSignupShipToCity').val());
		$('#ValidateAccountSignupBillToState').val($('#ValidateAccountSignupShipToState').val());
		$('#ValidateAccountSignupBillToZip').val($('#ValidateAccountSignupShipToZip').val());
		$('#ValidateAccountSignupBillToHomePhone').val($('#ValidateAccountSignupShipToHomePhone').val());
		$('#ValidateAccountSignupBillToWorkPhone').val($('#ValidateAccountSignupShipToWorkPhone').val());
		$('#ValidateAccountSignupBillToCellPhone').val($('#ValidateAccountSignupShipToCellPhone').val());
		e.preventDefault();
			});
	
	
	/**
	 * account signup page :: billing same as shipping toggle, when clicking button
	 */
	$billAddressSameAsShipping = 1;
	if ($billAddressSameAsShipping) {
		$('#ValidateAccountSignupBillToNameFirst').val($('#ValidateAccountSignupShipToNameFirst').val());
		$('#ValidateAccountSignupBillToNameLast').val($('#ValidateAccountSignupShipToNameLast').val());
		$('#ValidateAccountSignupBillToAddress1').val($('#ValidateAccountSignupShipToAddress1').val());
		$('#ValidateAccountSignupBillToAddress2').val($('#ValidateAccountSignupShipToAddress2').val());
		$('#ValidateAccountSignupBillToCity').val($('#ValidateAccountSignupShipToCity').val());
		$('#ValidateAccountSignupBillToState').val($('#ValidateAccountSignupShipToState').val());
		$('#ValidateAccountSignupBillToZip').val($('#ValidateAccountSignupShipToZip').val());
		$('#ValidateAccountSignupBillToHomePhone').val($('#ValidateAccountSignupShipToHomePhone').val());
		$('#ValidateAccountSignupBillToWorkPhone').val($('#ValidateAccountSignupShipToWorkPhone').val());
		$('#ValidateAccountSignupBillToCellPhone').val($('#ValidateAccountSignupShipToCellPhone').val());
		$("#ValidateAccountSignupShipToNameFirst").blur(function(){
			$('#ValidateAccountSignupBillToNameFirst').val($('#ValidateAccountSignupShipToNameFirst').val());
		});
		$("#ValidateAccountSignupShipToNameLast").blur(function(){
			$('#ValidateAccountSignupBillToNameLast').val($('#ValidateAccountSignupShipToNameLast').val());
		});
		$("#ValidateAccountSignupShipToAddress1").blur(function(){
			$('#ValidateAccountSignupBillToAddress1').val($('#ValidateAccountSignupShipToAddress1').val());
		});
		$("#ValidateAccountSignupShipToAddress2").blur(function(){
			$('#ValidateAccountSignupBillToAddress2').val($('#ValidateAccountSignupShipToAddress2').val());
		});
		$("#ValidateAccountSignupShipToCity").blur(function(){
			$('#ValidateAccountSignupBillToCity').val($('#ValidateAccountSignupShipToCity').val());
		});
		$("#ValidateAccountSignupShipToState").blur(function(){
			$('#ValidateAccountSignupBillToState').val($('#ValidateAccountSignupShipToState').val());
		});
		$("#ValidateAccountSignupShipToZip").blur(function(){
			$('#ValidateAccountSignupBillToZip').val($('#ValidateAccountSignupShipToZip').val());
		});
		$("#ValidateAccountSignupShipToHomePhone").blur(function(){
			$('#ValidateAccountSignupBillToHomePhone').val($('#ValidateAccountSignupShipToHomePhone').val());
		});
		$("#ValidateAccountSignupShipToWorkPhone").blur(function(){
			$('#ValidateAccountSignupBillToWorkPhone').val($('#ValidateAccountSignupShipToWorkPhone').val());
		});
		$("#ValidateAccountSignupShipToCellPhone").blur(function(){
			$('#ValidateAccountSignupBillToCellPhone').val($('#ValidateAccountSignupShipToCellPhone').val());
		});
	}
	$('body.signup #EnterBillingInfo').click(function (e) {
		$billAddressSameAsShipping = 0;
		 $('#BillingAddress').toggleClass('hidden');
		$("#ValidateAccountSignupShipToNameFirst").unbind();
		$("#ValidateAccountSignupShipToNameLast").unbind();
		$("#ValidateAccountSignupShipToAddress1").unbind();
		$("#ValidateAccountSignupShipToAddress2").unbind();
		$("#ValidateAccountSignupShipToCity").unbind();
		$("#ValidateAccountSignupShipToState").unbind();
		$("#ValidateAccountSignupShipToZip").unbind();
		$("#ValidateAccountSignupShipToHomePhone").unbind();
		$("#ValidateAccountSignupShipToWorkPhone").unbind();
		$("#ValidateAccountSignupShipToCellPhone").unbind();
		e.preventDefault();
	});
	$('.finishsignupandcheckout').unbind()
	$('.finishsignupandcheckout').click(function (e) {
		$('.finishsignupandcheckout').unbind()
		location.replace('/signup');
		e.preventDefault();
	});
	/**
	 * account signup page :: choose a produce box from a facebox
	 */
	$('body.signup #facebox').on('click', '.cta input[type="button"]', function ( e ) {
		var rel = $(this).attr('rel');
		$('body.signup input' + rel).attr('checked', 'checked');
		$('body.signup input' + rel).trigger('change');
		$(document).trigger('close.facebox');
	});
	
	/**
	 * account signup page :: total price, updated on page load :: for bins/addOns checkboxes
	 */
	globals.total = 0.00;
	$('#accountSignupForm .checkbox.bins input[type="checkbox"]:checked').each(function ( index ) {
		var parentDiv = $(this).closest('div.checkbox');
		var price = parentDiv.find('a[rel="facebox[.binContents]"]').attr('data-price');
		price = (Math.round(price * 100) / 100).toFixed(2);
		globals.total += price * 1;
		$('#accountSignupForm .total .value').html(globals.total.toFixed(2));
	});
	
	/**
	 * account page :: locations & order preferences :: cancel account
	 */
	$('body.order-preferences .cancelAccountButton').click(function ( e ) {
		$.facebox({ ajax: '/account/cancel' }, 'cancelAccountFacebox');
		return false;
	});
	
	/**
	 * account page :: update location when selecting (locations / order preferences, & items for delivery)
	 */
	$('body.account .selectLocationGroup select').change(function ( e ) {
		var index = $(this).val();
		if (index.indexOf('/') > -1) {
			window.location = index;
		} else {
		var curUrl = window.location.href.substr(0, window.location.href.indexOf('?'));
		window.location = curUrl + '?i=' + index;
		}
		// if we get here, means navigation was rejected by user
		$(this).val('');
	});
	
	/**
	 * account page :: update location on page load (locations / order preferences, & items for delivery)
	 */
	var selectedLocation = $('body.account .selectLocationGroup select').val();
	if (selectedLocation > 0 && window.location.href.indexOf('?') < 0) {
		var curUrl = window.location.href.substr(0, window.location.href.indexOf('?'));
		window.location = curUrl + 'i=' + selectedLocation;
	}
	
	/**
	 * account page :: items for delivery :: delete item
	 */
	$('body.items-for-delivery .schedulesTable .controls.delete').click(function ( e ) {
		var scheduleId = $(this).attr('data-schedule-id');
		var scheduleName = urldecode($(this).attr('data-schedule-name'));
		
		// you sure?...
		var confirmed = confirm('Are you sure you want to delete "' + scheduleName + '"?');
		if (!confirmed) {
			return false;
		}
		
		// fetch relevant elements...
		var curGroup = $(this).closest('.itemsGroup');
		var curRow = $(this).closest('tr');
		
		// add the delete field, and remove the row...
		curGroup.prepend('<input type="hidden" name="data[ValidateAccountItemsForDelivery][delete_schedule_id][]" value="' + scheduleId + '" />');
		curRow.remove();
		
		return false;
	});
	
	/**
	 * account page :: items for delivery :: add item
	 */
	$('body.items-for-delivery #addProductsButton').click(function ( e ) {
		var curGroup = $(this).closest('.addItemsGroup');
		var curProductId = curGroup.find('option:selected').val();
		var curProductName = curGroup.find('option:selected').text();
		
		//alert('Adding item, product id = ' + curProductId);
		
		// add the item to the addingItemsTable...
		curGroup.find('#addingItems').show(100);
		curGroup.find('#addingItemsTable').append('<tr><td><input type="hidden" name="data[ValidateAccountItemsForDelivery][add_product_id][]" value="' + curProductId + '" />' + curProductName + '</td></tr>');
		
		// trigger areyousure
		$(this.form).trigger('checkform.areYouSure');
		
		return false;
	});
	
	/*
	 * forms to check for unsaved data
	 */
	$('#accountBillingInformationForm').areYouSure({'addRemoveFieldsMarksDirty':true});
	$('#accountOrderPreferencesForm').areYouSure({'addRemoveFieldsMarksDirty':true});
	$('#accountItemsForDeliveryForm').areYouSure({'addRemoveFieldsMarksDirty':true});
}); // end: ready;

/**
 * url encode a string
 */
function urlencode ( str ) {
	if (typeof(str) !== 'undefined') {
		str = encodeURIComponent(str);
	}
	return str;
}

/**
 * url decode a string
 */
function urldecode ( str ) {
	if (typeof(str) !== 'undefined') {
		str = str.replace(/\+/g, " ");
		str = decodeURIComponent(str);
	}
	return str;
}


const addToCartButtons = document.querySelectorAll('.add-to-cart'); // Select all "Add to Cart" buttons

addToCartButtons.forEach(button => {
  button.addEventListener('click', (event) => {
	console.log("Button Clicked!")
    // Get data from button
    const productId = event.target.dataset.productId;
    const productName = event.target.dataset.productName;
    const productPrice = parseFloat(event.target.dataset.productPrice); // Convert price to number

    // Update Cart Object (replace with your cart data storage)
    let cart = JSON.parse(localStorage.getItem('cart')) || { items: [] };
    const existingItemIndex = cart.items.findIndex(item => item.id === productId);

    if (existingItemIndex !== -1) {
      cart.items[existingItemIndex].quantity++;
    } else {
      cart.items.push({ id: productId, name: productName, price: productPrice, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart)); // Save cart to localStorage

    // Redirect to Cart page
    window.location.href = 'cart.html';
  });
});

