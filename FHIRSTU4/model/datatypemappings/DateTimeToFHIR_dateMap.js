 function mapDateTimeToFHIR_date(source,target) {
 target.setValue('value', org.mdmi.core.engine.javascript.Utils.FormatDate("yyyyMMddHHmmssZ","yyyy-MM-dd",source.getValue()));
}