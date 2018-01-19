var AllItems = createReactClass({
    render() {
        var items= this.state.items.map((item) => {
            return (
                <div key={item.id}>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <p>{item.price}</p>
                    <p>{item.img_url}</p>
                </div>
            )
        });

        return(
            <div>
                {items}
            </div>
        )
    }
});
