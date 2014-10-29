

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
		getPropertyTypes :Client.makeMethod({
			method: constants.verbs.GET,
			url: '{+tenantPod}api/content/propertytypes/?pageSize={pageSize}&startIndex={startIndex}&responseFields={responseFields}'
		}),
		getPropertyType :Client.makeMethod({
			method: constants.verbs.GET,
			url: '{+tenantPod}api/content/propertytypes/{propertyTypeName}?responseFields={responseFields}'
		})		,
			createPropertyType :Client.makeMethod({
			method: constants.verbs.POST,
			url: '{+tenantPod}api/content/propertytypes/?responseFields={responseFields}'
		})		,
			updatePropertyType :Client.makeMethod({
			method: constants.verbs.PUT,
			url: '{+tenantPod}api/content/propertytypes/{propertyTypeName}?responseFields={responseFields}'
		})		,
			deletePropertyType :Client.makeMethod({
			method: constants.verbs.DELETE,
			url: '{+tenantPod}api/content/propertytypes/{propertyTypeName}'
		})	
	});
};
