const LEETCODE_GRAPHQL_URL = "https://leetcode.com/graphql/";
const LEETCODE_PROFILE_URL = "https://leetcode.com/u/tl8772/";

const USER_STATS_QUERY = `
  query userStats($username: String!) {
    matchedUser(username: $username) {
      submitStatsGlobal {
        acSubmissionNum {
          difficulty
          count
        }
      }
      languageProblemCount {
        languageName
        problemsSolved
      }
    }
  }
`;

export default {
  async fetch(request: Request) {
    if (request.method !== "POST") {
      return Response.json(
        { error: "Method not allowed" },
        {
          status: 405,
          headers: { Allow: "POST" },
        },
      );
    }

    const response = await fetch(LEETCODE_GRAPHQL_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Referer: LEETCODE_PROFILE_URL,
      },
      body: JSON.stringify({
        query: USER_STATS_QUERY,
        variables: { username: "tl8772" },
      }),
    });

    if (!response.ok) {
      return Response.json(
        { error: "Unable to fetch LeetCode statistics" },
        { status: response.status },
      );
    }

    return new Response(response.body, {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
      },
    });
  },
};
