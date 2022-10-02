using System.ComponentModel.DataAnnotations;

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
    [MaxLength(255)]
    public string Address1 {get;set;} = "123 main st";
    [MaxLength(255)]
    public string Address2 {get;set;} = "456 main st";
    [MaxLength(255)]
    public string City {get;set;} = "el cajon";
    [MaxLength(30)]
    public string ZipCode {get;set;} = "92021";
    [MaxLength(255)]
    public string StateProvince {get;set;} = "California";
    [MaxLength(255)]
    public string Country {get;set;} = "USA";
}