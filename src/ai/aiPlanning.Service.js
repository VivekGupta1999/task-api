
export async function generatePlan({ goal, targetDate, pacing }) {
  return {
    goal: {
      originalText: goal,
      interpretedText: "Interpreted goal for planning"
    },
    plan: {
      pacing,
      startDate: new Date().toISOString(),
      targetDate,
      steps: 3
    },
    steps: [
      {
        stepNumber: 1,
        title: "First step",
        description: "Do the first thing",
        relativeTime: "day 1"
      },
      {
        stepNumber: 2,
        title: "Second step",
        description: "Do the second thing",
        relativeTime: "day 2"
      },
      {
        stepNumber: 3,
        title: "Final step",
        description: "Finish the goal",
        relativeTime: "day 3"
      }
    ]
  };
}

