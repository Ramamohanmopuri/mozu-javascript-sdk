

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
		getAttributes :Client.makeMethod({
			method: constants.verbs.GET,
			url: '{+tenantPod}api/commerce/orders/attributedefinition/attributes/?startIndex={startIndex}&pageSize={pageSize}&sortBy={sortBy}&filter={filter}&responseFields={responseFields}'
		}),
		getAttributeVocabularyValues :Client.makeMethod({
			method: constants.verbs.GET,
			url: '{+tenantPod}api/commerce/orders/attributedefinition/attributes/{attributeFQN}/VocabularyValues'
		}),
		getAttribute :Client.makeMethod({
			method: constants.verbs.GET,
			url: '{+tenantPod}api/commerce/orders/attributedefinition/attributes/{attributeFQN}?responseFields={responseFields}'
		})				
	});
};