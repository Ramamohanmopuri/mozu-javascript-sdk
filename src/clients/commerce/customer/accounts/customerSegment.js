

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
		getAccountSegments :Client.makeMethod({
			method: constants.verbs.GET,
			url: '{+tenantPod}api/commerce/customer/accounts/{accountId}/segments/?startIndex={startIndex}&pageSize={pageSize}&sortBy={sortBy}&filter={filter}&responseFields={responseFields}'
		})				
	});
};
