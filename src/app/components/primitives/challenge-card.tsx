"use client";

import Image from "next/image";
import Link from "next/link";

import { useStore } from "@/contexts/store";
import { getChallengeDocument } from "@/helpers";
import { ArrowLeftIcon } from "@/public/assets/icons";
import { ChallengeWithProgress } from "@/types";

export const ChallengeCard = ({
  challenge,
}: {
  challenge: ChallengeWithProgress;
}) => {
  const { allRepositories, setUserChallenge } = useStore();

  const document = getChallengeDocument({ title: challenge.title });
  const challengeKey = document?.url;
  const thumbnail = document?.thumbnail;

  const repository = allRepositories.find(
    (repo) => repo.challenge_id === challenge.id
  );
  let challengeUrl = `/challenges${challengeKey}?rid=${repository?.id || ""}`;
  if (
    repository?.id &&
    repository?.progress.progress_details.current_step &&
    repository?.progress.progress_details.current_step > 0
  ) {
    const moduleCount =
      repository?.progress.status === "completed"
        ? repository?.progress.progress_details.current_step
        : repository?.progress.progress_details.current_step + 1; // +1 because the first step is the introduction
    const currentModule = `module-${moduleCount}`;
    const challengeKeyWithModule = challengeKey?.replace(
      "/instructions",
      `/${currentModule}/instructions`
    );
    challengeUrl = `/challenges${challengeKeyWithModule}?rid=${
      repository?.id || ""
    }&started=true`;
  }

  const currentStep =
    repository?.progress?.progress_details?.current_step ??
    challenge.progress.current_step;

  return (
    <div className="flex flex-col justify-between overflow-hidden rounded-lg min-w-[357px] max-w-[400px] h-[470px] border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md">
      <div className="relative px-4 pt-4">
        <Image
          src={thumbnail || "/assets/images/jig-block.webp"}
          alt={challenge.title}
          width={400}
          height={200}
          className="w-full h-full object-cover rounded-lg border"
          priority
        />
        <span
          className={`${
            challenge.progress.status.toLowerCase() === "inprogress"
              ? "block"
              : "hidden"
          } absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-sm font-medium text-purple-primary backdrop-blur-sm`}
        >
          {challenge.progress.status}
        </span>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 capitalize">
          {challenge.title}
        </h3>
        <p className="mt-1 text-sm text-gray-500">{challenge.description}</p>
        <div className="mt-4">
          <div className="mb-2 flex items-center justify-between text-sm text-gray-600">
            <span className="text-[#888888] text-sm font-light">
              <span className="text-black">
                {(repository?.progress?.progress_details?.current_step ?? -1) +
                  1 || challenge.progress.current_step}
                /
              </span>
              {challenge.module_count + 1} tasks
            </span>
            <span className="text-[#888888] text-sm font-light">
              {Math.min(
                Math.round(
                  (currentStep * 100) / Math.max(1, challenge.module_count)
                )
              )}
              % Done
            </span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-[#F8F2FF]">
            <div
              className="h-full rounded-full bg-[#9747FF] transition-all duration-500"
              style={{
                width: `${Math.min(
                  100,
                  (currentStep * 100) / Math.max(1, challenge.module_count)
                )}%`,
              }}
            />
          </div>
        </div>
        <Link
          href={challengeUrl}
          onClick={() => {
            setUserChallenge(challenge);
          }}
          className="bottom-0 mt-4 flex w-full items-center justify-center gap-2 font-semibold text-[#4C2480] rounded-full bg-[#F8F2FF] px-4 py-3 border border-[#DAC2FF] transition-colors group hover:bg-[#4C2480]/20"
        >
          {challenge.progress.status === "in_progress"
            ? "Continue"
            : currentStep === challenge.module_count
            ? "Completed"
            : "Start"}
          <ArrowLeftIcon
            className="h-4 w-4 rotate-180 group-hover:translate-x-1 transition-transform duration-300"
            fill="#9747FF"
          />
        </Link>
      </div>
    </div>
  );
};
