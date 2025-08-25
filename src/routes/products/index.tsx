import { Link, createFileRoute } from '@tanstack/react-router'
import axios from 'axios'

export const Route = createFileRoute('/products/')({
  loader: async () => {
    const res = await axios.get('https://fakestoreapi.com/products')
    return res.data
    // console.log(res.data)
  },
  component: RouteComponent,
})

function RouteComponent() {
  const products = Route.useLoaderData()
  return (
    <div>
      {products.map((product: any) => (
        <Link
          to="/products/$productdetails"
          params={{ productdetails: product.id }}
          key={product.id}
        >
          <div>
            <h2>{product.category}</h2>
            <p>{product.price}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}
