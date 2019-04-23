function mapCodedElementToFHIR_CodeableConcept(s, t) {

    if (s.getValue('code') != null) {
        t.setValueSafely('coding.code.value', s.getValue('code'));
    }

    if (s.getValue('displayName') != null) {
        t.setValueSafely('text.value', s.getValue('displayName'));
    }
    
    if (s.getValue('displayName') != null) {
        t.setValueSafely('coding.display.value', s.getValue('displayName'));
    }

    if (s.getValue('codeSystem') != null) {
        t.setValueSafely('coding.system.value', s.getValue('codeSystem'));
    }

    if (s.getValue('codeSystemName') != null) {
        t.setValueSafely('coding.system.value', s.getValue('codeSystem'));
    }
}
