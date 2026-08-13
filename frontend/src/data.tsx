export type College = {
    id: number;
    name: string;
    progress: "complete" | "in-progress" | "not-started";
    category: string;
    location: string;
    deadline: string;
    acceptRate: string;
    iSAcceptRate: string;
    oSAcceptRate: string;
};

export const safetyColleges: College[] = [
    { id: 1, name: "University of Oregon", progress: "complete", category: "Safety", location: "Eugene, Oregon", deadline: "November 1, 2026", acceptRate: "88%", iSAcceptRate: "-%", oSAcceptRate: "-%" },
    { id: 2, name: "University of Arizona", progress: "in-progress", category: "Safety", location: "Tucson, Arizona", deadline: "December 1, 2026", acceptRate: "86%", iSAcceptRate: "-%", oSAcceptRate: "-%" }
];

export const targetColleges: College[] = [
    { id: 3, name: "University of Washington Seattle", progress: "not-started", category: "Target", location: "Seattle, Washington", deadline: "November 15, 2026", acceptRate: "42%", iSAcceptRate: "54%", oSAcceptRate: "39%" },
    { id: 4, name: "Purdue University", progress: "in-progress", category: "Target", location: "West Lafayette, Indiana", deadline: "November 1, 2026", acceptRate: "43.4%", iSAcceptRate: "71%", oSAcceptRate: "39%" }
];

export const reachColleges: College[] = [
    { id: 5, name: "Stanford University", progress: "complete", category: "Reach", location: "Stanford, California", deadline: "November 1, 2026", acceptRate: "3.6%", iSAcceptRate: "3.6%", oSAcceptRate: "3.6%" },
    { id: 6, name: "University of Virginia", progress: "not-started", category: "Reach", location: "Charlottesville, Virginia", deadline: "November 1, 2026", acceptRate: "12.5%", iSAcceptRate: "22%", oSAcceptRate: "10%" }
];

export type Essay = {
    id: number;
    collegeId: number;
    title: string;
    preview: string;
    wordCount: number;
    wordLimit: number;
    status: "not-started" | "draft" | "complete";
    googleDocUrl?: string;
};

export const essays: Essay[] = [
    {
        id: 1,
        collegeId: 3,
        title: "Why UW?",
        preview: "Lorem ipsum dolor sit amet...",
        wordCount: 245,
        wordLimit: 300,
        status: "draft",
    },
    {
        id: 2,
        collegeId: 3,
        title: "Community Essay",
        preview: "Another preview...",
        wordCount: 500,
        wordLimit: 500,
        status: "complete",
    },
    {
        id: 3,
        collegeId: 5,
        title: "Roommate Essay",
        preview: "Preview...",
        wordCount: 100,
        wordLimit: 250,
        status: "not-started",
    },
];

export const allColleges = [
    ...safetyColleges,
    ...targetColleges,
    ...reachColleges,
];