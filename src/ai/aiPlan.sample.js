/* sample AI Plan response */


const sampleAIPlan ={
    goal:{
        originalText:"Prepare for a backend Interview",
        interpretedText:"Prepare for a junior backend developer interview focusing on JS and APIs"
    },
    plan:{
        pacing:"daily",
        startDate:"10-02-2026",
        targetDate:"1-03-2026",
        totalSteps:5
    },
    steps:[
        {
            stepNumber:1,
            title:"Review JavaScript basics",
            descriptions:"Cover variables,closures, async/await",
            relativeoffset:0,
            estimatedtimeeffort: "1.5 hour"
        },
        {
            stepNumber:2,
            title:"Learn NodeJS fundamentals",
            descriptions:"understand event loop, Express basics",
            relativeoffset:1,
            estimatedtimeeffort:"2 hours"
        }
    ]
};

module.exports ={
    sampleAIPlan
};