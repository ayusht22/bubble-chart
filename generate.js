console.log(Math.floor(Math.random()*100))

pick=[0,10,20,30,40,49]


for(let j=0;j<200;j++){
    sdgs=[]
    for(let i=0;i<15;i++){
    sdgs.push(pick[Math.floor(Math.random()*100)%6])
    }
}

var obj={}
obj["map_details"]={
    "map_id": "12123334867",
    "time_taken": 310.8779306411743,
    "num_resources": 41,
    "num_topics": 15,
    "num_levels": 4,
    "X_Axis": {
        "volume_range": {
            "min_volume": 0,
            "max_volume": 0
        },
        "interval": 0,
        "start": 0.0,
        "end": 17.0
    },
    "Y_Axis": {
        "volume_range": {
            "min_volume": 0,
            "max_volume": 0
        },
        "interval": 1.0,
        "start": 0,
        "end": 0
    }
}

obj["topics"]=[]





obj["resources"]=[]
for(let i=0;i<35;i++){

    let j={}
    j[i]={
            "resource_name":obj2019[i]["State"].UT,
            "resource_volume": 0,
            "Composite Score": 72,
            "Rank": 4,
            "resource_type": "pdf",
            "year":2019,
            "resource_mapping": [
                {
                    "SDG 1": obj2019[i]["SDG 1"]
                },
                {
                    "SDG 2": obj2019[i]["SDG 2"]
                },
                {
                    "SDG 3": obj2019[i]["SDG 3"]
                },
                {
                    "SDG 4": obj2019[i]["SDG 4"]
                },
                {
                    "SDG 5": obj2019[i]["SDG 5"]
                },
                {
                    "SDG 6": obj2019[i]["SDG 6"]
                },
                {
                    "SDG 7": obj2019[i]["SDG 7"]
                },
                {
                    "SDG 8": obj2019[i]["SDG 8"]
                },
{
                    "SDG 9": obj2019[i]["SDG 9"]
                },
{
                    "SDG 10": obj2019[i]["SDG 10"]
                },
{
                    "SDG 11": obj2019[i]["SDG 11"]
                },
{
                    "SDG 15": obj2019[i]["SDG 15"]
                },
                {
                    "SDG 16": obj2019[i]["SDG 16"]
                }
            ],
            "resource_polyline": [
                {
                    "x": 0,
                    "y": obj2019[i]["SDG 1"]
                },
                {
                    "x": 1,
                    "y": obj2019[i]["SDG 2"]
                },
                {
                    "x": 2,
                    "y": obj2019[i]["SDG 3"]
                },
                {
                    "x": 3,
                    "y": obj2019[i]["SDG 4"]
                },
                {
                    "x": 4,
                    "y": obj2019[i]["SDG 5"]
                },
                {
                    "x": 5,
                    "y": obj2019[i]["SDG 6"]
                },
                {
                    "x": 6,
                    "y": obj2019[i]["SDG 7"]
                },
                {
                    "x": 7,
                    "y": obj2019[i]["SDG 8"]
                },
                {
                    "x": 8,
                    "y": obj2019[i]["SDG 9"]
                },
                {
                    "x": 9,
                    "y": obj2019[i]["SDG 10"]
                },
                {
                    "x": 10,
                    "y": obj2019[i]["SDG 11"]
                },
                {
                    "x": 11,
                    "y": obj2019[i]["SDG 15"]
                },
                {
                    "x": 12,
                    "y": obj2019[i]["SDG 16"]
                }
            ]
        }
        obj["resources"].push(j)
    }

    for(let i=35;i<obj2019.length;i++){
    let j={}
    j[i]={
            "resource_name":obj2019[i]["State"].UT,
            "resource_volume": 0,
            "Composite Score": 72,
            "Rank": 4,
            "resource_type": "pdf",
            "year":2019,
            "resource_mapping": [
                {
                    "SDG 1": obj2019[i]["Col12"]
                },
                {
                    "SDG 2": obj2019[i]["Col11"]
                },
                {
                    "SDG 3": obj2019[i]["Col10"]
                },
                {
                    "SDG 4": obj2019[i]["Col9"]
                },
                {
                    "SDG 5": obj2019[i]["Col8"]
                },
                {
                    "SDG 6": obj2019[i]["Col7"]
                },
                {
                    "SDG 7": obj2019[i]["Col6"]
                },
                {
                    "SDG 8": obj2019[i]["Col5"]
                },
{
                    "SDG 9": obj2019[i]["Col4"]
                },
{
                    "SDG 10": obj2019[i]["Col3"]
                },
{
                    "SDG 11": obj2019[i]["Col2"]
                },
{
                    "SDG 15": obj2019[i]["Col1"]
                },
                {
                  "SDG 16": obj2019[i]["Col0"]
                }
            
            ],
            "resource_polyline": [
                {
                    "x": 0,
                    "y": obj2019[i]["Col12"]
                },
                {
                    "x": 1,
                    "y": obj2019[i]["Col11"]
                },
                {
                    "x": 2,
                    "y": obj2019[i]["Col10"]
                },
                {
                    "x": 3,
                    "y": obj2019[i]["Col9"]
                },
                {
                    "x": 4,
                    "y": obj2019[i]["Col8"]
                },
                {
                    "x": 5,
                    "y": obj2019[i]["Col7"]
                },
                {
                    "x": 6,
                    "y": obj2019[i]["Col6"]
                },
                {
                    "x": 7,
                    "y": obj2019[i]["Col5"]
                },
                {
                    "x": 8,
                    "y": obj2019[i]["Col4"]
                },
                {
                    "x": 9,
                    "y": obj2019[i]["Col3"]
                },
                {
                    "x": 10,
                    "y": obj2019[i]["Col2"]
                },
                {
                    "x": 11,
                    "y": obj2019[i]["Col1"]
                },
                {
                  "x": 12,
                  "y": obj2019[i]["Col0"]
              },

            ]
        }
        obj["resources"].push(j)
      }
