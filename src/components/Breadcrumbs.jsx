import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Breadcrumbs = () => {
  const pathname = usePathname();
  const pathArray = pathname.split("/").filter((path) => path);

  return (
    <nav className="text-grayDark text-sm mb-4" aria-label="Breadcrumb">
      <ol className="list-none p-0 inline-flex">
        <li className="flex items-center">
          <Link href="/" className="text-textPrimary hover:underline">
            Home
          </Link>
          {pathArray.length > 0 && (
            <span className="mx-2 text-grayLight">/</span>
          )}
        </li>
        {pathArray.map((path, index) => {
          const isLast = index === pathArray.length - 1;
          const href = "/" + pathArray.slice(0, index + 1).join("/");

          return (
            <li key={index} className="flex items-center">
              {isLast ? (
                <span className="text-grayDark capitalize">{path}</span>
              ) : (
                <>
                  <Link href={href} className="text-textPrimary hover:underline capitalize">
                    {path}
                  </Link>
                  <span className="mx-2 text-grayLight">/</span>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
