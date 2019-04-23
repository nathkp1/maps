function mapFHIR_ExtensionToCodedElement(source, target) {


    if(source.getValue('valueCodeableConcept') != null) {
        var valueCodeableConcept = source.getValue('valueCodeableConcept');

        var coding = valueCodeableConcept.getValue('coding');

        if(coding != null) {
            var code = coding.getValue('code');

            if(code != null) {
                target.setValue('code', code.getValue('value'));
            }

            var system = coding.getValue('system');

            if(system != null) {
                target.setValue('codeSystem', system.getValue('value'));
            }

            var display = coding.getValue('display');

            if(display != null) {
                target.setValue('displayName', display.getValue('value'));
            }
        }

    }
}