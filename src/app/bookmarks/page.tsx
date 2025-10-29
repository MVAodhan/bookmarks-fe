"use client";

import { CustomDialog } from "@/components/CustomDialog";
import { EmptyDialog } from "@/components/EmptyDialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Bookmark } from "@/lib/types";
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";

export default function Home() {
  const [selectedCollection, setSelectedCollection] = useState("all-bookmarks");
  const { user, isLoaded } = useUser();
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);

  const getBookmarks = async () => {
    const res = await fetch("/bookmarks", {
      credentials: "include",
    });

    if (res.status === 401) {
      console.log("not authed");
      return;
    }
    const data = await res.json();
    if (data.res.length <= 0) {
      console.log("not logged in");
      return;
    }
    setBookmarks(data.res);
  };

  useEffect(() => {
    getBookmarks();
  }, []);

  // Mock collections data
  const collections = [
    { id: "all-bookmarks", name: "All bookmarks", count: 512 },
  ];

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 border-r border-gray-700 flex flex-col">
        {/* Header */}
        <div className="p-4 border-b border-gray-700 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium">{user?.firstName}</span>
          </div>
          <div className="flex space-x-2">
            <button className="p-1 hover:bg-gray-700 rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
              </svg>
            </button>
            <button className="p-1 hover:bg-gray-700 rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Search */}

        <div className="p-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="w-full px-3 py-2 bg-gray-700 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute right-3 top-2.5 h-4 w-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        {/* Collections */}
        <div className="flex-1 overflow-y-auto">
          <div className="px-4 py-2 text-xs text-gray-400 uppercase tracking-wider">
            Collections
          </div>
          <ul className="space-y-1">
            {collections.map((collection) => (
              <li key={collection.id}>
                <button
                  onClick={() => setSelectedCollection(collection.id)}
                  className={`w-full flex items-center justify-between px-4 py-2 text-sm rounded-md transition-colors ${
                    selectedCollection === collection.id
                      ? "bg-gray-700 text-white"
                      : "hover:bg-gray-700 text-gray-300"
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                      />
                    </svg>
                    <span>{collection.name}</span>
                  </div>
                  <span className="text-xs text-gray-400">
                    {collection.count}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Main Content */}

      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <div className="p-4 border-b border-gray-700 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
              />
            </svg>
            <h1 className="text-lg font-medium">All bookmarks</h1>
          </div>

          <div className="flex items-center space-x-4">
            <div className="w-full h-full">
              <CustomDialog />
            </div>
          </div>
        </div>

        {/* Bookmarks List */}
        <div className="flex-1 overflow-y-auto p-4">
          <div className="space-y-4 w-full h-full flex justify-center items-center">
            {bookmarks.length <= 0 && <EmptyDialog />}
            {bookmarks.length >= 1 && (
              <ScrollArea className="h-full w-full">
                <div className="w-full h-full">
                  {bookmarks.map((bookmark, i) => {
                    return (
                      <div
                        key={i}
                        className="border-b border-gray-700 pb-4 last:border-b-0"
                      >
                        <div className="flex items-start space-x-4">
                          <div className="flex-1">
                            <h2 className="text-base font-medium mb-1">
                              {bookmark.url}
                            </h2>
                            <p className="text-sm text-gray-300 mb-2">
                              {bookmark.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mb-2">
                              {bookmark?.tags
                                .split(",")
                                .map((tag: string, index: number) => {
                                  return (
                                    <span
                                      key={index}
                                      className="text-xs bg-gray-700 px-2 py-1 rounded"
                                    >
                                      {tag}
                                    </span>
                                  );
                                })}
                            </div>
                            <div className="flex items-center text-xs text-gray-400">
                              {/* <span>
                        Unsorted • {bookmark.source} • {bookmark.date}
                      </span> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </ScrollArea>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
