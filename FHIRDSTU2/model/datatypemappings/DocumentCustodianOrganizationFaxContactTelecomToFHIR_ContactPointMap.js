function mapDocumentCustodianOrganizationFaxConcatTelecomToFHIR_ContactPoint(source,target) {
target.setValueSafely('use.value', 'work');
target.setValueSafely('system.value', 'fax');
target.setValueSafely('value.value', source.getValue('value'));
}