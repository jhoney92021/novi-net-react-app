using novi_ams.DataModels;
using System.ComponentModel.DataAnnotations;

namespace novi_ams.ViewModels;

/*
        {
            "UniqueID": "39120341-3c8e-47b0-9a40-45b5659b2044",
            "ParentCustomerUniqueID": "0c40c968-2a95-4b92-9ff0-0d17734a9551",
            "ParentMemberName": null,
            "Name": "Deleted UnderB",
            "FirstName": "Deleted",
            "LastName": "UnderB",
            "Suffix": null,
            "Active": true,
            "Email": null,
            "Phone": null,
            "Mobile": null,
            "Fax": null,
            "Website": null,
            "County": null,
            "BillingAddress": {
                "Address1": null,
                "Address2": null,
                "City": null,
                "ZipCode": null,
                "StateProvince": null,
                "Country": null
            },
            "ShippingAddress": {
                "Address1": null,
                "Address2": null,
                "City": null,
                "ZipCode": null,
                "StateProvince": null,
                "Country": null
            },
            "PersonalEmail": null,
            "PersonalPhone": null,
            "PersonalMobile": null,
            "PersonalAddress": {
                "Address1": null,
                "Address2": null,
                "City": null,
                "ZipCode": null,
                "StateProvince": null,
                "Country": null
            },
            "Notes": null,
            "FacebookUrl": null,
            "LinkedInUrl": null,
            "InstagramHandle": null,
            "TwitterHandle": null,
            "MemberProfile": null,
            "JobTitle": null,
            "Image": "",
            "OriginalJoinDate": null,
            "MemberSince": null,
            "MembershipExpires": null,
            "MemberStatus": "non_member",
            "MemberSubStatus": null,
            "DuesPayerUniqueID": "0c40c968-2a95-4b92-9ff0-0d17734a9551",
            "HideOnWebsite": false,
            "HideContactInformation": false,
            "UnsubscribeFromEmails": false,
            "Approved": true,
            "AutoRenew": false,
            "AutoPay": false,
            "MemberType": null,
            "CustomerType": "Person",
            "CustomFields": {},
            "SpecifiedSystemFields": [
                "AutoRenew",
                "BillingAddress",
                "Notes",
                "County",
                "UnsubscribeFromEmails",
                "Email",
                "FacebookUrl",
                "Fax",
                "HideContactInformation",
                "HideOnWebsite",
                "Image",
                "LinkedInUrl",
                "Mobile",
                "PersonalAddress",
                "PersonalEmail",
                "PersonalMobile",
                "PersonalPhone",
                "Phone",
                "MemberProfile",
                "ShippingAddress",
                "TwitterHandle",
                "Website"
            ],
            "QuickBooksID": null,
            "UseParentBilling": false,
            "UseParentShipping": false,
            "Credentials": null,
            "Title": null,
            "DirectoryGallery": [],
            "Awards": [],
            "VolunteerWorks": [],
            "Education": [],
            "Groups": null,
            "CreatedDate": "2018-10-28T13:31:52.4566667-04:00",
            "LastUpdatedDate": "2019-01-17T09:05:33.09-05:00",
            "PrimaryContactUniqueId": null,
            "BillingContactUniqueId": null,
            "DefaultDuesPayerOverride": null
        }
*/

public class Member
{
    /* core identifiers */
    [Required]
    public Guid UniqueID {get;set;}
    [Required]
    [MaxLength(100)]
    public string Name {get;set;} = "Also known as DisplayName";
    [Required]
    public Guid ParentCustomerUniqueID {get;set;}
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

    /* details */
    public bool Active {get;set;}
    public DateTime OriginalJoinDate {get;set;}
    public DateTime MemberSince {get;set;}
    public DateTime MembershipExpires {get;set;}
    public string MemberStatus {get;} = "not set";
    public string MemberSubStatus {get;} = "not set";
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
    
    /* tagged as personal */
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
    public int QuickBooksID {get;}
    public Guid PrimaryContactUniqueId {get;set;}
    public Guid BillingContactUniqueId {get;set;}

    [MaxLength(255)]
    public string Credentials {get;set;} = "not set";
    public List<object> DirectoryGallery  {get;} = new List<object>();
    public List<object> Awards {get;} = new List<object>();
    public List<string> VolunteerWorks  {get;} = new List<string>();
    public List<object> Education {get;} = new List<object>();
    public List<object>? Groups {get;} = new List<object>();
    public DateTime? CreatedDate  {get;}
    public DateTime? LastUpdatedDate  {get;}

}