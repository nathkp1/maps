function mapFHIR_stringToInstanceIdentifier(source, target) {

    
    if(source.getValue('value') != null) {
        target.setValue('extension', source.getValue('value').getValue("value"));
    }
    
}