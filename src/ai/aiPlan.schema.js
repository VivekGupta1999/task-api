/*

AI Planning Output Contract

The AI must return an object that follows this shape exactly.
Backend logic depends on this structure


*/


const AI_PLAN_SCHEMA = {
    goal:{
        originalText: "string",  //user Input
        interpretedText: "string", //AI Interpretation

    },
    plan:{
        pacing: "daily" | "Weekly",
        startDate: "ISO_DATE_STRING",
        targetDate:"ISO_DATE_STRING",
        totalSteps:"number"
    },


    steps:[
        {
            stepNumber:"number",
            title:"string",
            description:"sample description",
            relativeoffset:"number",
            estimatedtimeeffort:"string (optional)"
        }
    ]
};

module.exports = {
    AI_PLAN_SCHEMA
};