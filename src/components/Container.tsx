import React from 'react'

export default function Container({children}: {children: React.ReactNode}) {
  return <div className="mx-auto w-full   px-4 sm:px-6 lg:px-20">{children}</div>;
}
