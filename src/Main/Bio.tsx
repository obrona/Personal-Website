import { useEffect, useState } from "react";
import { Saturn } from "../components/Saturn/Saturn";
import {
  fetchLeetCodeStats,
  type LeetCodeStats,
} from "../lib/leetcode";

const LEETCODE_USERNAME = "tl8772";

function LeetCodeSummary() {
  const [stats, setStats] = useState<LeetCodeStats | null>(null);
  const [error, setError] = useState<string | null>(null);
  const total = (stats?.solved.easy ?? 0) + (stats?.solved.medium ?? 0) + (stats?.solved.hard ?? 0);

  useEffect(() => {
    const controller = new AbortController();

    fetchLeetCodeStats(LEETCODE_USERNAME, controller.signal)
      .then(setStats)
      .catch((requestError: unknown) => {
        if (
          requestError instanceof DOMException &&
          requestError.name === "AbortError"
        ) {
          return;
        }

        setError("LeetCode statistics are currently unavailable.");
      });

    return () => controller.abort();
  }, []);

  return (
    <section className="mt-10 w-full max-w-2xl rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-xl font-semibold text-gray-900">
          LeetCode
        </h2>
        <a
          href={`https://leetcode.com/u/${LEETCODE_USERNAME}/`}
          target="_blank"
          rel="noreferrer"
          className="text-sm text-blue-600 underline hover:text-blue-800"
        >
          View profile
        </a>
      </div>

      {!stats && !error && (
        <p className="mt-4 text-sm text-gray-500">Loading statistics...</p>
      )}

      {error && (
        <p className="mt-4 text-sm text-red-600" role="alert">
          {error}
        </p>
      )}

      {stats && (
        <>
          <div className='mt-2 text-md'>Total: {total}</div>
          <div className="mt-4 grid grid-cols-3 gap-3">
            <div className="rounded-xl bg-emerald-50 p-3 text-center">
              <div className="text-2xl font-semibold text-emerald-700">
                {stats.solved.easy}
              </div>
              <div className="text-sm text-emerald-800">Easy</div>
            </div>
            <div className="rounded-xl bg-amber-50 p-3 text-center">
              <div className="text-2xl font-semibold text-amber-700">
                {stats.solved.medium}
              </div>
              <div className="text-sm text-amber-800">Medium</div>
            </div>
            <div className="rounded-xl bg-rose-50 p-3 text-center">
              <div className="text-2xl font-semibold text-rose-700">
                {stats.solved.hard}
              </div>
              <div className="text-sm text-rose-800">Hard</div>
            </div>
          </div>

          <div className="mt-5">
            <h3 className="font-medium text-gray-900">Languages</h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {stats.languages.map((language) => (
                <span
                  key={language.languageName}
                  className="rounded-full bg-blue-50 px-3 py-1 text-sm text-blue-800"
                >
                  {language.languageName}: {language.problemsSolved}
                </span>
              ))}
            </div>
          </div>
        </>
      )}
    </section>
  );
}

export function Bio() {
  return (
    <div className="flex h-full w-full flex-col items-center px-4 pb-10 ">
      <div className="mt-32 flex items-center justify-between gap-4 
                      w-full max-w-2xl rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
        <Saturn height='180px' width='180px' />
        <div className='space-y-1'>
          <div>Name: Tim</div>
          <div>Nationality: Singapore Citizen</div>
          <div>Email: tlim8772@gmail.com</div>
          <div>
            Github:&nbsp;
            <a 
              href="https://github.com/obrona" 
              target="_blank" 
              rel="noreferrer"
              className="text-blue-600 underline"
            >
                https://github.com/obrona
              </a>
          </div>
        </div>
      </div>
      
      <LeetCodeSummary />
    </div>
  )
}
