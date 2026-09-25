import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch("https://leetcode.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
      },
      body: JSON.stringify({
        query: `
        query getUserProfile($username: String!) { 
          matchedUser(username: $username) { 
            submitStats: submitStatsGlobal { 
              acSubmissionNum { 
                difficulty 
                count 
              } 
            } 
          } 
          userContestRanking(username: $username) {
            rating
          }
        }
        `,
        variables: { username: "premkumarthirupati1" },
      }),
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      throw new Error(`LeetCode API returned ${res.status}`);
    }

    const { data } = await res.json();
    const stats = data.matchedUser.submitStats.acSubmissionNum;
    const rating = data.userContestRanking?.rating || 0;
    
    return NextResponse.json({
      status: "success",
      totalSolved: stats.find((s: any) => s.difficulty === "All")?.count || 0,
      rating: Math.round(rating),
    });
  } catch (error) {
    return NextResponse.json(
      { status: "error", message: "Failed to fetch from LeetCode GraphQL" },
      { status: 500 }
    );
  }
}
