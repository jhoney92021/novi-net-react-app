
using novi_ams.ViewModels;

namespace novi_ams.NoviResponses;

public class MemberTypeResponse
{
    public int TotalCount {get;set;}
    public List<MemberTypeViewModel> Results {get;set;} = new List<MemberTypeViewModel>(){new MemberTypeViewModel{Name = "failed to serialize"}};
}