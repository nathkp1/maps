function mapFHIR_QuantityToPhysicalQuantity(source,target)
{

if (source.getValue('value') != null) {
target.setValue('value', source.getValue('value').getValue('value'));
}

if (source.getValue('unit') != null) {
target.setValue('unit', source.getValue('unit').getValue('value'));
}


}