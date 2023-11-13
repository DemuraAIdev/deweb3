export default function MusicEqualizer() {
  return (
    <div className="flex h-3 w-4 items-center gap-0.75">
      <span className="h-3 w-0.75 rounded-sm bg-spotify-green motion-safe:animate-shrink" />
      <span className="h-1.5 w-0.75 rounded-sm bg-spotify-green motion-safe:animate-expand" />
      <span className="h-3 w-0.75 rounded-sm bg-spotify-green motion-safe:animate-shrink" />
    </div>
  )
}
