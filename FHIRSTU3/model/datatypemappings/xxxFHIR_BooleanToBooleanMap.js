function FHIR_BooleanToBooleanMap(source,target) {
if (source.getValue('value') != null) {
target.setValue(source.getValue('value'));
}
}

 