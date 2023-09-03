const { useState, useEffect } = React

export function BookFilter() {
    return (
        <section>
            <h2>Filter Our Books</h2>
            <form>
                <label htmlFor="txt">Title: </label>
                <input
                    // value={txt}
                    // onChange={handleChange}
                    type="text"
                    placeholder="type book title..."
                    id="txt"
                    name="txt"
                />

                <label htmlFor="price">price: </label>
                <input
                    // value={txt}
                    // onChange={handleChange}
                    type="number"
                    placeholder="type book title..."
                    id="txt"
                    name="txt"
                />

                <button>Set Filter</button>
            </form>
        </section>
    )
}
