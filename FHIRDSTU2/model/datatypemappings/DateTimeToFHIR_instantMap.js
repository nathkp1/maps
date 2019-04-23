function mapDateTimeToFHIR_instant(source,target) {
 target.setValueSafely('value', source.getValue());
}