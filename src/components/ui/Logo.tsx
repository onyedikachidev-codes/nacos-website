// src/components/Logo.tsx

import React from "react";
import nacosLogo from "../../../public/images/logo.png";
import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/" className={`inline-flex items-center gap-2`}>
      <Image src={nacosLogo} alt="NACOS LASU Logo" className="h-9 w-9" />
      <span className="text-xl font-semibold text-gray-800">NACOS LASU</span>
    </Link>
  );
}
