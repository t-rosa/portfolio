import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
} from "@heroicons/react/outline";
import Link from "next/link";

interface Props {
  direction: "up" | "right" | "down" | "left";
  href: "" | "contact" | "projects" | "skills";
}

function Arrow({ direction, href }: Props) {
  if (direction === "down") {
    return (
      <Link href={`/${href}`}>
        <a className="col-[1/5] row-[4/5] grid place-items-center relative">
          <ChevronDownIcon
            strokeWidth={0.3}
            className="h-full duration-300 hover:text-indigo-500 hover:scale-125"
          />
        </a>
      </Link>
    );
  }

  if (direction === "left") {
    return (
      <Link href={`/${href}`}>
        <a className="col-[1/2] row-[1/5] grid place-items-center relative">
          <ChevronLeftIcon
            strokeWidth={0.3}
            className=" duration-300 hover:text-indigo-500 hover:scale-125"
          />
        </a>
      </Link>
    );
  }

  if (direction === "right") {
    return (
      <Link href={`/${href}`}>
        <a className="col-[4/5] row-[1/5] grid place-items-center relative">
          <ChevronRightIcon
            strokeWidth={0.3}
            className="duration-300 hover:text-indigo-500 hover:scale-125"
          />
        </a>
      </Link>
    );
  }

  return (
    <Link href={`/${href}`}>
      <a className="col-[1/5] row-[1/2] grid place-items-center relative">
        <ChevronUpIcon
          strokeWidth={0.3}
          className="h-full duration-300 hover:text-indigo-500 hover:scale-125"
        />
      </a>
    </Link>
  );
}

export default Arrow;
