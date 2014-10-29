

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
		getDocumentLists :Client.makeMethod({
			method: constants.verbs.GET,
			url: '{+tenantPod}api/content/documentlists/?pageSize={pageSize}&startIndex={startIndex}&responseFields={responseFields}'
		}),
		getDocumentList :Client.makeMethod({
			method: constants.verbs.GET,
			url: '{+tenantPod}api/content/documentlists/{documentListName}?responseFields={responseFields}'
		})		,
			createDocumentList :Client.makeMethod({
			method: constants.verbs.POST,
			url: '{+tenantPod}api/content/documentlists/?responseFields={responseFields}'
		})		,
			updateDocumentList :Client.makeMethod({
			method: constants.verbs.PUT,
			url: '{+tenantPod}api/content/documentlists/{documentListName}?responseFields={responseFields}'
		})		,
			deleteDocumentList :Client.makeMethod({
			method: constants.verbs.DELETE,
			url: '{+tenantPod}api/content/documentlists/{documentListName}'
		})	
	});
};
