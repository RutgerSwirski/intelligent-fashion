import Card from "./Card"

const ProductCard = ({ product, key }) => {
  const { name } = product
  return (
    <Card key={key}>
      <h1>{name}</h1>
    </Card>
  )
}

export default ProductCard
