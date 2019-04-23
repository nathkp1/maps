function mapGuardianCellPhoneContactTelecomToFHIR_ContactPoint(source,target) {
target.setValueSafely('use.value', 'mobile');
target.setValueSafely('system.value', 'phone');
target.setValueSafely('value.value', source.getValue('value'));
}