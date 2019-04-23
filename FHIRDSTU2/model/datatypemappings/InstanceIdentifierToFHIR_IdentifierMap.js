function mapInstanceIdentifierToFHIR_Identifier(source, target) {

    if(source.getValue('root') != null) {
        target.setValueSafely('system.value', source.getValue('root'));
    }
    if(source.getValue('extension') != null) {
        target.setValueSafely('value.value', source.getValue('extension'));
    }
 //   if(source.getValue('assigningAuthorityName') != null) {
 //       target.setValueSafely('assigner.value', source.getValue('assigningAuthorityName'));
 //   }



}