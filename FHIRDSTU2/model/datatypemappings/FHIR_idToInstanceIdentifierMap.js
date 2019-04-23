function mapFHIR_idToInstanceIdentifier(source, target) {

    if(source.getValue('value') != null) {
        target.setValue('root', source.getValue("value"));
    }
}