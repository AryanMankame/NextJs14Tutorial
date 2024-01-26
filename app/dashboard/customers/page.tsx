import React from 'react'

async function Page({
  searchParams
} : {
  searchParams? : {
    query : string
  }
}) {
  return (
    <div>Customers Page{searchParams?.query}</div>
  )
}

export default Page;