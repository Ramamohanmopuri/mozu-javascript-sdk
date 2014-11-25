

//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by CodeZu.     
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

var constants = require('../../../../constants');


module.exports = function(Client){
	return Client.sub({
		getLocationInventory :Client.method({
			method: constants.verbs.GET,
			url: '{+tenantPod}api/commerce/catalog/admin/locationinventory/{locationCode}/{productCode}?responseFields={responseFields}'
		}),
		getLocationInventories :Client.method({
			method: constants.verbs.GET,
			url: '{+tenantPod}api/commerce/catalog/admin/locationinventory/{locationCode}?startIndex={startIndex}&pageSize={pageSize}&sortBy={sortBy}&filter={filter}&responseFields={responseFields}'
		}),
		addLocationInventory :Client.method({
			method: constants.verbs.POST,
			url: '{+tenantPod}api/commerce/catalog/admin/locationinventory/{locationCode}?performUpserts={performUpserts}'
		}),
		updateLocationInventory :Client.method({
			method: constants.verbs.PUT,
			url: '{+tenantPod}api/commerce/catalog/admin/locationinventory/{locationCode}'
		}),
		deleteLocationInventory :Client.method({
			method: constants.verbs.DELETE,
			url: '{+tenantPod}api/commerce/catalog/admin/locationinventory/{locationCode}/{productCode}'
		})	
	});
};