import { useEffect } from 'react';
import SpotifyMini from '@/components/SpotifyMini';

export default function Musify() {
  useEffect(() => {
    document.title = 'Musify - Orange Ai OS';
  }, []);

  return (
    <div className="w-screen h-screen bg-black">
      <SpotifyMini isOpen={true} onClose={() => {}} standalone />
    </div>
  );
}
