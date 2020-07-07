let countries = {
    "name" : "india", 
    "capital" : "delhi", 
    "states" : [
        {
            "name" : "andhra pradesh",
            "capital" : "amaravati",
            "districts" : [
                {
                    "name" : "guntur",
                },
                {
                    "name" : "krishna",
                }
            ]
        },
        {
            "name" : "tamilnadu",
            "capital" : "chennai",
            "districts" : [
                {
                    "name" : "dist1"
                },
                {
                    "name" : "dist2"
                }
            ]
        }
    ]
}
console.log(countries["states"][1]["districts"][1]["name"])