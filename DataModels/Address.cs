namespace novi_ams.DataModels;

/*
                "Address1": null,
                "Address2": null,
                "City": null,
                "ZipCode": null,
                "StateProvince": null,
                "Country": null
*/

public abstract class Address
{
    public string Address1 {get;set;} = "123 main st";
    public string Address2 {get;set;} = "456 main st";
    public string City {get;set;} = "el cajon";

    public string ZipCode {get;set;} = "92021";
    public string StateProvince {get;set;} = "California";
    public string Country {get;set;} = "USA";
}