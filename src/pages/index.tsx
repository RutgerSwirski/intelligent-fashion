import { BlitzPage, Routes } from "@blitzjs/next"
import { useMutation, usePaginatedQuery } from "@blitzjs/rpc"
import Link from "next/link"
import { useRouter } from "next/router"
import { Suspense } from "react"
import logout from "src/auth/mutations/logout"
import ProductCard from "src/core/components/ProductCard"
import Layout from "src/core/layouts/Layout"
import getProducts from "src/products/queries/getProducts"
import { useCurrentUser } from "src/users/hooks/useCurrentUser"

// const UserInfo = () => {
//   const currentUser = useCurrentUser()
//   const [logoutMutation] = useMutation(logout)

//   if (currentUser) {
//     return (
//       <>
//         <button
//           className="button small"
//           onClick={async () => {
//             await logoutMutation()
//           }}
//         >
//           Logout
//         </button>
//         <div>
//           User id: <code>{currentUser.id}</code>
//           <br />
//           User role: <code>{currentUser.role}</code>
//         </div>
//       </>
//     )
//   } else {
//     return (
//       <>
//         <Link href={Routes.SignupPage()}>
//           <a className="button small">
//             <strong>Sign Up</strong>
//           </a>
//         </Link>
//         <Link href={Routes.LoginPage()}>
//           <a className="button small">
//             <strong>Login</strong>
//           </a>
//         </Link>
//       </>
//     )
//   }
// }

const ITEMS_PER_PAGE = 20
const Home = () => {
  const router = useRouter()
  const page = Number(router.query.page) || 0
  // const [{ products = [] }] = usePaginatedQuery(getProducts, {
  //   orderBy: { id: "asc" },
  //   skip: ITEMS_PER_PAGE * page,
  //   take: ITEMS_PER_PAGE,
  // })

  // console.log(products, "products")

  // const goToPreviousPage = () => router.push({ query: { page: page - 1 } });
  // const goToNextPage = () => router.push({ query: { page: page + 1 } });

  return <div>hello world</div>
}

export default Home
