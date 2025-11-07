import { useStore } from '../store/useStore'

export const DisplayUsername = () => {
  const username = useStore((state) => state.username)
  
  return (
    <div className="username-display">
      <h2>Result: {username}</h2>
    </div>
  )
}