import '../styles/globals.css'
import '../styles/navbar.css'
import '../styles/home.css'
import '../styles/brands.css'
import '../styles/subbanner.css'
import '../styles/features.css'
import '../styles/app.css'
import '../styles/footer.css'
import '../styles/registration-login.css'
import '../styles/sidenav.css'
import '../styles/dashboardnav.css'
import '../styles/dashboard.css'
import '../styles/profile.css'
import '../styles/accounts.css'
import '../styles/budgetplans.css'
import '../styles/budgetcard.css'
import '../styles/expensetracker.css'
import '../styles/analytics.css'
import '../styles/merchant.css'
import '../styles/review.css'
import '../styles/nav.css'


import Head from 'next/head'
import Script from 'next/script'
import AuthProvider from '../components/context/AuthProvider'
// import { useRouter } from 'next/router'
import ProtectedRoute from '../components/hooks/ProtectedRoute'

// const noAuthRequired = [ '/login', '/signup']




function MyApp({ Component, pageProps }) {
  // const router = useRouter()
  return <>
    <AuthProvider>
      <Head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous" />
      </Head>
      <Script id="bootstrap-cdn" src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossOrigin="anonymous"></Script>
      {/* {noAuthRequired.includes(router.pathname) ? ( */}
      <Component {...pageProps} />
      {/* : 
         (

          <ProtectedRoute>
         <Component {...pageProps} />
          </ProtectedRoute>
       

        )
      }
       */}
    </AuthProvider>
  </>
}

export default MyApp
