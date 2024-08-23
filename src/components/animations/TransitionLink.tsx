"use client";

import React, { ReactNode } from "react";

import Link, { LinkProps } from "next/link";

import { useRouter } from "next/navigation";

interface TransitionLinkProps extends LinkProps {
  children: ReactNode;
  href: string;
  className?: string;
}

const TransitionLink = ({ children, href, className }: TransitionLinkProps) => {
  const router = useRouter();

  const sleep = (ms: number): Promise<void> => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  const handleTransition = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    e.preventDefault();

    const body = document.querySelector("body");

    body?.classList.add("page-transition");

    await sleep(600);

    router.push(href);

    await sleep(800);

    body?.classList.remove("page-transition");
  };

  return (
    <Link onClick={handleTransition} href={href} className={className}>
      {children}
    </Link>
  );
};
export default TransitionLink;
