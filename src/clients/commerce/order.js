

//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by CodeZu.     
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

var constants = require('../../constants');


module.exports = function(Client){
	return Client.sub({
		getOrders :Client.makeMethod({
			method: constants.verbs.GET,
			url: '{+tenantPod}api/commerce/orders/?startIndex={startIndex}&pageSize={pageSize}&sortBy={sortBy}&filter={filter}&q={q}&qLimit={qLimit}&responseFields={responseFields}'
		}),
		getAvailableActions :Client.makeMethod({
			method: constants.verbs.GET,
			url: '{+tenantPod}api/commerce/orders/{orderId}/actions'
		}),
		getTaxableOrders :Client.makeMethod({
			method: constants.verbs.GET,
			url: '{+tenantPod}api/commerce/orders/{orderId}/taxableorders'
		}),
		getOrder :Client.makeMethod({
			method: constants.verbs.GET,
			url: '{+tenantPod}api/commerce/orders/{orderId}?draft={draft}&responseFields={responseFields}'
		})		,
			createOrderFromCart :Client.makeMethod({
			method: constants.verbs.POST,
			url: '{+tenantPod}api/commerce/orders/?cartId={cartId}&responseFields={responseFields}'
		}),
		createOrder :Client.makeMethod({
			method: constants.verbs.POST,
			url: '{+tenantPod}api/commerce/orders/?responseFields={responseFields}'
		}),
		performOrderAction :Client.makeMethod({
			method: constants.verbs.POST,
			url: '{+tenantPod}api/commerce/orders/{orderId}/actions?responseFields={responseFields}'
		})		,
			updateOrderDiscount :Client.makeMethod({
			method: constants.verbs.PUT,
			url: '{+tenantPod}api/commerce/orders/{orderId}/discounts/{discountId}?updatemode={updateMode}&version={version}&responseFields={responseFields}'
		}),
		deleteOrderDraft :Client.makeMethod({
			method: constants.verbs.PUT,
			url: '{+tenantPod}api/commerce/orders/{orderId}/draft?version={version}'
		}),
		changeOrderUserId :Client.makeMethod({
			method: constants.verbs.PUT,
			url: '{+tenantPod}api/commerce/orders/{orderId}/users?responseFields={responseFields}'
		}),
		updateOrder :Client.makeMethod({
			method: constants.verbs.PUT,
			url: '{+tenantPod}api/commerce/orders/{orderId}?updatemode={updateMode}&version={version}&responseFields={responseFields}'
		})		
	});
};
