function mapDocumentCustodianOrganizationEmailContactTelecomToFHIR_ContactPoint(source,target) {
target.setValueSafely('use.value', 'work');
target.setValueSafely('system.value', 'email');
target.setValueSafely('value.value', source.getValue('value'));
}