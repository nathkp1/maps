function mapStringToFHIR_fhirstring(source,target) {
	target.setValueSafely('value',source.getValue());
}