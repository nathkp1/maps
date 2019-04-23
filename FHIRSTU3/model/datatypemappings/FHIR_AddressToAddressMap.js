function mapFHIR_AddressToAddress(source, target) {

    if(source.getValue('city') != null) {
        target.setValue('city', source.getValue('city').getValue("value"));
    }
    if(source.getValue('country') != null) {
        target.setValue('country', source.getValue('country').getValue("value"));
    }
    if(source.getValue('state') != null) {
        target.setValue('state', source.getValue('state').getValue("value"));
    }
    if(source.getValue('postalCode') != null) {
        target.setValue('postalCode', source.getValue('postalCode').getValue("value"));
    }



    var lineSource = source.getXValue('line');
    var streetAddressLineTarget = target.getXValue('streetAddressLine');

    if(lineSource != null) {

        for(index = 0; index < lineSource.getValues().size(); index++) {
            var fhirString = lineSource.getValues().get(index);
            var value = fhirString.getValue("value");
            streetAddressLineTarget.addValue(value);
        }
    }

}

