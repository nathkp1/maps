function mapFHIR_fhirstringToDateTime(source,target) {
if (source.getValue('value') != null) {
target.setValue(source.getValue('value').getValue('value'));
}
}