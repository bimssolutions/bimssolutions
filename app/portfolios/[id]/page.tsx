import Image from 'next/image';
import PocketBase, { Record } from 'pocketbase'
import React from 'react';

const url = 'https://bimss-db.pockethost.io'
const pb = new PocketBase(url)
// const pb = new PocketBase('http://127.0.0.1:8090')

async function getPortfolio(id: string) {
  const record = await pb.collection('portfolios').getOne(id);

  return record
}


export default async function PortfolioPage({ params }: any) {
  const portfolio = await getPortfolio(params.id)
  const imageURL = (record: Record, imageName: string) => pb.files.getUrl(record, imageName)


  return (
    <article>
      <div className="max-w-7xl mx-auto sm:px-16 xs:px-8 px-4 py-20">
        <h1 className="font-extralight text-5xl">{portfolio.name}</h1>
        <h3 className="font-extralight text-3xl text-zinc-400">{portfolio.tagline}</h3>
      </div>
      <div
        className="bg-gradient-to-r from-cyan-200 to-blue-200 relative w-full min-h-[700px] overflow-hidden"
        style={{
          clipPath: 'inset(0 0 0 0)',
        }}
      >
        <div className='fixed w-full h-full top-0 left-0'>
          <Image
            src={imageURL(portfolio, portfolio?.image)}
            alt={portfolio.name}
            fill={true}
            style={{ objectFit: "contain" }}
            priority={true}
            placeholder="blur"
            blurDataURL={imageURL(portfolio, portfolio?.image)}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>
      <div className={`max-w-7xl mx-auto sm:px-16 xs:px-8 px-4 py-12`}>
        {portfolio.content && <div dangerouslySetInnerHTML={{ __html: portfolio.content }} />}
      </div>
    </article>
  )
}
