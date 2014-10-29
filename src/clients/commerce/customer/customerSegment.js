

//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by CodeZu.     
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

var constants = require('../../../constants');


module.exports = function(Client){
	return Client.sub({
		getSegments :Client.makeMethod({
			method: constants.verbs.GET,
			url: '{+tenantPod}api/commerce/customer/segments/?startIndex={startIndex}&pageSize={pageSize}&sortBy={sortBy}&filter={filter}&responseFields={responseFields}'
		}),
		getSegment :Client.makeMethod({
			method: constants.verbs.GET,
			url: '{+tenantPod}api/commerce/customer/segments/{id}?responseFields={responseFields}'
		})		,
			addSegment :Client.makeMethod({
			method: constants.verbs.POST,
			url: '{+tenantPod}api/commerce/customer/segments/?responseFields={responseFields}'
		}),
		addSegmentAccounts :Client.makeMethod({
			method: constants.verbs.POST,
			url: '{+tenantPod}api/commerce/customer/segments/{id}/accounts'
		})		,
			updateSegment :Client.makeMethod({
			method: constants.verbs.PUT,
			url: '{+tenantPod}api/commerce/customer/segments/{id}?responseFields={responseFields}'
		})		,
			deleteSegment :Client.makeMethod({
			method: constants.verbs.DELETE,
			url: '{+tenantPod}api/commerce/customer/segments/{id}'
		}),
		removeSegmentAccount :Client.makeMethod({
			method: constants.verbs.DELETE,
			url: '{+tenantPod}api/commerce/customer/segments/{id}/accounts/{accountId}'
		})	
	});
};
