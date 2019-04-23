function mapPhysicalQuantityToFHIR_Money(source,target)
{

	 	if (source.getValue("value") != null) {
					 target.setValueSafely('value.value', source.getValue('value'));
				}
				
		if (source.getValue("unit") != null) {
					 target.setValueSafely('unit.value', source.getValue('unit'));
				}		

}