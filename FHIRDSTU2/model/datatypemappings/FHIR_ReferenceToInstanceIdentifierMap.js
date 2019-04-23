function mapFHIR_ReferenceToInstanceIdentifier(s,t) { 
    if (s.getValue("reference") != null) {
        var sc =  s.getValue("reference");
        if (sc.getValue("value") != null) {
            t.setValue("extension", sc.getValue("value"));
        }
    }
}
 