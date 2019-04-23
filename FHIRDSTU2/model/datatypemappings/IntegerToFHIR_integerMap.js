function mapIntegerToFHIR_integer(source,target)
{
 target.setValueSafely('value.value', source.getValue());
}
