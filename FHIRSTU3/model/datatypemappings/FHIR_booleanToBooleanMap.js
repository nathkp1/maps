function mapFHIR_booleanToBoolean(source,target) {
if (source.getValue('value') != null) {
target.setValue(source.getValue('value'));
}
}

 