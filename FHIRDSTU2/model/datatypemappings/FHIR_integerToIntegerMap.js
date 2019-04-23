function mapFHIR_integerToInteger(source,target)
{
if (source.getValue('value') != null) {
target.setValue(source.getValue('value'));
}
}