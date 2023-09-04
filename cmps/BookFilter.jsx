const { useState, useEffect } = React

export function BookFilter({ filterBy, onSetFilterBy }) {
    // console.log('filterBy', filterBy)
    // console.log('onSetFilterBy', onSetFilterBy)

    const [filterByToEdit, setFilterByToEdit] = useState(filterBy)

    useEffect(() => {
        onSetFilterBy(filterByToEdit)
    }, [filterByToEdit])

    function onSubmitFilter(ev) {
        ev.preventDefault()
        onSetFilterBy(filterByToEdit)
    }

    function handleChange({ target }) {
        const field = target.name
        let value = target.value

        switch (target.type) {
            case 'number':
            case 'range':
                value = +value || ''
                break

            default:
                break
        }
        setFilterByToEdit((prevFilter) => ({ ...prevFilter, [field]: value }))
    }

    const { txt, price } = filterBy
    return (
        <section>
            <h2>Filter Our Books</h2>
            <form onSubmit={onSubmitFilter}>
                <label htmlFor="txt">Title: </label>
                <input
                    value={txt}
                    onChange={handleChange}
                    type="text"
                    placeholder="type book title..."
                    id="txt"
                    name="txt"
                />

                <label htmlFor="price">max price: </label>
                <input
                    value={price}
                    onChange={handleChange}
                    type="number"
                    placeholder="type book price..."
                    id="price"
                    name="price"
                />
            </form>
        </section>
    )
}
