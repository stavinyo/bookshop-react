import { ReviewPreview } from './ReviewPreview.jsx'

export function ReviewList({ reviews, onDeleteReview }) {
    if (!reviews || reviews.length === 0) {
        return <p>No reviews available</p>
    }

    return (
        <ul className="review-list">
            {reviews.map((review) => (
                <li className="review-card" key={review.id}>
                    <ReviewPreview review={review} onDeleteReview={onDeleteReview} />
                </li>
            ))}
        </ul>
    )
}
