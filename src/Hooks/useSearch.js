
function handleInputChange(ev, props) {
    let target = ev.target;
    let value = target.value.replace(/\D/g, "");
    if (!value) {
        props.setSearch({});
        return false;
    }
    props.setLoading(true);
    fetch("http://5db6fce5e2c76f0014a539bd.mockapi.io/api/aula/v1/Get/" + value, {
        method: "GET",
        headers: {
          Accept: "application/json",
        }
    })
    .then(r => r.json()
    .then(json => {
        props.setLoading(false);
        props.setSearch(json);
    }))
    .catch(er => {
        props.setLoading(false);
        props.setSearch(er.message);
    });
}

export default handleInputChange;