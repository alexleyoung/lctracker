"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import fetchStats from "@/lib/fetchStats";

const Hero = () => {
  const [username, setUsername] = useState("");
  const [easys, setEasys] = useState(0);
  const [mediums, setMediums] = useState(0);
  const [hards, setHards] = useState(0);

  const previewStats = async () => {
    let data = await fetchStats(username, "solved");
    setEasys(data.easySolved);
    setMediums(data.mediumSolved);
    setHards(data.hardSolved);
  };

  return (
    // Hero section
    <section>
      <div className='container flex flex-col items-center gap-12'>
        <h1 className=' text-5xl font-semibold text-center text-white'>
          Grinding Leetcode?
        </h1>
        <h2 className='text-2xl max-w-[30ch] text-center text-white'>
          Use LC Tracker to <strong>view, track</strong>, and{" "}
          <strong>manage</strong> your Leetcode progress and improve{" "}
          <strong>faster</strong>.
        </h2>
        <div className='flex flex-col items-center gap-3'>
          <Label className='text-base text-slate-300'>Preview your stats</Label>
          <Input
            className='w-64 bg-black border-slate-800 text-center text-white'
            type='text'
            placeholder='Enter your username'
            onChange={(e) => setUsername(e.target.value)}
          />
          <Button
            variant='outline'
            className='h-8'
            asChild
            onClick={previewStats}
          >
            <a href='#preview'>Preview</a>
          </Button>
        </div>
      </div>
      <div className='container grid grid-cols-3 place-items-center text-white my-16'>
        <h1>{easys}</h1>
        <h1>{mediums}</h1>
        <h1>{hards}</h1>
      </div>
    </section>
  );
};

export default Hero;