
namespace novi_ams.ViewModels;

public class MemberType
{
    public Guid UniqueID {get;set;}
    public string Name {get;set;} = "default";
    public string Description {get;set;} = "default";
    public bool ForCompanies {get;set;}
}