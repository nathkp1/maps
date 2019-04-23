function mapCodedElementToFHIR_Extension(source,target) {


 if (source.getValue('code') != null) {
 target.setValueSafely('valueCodeableConcept.coding.code.value',source.getValue('code'));
 }
 
  if (source.getValue('codeSystem') != null) {
 target.setValueSafely('valueCodeableConcept.coding.system.value',source.getValue('codeSystem'));
 }
 
  if (source.getValue('displayName') != null) {
  target.setValueSafely('valueCodeableConcept.coding.display.value',source.getValue('displayName'));
 }

}