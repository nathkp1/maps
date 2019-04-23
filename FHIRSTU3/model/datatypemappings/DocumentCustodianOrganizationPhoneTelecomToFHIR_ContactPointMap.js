function mapDocumentCustodianOrganizationPhoneTelecomToFHIR_ContactPoint(source,target) {
target.setValueSafely('use.value', 'work');
target.setValueSafely('system.value', 'phone');
target.setValueSafely('value.value', source.getValue('value'));
}