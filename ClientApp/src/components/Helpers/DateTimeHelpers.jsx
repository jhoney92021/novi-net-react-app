export function removeTimePart(dateString)
{
    if(dateString === null || dateString === undefined || dateString === "")
    {
        return null;
    }
    
    const parsed = dateString.split("T");
    return parsed[0];
}