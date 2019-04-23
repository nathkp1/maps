function mapPatientEmailContactTelecomToFHIR_ContactPoint(source,target) {
	target.setValueSafely('use.value', source.getValue('use'));	
	target.setValueSafely('system.value', 'email');
	target.setValueSafely('value.value', source.getValue('value'));
}