import React, { useState } from "react";
import {
  HiChevronLeft,
  HiChevronRight,
  HiOutlineClipboardDocumentList,
  HiOutlineCog6Tooth,
  HiOutlineEnvelope,
  HiOutlineRectangleGroup,
  HiOutlineUser,
} from "react-icons/hi2";
import Button from "../../components/Button";

export default function AdminPage({ isSidebarActive }) {
  return (
    <div className="relative ">
      <aside
        className={`group fixed  top-0 h-screen overflow-hidden border-r border-gray-300/40 py-16 duration-300  hover:shadow-xl lg:left-0 lg:w-[calc(5rem)] lg:hover:w-64 ${
          isSidebarActive ? "left-0 w-1/2" : "-left-full"
        }`}
      >
        <div className="flex flex-col justify-between">
          <div className="">
            <div className="mt-6 ">
              <ul className="space-y-2 px-4 font-medium tracking-wide">
                <li className="w-full space-y-2">
                  <Button
                    isLink
                    className="block w-full rounded-lg bg-primary py-3 text-white duration-300 lg:w-[52px] lg:group-hover:w-full"
                  >
                    <div className="flex w-max items-center gap-6 px-3 ">
                      <HiOutlineRectangleGroup className="h-7 w-7 " />
                      <span>Dashboard</span>
                    </div>
                  </Button>
                </li>
                <li className="w-full space-y-4">
                  <Button
                    isLink
                    className="block w-full rounded-lg bg-inherit py-3 text-dark duration-200 hover:bg-slate-200 lg:w-[52px] lg:group-hover:w-full"
                  >
                    <div className="flex w-max items-center gap-6 px-3 ">
                      <HiOutlineEnvelope className="h-7 w-7 " />
                      <span>Messages</span>
                    </div>
                  </Button>
                </li>
                <li className="w-full space-y-4">
                  <Button
                    isLink
                    className="block w-[60px] w-full rounded-lg bg-inherit py-3 text-dark duration-200 hover:bg-slate-200 lg:group-hover:w-full"
                  >
                    <div className="flex w-max items-center gap-6 px-3 ">
                      <HiOutlineUser className="h-7 w-7 " />
                      <span>Profile</span>
                    </div>
                  </Button>
                </li>
                <li className="w-full space-y-4">
                  <Button
                    isLink
                    className="block w-full rounded-lg bg-inherit py-3 text-dark duration-200 hover:bg-slate-200 lg:w-[52px] lg:group-hover:w-full"
                  >
                    <div className="flex w-max items-center gap-6 px-3 ">
                      <HiOutlineClipboardDocumentList className="h-7 w-7 " />
                      <span>Tasks</span>
                    </div>
                  </Button>
                </li>
                <li className="w-full space-y-4">
                  <Button
                    isLink
                    className="block w-full rounded-lg bg-inherit py-3 text-dark duration-200 hover:bg-slate-200 lg:w-[52px] lg:group-hover:w-full"
                  >
                    <div className="flex w-max items-center gap-6 px-3 ">
                      <HiOutlineCog6Tooth className="h-7 w-7 " />
                      <span>Settings</span>
                    </div>
                  </Button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </aside>
      <main className="container bg-slate-50 lg:ml-auto lg:w-[calc(100%-4rem)]">
        <div className="mx-auto py-24">
          <div className="lg:px-12">
            <div className="">
              <span className="text-gray-500 dark:text-gray-200">asd</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
