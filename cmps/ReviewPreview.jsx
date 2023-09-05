export function ReviewPreview({ review, onDeleteReview }) {
    const { id, fullName, rate, date } = review
    return (
        <article className="review-preview">
            <h2>{fullName}</h2>
            <p>Rating:{'⭐'.repeat(rate)}</p>
            <p>Read the date: {date}</p>
            <button onClick={() => onDeleteReview(id)}>Delete</button>
        </article>
    )
}
