function mapTelecomToFHIR_ContactPoint(source,target) {


target.setValueSafely('use.value', source.getValue('use'));
target.setValueSafely('value.value', source.getValue('value'));


}