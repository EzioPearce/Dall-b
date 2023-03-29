import React, {useState, useEffect} from 'react';
import { Loader, FormField, Card } from '../components';

const Home = () => {
  const [Loading, setLoading] = useState(false);
  const [allPosts, setAllPosts] = useState(null);
  return (
    <section className="max-w-7xl mx-auto">
      <div>
        <h1 className="font-extrabold text-[#222328] text-[32px]">Community Showcase</h1>
      </div>
      <div>
        <p className="mt-10 text-[#666e75] text-[16px] max-w [500px]">Browse through a collection of imaginary pictures...Because you're a Shit artist</p>
      </div>
    </section>
  )
}

export default Home