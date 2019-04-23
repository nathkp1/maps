function mapFHIR_dateToDateTime(source,target) {

if (source.getValue('value') != null) {
	target.setValue(source.getValue('value'));
}


}