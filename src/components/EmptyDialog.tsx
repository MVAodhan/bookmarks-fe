import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import UrlCard from "./Card";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "./ui/empty";
import { Button } from "./ui/button";

export function EmptyDialog() {
  return (
    <div className="bg-gray-90">
      <Empty>
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              {/*Icon from Material Symbols by Google - https://github.com/google/material-design-icons/blob/master/LICENSE **/}
              <path
                fill="currentColor"
                d="M14 21v-1.65q0-.2.075-.387t.225-.338l5.225-5.2q.225-.225.5-.325t.55-.1q.3 0 .575.113t.5.337l.925.925q.2.225.313.5t.112.55t-.1.563t-.325.512l-5.2 5.2q-.15.15-.337.225T16.65 22H15q-.425 0-.712-.287T14 21m6.575-4.6l.925-.975l-.925-.925l-.95.95zM4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h5.175q.4 0 .763.15t.637.425L12 6h8q.825 0 1.413.588T22 8v2.075q0 .45-.363.725t-.837.2h-.275q-.7 0-1.312.25T18.1 12l-5.525 5.525q-.275.275-.425.638t-.15.762V19q0 .425-.288.713T11 20z"
              />
            </svg>
          </EmptyMedia>
          <EmptyTitle>No Bookmarks Found</EmptyTitle>
          <EmptyDescription>No data found</EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <Dialog>
            <DialogTrigger>
              <span className="flex gap-2 items-center bg-gray-100 text-black p-2 rounded-md cursor-pointer">
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
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
                <span>Add</span>
              </span>
            </DialogTrigger>
            <DialogContent className="bg-gray-400 text-gray-900">
              <DialogHeader>
                <DialogTitle>Add a Bookmark</DialogTitle>
                <UrlCard />
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </EmptyContent>
      </Empty>
    </div>
  );
}
