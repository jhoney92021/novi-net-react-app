using novi_ams.DataModels;
using System.ComponentModel.DataAnnotations;

namespace novi_ams.ViewModels;

public class Member
{
    [Required]
    public Guid UniqueID {get;set;}
    [Required]
    [MaxLength(100)]
    public string Name {get;set;} = "Also known as DisplayName";
    [Required]
    public Guid? ParentCustomerUniqueID {get;set;}
    public string ParentMemberName {get;set;} = "not set";
    [Required]
    [MaxLength(100)]
    public string FirstName {get;set;} = "not set";
    [Required]
    [MaxLength(100)]
    public string LastName {get;set;} = "not set";
    [MaxLength(25)]
    public string Title {get;set;} = "not set";
    [Required]
    public string CustomerType {get;set;} = "Person";
    public MemberType MemberType {get;set;} = new MemberType();
    public bool Active {get;set;}
    public DateTime? OriginalJoinDate {get;set;}
    public DateTime? MemberSince {get;set;}
    public DateTime? MembershipExpires {get;set;}
    public string MemberStatus {get;set;} = "not set";
    public string MemberSubStatus {get;set;} = "not set";
    public string Email {get;set;} = "not set";
    public string Phone {get;set;} = "not set";
    public string Mobile {get;set;} = "not set";
    public string Fax {get;set;} = "not set";
    public string Website {get;set;} = "not set";
    public string County {get;set;} = "not set";
    public bool AutoPay {get;set;}
    public bool AutoRenew {get;set;}
    public BillingAddress BillingAddress {get;set;} = new BillingAddress();
    public ShippingAddress ShippingAddress {get;set;} = new ShippingAddress();    
    public string PersonalEmail {get;set;} = "not set";
    public string PersonalPhone {get;set;} = "not set";
    public string PersonalMobile {get;set;} = "not set";
    public PersonalAddress PersonalAddress {get;set;} = new PersonalAddress();
    [MaxLength(2000)]
    public string Notes {get;set;} = "not set";
    [MaxLength(255)]
    public string FacebookUrl {get;set;} = "not set";
    [MaxLength(255)]
    public string LinkedInUrl {get;set;} = "not set";
    [MaxLength(255)]
    public string TwitterHandle {get;set;} = "not set";
    [MaxLength(2000)]
    public string MemberProfile {get;set;} = "not set";
    [MaxLength(50)]
    public string JobTitle {get;set;} = "not set";

    public bool HideOnWebsite {get;set;}
    public bool HideContactInformation {get;set;}
    public bool UnsubscribeFromEmails {get;set;}
    public string QuickBooksID {get;set;} = "not set";
    public Guid? PrimaryContactUniqueId {get;set;}
    public Guid? BillingContactUniqueId {get;set;}

    [MaxLength(255)]
    public string Credentials {get;set;} = "not set";
    public List<object> DirectoryGallery  {get;set;} = new List<object>();
    public List<object> Awards {get;set;} = new List<object>();
    public List<string> VolunteerWorks  {get;set;} = new List<string>();
    public List<object> Education {get;set;} = new List<object>();
    public List<object>? Groups {get;set;} = new List<object>();
    public DateTime? CreatedDate  {get;set;}
    public DateTime? LastUpdatedDate  {get;set;}

}