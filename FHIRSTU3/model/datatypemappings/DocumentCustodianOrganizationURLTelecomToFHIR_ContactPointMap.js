function mapDocumentCustodianOrganizationURLTelecomToFHIR_ContactPoint(source,target) {
target.setValueSafely('use.value', 'work');
target.setValueSafely('system.value', 'url');
target.setValueSafely('value.value', source.getValue('value'));
}