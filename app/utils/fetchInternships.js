export async function fetchInternships(){
    const res = await fetch ("https://internshala.com/hiring/search");

    if(!res.ok){
        throw new Error("Failed to fetch internships");
    }
    const data = await res.json();

    return Object.values(data.internships_meta);
}