import { ReviewPreview } from './ReviewPreview.jsx'
// const { Link } = ReactRouterDOM

export function ReviewList({ reviews }) {
    return (
        <ul className="review-list">
            {reviews.map((review) => (
                <li className="review-card" key={review.id}>
                    <ReviewPreview review={review} />
                </li>
            ))}
        </ul>
    )
}
