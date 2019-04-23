function mapFHIR_IdentifierToInstanceIdentifier(source, target) {

    if(source.getValue('system') != null) {
        target.setValue('root', source.getValue('system').getValue("value"));
    }
    if(source.getValue('value') != null) {
        target.setValue('extension', source.getValue('value').getValue("value"));
    }
    
//    if(source.getValue('assigner') != null) {
//        target.setValue('root', source.getValue('assigner').getValue("reference").getValue("value"));
//    }
    
}