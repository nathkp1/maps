
function mapAddressToFHIR_Address(source,target) {


if (source.getValue('city') != null) {
	target.setValueSafely('city.value',source.getValue('city'));
}

if (source.getValue('country') != null) {
	target.setValueSafely('country.value',source.getValue('country'));
}

if (source.getValue('state') != null) {
	target.setValueSafely('state.value',source.getValue('state'));
}

if (source.getValue('state') != null) {
	target.setValueSafely('state.value',source.getValue('state'));
}

if (source.getValue('postalCode') != null) {
	target.setValueSafely('postalCode.value',source.getValue('postalCode'));
}

 
var streetSource = source.getXValue('streetAddressLine');
if (streetSource != null) {
	target.setValueSafely('line.value',streetSource.getValues());
}

 
 
}