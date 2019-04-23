function mapDateTimeToFHIR_fhirstring(source,target) {
target.setValueSafely('value.value', source.getValue());

}