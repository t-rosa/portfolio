import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
} from "@heroicons/react/outline";
import Link from "next/link";

interface Props {
  direction: "up" | "right" | "down" | "left";
  href: "" | "personal" | "projects" | "skills";
}

function Arrow({ direction, href }: Props) {
  if (direction === "down") {
    return (
      <Link href={`/${href}`}>
        <a className="absolute bottom-0">
          <ChevronDownIcon
            strokeWidth={0.3}
            className="w-20 sm:w-24 md:w-32 lg:w-36 xl:w-40 h-20 sm:h-24 md:h-32 lg:h-36 xl:h-40 hover:scale-125 hover:text-indigo-500 duration-300"
          />
        </a>
      </Link>
    );
  }

  if (direction === "left") {
    return (
      <Link href={`/${href}`}>
        <a className="absolute left-0">
          <ChevronLeftIcon
            strokeWidth={0.3}
            className="w-20 sm:w-24 md:w-32 lg:w-36 xl:w-40 h-20 sm:h-24 md:h-32 lg:h-36 xl:h-40 hover:scale-125 hover:text-indigo-500 duration-300"
          />
        </a>
      </Link>
    );
  }

  if (direction === "right") {
    return (
      <Link href={`/${href}`}>
        <a className="absolute right-0">
          <ChevronRightIcon
            strokeWidth={0.3}
            className="w-20 sm:w-24 md:w-32 lg:w-36 xl:w-40 h-20 sm:h-24 md:h-32 lg:h-36 xl:h-40 hover:scale-125 hover:text-indigo-500 duration-300"
          />
        </a>
      </Link>
    );
  }

  return (
    <Link href={`/${href}`}>
      <a className="absolute top-0">
        <ChevronUpIcon
          strokeWidth={0.3}
          className="w-20 sm:w-24 md:w-32 lg:w-36 xl:w-40 h-20 sm:h-24 md:h-32 lg:h-36 xl:h-40 hover:scale-125 hover:text-indigo-500 duration-300"
        />
      </a>
    </Link>
  );
}

export default Arrow;
