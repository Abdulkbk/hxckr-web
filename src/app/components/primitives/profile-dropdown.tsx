"use client";

import { useState, useEffect } from "react";
import {
  UserOutlineIcon,
  BadgeIcon,
  GearIcon,
  LogoutIcon,
  ChevronDownIcon,
  CrossIcon,
} from "@/public/assets/icons";
import Link from "next/link";
import Avatar from "./avatar";
import { signOut } from "next-auth/react";
import { useStore } from "@/contexts/store";

interface ProfileDropdownProps {
  name: string;
  email: string;
  avatar: string;
  isOnline?: boolean;
  teamBadge?: string;
}

export default function ProfileDropdown({
  name,
  email,
  avatar,
  teamBadge,
}: ProfileDropdownProps) {
  const { clearUserChallenge, clearAllRepositories, clearWebsocketEvents } =
    useStore();
  const [isOpen, setIsOpen] = useState(false);
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    setIsOnline(window.navigator.onLine);

    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return (
    <div className="relative text-black">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 rounded-full bg-white p-2 focus:outline-none focus:ring-2 focus:ring-purple-quinary"
      >
        <div className="relative">
          <div className="h-8 w-8 rounded-full text-white flex items-center justify-center text-sm font-semibold lg:h-12 lg:w-12">
            {avatar ? (
              <Avatar
                src={avatar}
                alt={name}
                className="h-8 w-8 lg:h-12 lg:w-12"
              />
            ) : (
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white text-lg font-semibold lg:h-12 lg:w-12">
                {name.charAt(0)}
              </div>
            )}
          </div>
          {isOnline && (
            <div className="absolute bottom-0 right-0 h-2 w-2 rounded-full bg-green-500 ring-2 ring-white lg:h-2.5 lg:w-2.5"></div>
          )}
        </div>
        <ChevronDownIcon className="hidden lg:block h-4 w-4 text-gray-500" />
      </button>

      {isOpen && (
        <div className="absolute -right-6 md:right-0 z-50 w-screen -top-1 px-2 md:top-auto md:mt-2 md:w-72 rounded-2xl bg-white shadow-lg md:ring-1 md:ring-black md:ring-opacity-5 overflow-hidden">
          <div className="flex justify-end md:hidden">
            <button
              className=" cursor-pointer hover:bg-gray-100 rounded-full p-2 border border-gray-200"
              onClick={() => setIsOpen(false)}
            >
              <CrossIcon className="h-4 w-4 text-gray-500" />
            </button>
          </div>
          <div className="p-4">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="h-12 w-12 rounded-full text-white flex items-center justify-center text-lg font-semibold">
                  {avatar ? (
                    <Avatar src={avatar} alt={name} />
                  ) : (
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-white text-lg font-semibold">
                      {name.charAt(0)}
                    </div>
                  )}
                </div>
                {isOnline && (
                  <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 ring-2 ring-white"></div>
                )}
              </div>
              <div>
                <div className="font-semibold">{name}</div>
                <div className="text-sm text-gray-500">{email}</div>
              </div>
              {teamBadge && (
                <div className="ml-auto h-6 w-6 rounded-full bg-green-500 text-white flex items-center justify-center text-xs font-bold">
                  {teamBadge}
                </div>
              )}
            </div>
          </div>
          <div className="border-t border-gray-100 text-sm py-2">
            <Link
              href="/profile"
              className="flex items-center px-4 py-3 hover:bg-gray-50"
            >
              <UserOutlineIcon className="mr-3 h-4 w-4 text-gray-400" />
              <span>View profile</span>
            </Link>
            <Link
              href="/badges"
              className="flex items-center px-4 py-3 hover:bg-gray-50"
            >
              <BadgeIcon className="mr-3 h-4 w-4 text-gray-400" />
              <span>Badges</span>
            </Link>
            <Link
              href="/settings"
              className="flex items-center px-4 py-3 hover:bg-gray-50"
            >
              <GearIcon className="mr-3 h-4 w-4 text-gray-400" />
              <span>Settings</span>
            </Link>
          </div>
          <div className="border-t border-gray-100">
            <button
              onClick={() => {
                signOut();
                clearUserChallenge();
                clearAllRepositories();
                clearWebsocketEvents();
              }}
              className="flex w-full items-center px-4 py-4 text-left text-sm text-gray-700 hover:bg-gray-50"
            >
              <LogoutIcon className="mr-3 h-4 w-4 text-gray-400" />
              <span>Log out</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
