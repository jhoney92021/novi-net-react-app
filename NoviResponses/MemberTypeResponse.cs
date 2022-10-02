
using novi_ams.ViewModels;

namespace novi_ams.NoviResponses;

public class MemberTypeResponse
{
    public int TotalCount {get;set;}
    public List<MemberType> Results {get;set;} = new List<MemberType>(){new MemberType{Name = "failed to serialize"}};
}