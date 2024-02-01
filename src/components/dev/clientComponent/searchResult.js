

const SearchResult = ({results}) => {

    const resultItems = results.data;
    console.log(results);

    return (
        <div>
            {resultItems?.map((result, index) => {
                return <div key={index}>{result.author}</div>
            })}
        </div>
    )
}

export default SearchResult;