function mapBooleanToFHIR_boolean(source,target) {
if (source.getValue() != null) {
target.setValue('value',source.getValue());
}
}