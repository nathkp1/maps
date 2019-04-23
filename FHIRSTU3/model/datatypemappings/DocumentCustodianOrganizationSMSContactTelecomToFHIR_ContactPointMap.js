function mapDocumentCustodianOrganizationSMSContactTelemcomToFHIR_ContactPoint(source,target) {
target.setValueSafely('use.value', 'work');
target.setValueSafely('system.value', 'sms');
target.setValueSafely('value.value', source.getValue('value'));
}