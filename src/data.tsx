export type College = {
    id: number;
    name: string;
    progress: "complete" | "in-progress" | "not-started";
};

export const safetyColleges: College[] = [
    { id: 1, name: "University of Oregon", progress: "complete" },
    { id: 2, name: "University of Arizona", progress: "in-progress" }
];

export const targetColleges: College[] = [
    { id: 3, name: "University of Washington Seattle", progress: "not-started" },
    { id: 4, name: "Purdue University", progress: "in-progress" }
];

export const reachColleges: College[] = [
    { id: 5, name: "Stanford University", progress: "complete" },
    { id: 6, name: "University of Virginia", progress: "not-started" }
];