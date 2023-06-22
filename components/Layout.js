import {useEffect} from 'react';
import Navbar from './navbar'
import  {useRouter} from 'next/router'
import NProgress from 'nprogress'

const Layout = ({children, title, footer = true, dark = false}) => {

    const router = useRouter();

    useEffect(() => {
        const handlerRouteChange =  url => {
            console.log(url)
            NProgress.start();
        }

        router.events.on('routeChangeStart', handlerRouteChange)

        router.events.on('routeChangeComplete',() => NProgress.done());
        
        return () => {
            router.events.off('routeChangeStart', handlerRouteChange)
        }
    }, [])

    return (
        <div className={dark ? 'bg-dark' : ''}>
    <Navbar/>
    <main className='container py-4'>

        {
            title &&(
                <h1 className={dark ? 'text-light' : ''}>
                    {title}
                </h1>
            )
        }
    {children}
    </main>
        {
            footer &&(
                <footer className='bg-dark text-light text-center'>
                <div className="caontainer p-4">
                    <h1>&copy; Ryan Ray Portfolio</h1>
                    <p>2000 - {new Date().getFullYear()}</p>
                    <p>All rights Reserved.</p>
                </div>
            
                </footer>
            )   
        }
    </div>
    )
}
    

export default Layout;