export type UserProfile = {
    userId: string;
    username: string;
    onboardingComplete: boolean;
};

// Mock data for now
const mockUser: UserProfile = {
    userId: "1",
    username: "Kate",
    onboardingComplete: false,
};

// Swap this function's code later - everything else stays the same
export function getUserProfile(): UserProfile {
    // TODO: replace with real API call, e.g.:
    // return await fetch('/api/user/profile').then(res => res.json());
    return mockUser;
}