function DocumentCustodianOrganizationPagerContactTelecomToFHIR_ContactPoint(source,target) {
target.setValueSafely('use.value', 'work');
target.setValueSafely('system.value', 'pager');
target.setValueSafely('value.value', source.getValue('value'));
}