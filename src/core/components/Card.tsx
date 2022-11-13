import { Suspense } from "react"
import Carousel from "./Carousel"

const Card = ({ children, className, ...rest }) => {
  return (
    <div className="w-64">
      <Suspense fallback={<div>Loading...</div>}>
        <Carousel />
      </Suspense>

      {children}
    </div>
  )
}

export default Card
