export function ReviewPreview({ review }) {
    console.log('review', review)
    return (
        <article className="review-preview">
            <h2>{review.fullName}</h2>
            <p>Rating: {review.rate}</p>
            <p>Date: {review.date}</p>
            <p>Review: {review.reviewText}</p>
        </article>
    )
}
