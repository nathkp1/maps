function mapFHIR_CodingToCodedElement(s, t) {
    if (s.getValue("code") != null) {
        t.setValue("code", s.getValue("code").getValue("value"));
    }
    if (s.getValue("system") != null) {
        t.setValue("codeSystem", s.getValue("system").getValue("value"));
    }
    if (s.getValue("display") != null) {
        t.setValue("displayName", s.getValue("display").getValue("value"));
    }
}
