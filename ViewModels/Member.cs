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
    public Guid UniqueID {get;set;}
    public string Name {get;set;} = "default";
    public Guid ParentCustomerUniqueID {get;set;}
    public string ParentMemberName {get;set;} = "default";
    public string FirstName {get;set;} = "default";
    public string LastName {get;set;} = "default";


    public bool Active {get;set;}
}