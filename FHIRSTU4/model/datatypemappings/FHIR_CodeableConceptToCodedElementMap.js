function mapFHIR_CodeableConceptToCodedElement(s,t) {

		if (s.getValue("coding") != null) {
				var sc =  s.getValue("coding");
				if (sc.getValue("code") != null) {
					t.setValue("code", sc.getValue("code").getValue("value"));
				}
				if (sc.getValue("system") != null) {
					t.setValue("codeSystem", sc.getValue("system").getValue("value"));
				}
				if (sc.getValue("display") != null) {
					t.setValue("displayName", sc.getValue("display").getValue("value"));
				}
			}
 	 
}