import { createFileRoute } from '@tanstack/react-router'
import axios from 'axios'

export const Route = createFileRoute('/products/$productdetails')({
  loader: async ({ params }) => {
    const res = await axios.get(
      `https://fakestoreapi.com/products/${params.productdetails}`,
    )
    return res.data
  },
  component: RouteComponent,
})
console.log("ufbdsmbdjd")
function RouteComponent() {
  const product = Route.useLoaderData()
  return (
    <div>
      <h1>{product.category}</h1>
      <p>{product.price}</p>
    </div>
  )
}
