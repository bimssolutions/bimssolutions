import PocketBase, { Record } from 'pocketbase'
import PortfolioCard from './PortfolioCard';

const url = 'https://bimss-db.pockethost.io'
const pb = new PocketBase(url)
// const pb = new PocketBase('http://127.0.0.1:8090');

async function getPortfolios() {
  const records = await pb.collection('portfolios').getList(1, 5);

  return records.items
}

export default (async function PortfolioList() {
  const portfolios = await getPortfolios()
  const imageURL = (record: Record, imageName: string) => pb.files.getUrl(record, imageName)

  return (
    <>
      {portfolios?.map((portfolio: Record, i: number) => (
        <PortfolioCard
          key={portfolio.id}
          imgUrl={imageURL(portfolio, portfolio.image)}
          id={portfolio.id}
          categories={portfolio.categories}
          name={portfolio.name}
          index={i}
        />
      ))}
    </>
  )
} as unknown as () => JSX.Element)
