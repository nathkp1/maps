function mapPersonNameToFHIR_HumanName(source, target) {


    var familySource = source.getXValue('family');
    if(familySource != null) {
        target.setValueSafely('family.value', familySource.getValues());
    }

    var givenSource = source.getXValue('given');
    if(givenSource != null) {
        target.setValueSafely('given.value', givenSource.getValues());
    }

    var prefixSource = source.getXValue('prefix');
    if(prefixSource != null) {
        target.setValueSafely('prefix.value', prefixSource.getValues());
    }

    var suffixSource = source.getXValue('suffix');
    if(suffixSource != null) {
        target.setValueSafely('suffix.value', suffixSource.getValues());
    }


}