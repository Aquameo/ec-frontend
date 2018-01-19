var Body = createReactClass({
    getInitialState() {
        return { items: [] }
    },
    componentDidMount() {
        $.getJSON('/api/v1/items.json', (response) => { this.setState({items: response}) });
    },
    handleSubmit(item) {
        var newState = this.state.items.concat(item);
        this.setState({ items: newState })
    },
    handleClick() {
        var name = this.refs.name.value;
        var description = this.refs.description.value;
        var price = this.refs.price.value;
        var img_url = this.refs.img_url.value;
        $.ajax({
            url: '/api/v1/items',
            type: 'POST',
            data: { item: { name: name, description: description, price: price, img_url: img_url } },
            success: (response) => {
                this.props.handleSubmit(item);
            }
        });
        alert('Added');
        window.location.reload()
    },
    handleDelete(id) {
        $.ajax({
            url: `/api/v1/items/${id}`,
            type: 'DELETE',
            success(response) {
                this.removeItemClient(id);
            }
        });
        alert('Deleted');
        window.location.reload()
    },
    removeItemClient(id) {
        var newItems = this.state.items.filter((item) => {
            return item.id != id;
        });

        this.setState({ items: newItems });
    },
    render() {
        var items= this.state.items.map((item) => {
            return (
                <div key={item.id}>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <p>{item.price}</p>
                    <p>{item.img_url}</p>
                    <button onClick={this.handleDelete.bind(this, item.id)}>Delete</button>
                </div>
            )
        });

        return (
            <div>
                <input ref='name' placeholder='Enter the name of the item' />
                <input ref='description' placeholder='Enter a description' />
                <input ref='price' placeholder='Enter a price' />
                <input ref='img_url' placeholder='Enter a image URL' />
                <button onClick={this.handleClick}>Submit</button>
                {items}
            </div>
        )
    }
});
