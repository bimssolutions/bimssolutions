import Image from 'next/image';
import PocketBase, { Record } from 'pocketbase'

const pb = new PocketBase('http://127.0.0.1:8090');

async function getPortfolios() {
  const records = await pb.collection('portfolios').getFullList();

  return records
}


export default async function PortFolioPage() {
  const portfolios = await getPortfolios()
  const imageURL = (record: Record, imageName: string) => pb.files.getUrl(record, imageName)
  
  return (
    <div>{portfolios.map((portfolio, index) => (
      <div key={index}>
        {portfolio.name}
        {JSON.parse(portfolio.categories).map((cat:string, i:number) => (
          <span className='border' key={i}>{cat}</span>
        ))}
        <Image
          src={imageURL(portfolio, portfolio.image)}
          alt="description of the image"
          width={500}
          height={500}
      />
      </div>
    ))}</div>
  )
}