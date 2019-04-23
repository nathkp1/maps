function mapInstanceIdentifierToFHIR_id(source,target) { 
      if(source.getValue('root') != null) {
        target.setValueSafely('value', source.getValue('root'));
    }
}
 