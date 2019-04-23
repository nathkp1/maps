function mapDateTimeToFHIR_dateTime(source,target) {
 target.setValue('value', org.mdmi.core.engine.javascript.Utils.FormatDate("yyyyMMdd","yyyy-MM-dd",source.getValue()));
}