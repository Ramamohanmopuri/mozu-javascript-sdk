

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
		getEntityLists :Client.makeMethod({
			method: constants.verbs.GET,
			url: '{+tenantPod}api/platform/entitylists/?pageSize={pageSize}&startIndex={startIndex}&filter={filter}&sortBy={sortBy}&responseFields={responseFields}'
		}),
		getEntityList :Client.makeMethod({
			method: constants.verbs.GET,
			url: '{+tenantPod}api/platform/entitylists/{entityListFullName}?responseFields={responseFields}'
		})		,
			createEntityList :Client.makeMethod({
			method: constants.verbs.POST,
			url: '{+tenantPod}api/platform/entitylists/?responseFields={responseFields}'
		})		,
			updateEntityList :Client.makeMethod({
			method: constants.verbs.PUT,
			url: '{+tenantPod}api/platform/entitylists/{entityListFullName}?responseFields={responseFields}'
		})		,
			deleteEntityList :Client.makeMethod({
			method: constants.verbs.DELETE,
			url: '{+tenantPod}api/platform/entitylists/{entityListFullName}'
		})	
	});
};