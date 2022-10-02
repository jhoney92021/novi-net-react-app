
namespace novi_ams.DataModels;

public class CustomFields<T>
{
    public Guid CustomFieldUniqueID {get;set;}
    public T Value {get;set;}
    public bool IsSumOfChildren {get;set;}
}