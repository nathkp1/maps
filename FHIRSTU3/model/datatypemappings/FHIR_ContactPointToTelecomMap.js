function mapFHIR_ContactPointToTelecom(source,target) {

target.setValue('use', source.getValue('use').getValue('value'));
target.setValue('value', source.getValue('value').getValue('value'));


}