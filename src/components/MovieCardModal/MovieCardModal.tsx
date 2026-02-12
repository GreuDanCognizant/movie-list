import { FC } from "react"
import { MovieItem } from "../../pages/HomePage"

interface MovieInfoModalProps {
  open: boolean
  onClose: () => void
  movie: MovieItem
}

const MovieInfoModal: FC<MovieInfoModalProps> = ({ open, onClose, movie }) => {
  if (!open) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-md shadow-lg w-96 relative pt-10 px-6 pb-6">

       <div className="flex justify-between gap-5 p-2 border-b">
        
        <h2 className="text-xl font-semibold mb-2">{movie.title}</h2>
            <button onClick={onClose}
                className=" text-sm w-6 h-6 mr-10 ml-10 right-3 top-1/2 -translate-y-1/2 hover:bg-slate-200 transition-colors">
                 X
            </button>
        </div>
        
        <div className="space-y-2 text-gray-700">
          <p><strong>Status:</strong> {movie.status || "Not started"}</p>

          {movie.year && <p><strong>Year:</strong> {movie.year}</p>}

          {movie.genre && <p><strong>Genre:</strong> {movie.genre}</p>}

          {movie.rating && <p><strong>Rating:</strong> {movie.rating}/10</p>}

          {movie.description && (
            <p className="mt-3 text-sm leading-relaxed"><strong>Description: </strong><br/> {movie.description}</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default MovieInfoModal
