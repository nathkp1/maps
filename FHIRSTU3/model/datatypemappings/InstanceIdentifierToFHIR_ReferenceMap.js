function mapInstanceIdentifierToFHIR_Reference(source, target, properties) {

    if(properties.get('REFERENCEURL') != null) {
        if(source.getValue('extension') != null) {
            target.setValueSafely('reference.value', properties.get('REFERENCEURL') + source.getValue('extension'));
        }

        if(source.getValue('root') != null) {
            target.setValueSafely('reference.value', properties.get('REFERENCEURL') + source.getValue('root'));
        }
    } else {
    	
    	 if(source.getValue('extension') != null && source.getValue('root') != null )  {
    		 target.setValueSafely('reference.value', source.getValue('root') + '::' + source.getValue('extension'));
    	 } else {
    	      if(source.getValue('extension') != null) {
    	            target.setValueSafely('reference.value', source.getValue('extension'));
    	        }

    	        if(source.getValue('root') != null) {
    	            target.setValueSafely('reference.value', source.getValue('root'));
    	        }  		 
    	 }
  


    }
}