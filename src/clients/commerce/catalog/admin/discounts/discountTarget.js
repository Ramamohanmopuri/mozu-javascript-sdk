

//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by CodeZu.     
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

var constants = require('../../../../../constants');


module.exports = function(Client){
	return Client.sub({
		getDiscountTarget :Client.makeMethod({
			method: constants.verbs.GET,
			url: '{+tenantPod}api/commerce/catalog/admin/discounts/{discountId}/target?responseFields={responseFields}'
		})				updateDiscountTarget :Client.makeMethod({
			method: constants.verbs.PUT,
			url: '{+tenantPod}api/commerce/catalog/admin/discounts/{discountId}/target?responseFields={responseFields}'
		})		
	});
};
