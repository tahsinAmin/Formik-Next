import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
{/* Login as Index */}
      <main className=""> 
        <form action="">
          <input type="text" placeholder="Name"  className='border p-2'/>
          <input type="text" placeholder="Password" className='border p-2' />
          <input type="button" value="submit" onsubmit="" className='border p-2' />
        </form>
        <Link as="/signup" href="/signup">
          <a>Sign Up</a>
        </Link>
      </main>
    </div>
  )
}
