function mapCodedElementToFHIR_code(source, target) {
    if (source.getValue('displayName') != null) {
        target.setValueSafely('value', source.getValue('displayName'));
    } else {
        if (source.getValue("code") != null) {
            target.setValueSafely('value', source.getValue('code'));
        }
    }
}
