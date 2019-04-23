function mapPatientPhoneContactTelecomToFHIR_ContactPoint(source,target) {
	
    if(source.getValue('use').startsWith('home'))
    {
        target.setValue('use', 'HP');
    }
    else
    if(source.getValue('use').startsWith('work'))
    {
        target.setValue('use', 'WP');
    }
    else
    if(source.getValue('use').startsWith('mobile'))
    {
        target.setValue('use', 'MC');
    }
    else
    {
        target.setValue('use', 'home');
    }
	 
	target.setValueSafely('system.value', 'phone');
	target.setValueSafely('value.value', source.getValue('value'));
}

