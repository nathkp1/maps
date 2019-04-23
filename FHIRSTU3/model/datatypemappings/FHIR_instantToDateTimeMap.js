function mapFHIR_instantToDateTime(source,target)
{
  if(source.getValue('value') != null) {
        target.setValue(source.getValue("value"));
    }
}