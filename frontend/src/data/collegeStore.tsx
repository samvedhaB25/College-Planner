import { safetyColleges, targetColleges, reachColleges, type College } from "./data";

const STORAGE_KEY = "collegePlanner_aiColleges";

type CollegeSuggestion = {
    name: string;
    category: string;
    location: string;
    acceptRate: string;
    reasoning: string;
};

export function saveCollegeSuggestions(suggestions: CollegeSuggestion[]) {
    const colleges: College[] = suggestions.map((s, index) => ({
        id: index + 1,
        name: s.name,
        progress: "not-started",
        category: s.category,
        location: s.location,
        deadline: "Check college website",
        acceptRate: s.acceptRate,
        iSAcceptRate: "-%",
        oSAcceptRate: "-%",
        reasoning: s.reasoning,
    }));
    localStorage.setItem(STORAGE_KEY, JSON.stringify(colleges));
}

function getStoredColleges(): College[] | null {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    try {
        return JSON.parse(raw) as College[];
    } catch {
        return null;
    }
}

export function getCollegesByCategory() {
    const stored = getStoredColleges();

    if (stored) {
        return {
            safetyColleges: stored.filter((c) => c.category === "Safety"),
            targetColleges: stored.filter((c) => c.category === "Target"),
            reachColleges: stored.filter((c) => c.category === "Reach"),
        };
    }

    // Fallback to mock data if no AI results yet
    return { safetyColleges, targetColleges, reachColleges };
}

export function getAllColleges(): College[] {
    const { safetyColleges, targetColleges, reachColleges } = getCollegesByCategory();
    return [...safetyColleges, ...targetColleges, ...reachColleges];
}