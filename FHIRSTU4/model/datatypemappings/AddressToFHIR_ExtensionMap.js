

function mapAddressToFHIR_Extension(source,target) {
target.setValue('city', source.getValue('city'));
target.setValue('country', source.getValue('country'));
target.setValue('state', source.getValue('state'));
target.setValue('county', source.getValue('county'));
target.setValue('postalCode', source.getValue('postalCode'));
target.setValue('streetAddressLine', source.getValue('line'));
}