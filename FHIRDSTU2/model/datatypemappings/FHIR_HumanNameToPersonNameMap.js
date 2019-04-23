function mapFHIR_HumanNameToPersonName(source, target) {

    var familySource = source.getXValue('family');
    var familyTarget = target.getXValue('family');

    if(familySource != null) {

        for(index = 0; index < familySource.getValues().size(); index++) {
            var fhirString = familySource.getValues().get(index);
            var value = fhirString.getValue("value");
            familyTarget.addValue(value);
  
        }
    }

    var givenSource = source.getXValue('given');
    var givenTarget = target.getXValue('given');

    if(givenSource != null) {

        for(index = 0; index < givenSource.getValues().size(); index++) {
            var fhirString = givenSource.getValues().get(index);
            var value = fhirString.getValue("value");
            givenTarget.addValue(value);
        
        }
    }

    var suffixSource = source.getXValue('suffix');
    var suffixTarget = target.getXValue('suffix');

    if(suffixSource != null) {

        for(index = 0; index < suffixSource.getValues().size(); index++) {
            var fhirString = suffixSource.getValues().get(index);
            var value = fhirString.getValue("value");
            suffixTarget.addValue(value);
         
        }
    }

    var prefixSource = source.getXValue('prefix');
    var prefixTarget = target.getXValue('prefix');

    if(prefixSource != null) {

        for(index = 0; index < prefixSource.getValues().size(); index++) {
            var fhirString = prefixSource.getValues().get(index);
            var value = fhirString.getValue("value");
            prefixTarget.addValue(value);
       
        }
    }

}