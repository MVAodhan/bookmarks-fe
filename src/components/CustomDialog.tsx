import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import UrlCard from "./Card";

export function CustomDialog() {
  return (
    <div className="bg-gray-90">
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
    </div>
  );
}
