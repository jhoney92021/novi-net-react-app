
using novi_ams.ViewModels;

namespace novi_ams.NoviResponses;

public class MembersResponse
{
    public int TotalCount {get;set;}
    public List<Member> Results {get;set;} = new List<Member>(){new Member{Name = "failed to serialize"}};
}