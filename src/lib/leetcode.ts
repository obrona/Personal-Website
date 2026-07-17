const LEETCODE_API_URL =
  import.meta.env.VITE_LEETCODE_API_URL ?? "/api/leetcode";

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

interface SubmissionCount {
  difficulty: string;
  count: number;
}

interface LanguageCount {
  languageName: string;
  problemsSolved: number;
}

interface LeetCodeResponse {
  data?: {
    matchedUser: {
      submitStatsGlobal: {
        acSubmissionNum: SubmissionCount[];
      };
      languageProblemCount: LanguageCount[];
    } | null;
  };
  errors?: Array<{ message: string }>;
}

export interface LeetCodeStats {
  solved: {
    easy: number;
    medium: number;
    hard: number;
  };
  languages: LanguageCount[];
}

function countForDifficulty(
  counts: SubmissionCount[],
  difficulty: string,
) {
  return counts.find((item) => item.difficulty === difficulty)?.count ?? 0;
}

export async function fetchLeetCodeStats(
  username: string,
  signal?: AbortSignal,
): Promise<LeetCodeStats> {
  const response = await fetch(LEETCODE_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: USER_STATS_QUERY,
      variables: { username },
    }),
    signal,
  });

  if (!response.ok) {
    throw new Error(`LeetCode request failed with status ${response.status}`);
  }

  const result = (await response.json()) as LeetCodeResponse;

  if (result.errors?.length) {
    throw new Error(result.errors[0].message);
  }

  const user = result.data?.matchedUser;

  if (!user) {
    throw new Error(`LeetCode user "${username}" was not found`);
  }

  const submissionCounts = user.submitStatsGlobal.acSubmissionNum;

  return {
    solved: {
      easy: countForDifficulty(submissionCounts, "Easy"),
      medium: countForDifficulty(submissionCounts, "Medium"),
      hard: countForDifficulty(submissionCounts, "Hard"),
    },
    languages: [...user.languageProblemCount]
      .filter((language) => language.problemsSolved > 0)
      .sort((first, second) => second.problemsSolved - first.problemsSolved),
  };
}
