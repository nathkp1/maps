function mapFHIR_codeToCodedElement(source,target) {

if (source.getValue('value') != null) {
target.setValue('code', source.getValue('value'));
}


 

}