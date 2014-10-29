

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
		getDocumentContent :Client.makeMethod({
			method: constants.verbs.GET,
			url: '{+tenantPod}api/content/documentlists/{documentListName}/documents/{documentId}/content'
		}),
		getDocument :Client.makeMethod({
			method: constants.verbs.GET,
			url: '{+tenantPod}api/content/documentlists/{documentListName}/documents/{documentId}?responseFields={responseFields}'
		}),
		getDocuments :Client.makeMethod({
			method: constants.verbs.GET,
			url: '{+tenantPod}api/content/documentlists/{documentListName}/documents?filter={filter}&sortBy={sortBy}&pageSize={pageSize}&startIndex={startIndex}&responseFields={responseFields}'
		})		,
			createDocument :Client.makeMethod({
			method: constants.verbs.POST,
			url: '{+tenantPod}api/content/documentlists/{documentListName}/documents?responseFields={responseFields}'
		})		,
			updateDocumentContent :Client.makeMethod({
			method: constants.verbs.PUT,
			url: '{+tenantPod}api/content/documentlists/{documentListName}/documents/{documentId}/content'
		}),
		updateDocument :Client.makeMethod({
			method: constants.verbs.PUT,
			url: '{+tenantPod}api/content/documentlists/{documentListName}/documents/{documentId}?responseFields={responseFields}'
		})		,
			deleteDocument :Client.makeMethod({
			method: constants.verbs.DELETE,
			url: '{+tenantPod}api/content/documentlists/{documentListName}/documents/{documentId}'
		}),
		deleteDocumentContent :Client.makeMethod({
			method: constants.verbs.DELETE,
			url: '{+tenantPod}api/content/documentlists/{documentListName}/documents/{documentId}/content'
		})	
	});
};