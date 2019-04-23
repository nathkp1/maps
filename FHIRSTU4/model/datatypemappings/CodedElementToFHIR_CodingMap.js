function mapCodedElementToFHIR_Coding(s,t) {

  
				if (s.getValue('code') != null) {
					 t.setValueSafely('code.value', s.getValue('code'));
				}
  
				if (s.getValue('displayName') != null) {
					 t.setValueSafely('display.value', s.getValue('displayName'));
				}
 		
				if (s.getValue('codeSystem') != null) {
				 t.setValueSafely('system.value', s.getValue('codeSystem'));
				}
}