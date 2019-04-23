function mapFHIR_fhirstringToString(source,target) {
if (source.getValue('value') != null) {
	target.setValue(source.getValue('value'));
}
}