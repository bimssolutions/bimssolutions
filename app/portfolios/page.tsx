import Image from 'next/image';
import PocketBase, { Record } from 'pocketbase'

// const url = 'https://bimss-db.pockethost.io'
// const pb = new PocketBase(url)

// async function getPortfolios() {
//   const records = await pb.collection('portfolios').getFullList();

//   return records
// }


export default async function PortFolioPage() {
  // const portfolios = await getPortfolios()
  // const imageURL = (record: Record, imageName: string) => pb.files.getUrl(record, imageName)

  return (
    <section className="sm:p-16 xs:p-8 py-12 px-4 min-h-screen flex relative z-10">
      <div className="max-w-7xl">
        <h1>Portfolio</h1>
      </div>
    </section>
    // <div>{portfolios.map((portfolio, index) => (
    //   <div key={index}>
    //     {portfolio.name}
    //     {JSON.parse(portfolio.categories).map((cat:string, i:number) => (
    //       <span className='border' key={i}>{cat}</span>
    //     ))}
    //     <Image
    //       src={imageURL(portfolio, portfolio.image)}
    //       alt="description of the image"
    //       width={500}
    //       height={500}
    //   />
    //   </div>
    // ))}</div>
  )
}