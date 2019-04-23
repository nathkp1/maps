function mapFHIR_AnnotationToString(source,target)
{
  if(source.getValue('text') != null) {
        target.setValue(source.getValue('text').getValue("value"));
    }
}