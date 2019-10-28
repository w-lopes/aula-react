
function useSearch(setLoading, setSearch) {

    const hangleSearchInput = (val) => {
        let value = val.replace(/\D/g, "");
        if (!value) {
            setSearch({});
            return false;
        }
        setLoading(true);
        fetch("http://5db6fce5e2c76f0014a539bd.mockapi.io/api/aula/v1/Get/" + value, {
            method: "GET",
            headers: {
              Accept: "application/json",
            }
        })
        .then(r => r.json()
        .then(json => {
            setLoading(false);
            setSearch(json);
        }))
        .catch(er => {
            setLoading(false);
            setSearch(er.message);
        });
    };

    return hangleSearchInput;
}

export default useSearch;